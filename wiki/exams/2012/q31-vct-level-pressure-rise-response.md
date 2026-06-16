---
title: "2012 Q31 — VCT Level Hi-Lo Cause and Console Alarm Response"
category: exams
status: draft
aliases:
  - 2012 Q31
  - 2012-Q31
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q31 — VCT Level Hi-Lo Cause and Console Alarm Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">004000A218 / A2.18 (RO 3.1 / SRO 3.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- The on-coming shift assumes the watch with Unit 1 operating at 100% power steady state.<br>
- 13 Charging Pump is in service with the Master Flow Controller in Manual.<br>
- RCP seal injection flow is 8 gpm per pump.<br>
- RCP seal leakoff flow is 2.0 gpm per pump.<br>
- Halfway through their shift, operators receive console alarm VCT Level Hi-Lo.<br>
- A CVCS makeup system failure has caused VCT level to rise to 87.2%.<br>
- VCT pressure has risen to 35 psig.<br>
- CVCS makeup is now isolated.<br><br>
Which of the following identifies how the current VCT level and pressure has affected the CVCS system when compared to conditions at the beginning of the shift, and how are the operators directed to respond IAW S1.OP-AR.ZZ-00012, Control Console 1CC2?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Charging flow has risen. Ensure 1CV35 VCT 3 WAY INLET V is directed to the CVCS HUT.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Letdown flow has risen. Ensure 1CV35 VCT 3 WAY INLET V is directed to the CVCS HUT.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Seal Leakoff flows have lowered. Open 1CV243 VCT VENT ISOL VALVE.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Seal Injection flow has lowered. Open 1CV243 VCT VENT ISOL VALVE.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> 55.41.b(7,10) Stem conditions indicate that something has occurred which has caused VCT level and pressure to rise. The increased pressure will cause charging flow to rise since the MFC is in manual. Charging flow will have risen because of the increased NPSH to the charging pump and resultant higher discharge pressure. Opening the VCT vent is not directed. VCT high pressure alarm occurs at 50 psig, at which time the vent would be open. A is correct because the ARP for high level says to ensure the CV35 is directed to CVCS HUT — it should have tripped to full divert at 87% rising.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because letdown flow would not rise, it would lower due to the increased backpressure from the VCT, but the action is correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect — opening the VCT vent (1CV243) is not directed; the VCT high pressure alarm occurs at 50 psig (at which time the vent would be open), and VCT pressure is only 35 psig.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because seal injection flow has not lowered and opening the VCT vent (1CV243) is not directed; the VCT high pressure alarm occurs at 50 psig and pressure is only 35 psig.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S1.OP-AR.ZZ-0012 (Rev 34), Control Console 1CC2 | LO: CVCS00E015, CVCS00E016 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]]
- Related procedures: [[S1.OP-AR.ZZ-0012 — Control Console CC2]]
- Related exam: [[2012 NRC Written Exam]]
