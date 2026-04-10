---
title: "2022 Q79 — Loss of Air / TDAFW Pump Overpower"
category: exams
status: draft
aliases:
  - 2022 Q79
  - 2022-Q79
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q79 — Loss of Air / TDAFW Pump Overpower</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE 65 G2.4.31 (4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 is at 100% Power.<br>
• 2MS132, 23 AFP TURBINE STEAM INLET VALVE, air supply line ruptures.<br><br>
Based on the above failure, which ONE of the following completes the statement concerning the status of the Turbine Driven Auxiliary Feed Pump and the actions the crew take to mitigate this event?<br><br>
1. The Turbine-Driven Auxiliary Feed Pump is <span class="blank">_(1)_</span>.<br>
2. The crew will <span class="blank">_(2)_</span>.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 1. shutdown<br>2. ONLY enter TS 3.7.1.2, for INOPERABLE AFW Pump because 23 AFW Pump will not respond to any start signals, and repair the airline within 72 hours.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 1. shutdown<br>2. continue power operations because the TDAFW remains operable due to availability of the opposite train steam supply.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 1. running<br>2. implement S2.OP-AB.CA-0001, Loss of Control Air, Attachment 12, Local Control of SG Pressure and Level, to locally shutdown 23 AFW Pump.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 1. running<br>2. reduce turbine load using S2.OP-IO.ZZ-0004, Power Operation, until the reactor thermal overpower condition has cleared</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; D. Correct.</strong> IAW S2.OP-AB.CA-0001, Attachment 2, on loss of instrument air the 2MS132 fails open which results in 23 AFW pump running. This will result in cold AFW entering the SGs causing reactor power to rise and exceed the reactor power limit of 3459 MWt (reactor overpower condition). The CRS should direct the crew to reduce turbine load to lower reactor power below the administrative limit using S2.OP-IO.ZZ-0004, Power Operation. Note: S2.OP-AB.LOAD-0001 is used only if turbine load rate is ≥ 5%/min which in this case the crew should not require reducing turbine load at this rate.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Incorrect. Part 1 is incorrect. Plausible if the applicant incorrectly determines that the MS132 fails closed instead of open on loss of air. Part 2 is incorrect. Plausible because this is the correct action (not the only action) for an Inoperable AFW pump, however, the overpower condition must also be addressed first and can be mitigated by performing a load reduction.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Incorrect. Part 1 is incorrect. Plausible if the applicant incorrectly determines that the MS132 fails closed instead of open on loss of air. Part 2 is incorrect. Plausible because the applicant may confuse how the MS132 impacts the steam supply to the TDAFW pump. Steam is supplied from #1 and #3 SGs thru the MS45s. The applicant may believe that the MS132 failure impacts one of the steam supplies and that the other steam supply remains available.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> Incorrect. Part 1 is correct. 2MS132 fails open on loss of air. Part 2 is incorrect. Plausible because S2.OP-AB.CA-0001 can be used for a loss of control air, however, this procedure does not provide direction to shutdown 23 AFW pump and only directs local control of 23 AFW pump governor and AF21s.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.CA-0001 (R22), S2.OP-AB.CN-0001 (R31), S2.OP-IO.ZZ-004 (R87) | LO: NOS05ABCA01-08, Objective 2 | Source: Bank - Beaver Valley U1 2016 SRO89 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[AFW]], [[Control Air]]
- Related exam: [[2022 NRC Written Exam]]
