---
title: "2014 Q92 — Feedwater Interlock Failure Consequence and Response"
category: exams
status: draft
aliases:
  - 2014 Q92
  - 2014-Q92
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q92 — Feedwater Interlock Failure Consequence and Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">059000 A2.03 (RO 2.7 / SRO 3.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 100% power EOL.<br>
- A failed Current Transformer in the Main Generator metering circuit causes a Main Generator trip, causing a Main Turbine trip, resulting in an automatic Rx trip.<br>
- The Feedwater Interlock (FWI) fails to actuate when expected, and has not actuated.<br><br>
Which of the following identifies a consequence of the FWI failure, and how will it be addressed?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Excessive cooldown of the SGs. Initiate SI in TRIP-1 based on degrading board parameters.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Cavitation of the Condensate Pumps. Initiate SI in TRIP-1 based on degrading board parameters.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Excessive cooldown of the SGs. Trip both SGFP's in TRIP-2 after verifying adequate AFW flow.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Cavitation of the Condensate Pumps. Trip both SGFP's in TRIP-2 after verifying adequate AFW flow.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> The FWI is a 2/2 interlock using RCS Auct Hi Tavg &lt;554&deg;F and the Rx Trip Breakers open (P-4) which shuts all BF19's and BF40's, isolating Main Feed flow to the SGs. With SGFP's still running, they will continue to supply Main Feed to the SG's since SG NR level will be low following the Rx trip from 100% power — causing excessive cooldown of the SGs. The magnitude of the overfeeding event on RCS pressure would be steady but slow, so SI initiation would NOT be warranted during immediate actions. Knowledge of the SGFP trip step early in TRIP-2 would prevent the CRS from making a decision to initiate a SI, when it is known that an action in the next procedure to be implemented will preclude having to impose that huge plant stress. Trip both SGFPs in TRIP-2 after verifying adequate AFW flow.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> The consequence (excessive cooldown of the SGs) is correct, but the response is wrong. Because the overfeeding event drives RCS pressure down only steadily and slowly, SI initiation is NOT warranted during immediate actions; initiating SI when it is not required can lead to plant complications if the PZR is filled water solid. The correct action is to trip both SGFPs early in TRIP-2 after verifying adequate AFW flow.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Both elements are wrong. Cavitation of the Condensate Pumps is plausible (as excessive feedwater flow continues, SG pressure lowers causing Main Steam dumps to shut, so there is no steam flow from SGs into the condenser which, coupled with excessive flow out of the condenser, could cause Cond Pump cavitation), but the primary consequence is excessive SG cooldown. SI initiation in TRIP-1 is also not warranted for this steady, slow pressure transient.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The response (trip both SGFPs in TRIP-2 after verifying adequate AFW flow) is correct, but the consequence is wrong: the primary consequence of the FWI failure is excessive cooldown of the SGs, not cavitation of the Condensate Pumps (Cond Pump cavitation is only a secondary plausibility).</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 2-EOP-TRIP-2 Reactor Trip Response (Rev 28) | LO: CN&amp;FDWE009, TRP002E002, TRP001E013 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Feed & Condensate]], [[AFW]]
- Related EOPs: [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2014 NRC Written Exam]]
