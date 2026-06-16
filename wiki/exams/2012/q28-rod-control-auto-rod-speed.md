---
title: "2012 Q28 — Initial AUTO Rod Speed at 4.0°F Tave-Tref Deviation"
category: exams
status: draft
aliases:
  - 2012 Q28
  - 2012-Q28
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q28 — Initial AUTO Rod Speed at 4.0°F Tave-Tref Deviation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">001000A101 / A1.01 (RO 3.8 / SRO 4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 70% power and stable after a load reduction was completed 10 minutes ago.<br>
- Rod Control is in MANUAL control.<br>
- The highest actual Tave-Tref deviation is 4.0°F.<br><br>
Which choice identifies the rod speed that would be present initially if the Rod Control Selector Switch were placed in AUTO?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 24 spm.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 40 spm.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 48 spm.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 56 spm.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> 55.41.b(6,7) Rod speed is determined in AUTO by Auct High Tavg vs. Tref (PT-505, Turbine steamline Inlet Pressure). The AUTO rod speed program is 8 spm from 1.5-3.0°F deviation. From 3.0-5.0 it ramps up linearly from 8 spm to 72 spm. This correlates to 16 spm per 1/2°F temp change. 8 spm (@3.0) + 32 spm (from 3.0 to 4.0)= 40 spm.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> 24 spm is incorrect per the combined explanation — the AUTO rod speed program yields 40 spm at a 4.0°F deviation.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The 48 spm distracter is based on normal manual rod control speed.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The 56 spm distracter is based upon using an incorrect linear ramp from 1.5 - 5.0 degrees was used. The Power mismatch circuit in rod control will have cycled through over 5 time constants and its effect on rod speed will be zero ten minutes after the load reduction has been stopped.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Rod Control System Lesson Plan NOS05RODS00-11 (Rev 11), Section AV2619G.ACAD.S9-1 (p. TP-14) | LO: RODS00E012 | Source: Facility Exam Bank (Direct From Source) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]]
- Related procedures: [[S1.OP-SO.RCS-0001 — Rod Control System Operation]]
- Related exam: [[2012 NRC Written Exam]]
