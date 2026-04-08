---
title: "2023 Q37 — LOCA + LOOP After SI/SEC Reset / EDG and Safeguards Response"
category: exams
status: draft
aliases:
  - 2023 Q37
  - 2023-Q37
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q37 — LOCA + LOOP After SI/SEC Reset / EDG and Safeguards Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">013 A1.14 (3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 1 LOCA in progress<br>
• Crew is in EOP-LOCA-1<br>
• SI has been reset, SECs have been reset<br>
• All EDGs have been stopped from the Control Room<br>
• A LOOP then occurs<br><br>
What is the EDG and safeguards load response?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> EDGs must be manually started; some safeguard loads must be manually started.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> EDGs must be manually started; SECs sequence all safeguard loads.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> EDGs auto-start; SECs sequence all safeguard loads.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> EDGs auto-start; some safeguard loads must be manually started.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> After SI and SEC reset, a subsequent LOOP causes EDGs to auto-start on blackout signal (SEC Mode 2). SECs sequence for blackout only — only charging pumps are auto-started by the SEC in Mode 2. Other safeguard loads (SI pumps, RHR pumps, CFCUs) must be manually started since SI and SECs were reset prior to the LOOP.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. EDGs auto-start on the blackout signal regardless of whether they were previously stopped or SI/SECs were reset. The auto-start on loss of voltage is an independent function.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. EDGs auto-start on blackout (not manual start required). SECs sequence for Mode 2 (blackout only) since SI was previously reset — only charging pumps are auto-started, not all safeguard loads.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. EDGs do auto-start, but SECs do NOT sequence all safeguard loads. With SI previously reset, the SECs operate in Mode 2 (blackout only), which only auto-starts charging pumps. SI pumps, RHR pumps, and CFCUs require manual start.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05SEC000-09 | Source: Bank - Comanche Peak 2020 RO20 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Diesel Generators]], [[Emergency Core Cooling Systems]], [[Electrical Power Systems]]
- Related procedures: [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]]
- Related exam: [[2023 NRC Written Exam]]
