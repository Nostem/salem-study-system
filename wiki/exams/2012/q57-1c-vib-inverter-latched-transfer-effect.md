---
title: "2012 Q57 — 1C VIB Inverter Latched Transfer Effect on Instrumentation"
category: exams
status: draft
aliases:
  - 2012 Q57
  - 2012-Q57
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q57 — 1C VIB Inverter Latched Transfer Effect on Instrumentation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">062 A1.03 (RO 3.5 / SRO 3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Which of the following describes how control room instrumentation will be affected if the 1C Vital Instrument Bus (VIB) Inverter were to experience a latched transfer?<br><br>
Instrumentation powered from 1C VIB…
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> will be unaffected by the transfer since it occurs in milli-seconds.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> must be declared INOPERABLE until the VIB inverter is restored to its normal power supply.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> will indicate flashing low during the transfer (1-2 seconds), but return to full functional status.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> AND 1D VIB will momentarily be lost during the transfer since their inverters are powered from the same 230 VAC source.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> 55.41.b(7) B is incorrect because the VIB, and the instrumentation powered from it, remain OPERABLE as long as the inverter is powering the Vital Bus. (P&L 3.5) The transfer of a VIB inverter takes 2/3 of 1 cycle, which is 11.1 milli seconds, which will not give enough time for the lights to respond on the instrumentation. D is incorrect because indication won't be lost, and 1D VIB is powered from 1B bus.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because the VIB, and the instrumentation powered from it, remain OPERABLE as long as the inverter is powering the Vital Bus. (P&L 3.5)</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The transfer of a VIB inverter takes 2/3 of 1 cycle, which is 11.1 milli seconds, which will not give enough time for the lights to respond on the instrumentation.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because indication won't be lost, and 1D VIB is powered from 1B bus.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S1.OP-SO.115-0013 (Rev 9) 1C Vital Instrument Bus UPS System Operation; S1.OP-AR.ZZ-0002 (Rev 28) Overhead Annunciator Window B | LO: 115VACE004, 115VACE005 | Source: Facility Exam Bank (Direct From Source); Vision Q111931 | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[115V AC]], [[Annunciators]]
- Related procedures: [[S1.OP-SO.115-0013 — 1C Vital Instrument Bus UPS System Operation]], [[S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B]]
- Related exam: [[2012 NRC Written Exam]]
