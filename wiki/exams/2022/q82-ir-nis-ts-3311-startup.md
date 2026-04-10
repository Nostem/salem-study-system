---
title: "2022 Q82 — IR NIS TS 3.3.1.1 During Startup"
category: exams
status: draft
aliases:
  - 2022 Q82
  - 2022-Q82
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q82 — IR NIS TS 3.3.1.1 During Startup</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE 33 AA2.08 (3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 is performing a reactor startup per S2.OP-IO.ZZ-0003, Hot Standby to Minimum Load.<br>
• Reactor power is 1E-4%.<br><br>
Subsequently, the following sequence of events occur;<br>
• OHA E-6, LOSS OF IR, is LIT.<br>
• 2N35, Intermediate Range (IR) NIS Channel, indicates zero on 2CC2.<br><br>
In accordance with Technical Specifications LCO 3.3.1.1, Reactor Trip System Instrumentation, which ONE of the following identifies the required action, if any?<br><br>
[REFERENCE PROVIDED]<br><br>
Note: RTP &ndash; Reactor Thermal Power
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Immediately suspend the reactor startup and insert all control rods.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Reduce RTP below P-6 OR raise RTP above P-10 within a maximum of 24 hours.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Reduce RTP below P-6 within a maximum of 2 hours.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> No action is required since RTP is below P-6.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; B. Correct.</strong> IAW Tech Specs 3.3.1.1 Functional Unit 5, Action 3, with only one IR NIS channel operable and Rx power above P-6 (1E-5% RTP per S2.OP-IO.ZZ-0003), then RTP will need to be reduced to below P-6 OR raise RTP above P-10 within 24 hours.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Incorrect. Plausible because the SRO may believe this is the conservative action but not required by Tech Specs. Two IR channels inoperable will require the immediate suspension of adding positive reactivity and reducing RTP below P-6 within 2 hours.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> Incorrect. Plausible because the SRO may incorrectly apply the TS action. This action is required for two inoperable IR channels.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Incorrect. Plausible because the SRO may incorrectly apply the TS action. This LCO is not applicable when RTP is below P-6. However, reactor power at 1E-4% is above P-6 (1E-5%).</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Tech Specs 3.3.1.1 Action 3 | LO: NOS05ABNIS, Objective 1 | Source: Bank &ndash; Salem | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
- Related procedures: [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]]
- Related exam: [[2022 NRC Written Exam]]
