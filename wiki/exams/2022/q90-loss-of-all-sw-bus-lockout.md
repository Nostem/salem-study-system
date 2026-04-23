---
title: "2022 Q90 — Loss of All SW Bus Lockout"
category: exams
status: draft
reference: no
aliases:
  - 2022 Q90
  - 2022-Q90
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q90 — Loss of All SW Bus Lockout</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">076 A2.01 (3.7) SRO</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 is at 40% Power.<br>
• #4 SW Bay was isolated due to a leak.<br>
• 2A EDG is paralleled to the 4KV bus for surveillance testing.<br>
• 22 Charging Pump is in service.<br>
• 21 and 23 SW Pumps are in service.<br>
• 22 SW Pump is in AUTO and standby.<br><br>
Subsequently, the following occurs:<br>
• 23 SW Pump trips.<br>
• OHA J-1, 2A 4KV VTL BUS DIFF PROT, is LIT<br><br>
Based on the above conditions, which ONE of the following completes both statements?<br><br>
1. What is the effect on the SW system?<br>
2. How will the CRS proceed?<br><br>
Note: S2.OP-AB.SW-0001 — Loss of Service Water Header Pressure<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S2.OP-AB.SW-0005 — Loss of All Service Water
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 1) 22 SW Pump will auto start on low SW header pressure.<br>2) Enter S2.OP-AB.SW-0001, reduces loads on the SW system listed on Attachment 2, Loads Affected by a Loss of Service Water.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 1) 22 SW Pump will auto start on low SW header pressure.<br>2) Enter S2.OP-AB.SW-0001, place 23 Charging Pump in service and remove 22 Charging Pump from service.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 1) All SW flow capability is lost.<br>2) Enters S2.OP-AB.SW-0005, then trips the reactor and stops the RCPs to limit the heat input to the CCW system.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 1) All SW flow capability is lost.<br>2) Enters S2.OP-AB.SW-0005, then trips the Main Turbine and reduces reactor power to < 5% to lower heat input into the RCS.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> 2A EDG supplies power to 21 and 22 SW Pumps (Unit 1 is 15 and 16 SW Pumps). Therefore, when 23 SW Pump tripped and the 2A 4KV bus locked out on bus differential protection, a loss of all SW flow capability occurred. Based on the loss of all SW, the CRS should enter S2.OP-AB.SW-0005 to trip the reactor and stop all RCPs.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. Part 1 is incorrect. Plausible because the SRO may believe that the Unit 2 SW pumps power supplies are the same as Unit 1. This is a unit difference. Part 2 is incorrect. A loss of all SW flow would require entry into AB.SW-5.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. Part 1 is incorrect. Plausible because the SRO may believe that the Unit 2 SW pumps power supplies are the same as Unit 1. This is a unit difference. Part 2 is incorrect. A loss of all SW flow would require entry into AB.SW-5.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. Part 1 is correct. Part 2 is incorrect. Plausible because the SRO may believe that based on the current power level of 40% that a turbine trip is the correct action versus tripping the reactor. This is not an action in AB.SW-5.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.SW-0005 | LO: NOS05ABSW4-04, Objective 4 | Source: Bank — Salem 2016 NRC SRO92 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Service Water]], [[EDGs]], [[4KV]], [[RCPs]], [[CCW]]
- Related procedures: [[AB.SW-0005 — Loss of All Service Water]]
- Related exam: [[2022 NRC Written Exam]]
