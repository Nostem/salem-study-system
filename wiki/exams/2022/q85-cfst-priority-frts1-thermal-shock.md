---
title: "2022 Q85 — CFST Priority / FRTS-1 Thermal Shock"
category: exams
status: draft
reference: no
aliases:
  - 2022 Q85
  - 2022-Q85
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q85 — CFST Priority / FRTS-1 Thermal Shock</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">W E08 G2.4.21 (4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 experienced a reactor trip and safety injection due to a steam line break downstream of the Main Steam Line Isolation Valves (MSIVs).<br>
• ALL MSIVs failed to close.<br>
• The crew is performing SI Termination steps per <span class="val-trip">2-EOP-LOSC-2</span>, Uncontrolled Depressurization of All Steam Generators.<br>
• Field operator reports that 23MS167 is now closed.<br><br>
Subsequently, the STA observes the following;<br>
• AFW flow to each SG is 1E+4 lbm/hr.<br>
• All SG NR Levels are off-scale low.<br>
• 21, 22, and 24 SG Pressures are 100 psig.<br>
• 23 SG Pressure is 200 psig and rising.<br>
• RCS Pressure is 1100 psig.<br>
• ALL RCS T-Colds temperatures are &lt; 230 &deg;F.<br>
• Intermediate Range SUR is +0.1 DPM.<br><br>
Which ONE of the following describes the NEXT CRS action?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Return to 2-EOP-LOSC-1, Faulted Steam Generator Isolation.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Transition to 2-EOP-FRSM-1, Response to Nuclear Generation.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Transition to 2-EOP-FRHS-5, Response to Steam Generator Low Level.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Transition to 2-EOP-FRTS-1, Response to Thermal Shock.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; D. Correct.</strong> A RED Path in the Thermal Shock Status Tree exists due to all RCS T-Cold cooldown rates not less than 100 &deg;F in the last 60 minutes and all RCS pressure/temperature points are not to the right of Limit A in Figure 4A (T-Colds less than 230 &deg;F and RCS pressure at 1100 psig).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Incorrect. Plausible because this is a required transition when a faulted SG is recovered. With 23 SG isolated and pressure rising, the CRS will not return to 2-EOP-LOSC-1 because SI Termination is in progress.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Incorrect. Plausible because the SRO may believe this is the higher RED path. SUR of +0.1 DPM is a PURPLE Path in the Shutdown Margin Status Tree, which is not higher than a RED Path in Thermal Shock Status Tree.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> Incorrect. Plausible because the low level in the SGs are valid but not the highest priority. Low SG levels is a YELLOW Path in the Heat Sink Status Tree and therefore not a priority.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 2-EOP-CFST-1 (R41) | LO: NOS05FRTS00-03, Objective 1 | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Main Steam]], [[AFW]], [[RCS]], [[Excore NIs]]
- Related EOPs: [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]], [[EOP-LOSC-1 — Loss of Secondary Coolant]], [[EOP-FRSM-1 — Response to Nuclear Power Generation]]
- Related exam: [[2022 NRC Written Exam]]
