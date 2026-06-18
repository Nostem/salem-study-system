#!/usr/bin/env python3
"""Convert the NUREG-1122 PWR K/A catalog xlsx into agent-friendly JSON + CSV.

Source: data/ka-catalog/pwr-ka-catalog.xlsx (NUREG-1122 Rev 3; single sheet, columns
SYS/E/APE | SYS/E/APE Name | K/A NO. | K/A (CFR) | RO_Imp | SRO_Imp).
Outputs next to the source:
  pwr-ka-catalog.json  -- object keyed by normalized K/A id (ka_full)
  pwr-ka-catalog.csv   -- flat, one row per K/A statement, grep-friendly

The catalog lists each K/A under a system, an APE/EPE (by number, e.g. "022", or by
vendor code, e.g. "BA01" = B&W APE 01), or as a generic "G2.x.x". The unique id for a
row comes from the parenthetical that prefixes each active statement, e.g.
"(022AA1.04)", "(BA01AA1.04)", "(007EA1.02)", "(G2.1.1)"; DELETED/MOVED rows (no
parenthetical) fall back to the number in the name column.

Run once after placing the xlsx; re-run only if NRC publishes a new revision.
Requires openpyxl (see requirements-dev.txt).

Usage: python3 scripts/build_ka_catalog.py
"""
import csv
import json
import re
import sys
from pathlib import Path

import openpyxl

SRC = Path("data/ka-catalog/pwr-ka-catalog.xlsx")
OUT_JSON = Path("data/ka-catalog/pwr-ka-catalog.json")
OUT_CSV = Path("data/ka-catalog/pwr-ka-catalog.csv")
EXPECTED_HEADER = ["SYS/E/APE", "SYS/E/APE Name", "K/A NO.", "K/A (CFR)", "RO_Imp", "SRO_Imp"]
FIELDS = ["ka_full", "category", "system_number", "system_name",
          "ka_no", "statement", "ro_imp", "sro_imp", "status"]

# Trailing K/A token inside a statement parenthetical, anchored at the end so the
# leading system/vendor code (e.g. "BA01", "022", "007") is whatever precedes it.
KA_TAIL = re.compile(r"(?:E[AK]|A[AK]|[AK])\d\.\d+[a-z]?$")

# Vendor APE/EPE codes embedded in a merged name, e.g. "(BW E08; W E03) LOCA Cooldown".
VENDOR_TAG = re.compile(r"\b(BW|CE|W)\s+([AE]\d{2})\b")
_VENDOR_LETTER = {"BW": "B", "CE": "C", "W": "W"}


def vendor_codes(name):
    """Return the vendor APE/EPE codes named in a merged row, e.g. '(BW E08; W E03) ...'
    -> ['BE08', 'WE03']. DELETED/MOVED rows carry no statement parenthetical, so the vendor
    code can only be recovered here, from the name."""
    return [f"{_VENDOR_LETTER[v]}{code}" for v, code in VENDOR_TAG.findall(name or "")]


def categorize(ka_no: str) -> str:
    s = ka_no.strip().upper()
    if s.startswith(("EA", "EK")):
        return "epe"
    if s.startswith(("AA", "AK")):
        return "ape"
    if s.startswith("G2"):
        return "generic"
    if re.match(r"^[AK]\d", s):
        return "system"
    return "other"


def parse_number_name(name):
    """Split 'SYS/E/APE Name' into (number, descriptive_name).

    '003 (SF4P RCP) REACTOR COOLANT PUMP SYSTEM'  -> ('003', '(SF4P RCP) REACTOR ...')
    '000022 (APE 22) Loss of Reactor Coolant ...' -> ('022', '(APE 22) Loss of ...')
    '(BW A01) Plant Runback'                      -> ('',    '(BW A01) Plant Runback')
    'G2.1 CONDUCT OF OPERATIONS'                   -> ('G2.1', 'CONDUCT OF OPERATIONS')
    """
    name = ("" if name is None else str(name)).strip()
    m = re.match(r"^(G2\.\d+|\d{3,6})\s+(.*)$", name)
    if not m:
        return "", name
    num, rest = m.group(1), m.group(2).strip()
    if num.startswith("G2."):
        return num, rest
    return f"{int(num):03d}", rest


