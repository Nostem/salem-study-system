---
title: "2012 Q41 — Containment Pressure Channel IV Fails High with Channel I Tripped"
category: exams
status: draft
aliases:
  - 2012 Q41
  - 2012-Q41
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q41 — Containment Pressure Channel IV Fails High with Channel I Tripped</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">012 A3.01 (RO 3.8 / SRO 3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
With Unit 2 at 100% power, Containment Pressure Channel I (one) indication became erratic and the channel was removed from service IAW S2.OP-SO.RPS-0005, Placing Containment Pressure Channel in Tripped Condition.<br><br>
What is the plant response if Containment Pressure Channel IV (four) subsequently fails high?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> No response other than channel related alarms.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> An AUTO Safety Injection actuation on 2/3 channels tripped.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Safety Injection, Containment Spray, Main Steamline Isolation and Phase B Isolation all actuate.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Main Steamline Isolation and Phase B Isolation. Containment Spray valves reposition but the pumps do not start.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> 55.41.b(7) Cont press Channel I only feeds Cont Hi-Hi (Spray act) it does not feed the Cont Hi (SI) circuits. Containment Spray system bistables are energized to actuate, so when the failed channel is removed from service, its Spray actuation bistable is NOT tripped, it is removed from inputting to Spray coincidence to prevent one of the remaining channels from actuating cont spray if it fails. This leaves the SI circuitry still 2/3 on channels I, II, and III, and the containment spray actuation goes to 2/3 of the remaining channels. [The combined explanation in the worksheet addresses why a single failed-high Channel IV produces no actuation: with Channel I removed from Spray coincidence and Channel IV the only high channel, no 2/3 logic is satisfied for SI or Spray.]</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Addressed by the combined explanation: SI coincidence remains 2/3 on Channels I, II, and III and is not satisfied by Channel IV alone, so no AUTO Safety Injection occurs.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Addressed by the combined explanation: with Channel I removed from Spray coincidence and only Channel IV high, neither SI nor Spray coincidence logic actuates.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Addressed by the combined explanation: a single failed-high Channel IV does not satisfy MSLI/Phase B coincidence, so no actuation occurs.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: RPS Safeguards Actuation System 221057 (Rev 22); S2.OP-SO.RPS-0005 (Rev 2) Placing a Containment Pressure Channel in the Tripped Condition | LO: RXPROTE012 | Source: Facility Exam Bank (Direct From Source, Vision Q134992) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Containment Spray]]
- Related procedures: [[S2.OP-SO.RPS-0005 — RPS Surveillance]]
- Related exam: [[2012 NRC Written Exam]]
