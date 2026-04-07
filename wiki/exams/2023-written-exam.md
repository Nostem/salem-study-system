---
title: "2023 NRC Written Exam"
category: exams
status: draft
aliases:
  - 2023 exam
---

# 2023 NRC Written Exam

## Overview

- **Exam:** SALEM 2023 NRC Exam (21-01 ILOT) - Rev. 1
- **RO Questions:** 75
- **SRO-Only Questions:** 25

<a href="/salem-study-system/exam-pdfs/2023-written.pdf" target="_blank">View Exam PDF</a>

## RO Questions

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q1 — RCS Low Flow / P-7 and P-8 Logic</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">EPE 7 EA2.08 (3.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 2 is at 25% reactor power.<br>
• The RO reports the following flow indications on 21 RC loop:<br>
&nbsp;&nbsp;- Channel 1 - 89%<br>
&nbsp;&nbsp;- Channel 2 - 89%<br>
&nbsp;&nbsp;- Channel 3 - 92%<br><br>
Which of the following describes the expected response?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Per the Alarm Response Procedure, manually trip the reactor, stop 21 RCP, and enter 2-EOP-TRIP-1, Reactor Trip or Safety Injection.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> RC flows are degraded but above the RPS setpoint for low RCS flow; power operation may continue.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Automatic reactor trip based on 2/3 low flow channels on one RC loop with power greater than P-7; perform immediate actions per 2-EOP-TRIP-1, Reactor Trip or Safety Injection.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Automatic reactor trip based on 1/3 low flow channels on one RC loop with power greater than P-7; perform immediate actions per 2-EOP-TRIP-1, Reactor Trip or Safety Injection.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> Two out of three channels less than or equal to 90% of design loop flow indicates degraded RCP. Since reactor power is above P-7 (10%) and below P-8 (36%), no automatic reactor trip will occur with a loss of only one RC loop low flows. However, per S2.OP-AR.ZZ-0004 for OHA D-28, RCP BKR OPEN/FLO LO, with a degraded RCP flow, the RCP must be stopped, the reactor manually tripped, and enter 2-EOP-TRIP-1 since Tech Specs does not allow for three loop operation in Mode 1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. While RC flows are degraded, the Alarm Response Procedure requires the RCP to be stopped and the reactor manually tripped. Power operation may not continue with degraded RCP flow since Tech Specs does not allow three loop operation in Mode 1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. An automatic reactor trip on low flow requires 2/3 low flow channels, but P-8 (36%) must be exceeded for an automatic trip on loss of a single loop. Power is only 25%, which is below P-8. No automatic trip occurs; instead a manual trip is required per the ARP.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. The low flow trip logic requires 2/3 channels, not 1/3. Additionally, power is below P-8, so no automatic trip on loss of a single loop would occur regardless of the coincidence logic.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Logic drawing 221054, simplified ESF-2, S2.OP-AR.ZZ-0004 (R29) | LO: NOS05RXPROT-15, Obj 12.a | Source: New | Cognitive: Fundamental/Memory</div>
</div>
</details>
</div>

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q2 — Small Break LOCA / RCS Heat Removal Methods</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">EPE 9 EK1.03 (4.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• A small break LOCA and a Loss of ALL Offsite Power occurred on Salem Unit 2<br>
• SG pressures are 1015 psig and stable<br>
• RCS pressure is 1600 psig and slowly lowering<br>
• Highest CET temperature is 590°F and lowering<br>
• RCS T-Hot temperatures are 554°F and lowering<br>
• RCS T-Cold temperatures are 548°F and stable<br>
• 2B 4KV Vital Bus is locked out on Bus Differential<br><br>
What is the primary method for RCS heat removal for current plant conditions?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Forced RCS Cooling</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Natural Circulation</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Reflux Boiling</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> ECCS Injection and Break flow</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. Forced cooling requires RCPs running, which are unavailable due to Loss of All Offsite Power.</div>
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> Natural circulation conditions are met based on the following parameters: (1) subcooling > 0°F — RCS pressure at 1600 psig has a saturation temperature of approx. 606°F, hottest CET is 590°F, therefore subcooling is approx. 606 - 590 = 16°F of subcooling, (2) SG pressures are stable and lowering, (3) RCS T-Hots are stable or dropping, (4) CETs are lowering, and (5) RCS T-colds are at saturation temp for SG pressure. SG pressure is 1015 psig (pre-set pressure for MS110s) which is a saturated temp from the outlet of the SGs of approx. 548°F. Therefore per 2-EOP-LOCA-2 step 19.1 conditions for Natural Circulation are met and will be the RCS heat removal method.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. Reflux boiling occurs when natural circulation has been lost and steam is condensed on SG tubes. Current conditions show T-hot > T-cold with stable/lowering parameters, indicating natural circulation is still established.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. Only one Charging Pump is running and no SI pumps based on RCS pressure above the shutoff head (1540 psig), therefore ECCS injection flow and break flow are insufficient for RCS heat removal.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 2-EOP-LOCA-2 (R42), ASME Steam Tables (year 2000) | LO: NOS05LOCA02-06, Obj 5 | Source: Modified - Callaway 2017 NRC RO8 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q3 — CVCS / CV71 Seal Backpressure Control</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE 22 AA1.05 (3.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 1 is experiencing a RCS leak inside containment.<br>
• The crew is performing S1.OP-AB.RC-0001, Reactor Coolant System Leak.<br>
• 11 charging pump is in service.<br>
• The RO is attempting to stabilize PZR level by adjusting charging flow using the 1CV55, CHARGING FLOW CONTROL VALVE, and 1CV71, CHG HDR PCV.<br><br>
Which of the following completes the below statement? When 1CV71 is throttled ...
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> open, seal injection rises and charging flow rises.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> open, seal injection flow lowers and charging flow lowers.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> closed, seal injection flow rises and charging flow lowers.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> closed, seal injection lowers and charging flow rises.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. Throttling CV71 open would lower backpressure to the seal injection lines, resulting in lower seal injection flow and higher charging flow — the opposite of what this choice states.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. Throttling CV71 open would lower backpressure, but seal injection flow would lower and charging flow would rise, not both lower.</div>
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> When the 1CV71 is closed, then backpressure to the seal injection lines will rise resulting in rising RCP seal injection flows and allowing less charging flow to the non-regen HX, thereby lowering charging flow to the RCS. 1CV71 acts as a backpressure control valve that affects both charging and seal injection flows.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. Throttling CV71 closed raises backpressure, which raises seal injection flow — it does not lower it. Additionally, charging flow would lower, not rise.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S1.OP-AB.RC-0001 (R18), CVCS one-line dwg | LO: NOS05CVCS00-18, Obj 4 | Source: Bank - Byron 2017 NRC RO4 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q4 — CCW / Thermal Barrier Rupture Indications</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE 26 G2.1.19 (3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 2 is at 100% power<br>
• The operating crew suspects an RCP Thermal Barrier rupture.<br><br>
Which of the following indications would provide corroborating evidence for this condition?<br><br>
1. 2R17 A/B, Component Cooling Radiation Monitors, in Warning<br>
2. PZR level rising<br>
3. CCW Surge Tank level rising<br>
4. Charging flow lowering<br>
5. 2CC131, RCP Thermal Barrier Valve, goes closed
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 1 and 3 Only</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 2 and 4 Only</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 2, 4, and 5 Only</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 1, 3, and 5 Only</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. While indications 1 and 3 are correct, this choice is missing indication 5 (2CC131 goes closed on high CCW flow to the Thermal Barrier).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. PZR level would NOT rise — RCS is leaking OUT to the CCW system. Charging flow would NOT lower as a direct indication of thermal barrier rupture.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. PZR level would NOT rise and charging flow would NOT lower. While 2CC131 closing is correct, indications 2 and 4 are not valid corroborating evidence for a thermal barrier rupture.</div>
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> A Thermal Barrier leak will cause CCW surge tank to rise as RCS will be leaking into the CCW system, RCS in-leakage will also be identified as a rise in the 2R17 A or B radiation monitors that monitors activity in the CCW system, and the 2CC131 valve will also close on high CCW flow to the Thermal Barrier due to a thermal barrier leak. Choices 1, 3, and 5 are the correct indications. PZR level would NOT rise (RCS is leaking OUT to CCW). Charging flow would NOT lower.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.CC-0001 (R20) | LO: NOS05CCW000-16, Obj 4.c | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q5 — PZR Pressure Channel Fails High / OT Delta-T Effect</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE 27 AA2.11 (4.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 2 is at 100% power<br>
• PZR Pressure controlling channel fails HIGH<br><br>
Based on the conditions above, the <em>(1)</em> reactor trip setpoint on the unaffected RCS loops will <em>(2)</em>.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> (1) OT Delta-T (2) lower</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> (1) OT Delta-T (2) rise</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> (1) OP Delta-T (2) rise</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> (1) OP Delta-T (2) lower</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> The failed PZR pressure controlling channel will result in PZR pressure lowering. The lowering PZR pressure is one input into OT Delta-T to determine its trip setpoint. As RCS pressure lowers, the OT Delta-T setpoint will lower. With no operator action, the PZR pressure will continue to rapidly lower until the OT Delta-T reactor trip setpoint is reached first (per S2.OP-AB.PZR-0001 bases section for Attachment 1). Note: OP Delta-T does NOT have a pressure input.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. While OT Delta-T is the correct trip function (it does have a pressure input), the setpoint would lower, not rise. As PZR pressure lowers due to the controlling channel failing high, the OT Delta-T setpoint decreases.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. OP Delta-T does NOT have a pressure input. Changes in PZR pressure do not affect the OP Delta-T trip setpoint.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. OP Delta-T does NOT have a pressure input. Changes in PZR pressure do not affect the OP Delta-T trip setpoint.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.PZR-0001 (R20) | LO: NOS05ABPZR1-05, Obj 2 | Source: Bank - Salem | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q6 — Conduct of Operations / RO Leaving ATC Area</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">EPE 38 G2.1.3 (3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 2 is experiencing a Steam Generator Tube Rupture<br>
• The crew is performing actions per 2-EOP-SGTR-1, Steam Generator Tube Rupture<br>
• The CRS, RO, and BOP operators are the only licensed operators in the control room<br>
• The RO needs to go to the Control Equipment Room (back rack area) to perform an action<br><br>
Per OP-AA-101-111, Roles and Responsibilities of On-Shift Personnel, which of the following describes the requirements for this activity?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> must be relieved by a licensed operator other than the on-shift Unit 2 BOP operator.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> may leave as long as the on-shift Unit 2 BOP operator remains "At the Controls" area.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> may leave without being relieved by another licensed operator with CRS permission ONLY.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> must be relieved by another licensed operator and a full turnover must be performed.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. The requirement is that at least one RO remains in the ATC area, not that a specific relief must occur by a non-BOP licensed operator.</div>
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> Per OP-AA-101-111, at least one RO must be in the "At The Controls" (ATC) area (or inner-horseshoe) at all times during Modes 1-6, except for the time period required to acknowledge the receipt of an alarm outside this area or to perform actions required for safe plant operation. The BOP operator remaining in the ATC area satisfies this requirement.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. CRS permission alone is not sufficient — the requirement is that at least one licensed RO must remain in the ATC area. The BOP remaining in the ATC area satisfies this requirement regardless of CRS permission.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. A full turnover is not required for a brief departure from the ATC area. The requirement is simply that at least one licensed RO remains at the controls.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: OP-AA-101-111 (R11) | LO: NOS05CONDOP-15, Obj 2.f and 2.g | Source: New | Cognitive: Fundamental/Memory</div>
</div>
</details>
</div>

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q7 — PZR Backup Heater Power Supplies</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">W E12 EK2.03 (3.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 2 is at 100% power<br>
• A reactor trip and Safety Injection occur due to the rapid depressurization of all steam generators.<br>
• 2H and 2E 4KV Group Buses fail to auto transfer and are now de-energized<br>
• The crew is performing actions in 2-EOP-LOSC-2<br><br>
Which of the following describes the current status of the PZR Backup Heaters?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> ONLY 21 Backup Group is available, 22 Backup Group can be locally transferred to an emergency backup source.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> ONLY 22 Backup Group is available, 21 Backup Group can be locally transferred to an emergency backup source.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> NEITHER 21 or 22 Backup Groups are available, Backup Groups can be locally transferred to an emergency backup source.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> BOTH 21 and 22 Backup Groups are available, Backup Groups will automatically transfer to an emergency backup source.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> The preferred or normal power source for the PZR Heater Backup Groups is: Group 1 (21) - 2G and Group 2 (22) - 2E 4KV Group Buses. The PZR Heaters can be manually transferred to the emergency backup source: Group 1 (21) from 2C and Group 2 (22) from 2A 460V vital bus. With 2H and 2E unavailable, only PZR Heater Group 1 (21) remains available from 2G Group Bus. Group 2 (22) is unavailable but can be locally transferred to the emergency backup power. Transfer is manual, not automatic.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. Group 2 (22) is powered from 2E, which is de-energized. Group 1 (21) is powered from 2G, which is still available. This choice reverses the availability.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. Group 1 (21) is still available from 2G Group Bus, which has not failed. Only 2H and 2E are de-energized.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. Group 2 (22) is not available since 2E is de-energized. Additionally, the transfer to emergency backup source is manual (local), not automatic.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 2-EOP-LOSC-2 (R41) | LO: NOS05PZRPL-12, Obj 5.b | Source: New | Cognitive: Fundamental/Memory</div>
</div>
</details>
</div>

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q8 — FW Heater High Level / Effect on Reactor Power</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE 54 G2.2.44 (4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 is at 100% Power<br>
• OHA G-22, FW HTR IN VLV TRIP & LVL HI, is Alarming<br>
• PO reports high level in 21A Low Pressure Feedwater Heater<br><br>
1. Based on the above condition, <em>(1)</em> CN22(s), Low Pressure FW Heater Inlet Valve, will be closed.<br>
2. Actual reactor thermal power will be <em>(2)</em>.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> (1) ALL (2) higher</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> (1) ALL (2) lower</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> (1) Only the 21 (2) lower</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> (1) Only the 21 (2) higher</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. High level in only the 21A LP FW heater will close only the associated 21CN22, not all three strings. The power effect is correct (higher) but the valve closure scope is wrong.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. Not all CN22 valves close, and actual reactor thermal power will be higher (not lower) due to cooler feedwater entering the reactor causing a positive MTC effect.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. Only the 21CN22 valve closing is correct, but actual reactor thermal power will be higher, not lower. Cooler feedwater from the bypassed heater string raises reactor power due to positive MTC.</div>
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> High water level in 21A Low Pressure feedwater heater will only close the associated 21CN22 inlet valve (not all three strings). Based on one LP FW heater string out of service, colder feedwater will enter the reactor. The cooler FW will have the effect of raising reactor thermal power (positive MTC effect from cooler moderator) and also provide some shielding to the PR NIS, resulting in the actual NI reactor power indication being lower than actual. Reactor power should be determined based on RCS delta-Ts and turbine load should be reduced to prevent exceeding reactor thermal power limits.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AR.ZZ-0007 (R67) | LO: NOS05ABCN01-07, Obj 3 | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q9 — Station Battery Capacity During SBO</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">EPE 55 K3.01 (4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
Which of the following describes the capacity of the station batteries during a station blackout?<br><br>
Note: 2-EOP-LOPA-1, Loss of ALL AC Power
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 2 hours assuming 2-EOP-LOPA-1 load shedding.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 2 hours during worst case loading (no 2-EOP-LOPA-1 load shed)</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 6 hours during worst case loading (no 2-EOP-LOPA-1 load shed)</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 6 hours assuming 2-EOP-LOPA-1 load shedding.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. With load shedding per EOP-LOPA-1, battery life extends to 4 hours, not 2 hours. The 2-hour capacity is without load shedding.</div>
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> The 125 VDC vital batteries are designed to have adequate capacity to supply its Station Blackout (SBO) coping and restoration loads during the four (4) hour SBO coping duration with manual stripping of some non-essential loads (ref. section 7.2.2.3 in VTD 314204). The batteries are rated for two (2) hours of operation following a Loss of All AC Power without load shed. With load shedding per EOP-LOPA-1, battery life extends to 4 hours. Loss of All AC Power is not a Design Basis Accident (DBA).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. Battery capacity during worst case loading (no load shed) is 2 hours, not 6 hours.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. With load shedding, battery life extends to 4 hours, not 6 hours.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.LOOP-0001 (R32), PSBP 314204 (SBO calculation), FSAR Sect 8.1.4.1 | LO: NOS05DC ELEC-11, Obj 2 | Source: Bank - Beaver Valley 2017 NRC RO11 | Cognitive: Fundamental/Memory</div>
</div>
</details>
</div>

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q10 — RCP Seal Injection / Seal Inlet Temperature Limit</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE 56 AK3.02 (4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 2 experienced a Loss of Off-Site Power<br>
• The crew is performing S2.OP-AB.LOOP-0001<br>
• ALL Charging Pumps on Unit 2 are unavailable<br>
• 13 Charging Pump from Unit 1 is being aligned to supply charging flow to Unit 2<br>
• Power to the 4KV Group Buses have been restored<br>
• RCP seal inlet temperatures: 21 RCP - 227°F, 22 RCP - 220°F, 23 RCP - 219°F, 24 RCP - 221°F<br><br>
Based on the above conditions, restoring seal injection flow to the RCPs <em>(1)</em> permitted. The reason for checking RCP seal inlet temperatures is to prevent <em>(2)</em>.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> (1) is NOT (2) actuation of the Safe Shutdown seal</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> (1) is (2) actuation of the Safe Shutdown seal</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> (1) is (2) damage to #1 seal</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> (1) is NOT (2) damage to #1 seal</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. While seal injection is NOT permitted (correct for part 1), the reason is to prevent damage to the #1 seal from thermal shock, not to prevent actuation of the Safe Shutdown seal. Safe Shutdown Seal actuation is monitored by seal OUTLET temperature (limit 190°F), not seal inlet temperature.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. Seal injection is NOT permitted (part 1 is wrong). Also, the reason for checking seal inlet temperature is to prevent #1 seal damage, not Safe Shutdown seal actuation.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. While preventing damage to #1 seal is the correct reason (part 2), seal injection is NOT permitted since 21 RCP seal inlet temperature is 227°F, which exceeds the 225°F limit.</div>
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> Per S2.OP-AB.LOOP-0001, Attachment 10, if ANY one of the RCP seal inlet temperatures is ≥ 225°F, then restoring seal injection flow to the RCPs is NOT permitted. Based on 21 RCP seal inlet temperature of 227°F (≥ 225°F), seal injection must be isolated prior to starting 13 charging pump. The reason is to prevent thermal shock from restoring cold seal injection water and damage to the RCP #1 seal. Note: Safe Shutdown Seal actuation is monitored by seal OUTLET temperature (limit 190°F), not seal inlet temperature.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.LOOP-0001 (R34) | LO: NOS05ABLOP1-09, Obj 2 | Source: Bank - Salem | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

---

*Questions 11-75 and SRO-Only Questions 76-100 to be continued.*
