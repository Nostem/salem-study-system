---
title: "2012 Q36 — ECCS Valves That Block Injection If They Fail to Reposition on SI"
category: exams
status: draft
aliases:
  - 2012 Q36
  - 2012-Q36
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q36 — ECCS Valves That Block Injection If They Fail to Reposition on SI</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">006 K6.10 (RO 3.3 / SRO 3.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following condition:<br><br>
- Unit 1 has initiated a Safety Injection while in MODE 3 in response to a LBLOCA.<br><br>
Choose the set of valves which would prevent some portion of ECCS injection flow from occurring if they did NOT reposition upon the SI signal.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 1SJ12 AND 1SJ13, BIT Outlet.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 1CV40 AND 1CV41, VCT Outlet.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 11SJ49 AND 12SJ49, RHR Discharge to Cold Leg.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 11SJ44 AND 12SJ44, Containment Sump Isolation.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> 55.41.b(8) A is correct because BIT inlet (SJ4/5) and outlet valves (SJ12/13) are normally shut and receive an open signal from SSPS on a SI.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because while the CV40 and 41 receive a close signal, their failure to position will not affect charging pump suction, since it automatically realigns with the SJ1 and SJ2 opening to provide suction from the RWST.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because SJ49 valves are normally open at power, and do not re-position during a LOCA, but would expect to have ECCS injection flow from RHR pumps during LBLOCA.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because SJ44 valves are opened in LOCA-3 during transfer to Cl recirc, and do not provide any ECCS injection flow.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: ECCS Simplified Drawing 205250-SIMP; S1.OP-SO.SJ-0001 (Rev 14) p. 28, Preparation of the Safety Injection system for Operation | LO: ECCS00E016 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]], [[CVCS]], [[RHR]]
- Related procedures: [[S1.OP-SO.SJ-0001 — Preparation of the Safety Injection System for Operation]]
- Related EOPs: [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]]
- Related exam: [[2012 NRC Written Exam]]
