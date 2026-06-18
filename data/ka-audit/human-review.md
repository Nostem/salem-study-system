# K/A audit — human-review list

Output of `scripts/audit_ka_tags.py` after the catalog reconciliation + source review.
Every ingested K/A tag was normalized to the NUREG-1122 Rev 3 catalog (`data/ka-catalog/pwr-ka-catalog.json`). Final classification of 1083 tags: **840 active** (importance canonicalized to the catalog), **232 deleted in Rev 3** (number canonicalized, exam importance retained), and the **11 items below**.

## 1. Needs a human decision (1)

- **2019/q63-loca-6-rhr-piping-isolation.md** — tag `WE04 LOCA Outside Containment (3.6)`.
  The 2019 ES-401 worksheet prints only `WE04 LOCA Outside Containment` with **no K/A sub-number**, and the statement matches no catalog entry, so the agent did not guess. The parallel 2018 Q63 (same topic) resolved to **`WE04 EA1.02`** (deleted in Rev 3) — a likely but unconfirmed match. Confirm against the source and set if correct.

## 2. Valid exam K/As absent from the Rev 3 catalog (10)

Source-verified: the exam assigned these K/As, but they are **not present in NUREG-1122 Rev 3 at all** (not even as deleted rows). Per the chosen policy the tag's **number is canonicalized and the exam's importance retained**; no Rev 3 importance exists. No action needed unless you want to remap them.

- `029 K2.06` — 2012/q8-atwt-safeguards-reset-si-pushbutton-impact.md — tag `029 K2.06 (RO 2.9 / SRO 3.1)`  
  _029 K2 series is fully deleted in Rev 3; K2.06 has no row at all._
- `079 A2.01` — 2018/q93-loss-of-control-air-ecac-attachment-12.md — tag `079 A2.01 (3.2)`  
  _Station Air System (079) was removed entirely from Rev 3._
- `079 A2.01` — 2019/q93-loss-of-control-air-reactor-trip.md — tag `079 A2.01 (3.2)`  
  _Station Air System (079) was removed entirely from Rev 3._
- `079 K4.01` — 2016/q63-sbo-compressor-station-blackout-control-air.md — tag `079 K4.01 (RO 2.9)`  
  _Station Air System (079) was removed entirely from Rev 3._
- `WE02 EK2.01` — 2012/q18-trip-3-si-termination-charging-restoration.md — tag `WE02 EK2.01 (RO 3.4 / SRO 3.9)`  
  _Westinghouse E02 (SI Termination) — EK2.01 has no Rev 3 row (group starts at EK2.03a)._
- `WE10 EA1.02` — 2012/q23-trip-5-natural-circ-cooldown-time.md — tag `WE10 EA1.02 (RO 3.6 / SRO 3.8)`  
  _Westinghouse E10 (Natural Circ w/ steam void) — these early importance items have no Rev 3 row._
- `WE10 EA2.02` — 2015/q85-sro-procedure-required-before-natural-circ-rapid-cooldown.md — tag `WE10 EA2.02 (3.4/3.9) — SRO`  
  _Westinghouse E10 (Natural Circ w/ steam void) — these early importance items have no Rev 3 row._
- `WE10 EA2.02` — 2020/q84-nat-circ-cooldown-rates-rvlis.md — tag `WE10 EA2.02 (3.9)`  
  _Westinghouse E10 (Natural Circ w/ steam void) — these early importance items have no Rev 3 row._
- `WE10 EA2.02` — 2022/q84-eop-trip6-nat-circ-cooldown-no-rvlis.md — tag `WE10 EA2.02 (3.9)`  
  _Westinghouse E10 (Natural Circ w/ steam void) — these early importance items have no Rev 3 row._
- `WE10 EK3.03` — 2016/q25-trip-6-rapid-cooldown-rvlis-minimum-level.md — tag `WE10 EK3.03 (3.4)`  
  _Westinghouse E10 (Natural Circ w/ steam void) — these early importance items have no Rev 3 row._

## 3. Deleted in Rev 3 — handled by policy (232, informational)

These tags map to catalog rows marked `DELETED` in Rev 3 (valid K/As the Rev 2-era exams used). The audit canonicalized each number and **retained the exam's importance verbatim** (never written as 0/0). No human action required. Full per-item list: the _Deleted in Rev 3_ section of `ka-audit-report.md`. By year: 2012=33, 2014=27, 2015=21, 2016=32, 2018=31, 2019=37, 2020=23, 2022=28.

