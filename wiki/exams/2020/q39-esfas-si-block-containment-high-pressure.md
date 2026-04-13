---
title: "2020 Q39 — ESFAS SI Block / Containment High Pressure"
category: exams
status: draft
aliases:
  - 2020 Q39
  - 2020-Q39
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q39 — ESFAS SI Block / Containment High Pressure</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">013000K4.12 (3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 is in MODE 3.<br>
• The crew is implementing S2.OP-IO.ZZ-0006, Hot Standby to Cold Shutdown.<br>
• The crew has commenced a cooldown and depressurization to Cold Shutdown to comply with a Technical Specification action requirement.<br>
• RCS Temperature is 535°F<br>
• RCS Pressure is 1890 psig<br>
• All actions for current plant conditions have been completed in accordance with S2.OP-IO.ZZ-0006.<br>
<br>
Multiple failures have just occurred resulting in rapid depressurization of ALL Steam Generators (SGs) INSIDE containment causing a Safety Injection actuation.<br>
<br>
Which of the following ESFAS initiation signals and logic caused the Safety Injection actuation to occur?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Containment High Pressure - 2/3 Containment Pressure Channels</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Pressurizer Pressure Low - 2/3 Pressurizer Pressure Channels</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Pressurizer Pressure Low – 2/4 Pressurizer Pressure Channels</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Containment High Pressure – 2/4 Containment Pressure Channels</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> Although the High Steam Flow SI and the Low PZR Pressure SI have been blocked IAW IOP-6, the Containment High Pressure SI at 4 psig is not blocked and an Automatic Safety Injection will occur (4 S/Gs blowing down inside containment).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Plausible because the Low Pressurizer Pressure SI signal / logic is 2/3 channels less than 1765 psig and PZR pressure will lower to less than 1765 psig from the SGs blowing down in containment. Incorrect because both the High Steam Flow SI and the Low PZR Pressure SI have been blocked IAW IOP-6. Low Pressurizer PZR Pressure SI is blocked at &lt; 1915 psig (P-11).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Plausible because the Low Pressurizer Pressure Reactor Trip is 2/4 channel logic and the candidate may confuse that logic for the SI signal/logic. Incorrect because both the High Steam Flow SI and the Low PZR Pressure SI have been blocked IAW IOP-6. Low Pressurizer PZR Pressure SI is blocked at &lt; 1915 psig (P-11).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Plausible because the High-High Containment Pressure (Phase B / Containment Spray) signal logic is 2/4 channels. Incorrect as the Containment High Pressure SI signal /logic is 2/3 channels.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-IO.ZZ-0006, Hot Standby to Cold Shutdown | LO: NOS05ESF000-02, Introduction to Engineering Safety Features and Design Criteria, ELO 21 | Source: New | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Containment]]
- Related procedures: [[S2.OP-IO.ZZ-0006 — Hot Standby to Cold Shutdown]]
- Related exam: [[2020 NRC Written Exam]]
