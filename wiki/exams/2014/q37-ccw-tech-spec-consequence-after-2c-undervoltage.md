---
title: "2014 Q37 — CCW Tech Spec Consequence After 2C Bus Undervoltage / SEC Mode II"
category: exams
status: draft
aliases:
  - 2014 Q37
  - 2014-Q37
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q37 — CCW Tech Spec Consequence After 2C Bus Undervoltage / SEC Mode II</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">G2.2.37 (SRO 4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is in MODE 3 @ NOT, NOP.<br>
- 21 and 22 CCW pumps are in service.<br>
- 23 CCW pump is in MANUAL.<br>
- 2C 4KV Vital Bus senses an undervoltage condition, and loads in SEC MODE II*.<br><br>
Which of the following identifies the Tech Spec consequence of this event on the CCW system?<br><br>
TSAS 3.7.3, Component Cooling System is...
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> entered due to not having 2 loops of CCW operable.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> NOT entered because ALL CCW pumps remain operable.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> NOT entered because 2 of the 3 CCW pumps remain operable.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> entered due to high system flow from 3 CCW pumps in service through 2 heat CCW HX's.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> CCW TSAS 3.7.3 requires 2 independent loops of CCW. The bases for that states that in order to have 2 operable loops, ALL 3 CCW pumps must be operable along with HX's and valves, etc. When the 2C SEC senses the undervoltage condition, it will open the 2C bus infeed breakers, start the EDG, strip loads, close the EDG output breaker, the sequence on BLACKOUT loads. 23 CCW pump is a blackout load, but not an ACCIDENT load. Additionally, the SEC locks out AUTO/MAN function of the CCW pump start circuitry, so the initial status of 23 CCW pump being in MANUAL has no effect on pump start. All three pumps remain operable, so TSAS 3.7.3 is NOT entered.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> The event does not render a CCW loop inoperable: 23 CCW pump (a blackout, not accident, load) remains operable, and the SEC locking out the AUTO/MAN start circuitry means the MANUAL status of 23 CCW pump has no effect — all 3 pumps remain operable, so 2 loops remain operable and the TSAS is not entered.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The reason is wrong: 2 operable loops require ALL 3 CCW pumps operable per the 3.7.3 bases, not merely 2 of 3 pumps. In this event all 3 pumps remain operable, which is why the TSAS is not entered.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The TSAS is not entered for high system flow: 23 CCW pump does not start (it is a blackout load not sequenced for this event, and the SEC locks out the start circuitry), so there is no 3-pump high-flow condition.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Salem Tech Specs — Section 3.7.3 and bases | LO: CCW000E010 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CCW]]
- Related tech specs: [[TS 3.7 — Plant Systems]]
- Related exam: [[2014 NRC Written Exam]]
