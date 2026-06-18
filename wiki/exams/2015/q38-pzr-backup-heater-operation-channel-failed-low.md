---
title: "2015 Q38 — PZR Backup Heater Operation with Controlling PZR Level Channel Failed Low"
category: exams
status: draft
reference: no
aliases:
  - 2015 Q38
  - 2015-Q38
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q38 — PZR Backup Heater Operation with Controlling PZR Level Channel Failed Low</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">010 A4.02 (RO 3.6 / SRO 3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br>
&bull; Salem Unit 2 is operating normally at 100% power.<br>
&bull; The controlling PZR level channel fails low.<br>
&bull; As the operators respond IAW S2.OP-AB.CVC-0001, Loss of Charging, and before an operable channel is selected for control, the RO reports that PZR backup heaters in auto are energized with the controlling PZR level channel indicating 0%.<br><br>
Which of the following describes the operation of the PZR B/U heaters?<br><br>
PZR heaters in auto <span class="blank">_(1)_</span> be energized because <span class="blank">_(2)_</span>.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank">_(1)_</span> should <span class="blank">_(2)_</span> PZR level has risen 5% above program.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank">_(1)_</span> should <span class="blank">_(2)_</span> PZR pressure has lowered to the auto on setpoint of 2210 psig.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank">_(1)_</span> should NOT <span class="blank">_(2)_</span> PZR low level cutoff at 17% should be keeping heaters OFF.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank">_(1)_</span> should NOT <span class="blank">_(2)_</span> PZR pressure has remained above the auto on setpoint of 2218 psig.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> <em>Explanation of Answers (verbatim from source):</em> 55.41.b(7,5) The low level on the control channel will cause an automatic letdown isolation. Charging flow will continue and raise PZR level. The backup heaters are designed to energize at 5% above program to ensure stauration conditions are maintained in the PZR. However, either an alarm or control channel failing low deenergizes all PZR heaters. Nothing has occurred which would cause a PZR pressure change except for the rise in PZR level. Pressure will not lower. PZR B/U heaters are designed to energize at 2210 psig decreasing, and turn off at 2218 psig increasing.</div>
<div style="margin-top:6px;padding:8px 12px;border-left:3px solid #1a2035;border-radius:0 4px 4px 0;color:#9ca3af;font-size:11px;"><strong>K/A statement:</strong> Ability to manually operate and/or monitor in the control room: PZR heaters.<br><em>Note: the 2015 NRC worksheet provides a single "Explanation of Answers" (above); it does not contain separate per-distractor justifications, so none are fabricated here.</em></div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Loss of Charging (S2.OP-AB.CVC-0001, Rev 9); Overhead Annunciator Window E (S2.OP-AR.ZZ-0005, OHA E-20, Rev 20) | LO: PZRP&amp;LE006 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]], [[CVCS]]
- Related procedures: [[AB.CVC-0001 — Loss of Charging]], [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]]
- Related exam: [[2015 NRC Written Exam]]
