---
title: "2023 Q36 — RCP Underfrequency Logic / 1/2 Taken Twice"
category: exams
status: draft
aliases:
  - 2023 Q36
  - 2023-Q36
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q36 — RCP Underfrequency Logic / 1/2 Taken Twice</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">012 K1.09 (3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 at 18% power<br>
• 500KV grid transient occurs<br>
• H and E buses: 56.0 Hz / 4100V<br>
• F and G buses: 59.7 Hz / 4200V<br><br>
What is the plant response?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Trip breakers remain closed; ALL RCPs remain running.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Trip breakers remain closed; RCPs on H and E buses trip on individual RCP breaker underfrequency.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Trip breakers open on RCP underfrequency; ALL RCPs trip.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Trip breakers open on RCP underfrequency; RCPs on H and E buses trip on individual breaker underfrequency.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> RCP underfrequency trip logic is 1/2 on (H or E) AND 1/2 on (F or G) above P-7. Underfrequency exists on H and E buses (56.0 Hz) but NOT on F and G buses (59.7 Hz). Since the logic requires both bus groups to have underfrequency, the coincidence is NOT satisfied and no reactor trip occurs. Individual 4KV RCP breakers trip on undervoltage, NOT underfrequency. All buses have adequate voltage (4100V and 4200V), so no individual RCP breakers trip. All RCPs remain running.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. Trip breakers remaining closed is correct, but individual RCP breakers trip on undervoltage, NOT underfrequency. H and E buses have adequate voltage (4100V), so no individual RCP breakers trip.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. The underfrequency trip logic is not satisfied. The logic requires 1/2 on (H or E) AND 1/2 on (F or G). Only H and E have low frequency; F and G are normal. Trip breakers do not open.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. Underfrequency trip logic is not satisfied (needs both bus groups). Additionally, individual RCP breakers trip on undervoltage, not underfrequency. Neither condition is met.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Fluency List | Source: Bank - Salem | Cognitive: Fundamental/Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[500KV]], [[RCPs]]
- Related exam: [[2023 NRC Written Exam]]
