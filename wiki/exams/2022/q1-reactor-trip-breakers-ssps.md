---
title: "2022 Q1 — Reactor Trip Breakers / SSPS Train Failure"
category: exams
status: draft
reference: no
aliases:
  - 2022 Q01
  - 2022-Q01
  - 2022 Q1
  - 2022-Q1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q1 — Reactor Trip Breakers / SSPS Train Failure</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">EPE07 EK2.02 (2.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 is at 100% Reactor Power.<br>
• Reactor Trip Breaker testing is in progress.<br>
• Reactor Trip Breakers (RTB) 'A' and 'B' are closed.<br>
• Operators have just closed Reactor Trip Bypass Breaker (BYB) 'A'.<br><br>
Subsequently the following occurs:<br>
• A valid Reactor Trip demand signal is actuated.<br>
• SSPS Train A actuates as designed.<br>
• SSPS Train B fails to actuate.<br><br>
Which ONE of the following describes how the RTB 'B' and BYB 'A' will respond?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> RTB 'B': OPEN; BYB 'A': OPEN</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> RTB 'B': CLOSED; BYB 'A': OPEN</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> RTB 'B': CLOSED; BYB 'A': CLOSED</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> RTB 'B': OPEN; BYB 'A': CLOSED</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; C. Correct.</strong> SSPS Train A will deenergize the UV coils for RTB 'A' and BYB 'B' and only energize the shunt coil for RTB 'A'. SSPS Train B will deenergize the UV coils for RTB 'B' and BYB 'A' and only energize the shunt coil for RTB 'B'. The shunt coils on the RTBs and BYBs will also energize from; 1) Manual SI from either train, 2) either Pistol Grip switches, or 3) RTB 'A' or RTB 'B' PB bezels on CC2 (trips the associated train RTBs only).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Incorrect. The RTB 'B' and BYB 'A' will not open with a failure of SSPS Train B to actuate. Plausible because the operator may believe that either SSPS Train will open all of the RTBs.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Incorrect. BYB 'A' will not open with a failure of SSPS Train B. Plausible because the operator may believe that SSPS Train A will open BYB A.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Incorrect. RTB 'B' will not open with a failure of SSPS Train B.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Logic drawing 221051, simplified ESF-2 | LO: NOS05RXPROT, Obj 7 — Describe the function of SSPS components and how their normal and abnormal operation affects the Reactor Protection System: Reactor Trip Breaker and Bypass Breakers | Source: Bank — Beaver Valley 2018 NRC RO36 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]]
- Related exam: [[2022 NRC Written Exam]]
