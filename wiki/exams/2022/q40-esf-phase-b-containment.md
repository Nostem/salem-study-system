---
title: "2022 Q40 — SSPS Train B 48 VDC Power Supply Loss"
category: exams
status: draft
reference: no
aliases:
  - 2022 Q40
  - 2022-Q40
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q40 — SSPS Train B 48 VDC Power Supply Loss</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">013 K4.07 (3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 is at 100% Power.<br>
• OHA A-42, SSPS TRN B TRBL, is LIT<br>
• Investigation reveals that a 48 VDC power supply on SSPS Train B is tripped.<br><br>
Which ONE of the following describes the impact, if any, of this failure?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> The Train B Reactor Trip breaker shunt trip is unavailable.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> NONE of the Train B SSPS components will automatically actuate when required.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> ALL of Train B SSPS components will automatically actuate when required.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> A portion of the Train B SSPS components will NOT automatically actuate when required.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; C. Correct.</strong> Two of four vital instrument buses (VIB) supply one set of 48V and 15V power supplies. SSPS Train A is supplied from A and D VIB and SSPS Train B is supplied from B and C VIB. B and D VIBs are supplied from the same "B" 230V VIB. The 48V and 15V power supplies are auctioneered such that a loss of one power supply will NOT cause or prevent an RPS/ESFAS actuation. Therefore, a loss of one 48 VDC power supply will have no adverse effects on the Train B SSPS to function as designed, with the exception of a loss of 48 VDC power supply redundancy.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Incorrect. Plausible if the operator believes that the shunt coil is supplied from 48 VDC from SSPS. The 48 VDC power supplies feed the UV coils for each reactor trip breaker. A loss of both 48 VDC power supplies in one SSPS train will cause a reactor trip due to the UV coils de-energizing. The Shunt coils are supplied by 125 VDC and are energized to actuate.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Incorrect. Plausible because the operator may believe that the loss of 48 VDC will prevent the actuation of the SSPS train by affecting either the logic or the output cabinet slave relays which are supplied from their respective 115 VAC train (A or B). Loss of one 48 or 15 VDC power supply will have no adverse effect on the function of SSPS due to the auctioneered design. However, a loss of the 115 VAC B Vital Instrument bus will prevent the slave relays from energizing and will prevent the Train B SSPS from actuating components and equipment which is not the case.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Incorrect. Plausible if the operator believes that a loss of one power supply could affect the SSPS train from fully actuating components. The 48V and 15V power supplies are auctioneered so a loss of one has no adverse effect.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05RXPROT | LO: NOS05RXPROT-15, Obj 26 — Given plant conditions, relate the RPS with 115V vital power | Source: Bank — DC Cook 2008 NRC RO46 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[ESF & Design]]
- Related exam: [[2022 NRC Written Exam]]
