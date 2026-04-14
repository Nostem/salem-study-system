---
title: "SC.OP-SO.CA-0001 — SBO Diesel Control Air Compressor"
category: procedures
status: draft
aliases:
  - SC.OP-SO.CA-0001
  - SBO air compressor
  - SBO diesel control air compressor
---

# SC.OP-SO.CA-0001 — SBO Diesel Control Air Compressor

## Purpose

Provides instructions for starting, operating, and securing the Station Blackout (SBO) Diesel Control Air Compressor, which provides backup control air when all Emergency Control Air Compressors (ECACs) are unavailable.

## Key Actions / Information

- Step 5.1.3: Open both engine intake louvers (west wall)
- Step 5.1.4: Drain 1CA1920 (Blackout Air Compressor Drain Valve)
- Step 5.1.9: Press AND HOLD BY-PASS VALVE pushbutton
- Step 5.1.10: Place SBO-IGN-SWT in START until engine starts, release to RUN
- Step 5.1.11: When oil pressure >15 psig, RELEASE BY-PASS VALVE pushbutton
- Steps 5.1.13-15: Open discharge valves to pressurize control air headers
- Step 5.1.16: Place UNLOADER VALVE selector switch in RUN to load compressor

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 IP-i</div>
SBO Compressor start sequence: must keep <span class="hi-exam">BY-PASS VALVE pushbutton depressed</span> while starting the engine with SBO-IGN-SWT. Do NOT release the bypass valve pushbutton until verifying <span class="hi-exam">oil pressure >15 psig</span> — releasing early causes the engine to stop. After warm-up, align discharge path: open <span class="hi-exam">1CA1913 → 1CA1886 → 2CA584</span>, then place UNLOADER VALVE in RUN to load.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 IP-j</div>
Identical SBO start procedure tested in 2020: both units tripped on loss of offsite power, no ECACs running. Starts at Step 5.1.3 (louvers already opened per 5.1.1/5.1.2). Key P&Ls: <span class="hi-exam">P&L 3.1 requires hearing protection, P&L 3.10 is verified at the SBO building</span>. Same discriminating steps 5.1.10/5.1.11: keep <span class="hi-exam">BY-PASS VALVE depressed</span> through engine start, verify <span class="hi-exam">oil pressure >15 psig</span> before releasing. Discharge alignment: <span class="hi-exam">1CA1913 → 1CA1886 → 2CA584</span> pressurizes Aux. Building 1A and 2A Control Air headers. Then UNLOADER VALVE to RUN.
</div>

## Connections

- Related systems: [[Control Air]], [[EDGs]]
- Related procedures: [[AB.LOOP-0001 — Loss of All Offsite Power]], [[AB.CA-0001 — Loss of Control Air]]
- Related JPMs: [[2020 JPM IP-j]], [[2023 JPM IP-i]]
- Related exam: [[2020 NRC Operating Exam]], [[2023 NRC Operating Exam]]
