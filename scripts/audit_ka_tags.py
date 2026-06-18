#!/usr/bin/env python3
"""Audit ingested K/A tags against the NUREG-1122 Rev 3 catalog and canonicalize them.

Each ingested written question and JPM carries a K/A tag in its first `border-radius:3px`
card span (e.g. `076000 K4.01 (3.7/3.7)`; JPM `Simulator | RO/SRO | 003 AA2.03 (3.6)`).
This tool normalizes the many wiki tag forms to a catalog key, looks up the catalog's
canonical number + RO/SRO importance, and:
  --report (default): classifies every tag and writes data/ka-audit/ka-audit-report.{md,csv}.
  --apply: additionally rewrites each RESOLVED tag to the canonical form
           `<catalog ka_full> (RO <ro> / SRO <sro>)`, and sets the JPM YAML
           ka_importance_ro/sro to the catalog values.

Unresolvable tags (NUMBER_NOT_IN_CATALOG, UNPARSEABLE) are flagged, never guessed.

Usage:
  python3 scripts/audit_ka_tags.py            # report only
  python3 scripts/audit_ka_tags.py --apply    # rewrite resolved tags + write report
"""
import csv
import glob
import json
import re
import sys
from pathlib import Path

CATALOG = Path("data/ka-catalog/pwr-ka-catalog.json")
REPORT_MD = Path("data/ka-audit/ka-audit-report.md")
REPORT_CSV = Path("data/ka-audit/ka-audit-report.csv")
SPAN = re.compile(r'(border-radius:3px;">)([^<]+)(</span>)')

# ---- parsing / normalization -------------------------------------------------

def strip_importance(body):
    """Return (name, importance_str) by splitting the trailing importance parenthetical.
    Handles '(3.7/3.7)', '(RO 4.5 / SRO 4.8)', '(SRO 3.9)', '(3.6)', '(3.8/4.2) — SRO',
    '(3.7) SRO'."""
    m = re.search(r'\(([^)]*)\)\s*(?:[—-]\s*)?(?:RO|SRO)?\s*$', body)
    if not m:
        return body.strip(), None
    return body[:m.start()].strip(), m.group(1).strip()


def normalize_number(raw):
    """6-digit system 'NNN000' -> 'NNN'; otherwise zero-pad to 3 ('000040'->'040')."""
    raw = raw.strip()
    if len(raw) == 6 and raw.endswith("000"):
        return raw[:3]
    return f"{int(raw):03d}"


def normalize_token(ka):
    """Packed 'A203' -> 'A2.03'; pad decimals 'EA2.2' -> 'EA2.02' (keep any trailing letter)."""
    ka = ka.strip()
    m = re.match(r"^([EA]?[AK])(\d)(\d\d)$", ka)
    if m:
        return f"{m.group(1)}{m.group(2)}.{m.group(3)}"
    m = re.match(r"^([EA]?[AK]\d)\.(\d+)([a-z]?)$", ka)
    if m:
        return f"{m.group(1)}.{int(m.group(2)):02d}{m.group(3)}"
    return ka


