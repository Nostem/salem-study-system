---
title: "2012 Q89 — Containment Pressure Channel IV Calibration Phase B Isolation"
category: exams
status: draft
aliases:
  - 2012 Q89
  - 2012-Q89
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q89 — Containment Pressure Channel IV Calibration Phase B Isolation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">026000G450 / 2.4.50 (RO 4.2 / SRO 4.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 100% power.<br>
- Technicians are performing a sensor calibration of Containment Pressure Channel IV IAW S2.IC-SC.RCP-0066, 2PT-948A CONTAINMENT PRESSURE PROTECTION CHANNEL IV.<br>
- All bistables and test switches are in their proper alignment for the calibration.<br>
- While I&amp;C Technicians are performing the calibration, the control room receives OHA C-16, PHASE B CNTMT ISOL ACT.<br><br>
Which of the following identifies what will occur, and how the CRS should respond to this alarm?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Phase B isolation valves will shut ONLY. The isolation will not be able to be reset until I&amp;C returns their bistables and test switches to normal. Trip the Rx, stop all RCPs, and GO TO EOP-TRIP-1.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Phase B isolation valves will shut and Containment Spray valves will open. Attempt to reset and open the Phase B isolation valves IAW OHA C-16 ARP. If unable to reset Phase B, GO TO S2.OP-AB.RCP-0001, RCP Abnormality.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Phase B isolation valves will shut and Containment Spray valves will open. The isolation will not be able to be reset until I&amp;C returns their bistables and test switches to normal. Trip the Rx, stop all RCPs, and GO TO EOP-TRIP-1.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Phase B isolation valves will shut ONLY. Attempt to reset and open the Phase B isolation valves IAW OHA C-16 ARP. If unable to reset Phase B, GO TO S2.OP-AB.RCP-0001, RCP Abnormality.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> This alarm is not expected to occur during the sensor cal, as it requires 2/4 containment pressure channels to see 15 psig. The ARP says if cont pressure is &lt;15 psig, attempt to reset and open Phase B isolation valves, and if unsuccessful go to AB.RCP based on the loss of CCW to the RCPs. The CS valves will reposition.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> The Phase B isolation will reposition Containment Spray valves (not Phase B valves shutting only), and the ARP directs an attempt to reset and open the Phase B isolation valves rather than tripping the Rx and going to EOP-TRIP-1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The correct response per the OHA C-16 ARP is to attempt to reset and open the Phase B isolation valves; tripping the Rx, stopping all RCPs, and going to EOP-TRIP-1 is not the directed action for this alarm with cont pressure &lt;15 psig.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Phase B isolation does not shut the isolation valves ONLY — Containment Spray valves also reposition (open) on the Phase B actuation. The reset/AB.RCP action is correct but the effect statement is wrong.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Overhead Annunciators Window C — S2.OP-AR.ZZ-0003 (Rev 17), page 19 | LO: CSPRAYE008 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Containment Spray]], [[Containment]], [[Reactor Coolant Pumps]]
- Related procedures: [[S2.OP-AR.ZZ-0003 — Overhead Annunciators Window C]], [[AB.RCP-0001 — RCP Abnormality]]
- Related exam: [[2012 NRC Written Exam]]
