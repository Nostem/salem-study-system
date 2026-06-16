---
title: "2012 Q92 — Inadvertent Deluge Turbine Building Fire Protection Response"
category: exams
status: draft
aliases:
  - 2012 Q92
  - 2012-Q92
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q92 — Inadvertent Deluge Turbine Building Fire Protection Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">086000A203 / A2.03 (RO 2.7 / SRO 2.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is in MODE 2 with a startup in progress.<br>
- Welding in the Unit 2 Turbine Building has caused an actual deluge actuation to occur in the Unit 2 Turbine Building.<br>
- The control room receives the following alarms:<br>
&nbsp;&nbsp;- OHA A-7 FIRE PROT FIRE<br>
&nbsp;&nbsp;- OHA A-15 FIRE PUMP 1/2 RUN<br>
&nbsp;&nbsp;- Coded Fire alarm 2-2-1 TURBINE GEN AREA -88' ELEV<br><br>
Which of the following identifies how the Fire Protection system has responded, and how should the CRS proceed?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> ONLY one diesel fire pump has started. Enter S2.OP-AB.FIRE-0001, Control Room Fire Response. Place BOTH Unit 1 and Unit 2 CAV in Fire Outside Control Area.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> ONLY one diesel fire pump has started. Enter S2.OP-AB.FP-0001, Fire Protection System Malfunction. The Unit startup will be have to be stopped due to the current capability of the Fire Protection system being degraded.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> BOTH diesel fire pumps have started. Enter S2.OP-AB.FIRE-0001, Control Room Fire Response. Place BOTH Unit 1 and Unit 2 CAV in Fire Outside Control Area.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> BOTH diesel fire pumps have started. Enter S2.OP-AB.FP-0001, Fire Protection System Malfunction. The Unit startup will be have to be stopped due to the current capability of the Fire Protection system being degraded.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> A deluge valve opening as stated in stem will cause FP system header pressure to lower to the point that #1 Fire pump will start at 85 psig, and will restore header pressure. Each Fire Pump is rated to supply all fire protection needs. The second Fire Pump will NOT start, as its auto start pressure is set at 75 psig. When the deluge occurs, the CRS will not know it is inadvertent. The CRS will respond to the auto start of the pump IAW ARP for A-7 FIRE PROT FIRE and A-15 based on the deluge valve opening. This directs implementation of AB.FIRE, which checks if the CR is affected, then directs placing CR ventilation in fire outside the CR. AB.FP is NOT entered, because there is no indication of a malfunction, but indication of a valid deluge valve actuation. The shutdown distracter is plausible because it is the action required in AB.FP if both normal and backup fire protection systems are unavailable. OHA A-15 annunciates when EITHER (or both) Fire Pumps start.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Only one diesel fire pump starting is correct, but AB.FP is NOT entered because there is no indication of a malfunction — there is indication of a valid deluge valve actuation; the unit startup does not have to be stopped.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> BOTH diesel fire pumps starting is incorrect — the second Fire Pump will NOT start since its auto start pressure is set at 75 psig and #1 pump restores header pressure after starting at 85 psig.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> BOTH diesel fire pumps starting is incorrect (second pump start setpoint 75 psig not reached), and AB.FP is not the procedure entered for a valid deluge actuation with no malfunction indication.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Control Room Fire Response — S2.OP-AB.FIRE-0001 (Rev 7); Fire Protection System Lesson Plan — NOS05FIRPRO-07 (Rev 7); Fire Protection System Malfunction — S2.OP-AB.FP-0001 (Rev 2) | LO: FIRPROE004 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Fire Protection]], [[CAV]]
- Related procedures: [[AB.FIRE-0001 — Control Room Fire Response]], [[AB.FP-0001 — Fire Protection System Malfunction]]
- Related exam: [[2012 NRC Written Exam]]
