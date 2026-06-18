---
title: "2014 Q91 — Stuck-Open TB40 Low Tavg Tech Spec Application"
category: exams
status: draft
aliases:
  - 2014 Q91
  - 2014-Q91
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q91 — Stuck-Open TB40 Low Tavg Tech Spec Application</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">041 A2.02 (RO 4.3 / SRO 3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is performing a Rx startup.<br>
- Rx power is currently stable at 6%.<br>
- 22 SGFP is supplying Main Feed to all S/G's.<br>
- Steam dumps are controlling Tave in MS Pressure control - Manual set at 980 psig.<br>
- All MS10's are closed in AUTO at 1015 psig.<br>
- 23TB40 fails 50% open.<br>
- Auctioneered high RCS Tavg is 540.9&deg;F and slowly lowering.<br>
- PZR pressure is 1984 psig and slowly lowering.<br><br>
Which of the following describes how the CRS should apply Tech Specs, and why?<br><br>
Assume no auto Rx trip setpoints are reached.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Restore RCS Tave to at least 541&deg;F within 15 minutes, or Rx trip breakers must be opened within the next 15 minutes because adequate SDM cannot be assured.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Restore RCS Tave to at least 541&deg;F within 15 minutes, or Rx trip breakers must be opened within the next 15 minutes because protective instrumentation is not within its normal operating range.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Restore PZR pressure to at least 1985 psig within 1 hour, or lower Rx thermal power to &lt;5% rated thermal power in the next 4 hours because initial FSAR analysis for minimum DNBR is not met.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Restore PZR pressure to at least 1985 psig within 1 hour, or lower Rx thermal power to &lt;5% rated thermal power in the next 4 hours because the margin to trip for DNB related protective actions is below the minimum assumed value.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> RCS Tavg is required to be maintained at 541&deg;F or greater in Modes 1 and 2 IAW TSAS 3.1.1.4. If not restored within 15 minutes, the plant must be in Hot Standby in the next 15 minutes, which would be accomplished by opening the RTB's. The bases for this temperature is to ensure 5 different things, one of which is that protective instrumentation is within its normal range.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> The Tech Spec application (restore Tavg to 541&deg;F within 15 minutes or open RTBs within the next 15 minutes) is correct, but the bases is wrong: SDM margin is NOT one of the 5 listed bases for the minimum temperature for criticality.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> This applies the wrong Tech Spec (PZR pressure rather than minimum temperature for criticality) and the wrong time requirement — the required action is to be in Hot Standby within 2 hours (15 minutes to restore, then 15 minutes to HSB), not a 1-hour restore / 4-hour power-reduction sequence. The bases (initial FSAR analysis for minimum DNBR) is also incorrect.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> As with C, the time requirement is incorrect (HSB within 2 hours, not a 1-hour / 4-hour sequence). D is further incorrect because its bases (margin to trip for DNB related protective actions below the minimum assumed value) is also wrong.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Salem Tech Specs, TSAS 3.1.1.4 Minimum Temperature for Criticality (Bases) | LO: RCS000E009 | Source: Bank | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Steam Dumps]], [[Main Steam]], [[Pressurizer Level & Press Control]]
- Related tech specs: [[TS 3/4.1.1 — Boration Control]]
- Related exam: [[2014 NRC Written Exam]]
