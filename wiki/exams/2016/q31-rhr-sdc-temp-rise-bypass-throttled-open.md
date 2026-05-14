---
title: "2016 Q31 — RHR SDC Water-to-RCS Temperature Rise Cause"
category: exams
status: verified
aliases:
  - 2016 Q31
  - 2016-Q31
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q31 — RHR SDC Water-to-RCS Temperature Rise Cause</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">005000A102 A1.02 (3.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong> the following conditions:<br><br>
- Unit 2 is in MODE 4.<br>
- 21 RHR loop is in service in SDC mode.<br>
- 22 RHR loop is O/S and aligned for ECCS.<br><br>
Which of the following would cause the temperature of the water flowing to the RCS from the RHR system to RISE?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 21SJ49 RHR DISCH TO COLD LEGS is shut.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 22CC16 RHR HX COMP CLG OUT valve is shut.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 2RH20 RHR HX Bypass Valve is throttled open.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 21RH18 RHR HX FLOW CONT VALVE is throttled open.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> 55.41.b(5) C is correct because bypassing flow around the in service HX will cause system temp to rise, as more warm RCS water is mixed in with the cooled RHR HX outlet water and returned to the RCS.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect because with the RH19s open, the discharge from 21 RHR HX will flow through the normally open 22SJ49.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because the valve is normally shut, and with the 22RH12 shut there won't be any flow through 22 CCHX from 21 loop anyways.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because opening the 21RH18 will increase flow through the in service RHR HX, causing outlet temp to lower.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: RHR Simplified 205332-SIMP rev 2; Initiating RHR S2.OP-SO.RHR-0001 rev 29 | LO: RHR000E004 | Source: Facility Exam Bank (Bank — 13-01 C RO 31) | Cognitive: Application | Modification: Direct From Source</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RHR]]
- Related procedures: [[S2.OP-SO.RHR-0001 — Initiating RHR]]
- Related exam: [[2016 NRC Written Exam]]
