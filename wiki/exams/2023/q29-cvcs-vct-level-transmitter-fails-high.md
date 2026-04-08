---
title: "2023 Q29 — CVCS VCT Level Transmitter Fails High / Auto Swapover"
category: exams
status: draft
aliases:
  - 2023 Q29
  - 2023-Q29
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q29 — CVCS VCT Level Transmitter Fails High / Auto Swapover</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">004 K3.13 (3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 at 100% power<br>
• 21 Charging Pump in service<br>
• 2LT-112 VCT level fails HIGH<br><br>
What is the expected plant response?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> No automatic make-up, VCT level lowers, automatic swapover to RWST occurs.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> No automatic make-up, VCT level lowers, no automatic swapover to RWST, charging pump damage.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Automatic make-up maintains VCT level.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Automatic make-up initiates but cannot maintain VCT level.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> LT-112 fails high, causing CV35 high level divert valve to open, which drains the VCT. Automatic make-up will not actuate because only LT-112 actuates automatic make-up, and it is failed high. Automatic swapover to RWST requires 2/2 VCT levels low-low (LT-112 AND LT-114); with LT-112 failed high, the 2/2 coincidence is not met. The charging pump loses suction as VCT empties and runs dry, resulting in pump damage.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. VCT level does lower and auto make-up will not actuate, but automatic swapover to RWST requires 2/2 VCT levels low-low (both LT-112 AND LT-114). With LT-112 failed high, the coincidence logic is not satisfied and no auto swapover occurs.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. Only LT-112 actuates automatic make-up. Since LT-112 is failed high, the controller sees a high VCT level and will not initiate make-up. VCT level will lower uncontrolled.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. Automatic make-up does not initiate at all. Only LT-112 actuates the auto make-up function, and it is failed high, so the controller sees no need for make-up.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05CVCS00-18 | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Chemical and Volume Control System]], [[Emergency Core Cooling Systems]]
- Related exam: [[2023 NRC Written Exam]]
