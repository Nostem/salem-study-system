---
title: "2018 Q10 — RPS PZR Pressure Channel Failure"
category: exams
status: draft
reference: no
aliases:
  - 2018 Q10
  - 2018-Q10
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q10 — RPS PZR Pressure Channel Failure</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">012 RPS-K4.05 (2.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
&bull; Unit 2 is at 100% Reactor Power and stable<br>
&bull; The PZR Pressure Transmitters read the following:<br><br>
<table style="font-size:12px;color:#c8cdd5;margin-bottom:12px;">
<tr><td style="padding:4px 8px;">CH I</td><td style="padding:4px 8px;">CH II</td><td style="padding:4px 8px;">CH III</td><td style="padding:4px 8px;">CH IV</td><td style="padding:4px 8px;"></td></tr>
<tr><td style="padding:4px 8px;">2PT-455</td><td style="padding:4px 8px;">2PT-456</td><td style="padding:4px 8px;">2PT-457</td><td style="padding:4px 8px;">2PT-474</td><td style="padding:4px 8px;">2PT-1648</td></tr>
<tr><td style="padding:4px 8px;">2235 PSIG</td><td style="padding:4px 8px;">0 PSIG</td><td style="padding:4px 8px;">2235 PSIG</td><td style="padding:4px 8px;">2235 PSIG</td><td style="padding:4px 8px;">2235 PSIG</td></tr>
</table>
Which ONE of the following completes the statements below concerning the design of the Reactor Protection System (RPS)?<br><br>
With 2PT-456 failed low, the coincidence for the PZR Pressure LOW Reactor Trip (based on the remaining functional PZR Pressure Channels) is now ___
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 2 out of 4</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 1 out of 4</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 2 out of 3</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 1 out of 3</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> PT-455/456/457/474 are the pressure transmitters that feed into the PZR Pressure LOW Reactor Trip coincidence (2 out of 4 below low pressure trip setpoint). With 2PT-456 failed low, the coincidence for the PZR Pressure LOW Reactor Trip (based on the remaining functional PZR Pressure Channels) is now 1 out of 3.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect but plausible. The candidate could incorrectly conclude that PT-1648 also feeds into the PZR Pressure LOW Reactor Trip coincidence and when 2PT-456 fails, this causes the 2PT-456 bistable to be bypassed from the PZR Pressure LOW Reactor Trip. Consequently, with 2PT-456 failed low, the candidate would then incorrectly determine that the coincidence is now 2 out of 4.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect but plausible. The candidate could incorrectly conclude that PT-1648 also feeds into the PZR Pressure LOW Reactor Trip coincidence. PT-1648 is only used for indication at the RSP. Consequently, with 2PT-456 failed low, the candidate would then incorrectly determine that the coincidence is now 1 out of 4.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect but plausible. The candidate could incorrectly conclude that when 2PT-456 fails, this causes the 2PT-456 bistable to be bypassed from the PZR Pressure LOW Reactor Trip. Consequently, coincidence for the PZR Pressure LOW Reactor Trip would be 2 out of 3.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05RXPROT-12 (Reactor Protection System) | LO: NOS05RXPROT-12 — Describe the design bases of the RPS including redundancy, independence, fail safe, testability | Source: New | Cognitive: Higher</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Pressurizer Level & Press Control]]
- Related exam: [[2018 NRC Written Exam]]
