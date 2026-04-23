---
title: "2022 Q14 — SEC Mode 2 SI Pump Status"
category: exams
status: draft
reference: no
aliases:
  - 2022 Q14
  - 2022-Q14
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q14 — SEC Mode 2 SI Pump Status</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE 56 AA2.03 (3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 is at 100% Power.<br>
• The crew is performing S2.OP-ST.SJ-0001, Inservice Testing &ndash; 21 Safety Injection Pump.<br>
• 21 SI Pump is running.<br>
Subsequently, the following occurs;<br>
• Loss of Offsite Power.<br>
• OHA J-2, 2B 4KV VTL BUS DIFF PROT, is LIT<br>
After 2 minutes has elapsed, which ONE of the following describes the operational status of the Safety Injection Pumps?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> ONLY 21 SI Pump is running.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> ONLY 22 SI Pump is running.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> BOTH SI Pumps are running.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> NEITHER SI Pumps are running.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; D. Correct.</strong> On a loss of offsite power the SECs will strip the loads on the 2A and 2C 4KV Vital buses, start the EDGs and close the output breakers, and then load the safeguards equipment using the load sequencer. The 21 and 22 SI pumps are powered from 2A and 2C 4KV Vital buses. Since no SI signal is present, the SECs are in Mode 2 (Blackout only). In Mode 2 the SEC load sequencers will only start the Charging Pumps. No SI or RHR pumps will be started since no SI accident signal is present. The OHA J-2 alarm identifies that the 2B 4KV Vital Bus will be de-energized and lockout, which has no impact to the SI Pumps power source. Therefore, on a Blackout only, the SI pumps will NOT start.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Plausible distractor if the candidate believes that the 21 SI pump that was already running will remain running following SEC actuation, similar to a SEC Mode 1 (Accident only) actuation. The candidate may also believe that the OHA J-2 will prevent the start of the 22 SI Pump.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Plausible distractor if the candidate believes that the 22 SI pump will be the only pump running based on the Bus Differential protection lockout on 2B 4KV Vital Bus affecting the 21 SI Pump. SI pumps are not powered from 2B 4KV Vital bus.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> Plausible distractor if the candidate believes that the SECs will start both SI pumps during a SEC Mode 2 (Blackout). In SEC Mode 2, only the Charging Pumps will start. The SI pumps will only start when an accident SI signal is present during an SEC Mode 1 (Accident only) or SEC Mode III or IV (Accident plus Blackout) conditions.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05SEC000 | LO: NOS05SEC000-09, Objective 4 — Describe in detail each Mode of Safeguards Equipment Control System operation, including setpoints for automatic actuation | Source: Bank &mdash; Salem 2016 NRC RO19 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]], [[EDGs]]
- Related exam: [[2022 NRC Written Exam]]
