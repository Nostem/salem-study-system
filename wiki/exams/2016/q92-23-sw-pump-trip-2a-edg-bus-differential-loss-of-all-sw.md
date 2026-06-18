---
title: "2016 Q92 — 23 SW Pump Trip and 2A EDG Bus Differential Effect"
category: exams
status: verified
reference: no
aliases:
  - 2016 Q92
  - 2016-Q92

---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q92 — 23 SW Pump Trip and 2A EDG Bus Differential Effect</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">076 A2.01 (RO 0 / SRO 0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is at 40% power performing a shutdown.<br>
- 4 SW Bay is isolated due to a leak on the 25SW3, 25 SW Pump Discharge Isolation Valve.<br>
- Operators are performing the shutdown to comply with TSAS 3.7.4 because difficulties arose during the leak repair of the 25SW3.<br>
- 2A EDG is supplying 2A 4KV vital bus for a scheduled surveillance.<br>
- 22 Charging pump is in service.<br>
- 23 Charging pump is available.<br>
- 21 and 23 SW pumps are in service.<br>
- 22 SW pump is in auto and standby.<br>
- 23 SW pump trips, and one minute later 2A EDG output breaker opens on 2A 4KV Vital Bus Differential<br><br>
Which of the following identifies:<br>
1) The effect this will have on the SW system<br>
2) How the CRS is required to respond
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 1) 22 SW pump will auto start on low SW header pressure.<br>2) Enter S2.OP-AB.SW-0001, Loss of Service Water Header Pressure. Reduce loads on Service Water listed on Attachment 2, Loads Affected by a Loss of Service Water.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 1) All SW flow capability is lost.<br>2) Enter S2.OP-AB.SW-0005, Loss of All Service Water. Trip the Rx, confirm the trip, and stop RCPs to limit the heat input to the CCW system.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 1) All SW flow capability is lost.<br>2) Enter S2.OP-AB.SW-0005. Trip the Main Turbine and reduce Rx power &lt;5% to lower heat input to the RCS.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 1) 22 SW pump will auto start on low SW header pressure.<br>2) Enter S2.OP-AB.SW-0001. Place 23 Charging pump in service and remove 22 Charging pump from service.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> 55.43(b)5 21-23 SW pumps are powered from AA,BB,CC vital buses. With all 4 SW Bay isolated, 24,25,26 SW pumps are unavailable. A Bus Differential signal will open the EDG output breaker, and ALSO prevent the vital bus infeed breakers from Station Power to close. This will result in no SW pumps running. AB.SW-5 states to perform actions listed in correct answer. The other AB.SW-5 action is wrong in that tripping the MT when power is &lt;49% will not trip the Rx. The 2 distracters regarding 22 SW pump auto starting are incorrect because it will not have any power. Reducing SW loads on alt 2 is a correct action for a Loss of SW header pressure. The action to swap charging pumps is found in AB.SW-5, not AB.SW-1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> The 2 distracters regarding 22 SW pump auto starting are incorrect because it will not have any power. Reducing SW loads on alt 2 is a correct action for a Loss of SW header pressure.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The other AB.SW-5 action is wrong in that tripping the MT when power is &lt;49% will not trip the Rx.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The 2 distracters regarding 22 SW pump auto starting are incorrect because it will not have any power. The action to swap charging pumps is found in AB.SW-5, not AB.SW-1.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Loss of All Service Water, S2.OP-AB.SW-0005 Rev 4; Loss of Service Water Header Pressure, S2.OP-AB.SW-0001 Rev 16 | LO: ABSW04E004 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Service Water]], [[EDGs]]
- Related tech specs: [[TS 3/4.7 — Plant Systems]]
- Related procedures: [[AB.SW-0001 — Loss of SW Header Pressure]], [[AB.SW-0005 — Loss of All Service Water]]
- Related exam: [[2016 NRC Written Exam]]