def normalize_ka(name):
    """Map a wiki K/A tag (importance already stripped) to a catalog key, or None.
    Handles tier/group prefixes (T2G2), APE/EPE/Gen word prefixes (incl. 'APE:'), vendor
    codes (00WE08, W/E11), glued numbers (005000A2.02), embedded system names
    (012 RPS-A3.03), dual forms (000007K106 / EK1.06), and generics
    (G2.x.x / 2.x.x / 002000G2.1.20)."""
    s = name.strip()
    s = re.sub(r"^T\d(?:G\d)?\s+", "", s)                       # tier/group: T2G2, T4
    s = re.sub(r"(?i)\b(?:APE|EPE)\s*:?\s*", "", s)             # APE15 / EPE 28 / 'APE:'
    s = re.sub(r"(?i)\bGen\.?\s*", "", s).strip()
    s = re.sub(r"^([BCW])\s*/\s*([AE])(\d{2})", r"\1\2\3", s)   # W/E11 -> WE11
    # generic: a two-dot 2.N.N anywhere, G-prefixed or (system-)prefixed
    g = re.search(r"2\.(\d+)\.(\d+)", s)
    if g and (re.search(r"G\s*2\.", s) or re.search(r"(?:^|[^0-9.])2\.\d", s)):
        return f"G2.{int(g.group(1))}.{int(g.group(2))}"
    # generic group notation Gn.mm / G<grp><nn>: older exams abbreviate the four generic
    # groups (catalog 2.1–2.4) as G1.x–G4.x. Decode to 2.<grp>.<item>, third part unpadded.
    gm = re.search(r"G([1-4])\.(\d{1,2})(?!\d)", s)            # G4.18, G4.09 (dotted)
    if gm:
        return f"G2.{int(gm.group(1))}.{int(gm.group(2))}"
    gm = re.search(r"G([1-4])(\d{2})(?=\D|$)", s)              # 194001G432, G411 (glued)
    if gm:
        return f"G2.{int(gm.group(1))}.{int(gm.group(2))}"
    # generic-knowledge tier (19xxxx) carries a subject infix the catalog keeps, e.g.
    # '191001 CVS.K1.04' -> key '191001 CVS.K1.04' (do not drop the 'CVS.').
    im = re.match(r"^(\d{6})\s+([A-Z]{2,4})\.([AK]\d\.\d+[a-z]?)$", s)
    if im:
        return f"{im.group(1)} {im.group(2)}.{im.group(3)}"
    # dual form 'first / second': K/A token from the right; number — or, when the left half
    # carries a vendor code (00WE02K201 / EK2.1), the vendor prefix — from the left.
    if "/" in s:
        left, right = (p.strip() for p in s.split("/", 1))
        km = re.search(r"[EA]?[AK]\d\.?\d*[a-z]?$", right)
        lv = re.match(r"^([BCW][AE]\d{2})",
                      re.sub(r"^0*([BCW])\s*([AE])\s*(\d{2})", r"\1\2\3", left))
        if lv and km:
            return f"{lv.group(1)} {normalize_token(km.group(0))}"
        dm = re.match(r"\d{1,6}", left)
        if dm and km:
            return f"{normalize_number(dm.group(0))} {normalize_token(km.group(0))}"
    # vendor APE/EPE (optionally with an embedded system name): WE08 …EA1.05.  No \b after the
    # vendor code — glued forms like '00WE12EA2.1' have no word boundary there.
    sv = re.sub(r"^0*([BCW])\s*([AE])\s*(\d{2})", r"\1\2\3", s)
    vm = re.match(r"^([BCW][AE]\d{2}).*?([EA]?[AK]\d\.?\d*[a-z]?)$", sv)
    if vm:
        return f"{vm.group(1)} {normalize_token(vm.group(2))}"
    # numeric system/APE/EPE (1–6 digits; tolerates an embedded system name before the K/A,
    # e.g. '012 RPS-A3.03'). No \b after the number — glued forms ('005000A2.02') lack one;
    # the K/A always starts with a letter so the number cannot over-eat.
    nm = re.match(r"^(\d{1,6}).*?([EA]?[AK]\d\.?\d*[a-z]?)$", s)
    if nm:
        return f"{normalize_number(nm.group(1))} {normalize_token(nm.group(2))}"
    return None


def fmt_rating(v):
    """Catalog importance string -> display: '4' or '4.0' -> '4', '3.7' -> '3.7'."""
    try:
        f = float(v)
    except (TypeError, ValueError):
        return str(v)
    return str(int(f)) if f == int(f) else f"{f:g}"

# ---- extraction --------------------------------------------------------------

def first_tag(text):
    """Return (match, span_content, ka_segment) for the first K/A card span, or (None,'','').

    The span content is either a plain tag ('076000 K4.01 (3.7/3.7)') or a pipe-delimited JPM
    badge ('Type | Applic | <K/A> | Alternate Path'). The K/A is the pipe segment that both
    carries an importance parenthetical and normalizes to a key; surrounding segments (incl. a
    trailing 'Alternate Path' / 'Time-Critical' badge) are preserved verbatim on rewrite."""
    m = SPAN.search(text)
    if not m:
        return None, "", ""
    content = m.group(2)
    if "|" not in content:
        return m, content, content.strip()
    ka = None
    for seg in content.split("|"):
        name, imp = strip_importance(seg.strip())
        if imp is not None and normalize_ka(name) is not None:
            ka = seg.strip()          # rightmost qualifying segment wins
    if ka is None:
        ka = content.split("|")[-1].strip()
    return m, content, ka

# ---- classification ----------------------------------------------------------

def is_numeric(v):
    try:
        float(v)
        return True
    except (TypeError, ValueError):
        return False


def canonical_rating(e):
    """Build the importance display, omitting a side the catalog marks non-numeric (N/A).
    Both numeric -> '(RO x / SRO y)'; SRO-only -> '(SRO y)'; RO-only -> '(RO x)'."""
    parts = []
    if is_numeric(e["ro_imp"]):
        parts.append(f"RO {fmt_rating(e['ro_imp'])}")
    if is_numeric(e["sro_imp"]):
        parts.append(f"SRO {fmt_rating(e['sro_imp'])}")
    return "(" + " / ".join(parts) + ")" if parts else "(N/A)"


