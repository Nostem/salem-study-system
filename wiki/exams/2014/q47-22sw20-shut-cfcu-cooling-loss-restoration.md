---
title: "2014 Q47 — 22SW20 Shut CFCU Cooling Loss and Restoration"
category: exams
status: draft
aliases:
  - 2014 Q47
  - 2014-Q47
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q47 — 22SW20 Shut CFCU Cooling Loss and Restoration</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">022 A2.04 (RO 3.7 / SRO 3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Salem Unit 2 is operating at 100% power.<br>
- An electrical fault causes 22SW20, Nuclear Header Supply valve to shut, and it cannot be opened.<br><br>
Which of the following identifies how many CFCU's will lose all cooling water availability, and which action would restore cooling water to all CFCU's?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 2, open 21SW23 and 22SW23 - Nuclear Header X-over valves.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 3, open 21SW23 and 22SW23 - Nuclear Header X-over valves.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 2, open 21SW17 and 22SW17 - SW Discharge Header X-over valves.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 3, open 21SW17 and 22SW17 - SW Discharge Header X-over valves.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> The CFCUs are supplied cooling water from the Nuclear headers, with 21 and 22 supplies from 21 nuc header, and 24 and 25 supplied from 22 nuc header. 23 CFCU is supplied from BOTH nuc headers via a check valve arrangement, so the loss of flow to 21 nuc header will not affect cooling to 23, 24, or 25 CFCUs. (With 22SW20 shut, 21 nuc header loses its supply, so 21 and 22 CFCUs lose all cooling water — 2 CFCUs.) The SW23s are located downstream of the nuc header supply valve 22SW20 and 24SW20, and when opened would restore SW flow to both nuc headers, including the CFCU's.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Only 2 CFCUs (21 and 22) lose all cooling water — not 3. 23 CFCU is supplied from BOTH nuc headers via a check valve arrangement, so it is not lost.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The SW Bay x-connect (SW17) valves are normally open, and even if closed would not restore SW flow, since it could not flow past the shut 22SW20. The number lost (2) is correct but the restoration action is wrong.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Both the count (3) and the restoration action (SW17 Discharge Header x-over) are incorrect — only 2 CFCUs are lost, and the SW17 valves cannot restore flow past the shut 22SW20.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Service Water - Simplified (205342-SIMP, Sheets 1 and 2, Rev 3) | LO: SW0NUCE016 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CFCUs]], [[Service Water]]
- Related procedures: [[AB.SW-0001 — Loss of SW Header Pressure]]
- Related exam: [[2014 NRC Written Exam]]
