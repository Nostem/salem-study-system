---
title: "2023 Q28 — CVCS Letdown HX Temp Detector Fails Low / Boron Release"
category: exams
status: draft
aliases:
  - 2023 Q28
  - 2023-Q28
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q28 — CVCS Letdown HX Temp Detector Fails Low / Boron Release</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">004 A3.06 (3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 2 is at 100% power<br>
• 2CC71, Letdown HX Temp Control Valve, is in Auto<br>
Then:<br>
• 2TE-130, temperature detector for 2CC71, fails LOW<br><br>
Which of the following describes the impact of this failure?<br><br>
1. Letdown temperature will <span class="blank">(1)</span> and the RCS T-avg temperature will <span class="blank">(2)</span>.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Letdown temperature rises; RCS Tavg lowers.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Letdown temperature rises; RCS Tavg rises.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Letdown temperature lowers; RCS Tavg rises.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Letdown temperature lowers; RCS Tavg lowers.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> 2TE-130 fails low, causing the controller to see a low temperature signal. 2CC71 goes closed (reduces CCW cooling flow through the letdown HX). With less cooling, letdown HX outlet temperature rises. Hotter letdown water flowing through the mixed bed demineralizers causes boron release into the RCS (boration effect), which lowers Tavg.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. Letdown temperature does rise (correct part), but higher temperature through the demineralizers releases boron into the RCS, which is a boration effect. Boration inserts negative reactivity, lowering Tavg, not raising it.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. 2CC71 goes closed (not open) when 2TE-130 fails low, so letdown temperature rises, not lowers. With boron release from higher demineralizer temperatures, Tavg would lower, not rise.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. 2CC71 goes closed when the temperature detector fails low, so letdown temperature rises, not lowers. The Tavg direction (lowers) is correct due to boration from demineralizer boron release.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: INPO 191007 Demineralizers | Source: Bank - Salem | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Chemical and Volume Control System]]
- Related exam: [[2023 NRC Written Exam]]
