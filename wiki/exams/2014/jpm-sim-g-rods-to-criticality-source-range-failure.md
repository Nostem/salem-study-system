---
title: "2014 JPM Sim-g — Withdraw Control Rods to Criticality, and TCAF Failure of Source Range Hi Flux Trip to Block"
category: exams
status: draft
aliases:
  - 2014 JPM Sim-g
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-g — Withdraw Control Rods to Criticality, and TCAF Failure of Source Range Hi Flux Trip to Block</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 012 A4.03 (RO 3.8 / SRO 3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 20 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Salem Unit 2 is in Mode 2 performing a Rx startup by control rods IAW S2.OP-IO.ZZ-0003. The ICRR plot at the eight-fold position predicted criticality at 35 steps, which is the same as the Estimated Critical Rod Height. Rx Engineering predicts the Rx will go critical during the next rod pull of 25 steps. Control Bank D is at 25 steps.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator. Continue the startup at Step 5.3.18.D by withdrawing Control Bank D 25 steps or until the Rx is critical, then continue with procedure to raise power and stabilize the Rx at 1x10⁻⁸A in the Intermediate Range.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Identifies criticality during rod pull prior to withdrawing control bank D 25 additional steps.<br>2. Establishes an approximately 0.25 dpm SUR.<br>3. Inserts control rods to establish zero or negative SUR after determination that Source Range Channel B does not Block PRIOR to the Rx automatically tripping on High SR Flux.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:80px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.18.D *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">WITHDRAW Control Banks A, B and C STOPPING at the following hold points to obtain ICRR data: CBA Fully Withdrawn; RIL position; CBB Fully Withdrawn; CBD at 50 Steps OR the 8-Fold Rod Position; CBD withdrawal limited to #50 Step increments OR the 8-Fold Rod Position.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Announces withdrawing Control Bank D 25 steps or until criticality is achieved. Withdraws control rods while closely monitoring nuclear instrumentation, and stops withdrawing Control Bank D when identification of Rx criticality is observed. The Rx will be critical before Control Bank D have been withdrawn 25 steps.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.18.H</td>
<td style="padding:6px;color:#c8cdd5;">IF P-6 (Source Range Permissive) green light energizes....</td>
<td style="padding:6px;color:#9ca3af;">Note: P-6 will not energize at this point.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.19 *</span></td>
<td style="padding:6px;color:#c8cdd5;">When criticality is achieved: A. MAKE announcement twice on the plant PA System: "Attention all plant personnel, Unit 2 Reactor is critical." B. RECORD Criticality Date/Time. C. RECORD Surveillance Results IAW Acceptance Criteria.</td>
<td style="padding:6px;color:#9ca3af;">Announces the Rx is critical (PA announcement twice). Records date/time of criticality in Attachment 2 Section 3.0. Initials SAT column of Section 3.0 in Attachment 2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.20 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CONTINUE with Reactor Power ascension, with positive stable SUR NOT to exceed 1.0 dpm, by adjusting Control Bank "D" as needed.</td>
<td style="padding:6px;color:#9ca3af;">Withdraws Control Bank D to establish and maintain a stable positive startup rate of approximately 0.25 dpm SUR.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.21</td>
<td style="padding:6px;color:#c8cdd5;">OBSERVE source range and intermediate range levels on NIS for ≥ one decade overlap during performance of next step.</td>
<td style="padding:6px;color:#9ca3af;">Observes source range and intermediate range and identifies when at least 1 decade of overlap between them has occurred.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.22.B *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">When P-6 green light energized (2RP4, ½ IR channels at 10⁻¹⁰ amps): BLOCK Source Range High Flux Trip by depressing both "BLOCK SOURCE RANGE A" AND "BLOCK SOURCE RANGE B" pushbuttons on console. ENSURE Source Range Trains A&B TRIP BLOCKED blue light is illuminated on 2RP4 AND OHA E-5 SR DET VOLT TRBL alarms.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Selects one IR and one PR channel on NR-45. Depresses BLOCK SOURCE RANGE A AND BLOCK SOURCE RANGE B pushbuttons on console, and observes BLOCK SOURCE RANGE B light does NOT illuminate.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.22.D *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF Source Range Detector fails to Block, THEN INSERT Control Rods to stabilize Reactor Power.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Inserts control bank D to stop the power ascension and establishes a zero or negative SUR. Terminate the JPM when a zero or negative SUR is established, or after the Rx trips on High Source Range Flux at 1E5 cpm in the Source Range.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an <strong>alternate-path</strong> startup JPM with two discriminating actions. First, the applicant must <strong>recognize criticality during the rod pull</strong> — the Rx goes critical <strong>before</strong> Control Bank D has been withdrawn the full 25 steps, so the applicant must monitor NIS closely and stop the pull when criticality is identified (continuing to pull 25 steps fails the task). Second, when the source range overlaps the intermediate range and P-6 energizes, the applicant attempts to block the Source Range High Flux Trip and finds that <strong>BLOCK SOURCE RANGE B does NOT illuminate</strong> (Source Range Channel B fails to block, overridden in sim setup). The applicant must <strong>insert Control Bank D to drive SUR to zero or negative</strong> and stabilize power <strong>before the reactor automatically trips on High Source Range Flux at 1E5 cpm</strong>. Failing to identify criticality early, or failing to recognize the unblocked Source Range B and insert rods before the SR Hi Flux trip, fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-IO.ZZ-0003 (Rev 39) | Task: N1120170101 | K/A: 012 A4.03 — Reactor Protection System: Ability to manually operate and/or monitor in the control room (3.6/3.6) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-sim-g.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]], [[Excore NIs]]
- Related procedures: [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]]
- Related exam: [[2014 NRC Operating Exam]]
