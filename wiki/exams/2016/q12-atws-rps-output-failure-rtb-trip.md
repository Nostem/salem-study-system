---
title: "2016 Q12 — ATWS with RPS output failure / direct method to trip the Rx"
category: exams
status: draft
reference: no
aliases:
  - 2016 Q12
  - 2016-Q12

---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q12 — ATWS with RPS output failure / direct method to trip the Rx</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">029 EK2.06 (2.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong> Analyze the following conditions:<br><br>
- Unit 2 is operating at 100% power.<br>
- I&C is performing Solid State Protection System testing.<br>
- Reactor Trip Breaker (RTB) A is open.<br>
- Reactor Trip Bypass Breaker A is racked in and closed.<br>
- A valid reactor trip signal is generated in the Reactor Protection System, but the RPS system does not provide any output signal to trip the Rx.<br><br>
Assuming that the RPS system WOULD generate the appropriate signal when MANUAL actions are performed during TRIP-1 immediate actions, which of the following contains both the operator action and the DIRECT method which will trip the Rx?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Depressing the OPEN PB for Reactor Trip Breaker B to deenergize the UV coil.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Deenergizing the RDMG sets by opening the PZR heater bus supply breakers on 2CC3.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Depressing the OPEN PB for Reactor Trip Bypass Breaker A to energize the shunt coil.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Turning either of the Reactor Trip pistol grip handles to the TRIP position to deenergize the UV coil for Reactor Trip Breaker B.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> 55.41.B(7)he failure of the RPS output signal from the automatic trip will initially prevent the reactor from tripping.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect because PB energizes the shunt coil.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because the Rx would already have tripped by another means prior to having to perform this step..</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because the RT Bypass Breakers do not have an OPERATE function from the control console.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: RPS Trip Signals (221051, Rev 13); Logic drawing 221051; Schematic drawing 240111; NOS05RODS00 ELO-19 | LO: RXPROTE027 | Source: Facility Exam Bank — Direct From Source (50753) | Cognitive: Application (Cognitive Level 3 - Analysis); Tier/Group 2/1; 10CFR55.41.6</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Control Rod Drive]]
- Related exam: [[2016 NRC Written Exam]]
