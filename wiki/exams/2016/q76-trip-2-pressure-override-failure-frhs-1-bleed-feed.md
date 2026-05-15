---
title: "2016 Q76 — TRIP-2 with AFW Pressure Override Failure and Multiple AFW Failures"
category: exams
status: verified
reference: no
aliases:
  - 2016 Q76
  - 2016-Q76

---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q76 — Reactor Trip — Heat Sink Red Path</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000007 A2.02 (SRO 4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given the following conditions:</strong><br>
- Unit 1 is operating at 100% power.<br>
- An automatic Rx trip occurs when a loose wire in Main Power transformer Phase B causes a Main Generator trip.<br>
- The RO performs 1-EOP-TRIP-1 Reactor Trip or Safety Injection immediate actions with no SI required.<br>
- The CRS transitions to 1-EOP-TRIP-2, Reactor Trip Response after verification of immediate actions.<br>
- Only TRIP-1 Immediate Actions were performed prior to transitioning to TRIP-2.<br>
<br>
- Upon entry into EOP-TRIP-2, the PO reports:<br>
&nbsp;&nbsp;- 11 AFW pump has failed to start.<br>
&nbsp;&nbsp;- 12 AFW pump has started but a malfunctioning Pressure Override circuit is keeping 11AF21 and 12AF21 shut.<br>
&nbsp;&nbsp;- 13 AFW pump tripped as it was accelerating during start.<br>
&nbsp;&nbsp;- All SG NR levels are off-scale low.<br>
&nbsp;&nbsp;- SPDS indicates a Heat Sink Red Path exists.<br>
<br>
Which of the following describes the next action the CRS should take?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Direct the PO to establish Aux Feedwater flow IAW 1-EOP-TRIP-2, Reactor Trip Response.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Direct the PO to establish Main Feedwater flow IAW 1- EOP-TRIP-2, Reactor Trip Response.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Immediately transition to 1-EOP-FRHS-1, Loss of Heat Sink, ONLY if 3 of 4 SG WR levels are <32% to establish SG Bleed and Feed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Immediately transition to 1-EOP-FRHS-1, Loss of Heat Sink, based on the SPDS indication of a valid Red Path, and perform a SGFP Prompt Recovery IAW S2.OP-SO.CN-0007, SGFP Prompt Recovery.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> 55.43.b(5) CFST's become active upon exit from EOP-TRIP-1. However, from CFST procedure…."SPDS is not designed to be used as a primary indication, and no actions should be based upon SPDS indications without verification of the primary indications, which are the installed Control Room 1E instruments." The crew oud perform the actions at Step 3 to check total AFW flow >22E4 lbm/hr, and if not, start 11-13 AFW pumps as necessary to establish it, which would include defeating Pressure Override circuit. The Main Feedwater step is AFTER the AFW step. This question is SRO level based on knowing which procedure to use. (do not transition to another procedure) and the actions in that procedure. The FRHS-1 distracters are plausible if incorrect application of CFST usage after transition out of TRIP-1 are applied.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> The Main Feedwater step is AFTER the AFW step.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The FRHS-1 distracters are plausible if incorrect application of CFST usage after transition out of TRIP-1 are applied. Source explanation does not separately address — see correct-answer block above ("SPDS is not designed to be used as a primary indication, and no actions should be based upon SPDS indications without verification of the primary indications").</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The FRHS-1 distracters are plausible if incorrect application of CFST usage after transition out of TRIP-1 are applied. Source explanation does not separately address — see correct-answer block above ("SPDS is not designed to be used as a primary indication, and no actions should be based upon SPDS indications without verification of the primary indications").</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: EOP-CFST-1 (rev 31), EOP-TRIP-2 Sh 1 (rev 30) | LO: TRP001E001, TRP002E005 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[AFW]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related procedures: [[S2.OP-SO.CN-0007 — SGFP Prompt Recovery]]
- Related exam: [[2016 NRC Written Exam]]
