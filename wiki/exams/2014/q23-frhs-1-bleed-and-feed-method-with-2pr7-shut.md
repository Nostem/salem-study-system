---
title: "2014 Q23 — EOP-FRHS-1 Bleed and Feed Method With 2PR7 Shut"
category: exams
status: draft
aliases:
  - 2014 Q23
  - 2014-Q23
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q23 — EOP-FRHS-1 Bleed and Feed Method With 2PR7 Shut</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">WE05 EK1.02 (RO 3.9 / SRO 4.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 100% power.<br>
- 2PR2 is leaking, and 2PR7 is shut to comply with TSAS 3.4.5, action a.<br>
- Both SGFPs trip.<br>
- When the Main Generator breakers opened, 2B 4KV vital bus deenergized and remains deenergized.<br>
- Only 23 AFW pump started, and it tripped 2 minutes after the Rx was tripped.<br>
- No AFW pumps are in service or can be started.<br>
- Operators have transitioned out of EOP-TRIP-1.<br><br>
Which of the following identifies how Bleed and Feed of the RCS will be accomplished IAW 2-EOP-FRHS-1, Response to Loss of Secondary Heat Sink?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> SI pump injection and bleed flow from 2PR1 only.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Charging pump injection and bleed flow from both PORVs.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> SI pump injection and bleed flow from the reactor head vent valves.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Charging pump injection and bleed flow from 2PR1 and the reactor head vent valves.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> The 2PR7 would be opened if it had power in this case to allow 2PR2 to be used as part of the Bleed path. With 2PR7 shut and B bus deenergized, both PORV block valves cannot be opened per step 26.1 of FRHS-1. Rx head vents are the next step. A single Charging pump will be supplying the feed portion, as step 25.1 asks if EITHER charging pump is running, and 22 will be after SI initiation at step 24.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> With both PORV block valves unable to be opened, bleed is via the reactor head vent valves (not 2PR1), and feed is via a charging pump (not an SI pump) per the FRHS-1 sequence.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Both PORV block valves cannot be opened (2PR7 shut and B bus deenergized per step 26.1), so bleed flow is not from both PORVs.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Feed is supplied by a single charging pump (step 25.1 asks if EITHER charging pump is running), not an SI pump.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Loss of Secondary Heat Sink (2-EOP-FRHS-1, Rev 24) | LO: FRHS00E006 | Source: Facility Exam Bank (Q122559) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[Pressurizer & PRT]], [[CVCS]], [[ECCS]]
- Related EOPs: [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related tech specs: [[TS 3.5 — ECCS]]
- Related exam: [[2014 NRC Written Exam]]
