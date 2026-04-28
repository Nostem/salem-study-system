---
title: "2018 Q55 — PZR Pressure Channel Fails High / PORV Logic"
category: exams
status: draft
reference: no
aliases:
  - 2018 Q55
  - 2018-Q55
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q55 — PZR Pressure Channel Fails High / PORV Logic</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">027 PZR PCS Malfunction-AK2.03 (2.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
&bull; Unit 2 is at 50% Reactor Power and stable<br>
&bull; PT-455 (Channel I PZR Pressure) is the controlling PZR Pressure channel<br><br>
At time 22:00:00<br>
&bull; PT-455 (Channel I PZR Pressure) fails high<br><br>
Which ONE of the following completes the statements below?<br><br>
At 22:00:05, ___ is/are open.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> BOTH Power Relief Valves (2PR1 and 2PR2)</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> NO Power Relief Valves (2PR1 and 2PR2)</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> ONLY 2PR1</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> ONLY 2PR2</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> 2PR1 and 2PR2 require 2 channels (PT-455/PT-457 or PT-456/PT-474) to read greater than 2335 psig for the PORV to open. Consequently, at 22:00:05 with ONLY PT-455 reading greater than 2335 psig (due to PT-455 failing high), NO Power Relief Valves (2PR1 and 2PR2) are open.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect but plausible. The candidate could incorrectly conclude the PORVs open based on the master pressure controller. Consequently, when the controlling pressure channel fails (PT-455), the candidate would then incorrectly conclude that BOTH PORVs are open at 22:00:05.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect but plausible. The candidate could correctly realize that operation of the PORVs is dependent on specific PZR Pressure Transmitters. However, the candidate could then incorrectly understand how the PORV open logic works and/or which pressure transmitters operate each specific PORV. This would cause the candidate to incorrectly conclude that ONLY 2PR1 or ONLY 2PR2 is open at 22:00:05.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect but plausible. The candidate could correctly realize that operation of the PORVs is dependent on specific PZR Pressure Transmitters. However, the candidate could then incorrectly understand how the PORV open logic works and/or which pressure transmitters operate each specific PORV. This would cause the candidate to incorrectly conclude that ONLY 2PR1 or ONLY 2PR2 is open at 22:00:05.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05PZRP&L-10 (Pressurizer Pressure and Level Control), Drawing 231357 (Units 1 & 2 Pressurizer 1PR1, 2PR1, 1PR2, 2PR2 Press. Power) | LO: NOS05PZRP&L-10 | Source: New | Cognitive: Higher</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]]
- Related exam: [[2018 NRC Written Exam]]
