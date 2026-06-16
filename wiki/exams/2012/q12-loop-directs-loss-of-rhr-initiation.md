---
title: "2012 Q12 — LOOP Directs Loss of RHR Initiation Basis"
category: exams
status: draft
aliases:
  - 2012 Q12
  - 2012-Q12
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q12 — LOOP Directs Loss of RHR Initiation Basis</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000056K302 / AK3.02 (RO 4.4 / SRO 4.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is in MODE 4.<br>
- RCS pressure is 290 psig.<br>
- RHR HX inlet temperature is 270° F.<br>
- 21 RHR pump is in service in shutdown cooling.<br>
- 22 RHR loop is aligned for ECCS.<br>
- A loss of all off-site power occurs.<br><br>
Which of the following identifies why S2.OP-AB.LOOP-0001, Loss of Off-Site Power directs operators to initiate S2.OP-AB.RHR-0001, Loss of RHR?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> The 2A SEC trips 21 RHR pump and does not restart it when 2A EDG connects to 2A vital bus.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> The SEC's trip all running CCW pumps, and they do not restart when the EDGs connect to their respective vital buses.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> S2.OP-AB.LOOP-0001 does not consider the initial plant conditions, and always directs initiation of S2.OP-AB.RHR-0001 regardless of whether or not RHR is in operation.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> The 22RH18, RHR HX Flow Control Valve, fails shut, and the 2RH20 RHR HX Bypass Flow Control Valve fails open. Action is contained in S2.OP-AB.RHR-0001 to re-establish positive control of RHR HX flow.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> The loss of off-site power with NO Safety Injection signal is a SEC MODE II actuation, Blackout. All 3 EDG's will start, the SEC will strip all loads of it's vital bus, shut the EDG output breaker and sequence on BLACKOUT loads. The RHR pumps are NOT blackout loads and will not be started. AB.LOOP-1 asks, at step 3.8, if a RHR pump was running in SDC mode. If the answer is yes, it directs initiation of AB.RHR since the LOOP will result as described above.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> The CCW pumps WILL be started by their respective SEC's. AB.RHR is NOT always directed, only if a RHR pump was running in SDC mode.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> AB.RHR is NOT always directed; AB.LOOP-1 step 3.8 considers the initial plant conditions (whether a RHR pump was running in SDC mode).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The 22RH18 fails as is, and is not the reason for initiating AB.RHR.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.LOOP-0001 Loss of Off-site Power (Rev 26, p 4) | LO: ABLOP1E002 | Source: New | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[SECs]], [[RHR]], [[EDGs]], [[CCW]]
- Related procedures: [[AB.LOOP-0001 — Loss of All Offsite Power]], [[AB.RHR-0001 — Loss of RHR]]
- Related exam: [[2012 NRC Written Exam]]
