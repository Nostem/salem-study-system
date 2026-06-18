---
title: "2012 Q69 — 2CV35 Troubleshooting First Crew Action"
category: exams
status: draft
aliases:
  - 2012 Q69
  - 2012-Q69
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q69 — 2CV35 Troubleshooting First Crew Action</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">G2.2.20 (RO 2.6 / SRO 3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 100% power.<br>
- Excess Letdown is in service due to a problem with the control circuit for 2CV35, VCT 3 WAY INLET V.<br>
- I&amp;C troubleshooting is in progress on 2CV35.<br>
- The RO reports that 2CV35 has just swapped to the Flow to HUT position.<br>
- The RO also reports that during the pre-job brief for the 2CV35 troubleshooting, it was stated that 2CV35 actual position would NOT be affected during the troubleshooting.<br><br>
Which of the following identifies the FIRST action the crew should take?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Enter S2.OP-AB.CVC-0001, Loss of Charging to address the unanticipated CVCS system lineup.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Contact the WCC to initiate a tagout for 2CV35 since the troubleshooting needs to have the valve deactivated.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Contact the I&amp;C Supervisor and stop work on 2CV35 based on being outside of Procedures, Parameters or Processes (OOPS) IAW HU-AA-101, Human Error Prevention.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Have the RO place 2CV35 in the Auto position to maintain status control since the Component Off Normal and Off Normal Tagged report does not reflect the valves current position.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> 55.41.b(10) Excess letdown does not flow through 2CV35, so its movement will not affect RCS letdown, and AB.CVC-1 will not address the valve movement. While a tagout may need to be initiated, it would not happen without stopping the job in progress and finding out in more detail from I&amp;C how the valve could be affected and what the blocking points needed to be. OOPS requires stopping the job because they system realignment was stated to NOT going to occur during troubleshooting. Status control does not require movement of components just to align with the Off Normal, the Off Normal position would be updated in SAP.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect because excess letdown does not flow through 2CV35, so its movement will not affect RCS letdown and AB.CVC-1 will not address the valve movement, per the addressing in the correct answer.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because, while a tagout may need to be initiated, it would not happen without first stopping the job in progress and finding out in more detail from I&amp;C how the valve could be affected and what the blocking points needed to be, per the addressing in the correct answer.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because status control does not require movement of components just to align with the Off Normal; the Off Normal position would be updated in SAP, per the addressing in the correct answer.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Human Performance Tools and Verification HU-AA-101 (Rev 8) | LO: MISCAP007 | Source: Facility Exam Bank (Direct From Source, Vision Q125707) | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]]
- Related procedures: [[HU-AA-101 — Human Performance Tools and Verification Practices]], [[AB.CVC-0001 — Loss of Charging]]
- Related exam: [[2012 NRC Written Exam]]
