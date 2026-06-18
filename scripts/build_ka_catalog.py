#!/usr/bin/env python3
"""Convert the NUREG-1122 PWR K/A catalog xlsx into agent-friendly JSON + CSV.

Source: data/ka-catalog/pwr-ka-catalog.xlsx (NUREG-1122 Rev 3; single sheet, columns
SYS/E/APE | SYS/E/APE Name | K/A NO. | K/A (CFR) | RO_Imp | SRO_Imp).
Outputs next to the source:
  pwr-ka-catalog.json  -- object keyed by normalized K/A id (ka_full)
  pwr-ka-catalog.csv   -- flat, one row per K/A statement, grep-friendly

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
    """Split the 'SYS/E/APE Name' cell into (system_number, system_name).

    '003 (SF4P RCP) REACTOR COOLANT PUMP SYSTEM'      -> ('003', '(SF4P RCP) REACTOR ...')
    '000008 (APE 8) Pressurizer Vapor Space Accident' -> ('008', '(APE 8) Pressurizer ...')
    'G2.1 CONDUCT OF OPERATIONS'                       -> ('G2.1', 'CONDUCT OF OPERATIONS')
    """
    name = ("" if name is None else str(name)).strip()
    m = re.match(r"^(G2\.\d+|\d{3,6})\s+(.*)$", name)
    if not m:
        return "", name
    num, rest = m.group(1), m.group(2).strip()
    if num.startswith("G2."):
        return num, rest
    return f"{int(num):03d}", rest


def status_of(statement: str) -> str:
    s = statement.strip().upper()
    if s == "DELETED":
        return "deleted"
    if "MOVED TO" in s:
        return "moved"
    return "active"


def make_ka_full(system_number: str, ka_no: str) -> str:
    if system_number.startswith("G2."):
        return ka_no.strip()                       # e.g. "G2.1.1"
    if system_number:
        return f"{system_number} {ka_no.strip()}"  # e.g. "003 A1.01", "008 AA1.01", "007 EA1.02a"
    return ka_no.strip()


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
        system_number, system_name = parse_number_name(name)
        records.append({
            "ka_full": make_ka_full(system_number, ka_no),
            "category": categorize(ka_no),
            "system_number": system_number,
            "system_name": system_name,
            "ka_no": ka_no,
            "statement": statement,
            "ro_imp": "" if ro is None else str(ro),
            "sro_imp": "" if sro is None else str(sro),
            "status": status_of(statement),
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
        print("WARNING collisions (first 10):", sorted(set(collisions))[:10], file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
