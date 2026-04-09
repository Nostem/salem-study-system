---
title: "2022 Q15 — 125 VDC Battery Charger Loss"
category: exams
status: draft
aliases:
  - 2022 Q15
  - 2022-Q15
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q15 — 125 VDC Battery Charger Loss</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE58 AA2.01 (3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Unit 2 is at 100% Power.<br>
OHA B-2, 2A 125VDC CNTRL BUS VOLT LO, is LIT.<br>
RO reports the following indications on 2RP9 for the 2A 125 VDC Battery:<br>
&bull; DC Volts meter indicates 124 VDC and slowly lowering.<br>
&bull; DC Amperes meter indicates 50 Amps.<br>
Based on the above conditions, which ONE of the following completes both statements?<br><br>
1. The 2A 125 VDC bus is being supplied from the <span class="blank">__(1)__</span>.<br>
2. Plant operation may continue by <span class="blank">__(2)__</span>.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 1) battery<br>2) cross-tying the 2A 125 VDC Bus loads to the 2B 125 VDC Bus.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 1) battery<br>2) placing the standby battery charger in service.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 1) battery charger<br>2) placing the standby battery charger in service.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 1) battery charger<br>2) cross-tying the 2A 125 VDC Bus loads to the 2B 125 VDC Bus</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; B. Correct.</strong> The OHA B-2 comes in when bus voltage is &le; 128 VDC. The 2A1 125VDC battery charger normally maintains the DC loads with the battery floating on the battery charger. Indications in the control room are available on the 2RP9 panel that provides indication for battery voltage and amps. During normal operation the indications will read approx. 134 VDC and zero amps. The zero amps indicate that the battery charger is supplying the DC loads and not the battery. Based on the conditions in the stem, the lower bus voltage and amps indicated on the bus means that the battery charger is no longer supplying the DC bus and now the battery is supplying the bus. To remain at power, the standby (2A2 125 VDC) battery charger must be manually aligned to the bus. The 2A 125 VDC Bus distribution panels can be supplied (cross-tied) from an alternate DC bus (B Bus) but only during Modes 5, 6, or Defueled.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> First part is correct. Second part is incorrect. The 2A 125 VDC Bus distribution panels cannot be supplied (cross-tied) from an alternate DC bus (B Bus) during Modes 1-4. Plausible since the DC buses can be cross-tied but only during Modes 5, 6, and Defueled.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> First part is incorrect. Based on the stem, with lower bus voltage and amps greater than zero, these are indications that the battery charger is no longer supplying the bus and the battery is. Second part is correct. Plausible because the operator may incorrectly determine the status of the DC bus based on the conditions provided in the stem.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> First part is incorrect. Based on the stem, with lower bus voltage and amps greater than zero, these are indications that the battery charger is no longer supplying the bus and the battery is. Part 2 is incorrect. The 125 VDC bus loads cannot be cross-tied during Modes 1-4. Plausible since the DC buses can be cross-tied but only during Modes 5, 6, and Defueled.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AR.ZZ.0002, S2.OP-SO.125-0005 (R27) | LO: NOS05DCELEC, Objectives 4.a &amp; b — Describe the function of the following components and how their normal and abnormal operation affects the DC Electrical System: Batteries, Battery Chargers | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[DC Power]]
- Related exam: [[2022 NRC Written Exam]]
