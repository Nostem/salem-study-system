---
title: "2023 Q34 — MPC Fails Low / PZR Pressure Response"
category: exams
status: draft
reference: no
aliases:
  - 2023 Q34
  - 2023-Q34
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q34 — MPC Fails Low / PZR Pressure Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">010 K4.03 (3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 2 is at 100% power<br>
• Master Pressure Controller (MPC) is in AUTO<br>
• PZR Pressure Channel I is selected for Control<br>
• PZR Pressure Channel IV is selected for Alarm<br>
Then:<br>
• A malfunction with the MPC causes the output demand to fail LOW (0%)<br><br>
Which of the following identifies the effect on RCS pressure and the expected system response, assuming no operator action?<br><br>
RCS pressure will...
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> RCS pressure lowers; no backup heaters energize.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> RCS pressure lowers; both backup heater groups energize.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> RCS pressure rises; no PORVs open.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> RCS pressure rises; BOTH PORVs will open.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> MPC fails low (0%): spray valves close (MPC controls spray), both backup heater groups energize (0% demand energizes backup heaters). RCS pressure rises with heaters on and no spray. PZR sprays will not open since MPC controls them and MPC output is at 0%. PORVs open when pressure exceeds 2335 psig — PORVs are interlocked directly from PZR pressure channels, NOT from MPC. Both PORVs will open.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. MPC output at 0% energizes backup heaters (not de-energizes them) and closes spray valves. With heaters on and no spray, pressure rises, not lowers.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. Both backup heater groups do energize (correct part), but the result is pressure rising, not lowering. With heaters on and spray valves closed, RCS pressure increases.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. Pressure does rise (correct part), but PORVs WILL open. PORVs are NOT controlled by MPC; they are interlocked directly from PZR pressure channels and open independently when pressure exceeds 2335 psig.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05PZRPL-12, S2.OP-AB.PZR-0001 (R20) | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[RPS/SSPS]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]]
- Related exam: [[2023 NRC Written Exam]]
