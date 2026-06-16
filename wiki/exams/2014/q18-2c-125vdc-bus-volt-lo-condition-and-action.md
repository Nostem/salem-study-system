---
title: "2014 Q18 — 2C 125VDC Bus Voltage Condition and Required Action"
category: exams
status: draft
aliases:
  - 2014 Q18
  - 2014-Q18
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q18 — 2C 125VDC Bus Voltage Condition and Required Action</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000058 2.4.46 (RO 4.2 / SRO 4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is in MODE 3, NOP, NOT.<br>
- The control room receives OHA B-18 2C 125VDC CNTRL BUS VOLT LO<br>
- Upon further investigation, the NCO reports that 2C 125VDC bus voltage is at 126 volts, and no current is indicated on 2RP9.<br><br>
Describe the condition which is present, and the actions required to be taken?<br><br>
2C 125VDC bus is...
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> within the normal operating band, direct maintenance to raise the charger float voltage.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> experiencing a minor short-to-ground, initiate S2.OP-SO.125-0004 125VDC GROUND DETECTION.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> below the Tech Spec minimum setpoint, secure the operating battery charger and place the standby battery charger in service.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> above the Tech Spec minimum setpoint, ONLY continued monitoring for any indication of further voltage degradation is required.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> A is the correct answer because the control band as specified in the NCOs logs is 125-139.8V. Voltage is in the normal band, and the AR states to have maint adjust the float voltage.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Distractor b is incorrect because there is no indication of a ground.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Distractor c is incorrect because action IS required IAW ARP.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Distractor d is incorrect because voltage is above the TS limit. (Continued monitoring only is not the required action — the ARP directs adjusting the float voltage.)</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Overhead Annunciator Window B (S2.OP-AR.ZZ-0002, p. 35, Rev 35); Control Room Logs Modes 1-4 (S2.OP-DL.ZZ-0003, Att. 1, p. 48, Rev 97) | LO: DCELECE008 | Source: Facility Exam Bank | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[DC Power]]
- Related procedures: [[S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B]], [[S2.OP-DL.ZZ-0003 — Control Room Logs]], [[S2.OP-SO.125-0004 — 125VDC Ground Detection]]
- Related exam: [[2014 NRC Written Exam]]
