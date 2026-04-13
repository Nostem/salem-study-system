---
title: "2020 Q22 — IR Channel Bypass Alarm"
category: exams
status: draft
aliases:
  - 2020 Q22
  - 2020-Q22
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q22 — IR Channel Bypass Alarm</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE33AA2.09 (3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
&bull; Unit 2 is at 100% Power.<br>
&bull; The Intermediate Range (IR) Channel N35 has just failed high.<br>
&bull; The crew has entered S2.OP-AB.NIS-0001(Q), Nuclear Instrumentation System Malfunction.<br>
&bull; The PO is removing N35 from service in accordance with S2.OP-SO.RPS-0001(Q), Nuclear Instrumentation Channel Trip / Restoration and OHA E-29, SR &amp; IR TRIP BYP, annunciates.<br><br>
Which of the following identifies the cause of the alarm?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Control Power Fuses have been removed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Instrument Power Fuses have been removed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> LEVEL TRIP switch has been placed in bypass.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> POWER MISMATCH BYPASS switch has been placed in bypass.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; C. Correct.</strong> SO.RPS-0001 places the LEVEL TRIP switch in bypass and then verifies that OHA E-29 has illuminated/alarmed.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Plausible because the candidate may believe that SO.RPS-0001 removes the IR channel from service by removing the control power fuses. The procedure removes the control power fuses when removing a PR channel from service, but not for an IR channel.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Plausible because the candidate may believe that SO.RPS-0001 removes the IR channel from service by removing the instrument power fuses. Could remember that the procedure removes fuses for a power range channel and confuse power with instrument. Incorrect as the procedure does not remove instrument power fuses.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Plausible because the candidate may confuse the procedural steps for removing an intermediate range channel with that of a power range channel. He may remember the power range having a POWER MISMATCH BYPASS switch and believe that a similar one exists for removing intermediate range channels from service. Incorrect as there is no POWER MISMATCH BYPASS switch for IR Channels.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.NIS-0001(Q), Nuclear Instrumentation System Malfunction and Bases. S2.OP-SO.RPS-0001(Q), Nuclear Instrumentation Channel Trip / Restoration. | LO: NOS05FISHERNI-00, ELO 9 | Source: Bank | Cognitive: Fundamental</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]], [[RPS/SSPS]]
- Related procedures: [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]], [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]]
- Related exam: [[2020 NRC Written Exam]]
