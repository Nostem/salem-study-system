---
title: "2012 Q73 — RCS Saturation Temperature Determination IAW 2-EOP-CFST-1"
category: exams
status: draft
aliases:
  - 2012 Q73
  - 2012-Q73
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q73 — RCS Saturation Temperature Determination IAW 2-EOP-CFST-1</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">194001G403 / 2.4.3 (RO 3.7 / SRO 3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following:<br><br>
- The unit has been tripped and Safety Injection initiated due to a LOCA.<br>
- The STA observes a PURPLE path displayed by SPDS for the CORE COOLING Status Tree, with no other RED or PURPLE paths on SPDS.<br>
- The SMM is blinking dashes on both channels.<br>
- SPDS is displaying question marks for all CET's.<br>
- Plant Computer CET indication shows all CET's between 50-60°F.<br>
- Local CET Display is unavailable.<br><br>
Which of the following identifies how RCS saturation temperature will be determined IAW 2-EOP-CFST-1, Critical Safety Function Status Trees?<br><br>
Wide Range RCS Thot and...
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> RCS pressure (PI-403 or PI-405) will be used in conjunction with Steam Tables.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> RCS pressure (PI-403 or PI-405) will be used in conjunction with CFST Subcooling Tables.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> PZR pressure channels (PI-455A, 456, 457 or 474A) will be used in conjunction with Steam Tables.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> PZR pressure channels (PI-455A, 456, 457 or 474A) will be used in conjunction with CFST Subcooling Tables.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> 55.41.b(7,10) EOP-CFST Basis Document, page 2 of 18, "The SMM should be used to determine RCS subcooling. If the SMM is inoperable, then calculate and log RCS subcooling on Table D. The value of T-Sat is obtained by using Table A for Normal Containment or Table B for Adverse Containment." Table D footnote states…"RCS temperature- Use CET's (WR Thot RTD's if CET's are not available)."</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect because the CFST Subcooling Tables (Table A/B), not generic Steam Tables, are used with RCS pressure to obtain T-Sat per the CFST Basis Document.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because RCS pressure (PI-403 or PI-405), not PZR pressure channels, is used with the CFST Subcooling Tables, and the CFST Subcooling Tables (not Steam Tables) are used.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because RCS pressure (PI-403 or PI-405), not PZR pressure channels, is used with the CFST Subcooling Tables.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 2-EOP-CFST-1 Critical Safety Function Status Trees | LO: LOCA01E008 | Source: Facility Exam Bank (Significantly Modified, Vision Q81104; similar to DC Cook 4/29/2004 NRC Exam question) | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]]
- Related EOPs: [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related exam: [[2012 NRC Written Exam]]
