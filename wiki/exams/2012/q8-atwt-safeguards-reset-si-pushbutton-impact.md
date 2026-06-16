---
title: "2012 Q8 — ATWT Safeguards Reset SI Pushbutton Impact"
category: exams
status: draft
aliases:
  - 2012 Q8
  - 2012-Q8
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q8 — ATWT Safeguards Reset SI Pushbutton Impact</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000029K206 / AK2.06 (RO 2.9 / SRO 3.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 1 experienced an ATWT in MODE 1 where both Train "A" and "B" Reactor Trip Breakers (RTBs) failed to open.<br>
- The reactor was tripped when the pressurizer heater buses were deenergized.<br>
- The RTBs remain shut.<br>
- A momentary inadvertent safety injection signal was generated and has cleared.<br><br>
Which of the following describes the impact of depressing the Train A and Train B RESET SI pushbuttons on 2CC1 when performing Safeguards Reset Actions?<br><br>
The SI signal will...
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> reset, and Auto SI will be blocked.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> reset, and Auto SI will NOT be blocked.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> NOT reset, and Auto SI will be blocked.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> NOT reset, and Auto SI will NOT be blocked.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> The SI signal can be reset as shown on 221057 grid F-2 AND box and downstream LATCH-RESET. This shows the SI can be reset if 2 conditions are present. 1. Manually pushing the reset pb (MANUAL SI RESET AND BLOCK), and the 1-2 minute TD has timed out after the SI signal was generated. 2. The LATCH-RESET button is reset. Right next to that AND box is another AND box, whose purpose is to block a second SI after the Rx has been tripped. Since the Rx has not tripped, there is no output from this AND box, and a NO signal will be input into the NOR box to the right of it. The 0 signal into this box will produce a 1 signal out of this box, which is one of 2 inputs to the AND box to its right. This AND box needs 2 signals to produce an output (Auto SI). The second input into this AND box is a safety injection from any of the 4 auto SI signals above i.e. Hi Steamline Flow with lo steamline pressure or lo-lo Tavg, High Steamline Differential pressure, PZR low pressure, or Containment hi pressure.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. The SI signal does not reset (both reset conditions of the F-2 AND box are not satisfied), and with the RTBs failed shut (Rx not tripped) the block AND box has no output, so Auto SI is NOT blocked.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. Auto SI is correctly NOT blocked, but the SI signal does not reset under these conditions.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. Auto SI is NOT blocked because the Rx has not tripped (RTBs failed shut), so the block AND box produces no output.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: RPS Safeguards Actuation Signals (221057, Rev 22) | LO: RXPROTE027 | Source: Facility Exam Bank — Significantly Modified | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[ECCS]], [[AMSAC]]
- Related exam: [[2012 NRC Written Exam]]