def derive_ka(name_number: str, ka_no: str, statement: str):
    """Return (system_number, ka_full). Prefer the unique code in the statement's
    leading parenthetical; fall back to the name-column number for rows without one
    (DELETED / MOVED / blank statements)."""
    pm = re.match(r"^\(([^)]+)\)", statement.strip())
    if pm:
        code = pm.group(1).strip()
        if code.startswith("G2."):
            return name_number, code                       # generic, e.g. "G2.1.1"
        tail = KA_TAIL.search(code)
        if tail:
            sysc = code[:tail.start()].strip()
            return sysc, f"{sysc} {ka_no}".strip()          # e.g. "022 AA1.04", "BA01 AA1.04"
    if name_number.startswith("G2."):
        return name_number, ka_no
    return name_number, (f"{name_number} {ka_no}".strip() if name_number else ka_no)


def status_of(statement: str) -> str:
    s = statement.strip().upper()
    if s == "DELETED":
        return "deleted"
    if "MOVED TO" in s:
        return "moved"
    return "active"


def main() -> int:
    if not SRC.exists():
        print(f"ERROR: {SRC} not found", file=sys.stderr)
        return 1
    ws = openpyxl.load_workbook(SRC, read_only=True, data_only=True).active
    it = ws.iter_rows(values_only=True)
    header = [("" if h is None else str(h).strip()) for h in next(it)]
    if header != EXPECTED_HEADER:
        print(f"ERROR: unexpected header: {header!r}", file=sys.stderr)
        return 1

    records = []
    for raw in it:
        if raw is None or all(c is None for c in raw):
            continue
        _code, name, ka_no, statement, ro, sro = (list(raw) + [None] * 6)[:6]
        ka_no = ("" if ka_no is None else str(ka_no)).strip()
        if not ka_no:
            continue
        statement = ("" if statement is None else str(statement)).strip()
        name_number, system_name = parse_number_name(name)
        system_number, ka_full = derive_ka(name_number, ka_no, statement)
        status = status_of(statement)
        # DELETED/MOVED rows carry no parenthetical code, so derive_ka can't recover their
        # vendor prefix — a merged row keyed only by its bare ka_no ('EA2.02') or its APE
        # number ('040 EA2.01') drops the vendor form ('WE12 EA2.01') the exams actually cite.
        # Recover the vendor code(s) from the name and emit a retired entry per vendor (plus the
        # APE-number form when the name had one) so the catalog faithfully mirrors the xlsx.
        vcodes = vendor_codes(system_name) if status != "active" else []
        if vcodes:
            targets = [(c, f"{c} {ka_no}") for c in vcodes]
            if system_number:
                targets.append((system_number, ka_full))
        else:
            targets = [(system_number, ka_full)]
        for sysc, full in targets:
            records.append({
                "ka_full": full,
                "category": categorize(ka_no),
                "system_number": sysc,
                "system_name": system_name,
                "ka_no": ka_no,
                "statement": statement,
                "ro_imp": "" if ro is None else str(ro),
                "sro_imp": "" if sro is None else str(sro),
                "status": status,
            })

    records.sort(key=lambda r: (r["category"], r["ka_full"]))

    OUT_CSV.parent.mkdir(parents=True, exist_ok=True)
    with OUT_CSV.open("w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=FIELDS)
        w.writeheader()
        w.writerows(records)

    by_key, collisions = {}, []
    for rec in records:
        k = rec["ka_full"]
        if k in by_key:
            collisions.append(k)
        by_key[k] = {f: rec[f] for f in FIELDS if f != "ka_full"}
    OUT_JSON.write_text(json.dumps(by_key, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(f"rows={len(records)} json_keys={len(by_key)} collisions={len(collisions)}")
    if collisions:
        print("NOTE: remaining collisions are duplicate rows with identical content "
              f"({len(set(collisions))} keys).", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
