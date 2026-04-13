---
title: "2020 Q01 — Reactor Trip Status Panel"
category: exams
status: draft
aliases:
  - 2020 Q01
  - 2020-Q01
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q01 — Reactor Trip Status Panel</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000007EK2.03 (3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 is at 60% Power.<br><br>
The following sequence of events occurs:<br><br>
• A Main Turbine trip occurs.<br>
• OHA F-36, TURB TRIP & P-9, is illuminated.<br>
• One of the Turbine Stop Valve Closed indicating lights on 2RP4 is flashing.<br><br>
The flashing light on 2RP4 indicates that …
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> the valve has left its open seat, but has NOT fully closed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> SSPS Train "A" and SSPS Train "B" disagree as to the position of the valve.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> EHC fluid pressure to the valve operator remains above 45 psig.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> the solenoid-operated dump valve in the EHC fluid supply line has NOT de-energized.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> As stated in the Reactor Protection System lesson plan; "if information sent by Trains A and B differ, the control board status lamps will flash."</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. Plausible because the candidate may believe that the indicator lights start to flash as the valves stroke closed and then are fully lit only once they are full closed. Incorrect, because the indicating lights fully lit for turbine stop valves indicate both trains see the valve at ≤ 85% open, if information sent by Trains A and B differ, the control board status lamps will flash.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. Plausible because the candidate may believe that Auto Stop Oil > 45 psig (as 45 psig is the Tech Spec value) is maintaining the "interface valve" closed and therefore preventing the stop valve from fully closing. However, the pressure is set to ≤ 50 psig and OHA-36 confirms that a turbine trip above P-9 has occurred.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. Plausible because the candidate may believe that the 2RP4 indicator lights will flash when a turbine trip demand signal has been sent, but if the EHC fluid is still being maintained to the stop valves, then the indicating lights won't fully light. Incorrect because there are redundant trip solenoids, the 20-ET, 20-AST-1, and 20-AST-2. Also incorrect, because the OHA F-36 is a demand for a reactor trip, but confirms that a turbine trip above P-9 has taken place. It confirms that either 4/4 Turbine Stop Valves are ≤ 85% open or 2/3 Auto Stop Oil Pressures ≤ 50 psig.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05RXPROT-12, 2-EOP-TRIP-1 | LO: Objective 18 | Source: Bank – Salem Vision Database, modification made to stem only | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Main Turbine]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2020 NRC Written Exam]]
