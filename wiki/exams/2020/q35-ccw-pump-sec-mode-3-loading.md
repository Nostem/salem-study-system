---
title: "2020 Q35 — CCW Pump Status After SEC Mode 3 Loading"
category: exams
status: draft
reference: no
aliases:
  - 2020 Q35
  - 2020-Q35
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q35 — CCW Pump Status After SEC Mode 3 Loading</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">008000K4.09 (2.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
&bull; Unit 2 is at 100% power.<br>
&bull; 21 and 22 CCW Pumps are running.<br>
&bull; 23 CCW Pump is in AUTO.<br><br>
Subsequently;<br><br>
&bull; The Unit experiences a valid Safety Injection actuation coincident with a Loss of Off-Site Power.<br><br>
Which of the following describes the status of the CCW Pumps following successful SEC loading?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> All CCW pumps are running, all CCW pumps are in Manual.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> All CCW pumps are stopped, 23 CCW pump remains in AUTO.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> All CCW pumps are stopped, all CCW pumps are in Manual.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> All CCW pumps are running, 23 CCW pump remains in AUTO.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; C. Correct.</strong> During a MODE III (Blackout + Safety Injection) SEC loading, CCW pumps are stripped and not restarted. CCW pumps are not loaded in MODE III loading. In MODE III, if a pump was selected for AUTO, it is transferred to Manual.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Incorrect. Plausible because the candidate may confuse the MODE III SEC loading sequence with that of the MODE II loading sequence. Plausible because this would be correct for MODE II (Blackout), but incorrect as CCW pumps are not loaded in a MODE III (Blackout + Safety Injection). The second part is correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Incorrect. Plausible because the first part is correct, CCW pumps are not loaded during a Blackout + Safety Injection condition. The second part is plausible as this would be the case for a MODE I (Safety Injection) loading. Incorrect as MODES II, III, and VI cause a pump selected to AUTO to shift to Manual.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Incorrect. Plausible because the candidate may confuse the MODE III SEC loading sequence with that of the MODE II loading sequence. Plausible because this would be correct for MODE II (Blackout), but incorrect as CCW pumps are not loaded in a MODE III (Blackout + Safety Injection). The second part is plausible as this would be the case for a MODE I (Safety Injection) loading. Incorrect as MODES II, III, and VI cause a pump selected to AUTO to shift to Manual.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AR.ZZ-0011(Q), Component Cooling Water System Bezel 1-19 ARP. NOS05CCW000-11 | LO: NOS05CCW000-11, ELO 9 | Source: Bank, Salem ILT 16-01 NRC Exam, Q7 | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CCW]], [[SECs]], [[EDGs]]
- Related procedures: [[S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)]]
- Related exam: [[2020 NRC Written Exam]]
