---
title: "2014 Q42 — Continuous Rod Withdrawal Power Rise Termination"
category: exams
status: draft
aliases:
  - 2014 Q42
  - 2014-Q42
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q42 — Continuous Rod Withdrawal Power Rise Termination</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">012000K4.02 (RO 3.9 / SRO 4.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 1 is operating at 80% power.<br>
- A large quantity of river grass starts building up on the Circ water traveling screens and condenser waterboxes.<br>
- A rapid power reduction is initiated IAW S1.OP-AB.LOAD-0001 RAPID LOAD REDUCTION, to maintain condenser backpressure.<br>
- During the power reduction, the NCO places rod control in MANUAL and continues to drive rods in.<br>
- The turbine is put on hold at 20%, with condenser backpressure at 4.8" Hg and stable.<br>
- Reactor power and temperature continue to lower due to an excess amount of negative reactivity inserted with control rods and boration, and reactor power reaches 7% before stabilizing.<br>
- The NCO starts to withdraw control rods in manual to restore RCS Tave which has dropped to 545°F.<br><br>
As the NCO continues to withdraw control rods continuously, which of the following will terminate the power rise, and why, IAW Salem FSAR?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Rod Block at 20% power equivalent amps on 1/2 IR NI's to protect against DNB.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> High power reactor trip (low range) at 25% on 2/4 PR NI's to protect against DNB.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Rod Block at 20% power equivalent amps on 1/2 IR NI's to ensure high RCS pressure will not result PZR Safety valve opening.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> High power reactor trip (low range) at 25% on 2/4 PR NI's to ensure high RCS pressure will not result PZR Safety valve opening.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> FSAR 15.2.2.1. Uncontrolled rod withdrawal at power. Unless terminated by manual or automatic action, the power mismatch and resultant coolant temperature rise would eventually result in DNB. The high neutron flux, high pressurizer pressure, and overtemperature DT trip channels provide adequate protection over the entire range of possible reactivity insertion rates, i.e., the minimum value of DNBR is always larger than the limit value. While the rod block signal may be generated, it will not act quickly enough (See Salem April 7th event) to prevent a trip on high power low range, nor is credit taken in the FSAR for a rod block to ensure DNB is avoided.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> While the rod block signal may be generated, it will not act quickly enough to prevent the high power reactor trip (low range), nor is credit taken in the FSAR for a rod block to ensure DNB is avoided.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The rod block is not credited in the FSAR to terminate the event; and the protective purpose of the high power low range trip is to protect against DNB, not to prevent high RCS pressure / PZR Safety valve opening.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The high power reactor trip (low range) is correct, but the basis is protection against DNB per FSAR 15.2.2.1 — not to ensure high RCS pressure will not result in PZR Safety valve opening.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Salem FSAR Section 15 | LO: RXPROTE004 | Source: New | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Excore NIs]], [[Control Rod Drive]], [[RCS]]
- Related procedures: [[AB.LOAD-0001 — Rapid Load Reduction]]
- Related exam: [[2014 NRC Written Exam]]
