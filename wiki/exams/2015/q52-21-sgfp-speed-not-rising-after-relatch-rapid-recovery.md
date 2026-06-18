---
title: "2015 Q52 — Why 21 SGFP Speed Does Not Rise to Minimum After Relatching (Rapid SGFP Recovery)"
category: exams
status: draft
reference: no
aliases:
  - 2015 Q52
  - 2015-Q52
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q52 — Why 21 SGFP Speed Does Not Rise to Minimum After Relatching (Rapid SGFP Recovery)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">059 A1.07 (RO 3.4 / SRO 3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br>
&bull; Unit 2 has experienced a loss of all feedwater flow initiated by a Feedwater Isolation signal (P-14) condition on 23 SG.<br>
&bull; To mitigate the event after the P-14 has cleared an NCO has been directed to start 21 SGFP in accordance with S2.OP-SO.CN-0007, Rapid SGFP Recovery.<br>
&bull; The NCO successfully relatches the 21 SGFP but the speed of the pump does not rise automatically to minimum speed as he anticipated.<br><br>
Which of the following is the cause of this response?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> The P-14 signal "seal-in" feature.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 21 SGFP PUMP SPEED CONTROL is in AUTO.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 21 SGFP ENABLE/DISABLE switch is in the DISABLE position.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 21 SGFP speed was &gt;160 rpm when the latch push button was depressed.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> <em>(10 CFR 55.41.b(4,10))</em> D is correct because the SGFP may be latched with speed &lt;160 rpm, but it will not automatcally raise speed to minimum (1100 rpm idle speed).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect because the P-14 signal automatically clears when the SG level lowers &lt;setpoint, there is no seal in circuit.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because auto speed control prevents latching of the SGFP.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because the Enable/Disable switch in the disable position only removes the ADFWCS from controlling SGFP speed, the switch is placed in Disable when starting the SGFP.</div>
<div style="margin-top:6px;padding:8px 12px;border-left:3px solid #1a2035;border-radius:0 4px 4px 0;color:#9ca3af;font-size:11px;"><strong>K/A statement:</strong> Ability to predict and/or monitor changes in parameters associated with operating the Main Feedwater System controls including: Feed Pump speed, including normal control speed for ICS.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: SGFP Prompt Recovery (S2.OP-SO.CN-0007, p.6, Rev 4) | LO: SGFPLOE006 | Source: Bank – Facility Exam Bank (Editorially Modified, comment 44112) | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Feed & Condensate]], [[RPS/SSPS]]
- Related procedures: [[S2.OP-SO.CN-0007 — SGFP Prompt Recovery]]
- Related exam: [[2015 NRC Written Exam]]
