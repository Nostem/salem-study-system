---
title: "SC.RE-ST.ZZ-0002 — Shutdown Margin Calculation"
category: admin
status: draft
aliases:
  - SC.RE-ST.ZZ-0002
  - shutdown margin calculation
  - SDM calculation
---

# SC.RE-ST.ZZ-0002 — Shutdown Margin Calculation

## Purpose

Surveillance procedure for calculating shutdown margin (SDM) to verify compliance with TS 3.1.1.1. Used to verify SDM when required by tech spec action statements (e.g., TSAS 3.1.3.1 Action c.3 for inoperable/misaligned rods) and for periodic SDM verification.

## Key Steps

**Step 5.1 — Select applicable attachment:**
- 5.1.1.A: SDM in Modes 3, 4, and 5
- 5.1.1.C: SDM verification with reactor critical (Mode 1 or 2) and one or more control rods inoperable — uses Attachment 3

**Attachment 3 — SDM with Reactor Critical and Inoperable Rod(s):**

| Section | Content | Key Input |
|---------|---------|-----------|
| 4.1 | Critical Conditions | Power level, boron concentration, bank position, burnup, number of untrippable rods, number of inoperable rods |
| 4.2 | Calculation of Rod Worth | Total rod worth from tables/figures in S2.RE-RA.ZZ-0016 Curve Book |
| 4.3 | Calculation of SDM | Combines rod worth with defects (temperature, Doppler, etc.) |
| 4.4 | Acceptance Criteria | SDM must be equal to or more negative than -1300 pcm in Modes 1 or 2 |

**References:** S2.RE-RA.ZZ-0016 Curve Book provides rod worth tables and figures.

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 RO-A1</div>
SDM calculation with one inoperable (but trippable) rod (1D5 at 214 steps): Step <span class="hi-exam">4.2.6 rod bank penalty is based on the position of the rod BANK (225 steps = ARO), NOT the individual misaligned rod</span>. Since bank is at ARO, penalty = 0 pcm. Step 4.1.5 = 0 untrippable rods (1D5 is trippable). Step 4.1.6 = 1 inoperable rod. Calculated SDM = <span class="hi-exam">-2398 pcm</span>, which is more negative than acceptance criteria of -1300 pcm — SDM is SAT. Time critical: 60-minute limit.
</div>

## Connections

- Related tech specs: [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related systems: [[Control Rod Drive]]
- Related JPMs: [[2020 JPM RO-A1]]
- Related exam: [[2020 NRC Operating Exam]]
