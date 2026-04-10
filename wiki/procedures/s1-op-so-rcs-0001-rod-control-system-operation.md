---
title: "S1.OP-SO.RCS-0001 — Rod Control System Operation"
category: procedures
status: draft
aliases:
  - S1.OP-SO.RCS-0001
  - rod control system operation
  - rod drive M-G set
---

# S1.OP-SO.RCS-0001 — Rod Control System Operation

## Purpose

Provides operating procedures for the Rod Control System, including Rod Drive Motor-Generator (M-G) set startup, paralleling, and shutdown.

## Key Actions / Information (Section 4.4 — M-G Set Paralleling)

- Step 4.4.1: Verify A and B reactor trip breakers CLOSED; running M-G set voltage at 260V (247-273V) and ~80 DC amps
- Step 4.4.3: CLOSE incoming M-G set MOTOR breaker, wait at least 20 seconds for rated speed
- Step 4.4.4: Press and hold GEN FIELD FLASH pushbutton until voltage stops rising (~260V)
- Steps 4.4.5.1-5.3: Sweep VOLTAGE ADJUST full CCW (~220V), then full CW (~300V), then back to ~260V
- Step 4.4.5.6: Adjust voltage 0-2.5V higher than running set using DMM readings
- Step 4.4.6: Place SYNCHRONIZE switch to ON — generator breaker auto-closes, load divides equally (~40 DC amps each)

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 IP-j</div>
Paralleling Rod Drive M-G Sets: adjust incoming set voltage <span class="hi-exam">0-2.5V higher</span> than the running set using DMM readings (not installed voltmeter — DMM reads approximately half of installed meter). The single <span class="hi-exam">SYNCHRONIZE handle must be moved from the running 12 M-G set to the 11 M-G set</span> before placing in ON. Generator breaker auto-closes — <span class="hi-exam">do NOT manually close the generator output breaker</span> (could trip both M-G sets).
</div>

## Connections

- Related systems: [[RPS/SSPS]]
- Related JPMs: [[2023 JPM IP-j]]
- Related exam: [[2023 NRC Operating Exam]]
