---
title: "2015 Q14 — Effect on 2B VIB of a Line Regulator Breaker Trip (Static Switch in Bypass to Alternate)"
category: exams
status: draft
reference: no
aliases:
  - 2015 Q14
  - 2015-Q14
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q14 — Effect on 2B VIB of a Line Regulator Breaker Trip (Static Switch in Bypass to Alternate)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000057 AA1.01 (3.7/3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
&bull; The 2B Vital Instrument Bus (VIB) Uninterruptible Power Supply (UPS) Static Switch has been placed in the Bypass to Alternate position IAW 2B VITAL INSTRUMENT BUS UPS SYSTEM OPERATION.<br>
&bull; ALL power supplies to the 2B VIB UPS are available.<br>
&bull; Subsequently, the breaker from 2B 230VAC bus to the 2B VIB AC Line Regulator fails and opens.<br><br>
What will be the effect on 2B VIB?<br><br>
The 2B VIB will…
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> NOT deenergize because the Static Switch will automatically swap to the Preferred Source.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> NOT deenergize because the inverter will automatically power the 2B VIB through the inverter auctioneering circuit from its DC source.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> deenergize until manual operator action is taken to re-energize the 2B VIB by placing the Static Switch in Normal and placing the Test Transfer switch to N (Normal).</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> deenergize until manual operator action is taken to re-energize the 2B VIB by placing the Static Switch in Isolate (Alternate) and placing the Test Transfer Switch to N (Normal).</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> <em>Explanation of Answers (verbatim from source):</em> 55.41.b(7) The VIB UPS static switch is transferred from norm to alt by placing the test transfer switch to ALT IAW Section 5.4 of SO.115-0012. Then the Manual Bypass Switch is placed in Bypass to Alternate to physically position contacts B1, B2, and B4 (closed) and B3, B5 open. The VIB will deenergize when power is lost to the AC line regulator, which is the Alternate source. Placing the static switch in Normal and test transfer switch to N (from alternate) is directed by SO.115-0012, Section 5.7.3 and 5.7.4. Distracter D is plausible if it is thought the switch would be used to isolate the alternate source from the static switch in Normal so the VIB could be powered from another source. A is incorrect because automatic transfer is unavailable with the static switch not in the Normal position. B is incorrect because the static switch is aligned to alternate, and while the DC power is supplying the inverter, the inverter output cannot flow through static switch with B3 and B5 contacts open.</div>
<div style="margin-top:6px;padding:8px 12px;border-left:3px solid #1a2035;border-radius:0 4px 4px 0;color:#9ca3af;font-size:11px;"><strong>K/A statement:</strong> Ability to operate and / or monitor the following as they apply to Loss of Vital AC Instrument Bus: Manual inverter swapping.<br><em>Note: the 2015 NRC worksheet provides a single "Explanation of Answers" (above); it does not contain separate per-distractor justifications, so none are fabricated here.</em></div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-SO.115-0012 (2B Vital Instrument Bus UPS System Operation, Rev 6) Section 5.4; S2.OP-SO.115-0012 (Rev 6) Exhibit 1 (Static Switch) | LO: 115VACE014 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[115V AC]], [[DC Power]]
- Related procedures: [[S2.OP-SO.115-0012 — 2B Vital Instrument Bus UPS System Operation]]
- Related abnormals: [[AB.115-0002 — Loss of 2B 115V Vital Instrument Bus]]
- Related exam: [[2015 NRC Written Exam]]
