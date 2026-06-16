---
title: "2014 Q99 — Condition Requiring Suspending an FRP"
category: exams
status: draft
aliases:
  - 2014 Q99
  - 2014-Q99
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q99 — Condition Requiring Suspending an FRP</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">194001 G2.4.18 (RO 3.3 / SRO 4.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Which of the following identifies a condition which will ALWAYS require suspending any Functional Restoration Procedure (FRP) in use prior to completion, and why?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> A new CFST condition occurs on a status tree different from the one which directed the current procedure implementation. This ensures the most recent plant conditions are used when assessing critical safety functions.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> A Continuous Action Summary item directs transition. This ensures a transition out to the proper procedure is made regardless of what step the operator is in the procedure.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> RWST level lowers to the low level setpoint. Establishing Cold Leg Recirculation ensures both long term cooling of the core and ECCS Acceptance Criteria are maintained.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> A loss of all three vital buses occurs. FRPs assume at least one 4KV vital bus is available for mitigative actions.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> D is correct because the EOP-LOPA-1 Bases document says "...this EOP is also entered anytime, from anywhere, on the symptom of a loss of all AC power." A loss of all three vital buses (loss of all AC power) will always require suspending any FRP in use, because FRPs assume at least one 4KV vital bus is available for mitigative actions.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect because only a HIGHER RED or PURPLE path than the one directing current procedure entry would require suspending. A new CFST condition on a status tree different from the one directing the current implementation does not always require suspending the FRP.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect because FRPs don't have a Continuous Action Summary like EOPs do.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect because RWST lo level would only go to LOCA-3 when directed in whatever FRP you were in. Automatically going to LOCA-3 on lo RWST lvl does NOT always occur no matter where in any procedure you are.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 2-EOP-LOPA-1, Loss of All AC Power — Bases Document, Page 1 (Rev 27) | LO: LOPA00E014 | Source: Facility Exam Bank — Significantly Modified (Q57948 modified to remove "none of the above" choice, added bases to meet K/A) | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related EOPs: [[EOP-LOPA-1 — Loss of All AC Power]], [[EOP-CFST-1 — Critical Safety Function Status Trees]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]]
- Related exam: [[2014 NRC Written Exam]]
