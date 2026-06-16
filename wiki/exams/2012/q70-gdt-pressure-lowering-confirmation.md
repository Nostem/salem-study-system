---
title: "2012 Q70 — Gas Decay Tank Pressure Lowering Confirmation"
category: exams
status: draft
aliases:
  - 2012 Q70
  - 2012-Q70
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q70 — Gas Decay Tank Pressure Lowering Confirmation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">194001G244 / 2.2.44 (RO 4.2 / SRO 4.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
The Unit 2 control room receives a call from the Rad Waste Operator, who states that an isolated Gas Decay Tank in hold-up has lowered in pressure from 90 psig to 40 psig over the last 2 hours, and continues to lower slowly.<br><br>
Which of the following would provide confirmation that tank pressure has lowered (vs instrument failure), and why is confirmation important?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Display the 2R41D trend reading on 2RP1. An unapproved release may be in progress.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Display the 2R41D trend reading on 2RP1. An unmonitored release may be in progress.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Direct Rad Pro to locally retrieve trend data for the Area Monitor closest to the GDT area. An unapproved release may be in progress.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Direct Rad Pro to locally retrieve trend data for the Area Monitor closest to the GDT area. An unmonitored release may be in progress.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> 55.41.b(11) R41 (plant vent) monitors in control room have trend function which can display historical data. If a release is in progress it's being monitored, but is unapproved. Area Monitors do not have trend functions locally, but some of them are trended on P-250 computer (R4 and R34) in control room.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because if a release through the plant vent is in progress it IS being monitored (by R41), so the release would be unapproved rather than unmonitored, per the addressing in the correct answer.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because Area Monitors do not have trend functions locally; the R41 plant vent monitor trend in the control room provides the confirmation, per the addressing in the correct answer.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because Area Monitors do not have trend functions locally, and a release through the plant vent is monitored (unapproved, not unmonitored), per the addressing in the correct answer.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-SO.RM-0001 (Rev 37) Radiation Monitoring System Operation | LO: RMS000E007 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Radiation Monitoring]]
- Related procedures: [[S2.OP-SO.RM-0001 — Radiation Monitoring System Operation]]
- Related exam: [[2012 NRC Written Exam]]
