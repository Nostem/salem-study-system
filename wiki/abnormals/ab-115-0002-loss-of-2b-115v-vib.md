---
title: "AB.115-0002 — Loss of 2B 115V Vital Instrument Bus"
category: abnormals
status: draft
aliases:
  - AB.115-0002
  - S2.OP-AB.115-0002
---

# AB.115-0002 — Loss of 2B 115V Vital Instrument Bus

## Purpose

Provides operator actions for responding to a loss of the 2B 115V Vital Instrument Bus, including identification of affected components, instrumentation impacts, and required Tech Spec actions.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q14</div>
With the 2B VIB UPS Static Switch in <span class="hi-exam">Bypass to Alternate</span> (Test Transfer switch to ALT per SO.115-0012 Section 5.4; Manual Bypass Switch positions contacts B1/B2/B4 closed, B3/B5 open), the 2B VIB is fed from the <span class="hi-exam">AC Line Regulator (Alternate source)</span>. If the breaker from 2B 230VAC to the AC Line Regulator opens, the <span class="hi-exam">2B VIB deenergizes</span>. Restoration requires <span class="hi-exam">MANUAL action: place the Static Switch in Normal and the Test Transfer switch to N (Normal)</span> per Sections 5.7.3/5.7.4. <span class="hi-trap">Automatic transfer is unavailable (static switch not in Normal), and the inverter output cannot reach the bus with B3/B5 open. Placing the switch in Isolate (Alternate) is the wrong restoration action.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q88</div>
Loss of 2B VIB impact on ESFAS: Containment Spray Hi-Hi Containment Pressure bistables are <span class="hi-exam">energized to actuate</span>. Loss of the 2B VIB causes the associated Hi-Hi Containment Pressure bistable to remain de-energized, so the <span class="hi-exam">coincidence logic goes from 2/4 to 2/3</span> (the de-energized channel cannot actuate). Per TS 3.3.2.1, the inoperable channel is placed in <span class="hi-exam">BYPASS (not tripped)</span> to reduce the possibility of spurious Containment Spray actuation. <span class="hi-trap">Trap: most ESF bistables are de-energized to trip and TS requires tripping the inoperable channel. Containment Spray is the opposite — energized to actuate, so the inoperable channel is bypassed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q85</div>
Loss of 2B VIB makes <span class="hi-exam">RVLIS Train A Microprocessor Panel inoperable</span>. Combined with Wide Range Loop 22 THOT failed low (also Train A RVLIS input), <span class="hi-exam">only Train A RVLIS is affected</span>. Train B RVLIS remains available. During EOP-TRIP-4, crew transitions to <span class="hi-exam">EOP-TRIP-6 (with RVLIS)</span> since at least one RVLIS train is available.
</div>

## Connections

- Related systems: [[115V AC]], [[RPS/SSPS]], [[Containment Spray]], [[RVLIS]], [[DC Power]]
- Related procedures: [[S2.OP-SO.115-0012 — 2B Vital Instrument Bus UPS System Operation]]
- Related exam questions: [[2015 Q14]], [[2019 Q85]], [[2020 Q88]]
- Related exam: [[2015 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]]
