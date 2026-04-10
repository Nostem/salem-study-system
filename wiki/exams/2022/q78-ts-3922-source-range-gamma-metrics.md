---
title: "2022 Q78 — TS 3.9.2.2 Source Range / Gamma-Metrics"
category: exams
status: draft
aliases:
  - 2022 Q78
  - 2022-Q78
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q78 — TS 3.9.2.2 Source Range / Gamma-Metrics</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE 57 G2.2.25 (4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 refueling is in progress.<br>
• 2N31 is Operable and selected to the Audio Count Rate Drawer.<br>
• 2N32 is Operable.<br>
• BOTH channels of Gamma-Metrics are out of service for testing.<br>
• Subsequently, a loss of 2A 115V Vital Instrument Bus occurs.<br><br>
In accordance with Technical Specification, which ONE of the following describes if CORE ALTERATIONS can recommence and the reason why?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> YES, when EITHER Gamma-Metric channel is restored to OPERABLE status.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> YES, when ONLY both Gamma-Metric channels are restored to OPERABLE status.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> NO, because Gamma-Metric channels are only used for post-accident monitoring.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> NO, because Gamma-Metric channels are not backed up by an emergency power source.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; A. Correct.</strong> Loss of the 2A 115 VAC Instrument Bus will render 2N31 Source Range NIS channel Inoperable. When power to 2N31 is lost, refueling would be suspended until the CRS determines if the required Source Range channels are Operable to continue refueling activities. IAW Technical Specification bases for LCO 3.9.2.2, any combination of NIS source range neutron flux monitors and/or Gamma-Metrics post-accident neutron flux monitors may be used to satisfy the LCO. Two of the four total source range neutron flux monitors are required to be Operable. In this case, only one operable Gamma-Metric channel is required to be restored to operable status and can be substituted for the Inoperable 2N31 SR channel meeting the requirements for two SR/Gamma-Metric channels being Operable and core alterations or refueling can recommence.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Incorrect. Plausible if the operator believes that the TS bases requires both Gamma-Metric channels operable to satisfy an Inoperable SR channel. Only two of the four source range neutron flux monitors and Gamma-Metric channels needs to be Operable.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> Incorrect. The Gamma-Metric channels are used for post-accident monitoring of neutron flux, but TS 3.9.2 bases allows for the use of Gamma-Metric channels to substitute for a SR channel. This is plausible because the operator may incorrectly believe that the Gamma-Metric channels can only be used for post-accident monitoring and cannot be used to satisfy TS 3.9.2.2 requirements.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Incorrect. Plausible if the operator believes that Gamma-Metric channels are not supplied from an emergency backup source (Inverter or EDG) and therefore cannot be used to satisfy TS 3.9.2.2 requirements. The Gamma-Metric channels are supplied from 115 VAC Vital Instrument Power which is backed up by batteries and the associated EDG.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Technical Specification TS 3.9.2.2 &amp; Bases | LO: NOS05TECHSPEC-14, Objective 11 | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]], [[115V AC]], [[Refueling]]
- Related tech specs: [[TS 3/4.9 — Refueling Operations]]
- Related exam: [[2022 NRC Written Exam]]
