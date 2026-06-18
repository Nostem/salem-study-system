---
title: "2012 Q17 — Abnormal Grid Rapid Load Reduction Method"
category: exams
status: draft
aliases:
  - 2012 Q17
  - 2012-Q17
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q17 — Abnormal Grid Rapid Load Reduction Method</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">077 AA1.02 (RO 3.6 / SRO 3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 100% power when the operators receive several alarms related to the 500KV grid.<br>
- The Electric System Operator calls Unit 2 and directs them to perform a rapid load reduction to 875 MW due to grid instability issues.<br><br>
Which of the following describes how the load reduction will be performed IAW S2.OP-AB.GRID-0001, Abnormal Grid?<br><br>
At the EHC Console the PO will depress...
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> the GO pushbutton, and ensure the runback automatically stops at ~66% turbine power.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> SMD #2 RUNBACK and GO PBs, then depress HOLD when Man Generator load lowers &lt; 875 MW.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> SMD #2 RUNBACK and GO PBs, and ensure the load reduction stops automatically at ~66% turbine power.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> EITHER the GO pushbutton OR SMD #2 RUNBACK and GO PBs, then depress HOLD when Main Generator load lowers &lt; 875 MW.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> AB.GRID directs the load reduction directed by the ESO due to grid instability be performed IAW Att 4, which says to push SMD #2 if the required end point is &gt;765MW AND &lt;942 MW. It says to press HOLD when the MW value is less than or equal to that directed by the ESO.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A / C / D (worksheet provides a single combined explanation).</strong> While depressing the GO PB would work, the procedure says to do it a certain way to ensure consistency amongst the crews (Note on Att 4), so it would be wrong. The MT is normally set up to do a 15% per minute runback to 66% turbine load (~810 Mwe), so while it would get load about where it is supposed to, the procedure doesn't allow you to do it that way. Candidate needs to know how to initiate load reduction, and how it is directed to be stopped.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.GRID-0001 (Rev 17) | LO: ABGRIDE003 | Source: Facility Exam Bank — Editorially Modified | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[500KV]], [[Main Turbine]]
- Related procedures: [[AB.GRID-0001 — Grid Disturbance]]
- Related exam: [[2012 NRC Written Exam]]
