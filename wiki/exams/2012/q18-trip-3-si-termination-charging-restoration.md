---
title: "2012 Q18 — TRIP-3 SI Termination Charging Action"
category: exams
status: draft
aliases:
  - 2012 Q18
  - 2012-Q18
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q18 — TRIP-3 SI Termination Charging Action</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">WE02 EK2.01 (RO 3.4 / SRO 3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following:<br><br>
- Unit 1 experienced a Rx trip and Safety Injection from full power due to a RCS leak.<br>
- The control room crew is currently performing 1-EOP-TRIP-3, Safety Injection Termination.<br>
- 11 Charging pump is in service and 12 Charging pump has been secured.<br>
- Charging pump flow through the BIT has been isolated and 1CV68 and 1CV69, Charging Discharge Valves, have been opened.<br>
- The RO fully opens 1CV55, Charging Flow Control Valve, and reports current PZR level is 45% and lowering slowly.<br><br>
Which of the following describes the action the control room crew should take IAW 1-EOP-TRIP-3?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Re-establish charging flow through the BIT and close 1CV68 and 1CV69.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Initiate Safety Injection and return to 1EOP-TRIP-1, Rx Trip or Safety Injection, Step 1.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Re-start 12 charging pump to establish PZR level stable or rising, and continue in TRIP-3.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Allow 5-10 minutes for system conditions to stabilize while monitoring PZR level.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> After stopping one of two centrifugal charging pumps at step 4, charging flow is re-directed from BIT to normal charging line. If this flowpath cannot maintain stable or rising PZR level, the operator will re-establish BIT flow and go to LOCA-2, Post LOCA Cooldown and depressurization since control of RCS inventory is greater than the capacity of normal charging. Step 7 has operators reestablish charging flow through the BIT and go to LOCA-2.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> There is no direction (nor reason) to initiate SI and go back to TRIP-1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because TRIP-3 is not continued. 12 CVCS pump MIGHT be started IAW CAS to start ECCS pumps as necessary since stem is non-specific about actual PZR level, but continuing in TRIP-3 is not true. The basis document specifically says not to re-start the idled CVCS pump, because that would restore subcooling/PZR level and you would end up back at the same step if you went to LOCA-1, then back to TRIP-3.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> There is no CAS action to allow plant conditions to stabilize; maximum charging flow should act on PZR level in seconds, not minutes to change level.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 1-EOP-TRIP-3 (Rev 25) | LO: TRP003E003, TRP003E005 | Source: New | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[Pressurizer & PRT]], [[ECCS]]
- Related procedures: [[EOP-TRIP-3 — SI Termination]], [[EOP-LOCA-2 — Post LOCA Cooldown and Depressurization]], [[EOP-TRIP-1]]
- Related exam: [[2012 NRC Written Exam]]
