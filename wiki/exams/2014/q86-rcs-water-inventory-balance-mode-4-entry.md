---
title: "2014 Q86 — RCS Water Inventory Balance Prior to Mode 4 Entry"
category: exams
status: draft
aliases:
  - 2014 Q86
  - 2014-Q86
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q86 — RCS Water Inventory Balance Prior to Mode 4 Entry</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">G2.1.20 (RO 4.6 / SRO 4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Operators are performing S2.OP-IO.ZZ-0002, Cold Shutdown to Hot Standby in preparation for returning the unit to service following a forced outage.<br>
- With the unit otherwise ready to enter Mode 4, the STA reports that a RCS Water Inventory Balance has not been performed with the last 72 hours, and is required in Modes 1-4 IAW Tech Spec Surveillance 4.4.7.2.1.d.<br><br>
Which of the following identifies how the CRS should proceed?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Continue to Mode 4 without performing the RCS Water Inventory Balance. The provisions of Tech Spec 4.0.4 are not applicable.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Continue to Mode 4 without performing the RCS Water Inventory Balance. Apply Tech Spec 4.0.3 and ensure the RCS leak rate is performed within the next 24 hours.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Direct the RO to perform S2.OP-ST.RC-0008, Reactor Coolant System Water Inventory Balance, for the normal 2 hour duration and obtain acceptable results prior to proceeding to Mode 4.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Direct the RO to perform S2.OP-ST.RC-0008, Reactor Coolant System Water Inventory Balance, for an abbreviated duration as determined by the SM/CRS and obtain acceptable results prior to proceeding to Mode 4.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> IOP-2 P&amp;L 3.8 states.... "Performance of S2.OP-ST.RC-0008(Q), RCS Water Inventory Balance, required by T/S 4.4.7.2.1.d is NOT required to enter Mode 4. The surveillance is NOT required to be completed until 12 hours after establishment of steady state operation." Additionally, TS Surveillance 4.4.7.2.1.d specifically says the provisions of Tech Spec 4.0.4 are not applicable for entry into MODE 4.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because 4.0.3 is applied for missed or overdue surveillances, which is not the case here.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The C and D distracters are incorrect because the RCS leakrate won't be determined until after 12 hours of steady state operation, but they are plausible because of the following procedural direction: (P&amp;L 3.15) A routine RCS Water Inventory Balance that is performed to satisfy T/S Surveillance Requirement 4.4.7.2.1.d should normally be performed over a two hour duration.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The C and D distracters are incorrect because the RCS leakrate won't be determined until after 12 hours of steady state operation, but they are plausible because of the following procedural direction: (P&amp;L 3.16) IF an RCS Water Inventory Balance is to be performed for reasons other than to satisfy the requirements of T/S Surveillance Requirement 4.4.7.2.1.d, THEN the time interval of the RCS Water Inventory Balance may be determined at the discretion of the SM/CRS.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-IO.ZZ-0002 (Rev 59, p 3); S2.OP-ST.RC-0008 (Rev 37, p 7) | LO: RCS000E008, RCS000E011, RCS000E001 | Source: Worksheet | Cognitive: Memory | K/A: 002000G2.1.20 (SRO 4.6) — Reactor Coolant System</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]]
- Related procedures: [[S2.OP-IO.ZZ-0002 — Cold Shutdown to Hot Standby]], [[S2.OP-ST.RC-0008 — RCS Water Inventory Balance]]
- Related tech specs: [[TS 3/4.4 — Reactor Coolant System]]
- Related exam: [[2014 NRC Written Exam]]
