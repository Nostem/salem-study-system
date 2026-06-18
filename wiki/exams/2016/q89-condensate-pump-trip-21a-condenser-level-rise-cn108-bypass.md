---
title: "2016 Q89 — 21 Condensate Pump Trip Effect and CRS Response"
category: exams
status: verified
reference: no
aliases:
  - 2016 Q89
  - 2016-Q89

---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q89 — 21 Condensate Pump Trip Effect and CRS Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">056 A2.04 (RO 4 / SRO 3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 84% power.<br>
- All Condensate pumps are in service.<br>
- NO Heater Drain pumps are in service.<br>
- The Condensate Polisher is in service.<br>
- Power is reduced based on the Condensate / Heater Drain pump configuration<br><br>
Subsequently, 21 Condensate pump trips.<br><br>
Which of the following describes the effect on the Condensate system of the pump trip, and how should the CRS respond?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> The 21-23CCN108s Polisher Bypass valves automatically open when SGFP suction pressure lowers &lt;320 psig. Reduce reactor power to 65% or less.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> The 2CN47 23/24/25 Heater Strings Bypass Valve automatically open upon the Condensate pump trip. Reduce reactor power to 30% or less.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 21A Condenser level will rise. Open Polisher Bypass valves and reduce reactor power to 65% or less.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 21A Condenser level will lower. Open Heater Strings Bypass valve and reduce reactor power to 30% or less.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> 55.43(b)5. This question is SRO based on having to determine the section of AB.CN which will be performed, and the sub-section of Attachment 2 knowing that with 2 Cond pumps running with no HDP running power reduction to 65% or less is required. The CN108s do NOT auto open on low suction pressure, but are directed to be opened when SGFP suction pressure lowers &lt;320 psig, which it WILL, based on initial power level and initial pump configuration. The CN47 only auto opens on a SGFP trip, not a Cond pump trip. The CN47 is directed to be opened AFTER the CN108s are directed to be opened in AB.CN, the opening of which is expected to restore suction pressure above the point which would require CN47 opening. Hotwell level will RISE with the cond pump O/S, as condensing is still occurring, with the pump not running.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> The CN108s do NOT auto open on low suction pressure, but are directed to be opened when SGFP suction pressure lowers &lt;320 psig, which it WILL, based on initial power level and initial pump configuration.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> The CN47 only auto opens on a SGFP trip, not a Cond pump trip. The CN47 is directed to be opened AFTER the CN108s are directed to be opened in AB.CN, the opening of which is expected to restore suction pressure above the point which would require CN47 opening.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Hotwell level will RISE with the cond pump O/S, as condensing is still occurring, with the pump not running. (level will lower is wrong direction.)</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Main Feedwater / Condensate System Abnormal, S2.OP-AB.CN-0001 Rev 28 | LO: ABCN01E003, CN&FDWE008 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Feed & Condensate]]
- Related procedures: [[AB.CN-0001 — Condensate System Abnormality]]
- Related exam: [[2016 NRC Written Exam]]