def is_deleted_entry(e):
    """A catalog row retired in Rev 3: statement 'DELETED' or 0/0 importance (no usable rating)."""
    return ("DELET" in str(e.get("statement", "")).upper()
            or (str(e["ro_imp"]) in ("0", "0.0") and str(e["sro_imp"]) in ("0", "0.0")))


def classify(body, catalog):
    name, imp = strip_importance(body)
    key = normalize_ka(name)
    if key is None:
        return "UNPARSEABLE", None, None
    if key not in catalog:
        return "NUMBER_NOT_IN_CATALOG", key, None
    if is_deleted_entry(catalog[key]):
        # Valid exam K/A retired in Rev 3 (no Rev 3 rating): canonicalize the number, keep the
        # exam's own importance verbatim. Flagged so the deletion is recorded for human review.
        kept = f"{key} ({imp})" if imp else key
        return "DELETED_IN_REV3", key, kept
    canonical = f"{key} {canonical_rating(catalog[key])}"
    return "RESOLVED", key, canonical


def main():
    apply = "--apply" in sys.argv[1:]
    catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    files = sorted(glob.glob("wiki/exams/*/q*.md") + glob.glob("wiki/exams/*/jpm-*.md"))
    rows, counts = [], {"RESOLVED": 0, "DELETED_IN_REV3": 0,
                        "NUMBER_NOT_IN_CATALOG": 0, "UNPARSEABLE": 0, "NO_TAG": 0}
    for f in files:
        text = Path(f).read_text(encoding="utf-8")
        m, content, body = first_tag(text)
        if m is None:
            counts["NO_TAG"] += 1
            rows.append((f, "", "", "NO_TAG", "", ""))
            continue
        status, key, canonical = classify(body, catalog)
        counts[status] += 1
        prefix = content[:content.find(body)] if body and body in content else ""
        rows.append((f, body, key or "", status, canonical or "", prefix))
        if apply and status in ("RESOLVED", "DELETED_IN_REV3"):
            new_content = content.replace(body, canonical, 1)
            if new_content != content:
                new_span = f"{m.group(1)}{new_content}{m.group(3)}"
                Path(f).write_text(text.replace(m.group(0), new_span, 1), encoding="utf-8")

    REPORT_CSV.parent.mkdir(parents=True, exist_ok=True)
    with REPORT_CSV.open("w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh)
        w.writerow(["file", "raw_tag", "catalog_key", "status", "canonical", "jpm_prefix"])
        w.writerows(rows)
    by_year = {}
    for f, _b, _k, status, *_ in rows:
        yr = re.search(r"/(\d{4})/", f)
        y = yr.group(1) if yr else "?"
        by_year.setdefault(y, {}).setdefault(status, 0)
        by_year[y][status] += 1
    lines = [f"# K/A tag audit report\n", f"Total tags: {len(rows)}\n"]
    for k, v in counts.items():
        lines.append(f"- {k}: {v}")
    lines.append("\n## By year\n\n| year | RESOLVED | DELETED_IN_REV3 | NUMBER_NOT_IN_CATALOG | UNPARSEABLE | NO_TAG |")
    lines.append("|------|---------:|----------------:|----------------------:|------------:|-------:|")
    for yr in sorted(by_year):
        d = by_year[yr]
        lines.append(f"| {yr} | {d.get('RESOLVED',0)} | {d.get('DELETED_IN_REV3',0)} "
                     f"| {d.get('NUMBER_NOT_IN_CATALOG',0)} | {d.get('UNPARSEABLE',0)} | {d.get('NO_TAG',0)} |")
    lines.append("\n## Deleted in Rev 3 (importance retained from exam)\n")
    for f, body, key, status, canonical, *_ in rows:
        if status == "DELETED_IN_REV3":
            lines.append(f"- {f} — tag `{body}` → `{canonical}`")
    lines.append("\n## Flagged items (need review)\n")
    for f, body, key, status, *_ in rows:
        if status in ("NUMBER_NOT_IN_CATALOG", "UNPARSEABLE"):
            lines.append(f"- `{status}` {f} — tag `{body}`" + (f" → key `{key}`" if key else ""))
    REPORT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(" ".join(f"{k}={v}" for k, v in counts.items()), "(apply)" if apply else "(report)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
