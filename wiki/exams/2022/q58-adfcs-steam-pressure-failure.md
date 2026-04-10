---
title: "2022 Q58 — ADFCS Steam Pressure Channel Failure"
category: exams
status: draft
aliases:
  - 2022 Q58
  - 2022-Q58
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q58 — ADFCS Steam Pressure Channel Failure</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">016 K3.12 (3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 is at 100% Power.<br>
• ALL systems are in normal alignment and in AUTO.<br>
• The steam pressure channel associated with the Ovation Digital Feedwater Control System fails HIGH on 21 Steam Generator.<br><br>
Which ONE of the following describes how the Ovation Digital Feedwater Control System will respond to this failure?<br><br>
Note: MS10 — Atmospheric Steam Dump Relief Valve
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 21MS10 will switch to MANUAL.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 21MS10 will OPEN.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> ALL MS10's will remain in AUTO.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> ALL MS10s will switch to MANUAL.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; A. Correct.</strong> A failure of one channel of steam pressure will result in the associated MS-10 loop switching to Manual control, and OHAs G-7 ADFCS Alternate Action and G-15 ADFCS TRBL. Ovation uses one pressure channel from each SG (4 total) into a Medium Signal Select (MSS) algorithm and with a failure, will select another good input and the other remaining MS10's will remain in auto.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> One steam pressure channel failure will not cause the associated MS-10 to open. Plausible because since only one pressure channel from each SG is used into Ovation system that the operator may incorrectly believe that only one pressure channel failing will cause the MS10 to open on the affected SG pressure channel.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> Plausible because the Ovation system is redundant and fault tolerant to loss of inputs. However, in this case, a loss of one SG pressure channel will cause the associated MS10 to swap to Manual.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Plausible because since only one pressure channel from each SG is used into Ovation system that the operator may incorrectly believe that the Medium Signal Select (MSS) algorithm is not used and therefore with only one pressure channel failing will cause Ovation to select all the MS10s to swap to Manual.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05ODFWCS-03 | LO: NOS05ODFWCS-03, Obj 8.g — Describe the function and operating characteristics for ADFCS components: Steam Pressure | Source: Bank — Salem | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Feed & Condensate]], [[Steam Dumps]]
- Related exam: [[2022 NRC Written Exam]]
