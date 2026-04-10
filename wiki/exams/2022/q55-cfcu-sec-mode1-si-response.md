---
title: "2022 Q55 — CFCU SEC Mode 1 SI Response"
category: exams
status: draft
aliases:
  - 2022 Q55
  - 2022-Q55
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q55 — CFCU SEC Mode 1 SI Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">103 K1.01 (3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 is at 100% Power<br>
• 21, 22, 23, and 24 CFCUs are running in high speed with the 25 CFCU in standby.<br><br>
Subsequently, a LOCA inside Containment occurs and a Safety Injection (SI) signal actuates.<br><br>
Which ONE of the following describes the response of the CFCUs following the SI actuation?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 21, 22, 23, and 24 CFCUs start 20 seconds later in low speed, and the 25 CFCU starts immediately in low speed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 21, 22, 23, and 24 CFCUs start immediately in low speed, and the 25 CFCU starts 20 seconds later in low speed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> ALL CFCUs will start 20 seconds later in low speed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> ALL CFCUs start immediately in low speed.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; C. Correct.</strong> An SI signal will actuate the SEC in MODE 1 operation. MODE 1 does not use the SEC load sequencers. The SEC will trip open all High speed 460V breakers during all Modes of SEC operation (see 203670). The SEC assumes that the CFCUs were running in high speed. After a 20 second time delay the SEC will start all CFCUs in Low speed (see 203667 &amp; 203673). In this case, the operator must determine how a CFCU in standby will operate following an SI signal, the 25 CFCU in standby will start in low speed after a 20 second delay.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Incorrect. Plausible because the operator may believe that there is no time delay when for a CFCU in standby. ALL CFCU high speed 460V breakers will trip during ALL MODES of SEC operation. The CFCU Low speed 460V breakers will close after 20 seconds. CFCUs do not immediately start in low speed, even in standby.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Incorrect. Plausible if the operator believes that running CFCUs can shift over to Low speed since the CFCUs are already running and no time delay is necessary. See Ans. C for further explanation.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Incorrect. Plausible if the operator believes that during Mode 1 there is no time delay to start CFCUs. See Ans. C for further explanation.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05SEC00, 203667, 239670, 203673 | LO: NOS05SEC00-09, Obj 4 — Describe in detail each Mode of Safeguards Equipment Control System operation, including setpoints for automatic actuation | Source: Modified Bank - Salem | Cognitive: Fundamental/Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CFCUs]], [[SECs]], [[Containment]]
- Related exam: [[2022 NRC Written Exam]]
