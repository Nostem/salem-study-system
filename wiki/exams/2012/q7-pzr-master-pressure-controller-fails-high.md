---
title: "2012 Q7 — PZR Master Pressure Controller Fails High Effect"
category: exams
status: draft
aliases:
  - 2012 Q7
  - 2012-Q7
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q7 — PZR Master Pressure Controller Fails High Effect</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">027 AA1.01 (RO 3.8 / SRO 3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Salem Unit 1 is operating at 100% power when the PZR Master Pressure Controller demand fails high.<br><br>
How will this failure affect PZR pressure control components in AUTO?<br><br>
PZR B/U heaters will be ______. BOTH PZR PORV's will be ______.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> on. open.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> on. shut.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> off. open.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> off. shut.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> Master Pressure controller scale runs from 0-100% demand. With MPC demand failing high, the output of the MPC calls for maximum spray, and no backup heaters. The PZR PORVs are controlled independently of the MPC demand from actual PZR pressure channels 1-4. Since actual PZR pressure is not high, PORVs have no open demand signal. Therefore B/U heaters will be off and BOTH PORVs will be shut.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. A high MPC demand calls for no backup heaters (B/U heaters off, not on), and the PORVs respond to actual PZR pressure (channels 1-4), which is not high, so they remain shut (not open).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. The PORVs are shut (correct), but a high MPC demand turns the backup heaters OFF, not on.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. B/U heaters off is correct, but the PORVs are controlled from actual PZR pressure (channels 1-4), not the MPC demand; with actual pressure not high they remain shut, not open.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Pressurizer Pressure and Level Control (221060, Rev 7); Pressurizer Power Relief Valves (231357, Rev 14) | LO: ABPZR1E001 | Source: Facility Exam Bank — Significantly Modified | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]], [[Pressurizer & PRT]]
- Related exam: [[2012 NRC Written Exam]]
