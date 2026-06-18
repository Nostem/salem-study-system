---
title: "2012 Q43 — Intermediate Range NI Indication Following Trip"
category: exams
status: draft
aliases:
  - 2012 Q43
  - 2012-Q43
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q43 — Intermediate Range NI Indication Following Trip</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">015 A2.02 (RO 3.5 / SRO 3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 was tripped from 100% power about 16 minutes ago.<br>
- IRNI 2N35 indicates 2.0 E-11 Amps.<br>
- IRNI 2N36 indicates 2.0 E-10 Amps.<br>
- Channel I SUR is -0.3 dpm<br>
- Channel II SUR is -0.06.<br><br>
Which of the following describes the condition present, and any action(s) required to be performed as a result of this condition?<br><br>
Intermediate range NI's indicate that…
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 2N35 is over compensated. Manually energize Source Range channels.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 2N36 is under compensated. Manually energize Source Range channels.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 2N35 is under compensated. Ensure Source Range channels automatically energize when 2N36 lowers to 7.0 E-11 Amps.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 2N36 is over compensated. Ensure Source Range channels automatically energize when 2N36 lowers to 7.0 E-11 Amps.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> 55.41.b(6,10) TRIP-2 step 38 asks if both IRNI channels are reading &lt;7E-11 A. If they are not, it asks if under compensation is preventing proper operation. If yes then the operator is instructed to manually energize SR channels. IRNI channels normally continue to lower until off scale on control console. If the reading is higher that expected, and SUR is abnormally low as indicated in stem, this provides justification for an undercompensated instrument, which allows more lower energy gammas to be seen on instrument. [2N36 reads high (2.0 E-10 A) with abnormally low SUR — the higher reading with low SUR is the over-compensation signature; Source Range channels auto-energize when 2N36 lowers to 7.0 E-11 Amps.]</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Addressed by the combined explanation: the affected channel is 2N36 (reading high), not 2N35; and the conditions do not require manually energizing Source Range channels.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Addressed by the combined explanation: 2N36 is over compensated (not under compensated), and the criteria for manually energizing Source Range channels (both IRNIs not &lt;7E-11 A with under-compensation preventing proper operation) are not met.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Addressed by the combined explanation: the affected channel is 2N36, not 2N35; and the condition is over compensation, not under compensation.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Reactor Trip Response 2-EOP-TRIP-2 (Rev 25, step 38, page 5) | LO: EXCOREE009, EXCOREE010 | Source: Facility Exam Bank (Significantly Modified, Vision Q61948) | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]]
- Related procedures: [[EOP-TRIP-2 — Reactor Trip Response]]
- Related exam: [[2012 NRC Written Exam]]
