---
title: "S2.OP-SO.DG-0003 — 2C Diesel Generator Operation"
category: procedures
status: draft
aliases:
  - S2.OP-SO.DG-0003
  - 2C Diesel Generator Operation
---

# S2.OP-SO.DG-0003 — 2C Diesel Generator Operation

## Purpose

Provides direction for operating the 2C (swing) Emergency Diesel Generator, including starting, paralleling to a 4KV Vital Bus, loading, unloading, and stopping. Section 5.8 covers unloading a paralleled EDG; Section 5.9 covers stopping the EDG and restoring its loading switch to AUTO.

## Key Actions / Information

### Section 5.8 — Unloading the 2C EDG (paralleled)

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 IP-i</div>
With the 2C EDG paralleled on the 2C 4KV Vital Bus, unload it before opening the output breaker (Step 5.8.1): lower real load (KW) using the <span class="hi-exam">SPEED CONTROL SWITCH (GS)</span> and reactive load (KVAR) using the <span class="hi-exam">VOLTAGE CONTROL SWITCH (VCS)</span>, alternately going to LOWER while monitoring Generator KW and KVAR. The cover NOTE directs placing the GENERATOR CIRCUIT BREAKER SWITCH to TRIP <span class="hi-exam">as soon as EDG load is reduced to 200 KW</span> (KVAR to 50-100 KVAR OUT). Open the 2C output breaker (Step 5.8.3) by any of: open <span class="hi-exam">2CD1AX6D</span> (64' Swgr Rm), press the 2C BREAKER OPEN pushbutton (2CC3), or place <span class="hi-exam">2C-DF-GCP-3 GENERATOR CIRCUIT BREAKER SWITCH (BCS)</span> to TRIP at the 2C D/G Control Panel. With the breaker open, Generator KW and KVAR indicate 0 and Generator Voltage indicates 4160 VAC. Allow the diesel to run unloaded ≥ 3 minutes before stopping (Step 5.8.4).
</div>

### Section 5.9 — Stopping the 2C EDG

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 IP-i</div>
If the 2C DIESEL GEN LOADING SW (2C-DF-GCP-1) is in MANUAL (DROOP), restore the unloaded set before stopping (Step 5.9.4): adjust speed to <span class="hi-exam">900 rpm</span> with the SPEED CONTROL SWITCH (GS), verify frequency on the 2CC3 bezel is <span class="hi-exam">58.94-60.36 Hz</span>, adjust terminal voltage to <span class="hi-exam">4160 volts</span> with the VOLTAGE CONTROL SWITCH (VCS), and verify voltage on 2CC3 is <span class="hi-exam">4.023-4.306 Kv</span>. Stop the diesel by placing <span class="hi-exam">2C-DF-SS, 2C DG STOP/START SWITCH, in STOP</span> (Step 5.9.5) and verify speed lowering. After stopping, return <span class="hi-exam">2C-DF-GCP-1 2C DIESEL GEN LOADING SW to AUTO (ISOCR)</span> (Step 5.9.7); the GENERATOR LOADING IN DROOP MODE (B-9) alarm clears. Critical steps: 5.8.1, 5.8.3, 5.9.5, 5.9.7.
</div>

## Connections

- Related systems: [[EDGs]]
- Related JPMs: [[2014 JPM IP-i]]
- Related exam: [[2014 NRC Operating Exam]]
</content>
