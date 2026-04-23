---
title: "2020 Q47 — 4KV Degraded Voltage / SEC Mode"
category: exams
status: draft
reference: no
aliases:
  - 2020 Q47
  - 2020-Q47
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q47 — 4KV Degraded Voltage / SEC Mode</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">062000K1.02 (4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
&bull; Unit 2 is responding to a valid Safety Injection (SI) signal.<br>
&bull; Safety Injection has been RESET.<br>
&bull; ALL SECs have been RESET.<br>
&bull; ALL EDGs are running unloaded.<br>
&bull; 4KV Buses 2A and 2C are aligned to 23 Station Power Transformer (SPT).<br>
&bull; 4KV Bus 2B is aligned to 24 SPT.<br><br>
Subsequently, 24 SPT experiences a failure causing its secondary voltage to drop and stabilize at 3600 volts.<br><br>
Complete the following statement concerning the effect of this failure on the 2B 4KV Vital Bus:<br><br>
The 2B 4KV Vital Bus will...
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> fast transfer to 23 SPT.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> remain loaded onto 24 SPT.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> be energized by its EDG in MODE IV (SI &amp; Single Bus Degraded Voltage).</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> be energized by its EDG in MODE II* (Single Bus Degraded Voltage).</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; D. Correct.</strong> 3600 volts is below the setpoint for degraded voltage (95%) relays. When these relays actuate, then 2B SEC will strip 2B 4KV bus from off-site power and load the bus on the EDG in MODE II* (Single Bus Degraded UV).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Incorrect. Plausible because the candidate may believe that the &lt; 70% vital bus transfer relay will energize and transfer the bus to 23 SPT. Incorrect because 3600 volts is not less than 70%.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Incorrect. Plausible because the candidate may recognize that the voltage has stabilized at &gt; 70% and believe that the bus will remain energized by 24 SPT. Incorrect because the sustained degraded voltage relay will cause a UV signal to be generated for that bus (95% for &gt; 13 seconds).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> Incorrect. Plausible because the candidate may not recognize from the stem that SI has been reset. Incorrect because after SI has been reset, the SEC will not actuate in MODE III or Mode IV.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS054KVAC0-08, 4160 Electrical Systems | LO: ELO 9 | Source: Bank, Salem 2016 NRC Exam, Q55 | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[4KV]], [[SECs]], [[EDGs]]
- Related exam: [[2020 NRC Written Exam]]
