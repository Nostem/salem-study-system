---
title: "2023 Q5 — PZR Pressure Channel Fails High / OT Delta-T Effect"
category: exams
status: draft
aliases:
  - 2023 Q5
  - 2023-Q5
---


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

## Connections

- Related systems: [[Pressurizer]], [[Instrumentation and Controls]]
- Related exam: [[2023 NRC Written Exam]]
