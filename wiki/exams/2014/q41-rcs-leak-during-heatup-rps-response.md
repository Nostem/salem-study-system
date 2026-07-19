---
title: "2014 Q41 — RCS Leak During Heatup RPS Response"
category: exams
status: draft
aliases:
  - 2014 Q41
  - 2014-Q41
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q41 — RCS Leak During Heatup RPS Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">G2.4.9 (RO 2.4 / SRO 4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 1 is returning from a refueling outage.<br>
- RCS heatup and pressurization is in progress IAW S1.OP-IO.ZZ-0002, Cold Shutdown to Hot Standby.<br>
- RCS pressure is 1850 psig.<br>
- RCS Tave is 510°F.<br>
- A 2,000 gpm RCS leak occurs in containment.<br><br>
Which of the following identifies how the Reactor Protection System will respond with NO operator action?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> An automatic Safety Injection will occur at 4 psig in containment.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> An automatic Safety Injection will occur when PZR pressure lowers to 1765 psig.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> NO automatic Safety Injection will occur because the RPS System Auto SI Block has not been Unblocked yet.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> NO automatic Safety Injection will occur because the 2 running centrifugal charging pumps will respond in auto to the lowering PZR level.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> (Note: The choices say Safety Injection "will occur" vs "signal generated" to preclude anyone from saying that the Lo PZR Pressure SI signal WILL occur, its just blocked.) During the unit return to service, the Auto SI Block (from ANY auto SI signal) is UNBLOCKED at step 5.2.21 of IOP-2. At that point, the unit is preparing to enter MODE 4, (&gt;200°-&lt;350°F.) The Lo PZR PRESSURE SI remains BLOCKED until after the RCS is pressurized &gt;1915 at step 5.3.23. So with 1850 psig in stem, it will still be blocked. The leak size (2,000 gpm) equates to a 6" pipe break, and will cause RCS pressure to lower to ~1100 psig if a full complement of ECCS equipment were available. This leak size will cause containment pressure to rise well in excess of 4 psig, which is where the AUTO SI will occur.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> The Lo PZR PRESSURE SI remains BLOCKED until after the RCS is pressurized &gt;1915 psig at step 5.3.23 of IOP-2. With RCS pressure at 1850 psig in the stem, it is still blocked — no automatic SI occurs when PZR pressure lowers to 1765 psig.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The Auto SI Block (from ANY auto SI signal) is UNBLOCKED at step 5.2.21 of IOP-2. The Low PZR Pressure SI is separately blocked until &gt;1915 psig, but the Containment High Pressure SI is not blocked.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect both because only a single centrifugal charging pump is allowed to be in service, and the runout flow of 550 gpm is insufficient to keep RCS pressure from degrading, and in any case containment pressure would still rise regardless.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S1.OP-IO.ZZ-0002 (Rev 49), Cold Shutdown to Hot Standby | LO: RXPROTE012 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[ECCS]], [[Pressurizer Level & Press Control]], [[Containment]]
- Related procedures: [[S2.OP-IO.ZZ-0002 — Cold Shutdown to Hot Standby]]
- Related exam: [[2014 NRC Written Exam]]
