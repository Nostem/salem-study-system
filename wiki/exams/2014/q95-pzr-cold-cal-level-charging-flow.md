---
title: "2014 Q95 — PZR Cold Calibrated Level and Charging Flow During Cooldown"
category: exams
status: draft
aliases:
  - 2014 Q95
  - 2014-Q95
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q95 — PZR Cold Calibrated Level and Charging Flow During Cooldown</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">194001 G2.1.25 (RO 3.9 / SRO 4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is performing a cooldown IAW S2.OP-IO.ZZ-0006, Hot Standby to Cold Shutdown.<br>
- Mode 5 has just been entered.<br>
- PZR temperature is 400° F.<br>
- The board NCO reports that PZR hot calibrated level on all 3 channels indicates 95% and is stable.<br><br>
Which of the following identifies what the Cold Calibrated channel will be reading, and how charging flow should operated?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 57%. Raise charging flow.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 57%. Lower charging flow.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 81%. Raise charging flow.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 81%. Lower charging flow.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> Using Exhibit 1 of IOP-6, page 2, shows that with hot cal level at 95% at 400 deg., the ACTUAL level in PZR is ~66%. Using Page 1 and the ACTUAL PZR level of 66% and going across to the 400 deg line, cold cal level will be ~56-57%. After the cooldown rate has been reduced as per stem, IOP-6 has operators raise charging flow to establish 80% cold cal level. Prior to the 80% requirement, the procedure requires 25-53% (5.1.5 and 5.1.16).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> The 57% cold cal level is correct, but the charging flow direction is wrong — after the cooldown rate has been reduced, IOP-6 has operators RAISE charging flow to establish 80% cold cal level, not lower it.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The 81% cold cal level is incorrect — Exhibit 1 of IOP-6 yields ~56-57% cold cal level from a 95% hot cal level (66% actual) at 400°F. (Charging flow is correctly raised.)</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Both elements are incorrect — the cold cal level is ~56-57% (not 81%), and after the cooldown rate has been reduced IOP-6 has operators RAISE charging flow to establish 80% cold cal level, not lower it.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-IO.ZZ-0006, Hot Standby to Cold Shutdown (Rev 44), Exhibit 1 | LO: IOP006E009, PZRP&amp;LE008 | Source: Facility Exam Bank — Significantly Modified (08-01 NRC SRO) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]]
- Related procedures: [[S2.OP-IO.ZZ-0006 — Hot Standby to Cold Shutdown]]
- Related exam: [[2014 NRC Written Exam]]
