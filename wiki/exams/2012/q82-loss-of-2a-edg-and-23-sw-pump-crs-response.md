---
title: "2012 Q82 — Loss of 2A EDG and 23 SW Pump CRS Response"
category: exams
status: draft
aliases:
  - 2012 Q82
  - 2012-Q82
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q82 — Loss of 2A EDG and 23 SW Pump CRS Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">G2.4.6 (RO 3.7 / SRO 4.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is at 40% power performing a shutdown.<br>
- 4 SW Bay is isolated due to a leak on the 25SW3, 25 SW Pump Discharge Isolation Valve.<br>
- Operators are performing the shutdown to comply with TSAS 3.7.4 because difficulties arose during the leak repair of the 25SW3.<br>
- 2A EDG is supplying 2A 4KV vital bus for a scheduled surveillance.<br>
- 21 and 23 SW pumps are in service.<br><br>
Which of the following describes how the control room crew will respond if 2A EDG output breaker trips on Bus Differential, and 23 SW pump trips 1 minute later on over current when supplying SW flow at runout conditions?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Trip the Main Turbine to reduce Rx power and heat input to the RCS, and enter S2.OP-AB.TRB-0001, Turbine Trip &lt;P-9.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Enter S2.OP-AB.SW-0001, Loss of Service Water Header Pressure. Trip the Main Turbine, and reduce Rx power &lt;5% in order to place AFW in service.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Enter S2.OP-AB.SW-0005, Loss of All Service Water. Trip the Rx, confirm the trip, and stop RCPs to limit the heat input to the CCW system, and preserve RCP seal packages.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Trip the Rx and go to TRIP-1, Reactor Trip or Safety Injection. After exiting TRIP-2, Reactor Trip Response, enter S2.OP-AB.SW-0005 to perform compensatory actions for no service water pumps operating.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> C is correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect because even if the actions are (some of those) performed in AB.SW-5, the next procedure entry to AB.TRB is incorrect since the Rx is tripped in AB.SW-5.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because AB.SW-1 doesn't perform those actions.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because AB.SW-5 should be entered before exiting the TRIP series.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Loss of All Service Water — S2.OP-AB.SW-0005 — Rev 4; Loss of Service Water Header Pressure — S2.OP-AB.SW-0001 — Rev 16 | LO: ABSW04E005 | Source: Facility Exam Bank — Editorially Modified | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Service Water]], [[EDGs]], [[RCPs]], [[CCW]]
- Related procedures: [[AB.SW-0005 — Loss of All Service Water]], [[AB.SW-0001 — Loss of SW Header Pressure]], [[AB.TRB-0001 — Main Turbine Abnormality]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]]
- Related tech specs: [[TS 3/4.7 — Plant Systems]]
- Related exam: [[2012 NRC Written Exam]]
