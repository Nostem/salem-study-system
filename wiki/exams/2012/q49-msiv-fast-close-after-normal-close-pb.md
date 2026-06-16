---
title: "2012 Q49 — 11MS167 Response to FAST Close PB After NORMAL Close Initiated"
category: exams
status: draft
aliases:
  - 2012 Q49
  - 2012-Q49
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q49 — 11MS167 Response to FAST Close PB After NORMAL Close Initiated</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">039000G128 / 2.1.28 (RO 4.1 / SRO 4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
During a steam leak, the CRS directs the PO to FAST close 11MS167 from the 1CC3 bezel. The PO depresses the NORMAL close PB on 1CC2 instead, and the 11MS167 starts closing hydraulically.<br><br>
Which choice describes what will happen if the operator then pushes the FAST close PB for 11MS167?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> The vent valves 11MS169 and 11MS171 immediately open, allowing hydraulic pressure to close valve against only atmospheric pressure.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> The MSIV hydraulic pump immediately stops, depressurizing the hydraulic header, and allows main steam pressure to close the valve.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> The hydraulic sequence will continue until the Valve Fully Closed (33CVO) contact is closed. All other operation of the valve is locked out until the hydraulic pump is deenergized.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> A solenoid valve immediately opens, equalizing hydraulic pressure on both sides of the operating piston, and vent valves 11MS169 and 11MS171 open to allow main steam pressure to close the valve.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> 55.41.b(4) Using Logic drawings 239916 and 239917: The Emergency Trip signal is generated from the (Fast) CLOSE PB, and acts just the same as a Safeguards Train MSLI or High Stm Line Flow SI signal. SV-1 closes (was open to direct hydraulic pressure to bottom of hydraulic piston.) SV-3 opens, equalizing hydraulic pressure on both sides of the hydraulic piston, and allows the hydraulic fluid to act as buffer to prevent 11MS167 from slamming closed. The solenoids for 11MS169 and 11MS171 open, venting air, and the valves open to allow MS pressure on the bottom of the lower operating piston to drive the disc up against atmospheric pressure. The hydraulic pump does immediately stop running.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Addressed by the combined explanation: the vent valves open AND a solenoid (SV-3) opens to equalize hydraulic pressure on both sides of the operating piston — the close is driven by main steam pressure on the lower piston, not by hydraulic pressure against atmospheric.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Addressed by the combined explanation: although the hydraulic pump does stop running, the valve closes via main steam pressure on the lower operating piston after SV-3 equalizes hydraulic pressure and the vent valves open — not simply by depressurizing the header.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Addressed by the combined explanation: the FAST/Emergency Trip signal overrides the in-progress normal hydraulic close; it does not simply continue the hydraulic sequence to 33CVO.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Main Steam System Stop Valves Vent Valves 239916 (Rev 7); Main Steam System 11MS167 Stop Valves Hyd 239917 (Rev 12) | LO: MSTEAME005 | Source: Facility Exam Bank (Direct From Source, Vision Q80671) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Main Steam]]
- Related exam: [[2012 NRC Written Exam]]
