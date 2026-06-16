---
title: "2014 Q87 — RHR Response to RCS Pressure Transient in Mode 5"
category: exams
status: draft
aliases:
  - 2014 Q87
  - 2014-Q87
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q87 — RHR Response to RCS Pressure Transient in Mode 5</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">005000A2.02 (SRO 3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 1 is in MODE 5 during a plant startup.<br>
- 11 RHR loop is in service.<br>
- 12 RHR loop is aligned for ECCS.<br>
- 13 RCP is in service.<br>
- 11 charging pump is in service.<br>
- RCS Tavg is 175°.<br>
- RCS pressure is 310 psig.<br>
- PZR level is 66%.<br><br>
When placing the second RCP in service, RCS pressure momentarily rises to 390 psig.<br><br>
Which of the following describes the RHR system response, and how the CRS should proceed?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> The 1RH3 RHR SAF RLF VLV TO CONTAINMENT SUMP opens. Enter S2.OP-AB.PZR-0001, PZR Pressure Malfunction, and ensure that any PZR PORV that opened in response to the RCS pressure has shut.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> The 1RH2, RHR COMMON SUCT MOV automatically shuts. Enter S2.OP-AB.PZR-0001 and ensure that any PZR PORV that opened in response to the RCS pressure has shut.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> The 1RH3 RHR SAF RLF VLV TO CONTAINMENT SUMP opens. Enter S2.OP-AB.LOCA-0001, Shutdown LOCA, and isolate letdown to minimize RCS inventory loss.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> The 1RH2 RHR COMMON SUCT MOV automatically shuts. Enter S2.OP-AB.LOCA-0001 and isolate letdown to minimize RCS inventory loss.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> With RHR in service both the PZR PORVs and the 1RH3 will open at their 375 psig setpoints. The RH3 opening will not be apparent to the control room, but the PORV opening will. AB.PZR, Attachment 3, will ensure the PORV has shut.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> The 1RH2 has an OPENING interlock that requires RCS pressure to be &lt;375 psig, then a keyswitch opens the valve. There is no automatic closure associated with this valve on high pressure.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The 1RH3 relief valve opening is correct, but AB.LOCA is used in MODE 3 and MODE 4 with the accumulators isolated, and with the unit in MODE 5 as described in the stem, would not be entered.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The 1RH2 does not automatically shut (it has an opening interlock, no high-pressure auto closure), and AB.LOCA is used in MODE 3/MODE 4 with accumulators isolated, not MODE 5.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S1.OP-AB.PZR-0001 (Rev 16); S1.OP-AB.LOCA-0001 (Rev 6); 205232-SIMP Residual Heat Removal Simplified (Rev 02) | LO: RHR000E004 | Source: Worksheet | Cognitive: Application | K/A: 005000A2.02 (SRO 3.7) — Residual Heat Removal System</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RHR]], [[Pressurizer & PRT]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[AB.LOCA-0001 — Shutdown LOCA]]
- Related exam: [[2014 NRC Written Exam]]
