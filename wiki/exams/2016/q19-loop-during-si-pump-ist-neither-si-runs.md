---
title: "2016 Q19 — LOOP During 11 SI Pump IST with 1B Bus Differential"
category: exams
status: verified
aliases:
  - 2016 Q19
  - 2016-Q19
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q19 — LOOP During 11 SI Pump IST with 1B Bus Differential</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000056 A2.03 (3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong> the following conditions:<br><br>
- Unit 1 is operating at 100% power.<br>
- The crew is performing S1.OP-ST.SJ-0001, Inservice Testing - 11 Safety Injection Pump.<br>
- 11 SI pump is running.<br>
- A loss of all off-site power occurs.<br>
- 1B 4KV vital bus locks out on Bus Differential.<br><br>
Which of the following describes Safety Injection pump status 2 minutes after the loss of off-site power?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> ONLY 11 SI pump is running.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> ONLY 12 SI pump is running.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> BOTH SI pumps are running.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> NEITHER SI pump is running.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> 55.51.b(8) neither SI pump will be running after a loss of off-site power with NO SI required. D is correct because the SEC's will strip the 4KV vital bus breakers before sequencing on BLACKOUT loads, and neither SI pump would start. 11/12 SI pumps are powered from A/C 4KV vital buses.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect but plausible if it is thought that the 11 SI pump breaker would remain shut during the response, and the pump would restart.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect but plausible if it is thought that only 12 SI pump would start because 11 SI pump was originally is an abnormal configuration.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect but plausible if it is thought the SECs would load both SI pumps, which it would only do if there was an accident signal coupled with the Blackout signal.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Loss of Offsite Power (S1.OP-AB.LOOP-0001, Attachment 3, p.58, Rev 31) | LO: ABLOP1E001 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]], [[SECs]], [[4KV]], [[EDGs]]
- Related procedures: [[AB.LOOP-0001 — Loss of All Offsite Power]], [[S1.OP-ST.SJ-0001 — 11 Safety Injection Pump Inservice Testing]]
- Related exam: [[2016 NRC Written Exam]]
