---
title: "2016 Q90 — Loss of Control Air at 7% Power — Feed Flow Response"
category: exams
status: verified
reference: no
aliases:
  - 2016 Q90
  - 2016-Q90

---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q90 — Loss of Control Air at 7% Power — Feed Flow Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">061000A207 A2.07 (3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 7% power during a normal power ascension.<br>
- A total loss of Control Air occurs on Unit 2 causing control air header to rapidly lower.<br>
- The CRS enters S2.OP-AB.CA-0001, Loss of Control Air, and operators manually trip the reactor.<br><br>
Prior to any operator action being performed other than TRIP-1 immediate actions, how is feed flow to the SGs affected by the loss of control air, and how is the CRS required to respond?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> MDAFW pumps previously in service will cease to supply feed to the SGs as the 21-2AF21's fail closed. Dispatch operators to locally manually open 21-24AF21s to establish 22E4 lbm/hr total AFW flow.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> MDAFW pumps previously in service continue to supply all SGs, but now at runout flow with 21-24AF21s failed open. Dispatch operators to locally manually throttle 21-24AF21s to prevent MDAFW pump failure.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> The feed flow being supplied to SGs from the SGFP in service was lost when the Feedwater Interlock actuated with the reactor tripped and Tavg low setpoint reached. Direct the PO to start 23 AFW pump since Pressure Override circuit will prevent using 21 or 22 AFW pumps as feed supply.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> The feed flow being supplied to SGs from the SGFP in service was lost when the Feedwater Interlock actuated with the reactor tripped and Tavg low setpoint reached. Direct a Field Operator to establish manual control of 23 AFW pump which started when 2MS132 opened to prevent 23 AFW pump runout and SG overfill.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> 55.43(b)5 This question is SRO level based on the requirement to know what section of a procedure to use in AB.CA. At 7% power, Main Feed will already have been established and AFW secured. The rapid loss of CA, and the trip in AB.CA (which would have been directed when the BF19s/40s failed SHUT on loss of CA) indicate that feed flow from the operating SGFP was lost. The 2MS132 would have opened on the loss of CA (fail open valve) to start 23 AFW pump, which would be operating at max speed. The AB directs an operator to locally establish speed control for the reasons given in the correct answer. The distracters containing MDAFW pump initial flow are incorrect but plausible if the operator doesn't not know at what power the IOP directs swapping AFW to Main Feed. Choice a has wrong failure mode, but correct action if that were the correct failure mode. Choice b has correct failure mode and action. Choice c has correct status of feed flow, but wrong action.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Choice a has wrong failure mode, but correct action if that were the correct failure mode.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Choice b has correct failure mode and action. (Distracter is plausible if operator doesn't know at what power the IOP directs swapping AFW to Main Feed.)</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Choice c has correct status of feed flow, but wrong action.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Loss of Control Air, S2.OP-AB.CA-0001 Rev 21; Auxiliary Feedwater System Lesson Plan, NOS05AFW000-15 Rev 15 | LO: AFW000E006, ABCA01E002 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[AFW]], [[Control Air]], [[Main Steam]], [[Feed & Condensate]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related procedures: [[AB.CA-0001 — Loss of Control Air]]
- Related exam: [[2016 NRC Written Exam]]
