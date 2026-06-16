---
title: "2012 Q19 — LOCA-2 Alarm Requiring Response"
category: exams
status: draft
aliases:
  - 2012 Q19
  - 2012-Q19
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q19 — LOCA-2 Alarm Requiring Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">00WE03K103 / EK1.3 (RO 3.5 / SRO 3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 was operating at 100% power when the RCS developed a SBLOCA.<br>
- 45 minutes after the trip, 2B 4KV vital bus locked out on bus differential.<br>
- Containment pressure is 2.4 psig and lowering very slowly.<br>
- Operators are now performing actions in 2-EOP-LOCA-2, Post LOCA Cooldown and Depressurization.<br><br>
Which of the following contains an alarm, which if received during performance of LOCA-2, would require the associated response?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> PZR Low Level alarm at 17%. Start ECCS pumps as necessary.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> RWST Lo Level console alarm at 15.2 feet. Transfer RCS to Cold Leg Recirculation.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> OHA A-6 RMS HI RAD OR TRBL associated with 2R53A, 21 MS Line Rad Monitor. Align SGBD to the Waste Header.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 21 SG Program Deviation Setpoint Actual console alarm at 28% NR level. Open 21AF21 SG Level Control Valve to raise level in 21 SG.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> RWST lo level at 15.2 indicates the need to transfer RCS cooling to cold leg recirculation, as identified by the CAS action in LOCA-2.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> The PZR low level alarm comes in at 5% below program, which would be ~22% with the low Tavg expected during a SBLOCA.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The R53s are N2 monitors in the Main Steam Lines, and after the Rx is shutdown do not provide indication of any use. The action to align SGBD is performed in SGTR-1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The SG program deviation setpoint is +/-5%, so the alarm would be valid. However, 22 AFW pump has no power, so opening the 21AF21 would have no effect.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 2-EOP-LOCA-2 (Rev 25) | LO: LOCA02E005 | Source: Facility Exam Bank — Editorially Modified | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]], [[Pressurizer & PRT]], [[Radiation Monitoring]], [[Main Steam]], [[AFW]], [[Steam Generator & Blowdown]]
- Related procedures: [[EOP-LOCA-2 — Post LOCA Cooldown and Depressurization]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]]
- Related exam: [[2012 NRC Written Exam]]
