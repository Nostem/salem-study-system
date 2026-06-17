---
title: 4KV
category: systems
status: draft
aliases:
  - 4KV vital buses
  - 4160V
  - vital buses
  - group buses
---

# 4KV

## Function

The 4160V AC distribution system is the backbone of plant AC power distribution. It supplies both non-safeguards Group Buses and safety-related Vital Buses, ensuring power to safeguards equipment during accident response. The Class 1E distribution system meets the intent of IEEE 308-1971. (UFSAR 8.3.1.2)

## Group Buses (Non-Safety)

- 4 sections
- Feed plant auxiliaries (non-safeguards loads)
- Powered from station power transformers (normal) or auxiliary power transformer (during operation)
- On unit trip, 4160V group buses automatically transfer from auxiliary transformer to station power transformer
(UFSAR 8.3.1.2)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q52</div>
The <span class="hi-exam">4KV Group buses are normally powered from the Aux Power Transformer (APT) while the Main Generator is operating; on a Main Turbine trip, when the 500KV output breakers open, the Group buses automatically swap to the Station Power Transformers</span> (off-site power). <span class="hi-trap">4KV VITAL buses do NOT swap on a turbine trip — they are already supplied from off-site source.</span> See [[500KV]], [[Main Turbine]], [[S2.OP-SO.4KV-0008 — 4KV Group Buses Power Supply Transfer]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q57</div>
4KV Group bus breaker control power comes from the DC system. <span class="hi-trap">Loss of a 4KV group bus 125 VDC control power leaves a running RCP breaker unable to trip on demand</span> (no 125VDC to energize the trip coil); the alternate DC control power supply must be transferred manually. See [[DC Power]], [[RCPs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q93</div>
CW bus loss scenario: when the 4KV infeed breaker to the 24 CW bus fails open, the bus auto-transfers to the 23 CW bus. However, <span class="hi-exam">all 'B' circulator breakers trip open on undervoltage during the transfer</span> and must be manually restarted. With one CW pump already C/T, this results in <span class="hi-exam">4 or more circulators out of service</span>. Per AB.CW-0001 Attachment 1, with 4+ circulators OOS at P-10 or above: <span class="hi-exam">trip the reactor and enter EOP-TRIP-1</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-e</div>
Group-bus SPT-to-APT transfer (S2.OP-SO.4KV-0008): per 4KV Group Bus, <span class="hi-exam">PRESS the Mimic Bus GROUP BUS INFEED breaker pushbutton and ENSURE the MIMIC BUS INTLK CLOSE SELECTION bezel illuminates, then PRESS the breaker CLOSE pushbutton and verify the SPT-side breaker (e.g. 21 ESD / 21 FSD) is OPEN, the APT-side breaker (2AEGD / 2BFGD) is CLOSED, and bus voltage is 4.22 - 4.36KV</span>. APT voltage must be 4.22 - 4.36KV before transfer. <span class="hi-exam">A failure of the 2BFGD breaker to close de-energizes the 2F Group Bus and trips its RCPs, generating a Rx trip demand (OHA F-10, RC LO FLO OR RCP BKR OPEN, and P-7); if the reactor fails to auto-trip (ATWT), manually trip it immediately</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-g</div>
4KV Group Bus transfer from SPT to APT (S2.OP-SO.4KV-0008, R13): at 18% power / 160 MWe, Rod Control in Manual (D-147), Steam Dumps in MS Pressure Mode-Auto at <span class="hi-exam">970 psig</span>. P&L 3.3: OHA J-39 (GROUP BUS XFER FAIL) illuminates then clears on normal transfer. <span class="hi-exam">Alternate path: 2G Group Bus fails to transfer</span>, de-energizing bus and tripping <span class="hi-exam">24 RCP</span>. OHAs: J-8 (2G 4KV GRP BUS DIFF/OVRLD), J-38 (4KV GRP BUS UNDRVOLT), J-39, D-31 (24 RCP BKR OPEN/FLO LO). ARP J-39 → J-38 Step 3.5 or D-31: IF ANY RCP trips → <span class="hi-exam">TRIP Reactor → GO TO EOP-TRIP-1</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-h</div>
4KV Group Bus transfer from SPT to APT (S2.OP-SO.4KV-0008): verify APT voltage <span class="hi-exam">4.22 - 4.36KV</span>. P&L 3.3: OHA J-39 (GROUP BUS XFER FAIL) illuminates then clears during normal transfer. <span class="hi-exam">Alternate path: 2G Group Bus fails to transfer</span>, de-energizing bus and tripping <span class="hi-exam">24 RCP</span>. OHA alarms: J-8 (2G 4KV GRP BUS DIFF/OVRLD), J-38 (4KV GRP BUS UNDRVOLT), J-39, D-31 (24 RCP BKR OPEN/FLO LO). ARP for J-38 or D-31: IF ANY RCP trips → <span class="hi-exam">TRIP Reactor → GO TO EOP-TRIP-1</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-8</div>
Electrical fault on the infeed breaker to the <span class="hi-exam">2E 4KV Group Bus</span> deenergizes the bus 60 s after a spurious OHA A-7 fire alarm. Loss of 2E results in loss of <span class="hi-exam">22 RCP</span> — the reactor trips on <span class="hi-exam">RCS Low Flow</span>. SI is not required at the trip; immediate actions of EOP-TRIP-1 are performed and crew transitions to EOP-TRIP-2. NEO and Fire Protection investigate Zone 33 (Turb Bldg West El 100) and report only a strong acrid smell — no fire. (Note: the bus loss also stops <span class="hi-exam">23 RCP</span> due to its 2E feed, eliminating normal PZR spray capability later in the scenario.)
</div>

## Vital Buses (Safety-Related)

- 3 sections per unit (A, B, C)
- Feed safeguards equipment (ECCS pumps, containment spray, etc.)
- Each vital bus fed from station power transformers (T13/T14 for Unit 1, T23/T24 for Unit 2)
- Two station power transformers per unit — each can supply vital buses
- In-feed breakers electrically interlocked to prevent paralleling through a vital bus
- Each vital bus backed by a dedicated diesel generator
(UFSAR 8.3.1.2)

## Safeguards Sequence

On SI signal with loss of offsite power:
1. Diesel generators auto-start
2. Vital bus loads shed
3. Diesel generators connect to vital buses
4. Safeguards loads sequenced on in prescribed order and time delays
5. Ensures diesel generators not overloaded during accident response
(UFSAR 7.3, 8.3)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q43</div>
A 2/3 4KV vital-bus undervoltage (&lt;70%) places <span class="hi-exam">all 3 4KV vital buses in SEC Mode II Blackout</span>; a following SI escalates to SEC Mode III (EDG breaker opens, loads stripped, EDG breaker recloses, safeguards loads sequenced). See [[SECs]], [[EDGs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q47</div>
EDG paralleled to grid during surveillance: when LOOP occurs, SEC actuates in <span class="hi-exam">Mode 2 (Blackout)</span>. EDG output breaker <span class="hi-exam">opens</span>, diesel remains running, SEC opens both infeed breakers, strips all loads from the 4KV vital bus, then <span class="hi-exam">automatically recloses the output breaker</span> and re-starts loads using the SEC load sequencer. <span class="hi-trap">The output breaker does NOT remain closed during a LOOP even though the EDG was already paralleled. The SEC strips and re-sequences the bus regardless of EDG test status.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
Following the false-SI reactor trip, the <span class="hi-exam">2C 4KV vital bus de-energizes on undervoltage</span> and is re-energized from the <span class="hi-exam">2C EDG</span> via its SEC. By the time the crew transfers to cold leg recirculation in [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]], <span class="hi-exam">all three vital busses are energized</span> (2C from its EDG).
</div>

## SPT Transfer Relay Behavior

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q19</div>
SPT failure to 0 VAC transfer behavior: when 23 SPT fails to 0 VAC, the SPT transfer relay de-energizes, enabling automatic fast bus transfer. The 23 SPT Supply Breaker (23ASD) opens at <span class="hi-exam">&lt; <span class="val-trip">70%</span> of normal voltage</span> (fast bus transfer relay setpoint). After 23ASD opens, the <span class="hi-exam">35% permissive</span> allows 24ASD to close, transferring the 2A 4KV Vital Bus to <span class="hi-exam">24 SPT</span>. <span class="hi-trap">Trap: EDG 2A does NOT power the bus in this case — the alternate SPT (24 SPT) is available and the SPT transfer relay de-energized (enabling auto transfer). EDG start only occurs when BOTH SPT infeed breakers are open. 35% is the permissive setpoint for the alternate SPT breaker to close, NOT the trip setpoint for the normal SPT breaker.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q21</div>
When 23ASD (23 SPT Supply Breaker to 2A 4KV Vital Bus) spuriously opens while <span class="hi-exam">23 SPT is at normal voltage, the 23SPT transfer relay remains energized</span>. This prevents an automatic transfer of the 2A 4KV Vital Bus to the 24 SPT. The 2A 4KV Bus de-energizes and the <span class="hi-exam">2A EDG starts and powers the bus via the 2A SEC operating in Mode II*</span>. <span class="hi-trap">Trap: auto transfer to the alternate SPT only occurs if the SPT transfer relay de-energizes (indicating SPT voltage loss). With the SPT still energized but the breaker open, the relay stays energized and blocks the transfer.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-g</div>
<strong>Energize 2A 4KV Vital Bus from 24 SPT</strong> during recovery from Loss of All AC Power (EOP-LOPA-1 Step 16). After EDG-to-SPT swap per S2.OP-SO.DG-0001 §5.8, S2.OP-SO.4KV-0001 §5.3.6 procedure: <span class="hi-exam">(1) NEO racks up 2AD1AX24ASD (24 STATION POWER TRANSFORMER INFEED BREAKER) at 64' Swgr Rm; (2) press Mimic Bus 2A VITAL INFEED 24ASD pushbutton — Console Bezel 24ASD MIMIC BUS INTLK CLOSE SELECTION illuminates (interlock armed); (3) press AND HOLD control console 24ASD CLOSE pushbutton until 24ASD indicates CLOSED</span>. Verify: bezel light extinguishes; 2A 4KV Vital Bus voltage within band <span class="hi-exam">4.275–4.336KV (normal)</span> or <span class="hi-exam">4.330–4.417KV (single source of off-site power)</span>; OHA J-17 (2A 4KV VTL BUS UNDRVOLT) clears.
</div>

## Voltage Protection

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q55</div>
24 SPT degrades to <span class="val-alarm">3600V</span> with 2B Vital Bus aligned to 24 SPT after SI/SEC reset (EDGs running unloaded): <span class="hi-exam">3600V is below the degraded voltage (95%) relay setpoint</span> so the relay generates a UV signal for 2B bus. <span class="hi-exam">3600V is NOT &lt;70% of nominal</span> (70% = 2912V), so the vital bus fast transfer relay does NOT energize and 2B does NOT fast-transfer to 23 SPT. With SI already RESET, the SEC cannot actuate in Mode III. The <span class="hi-exam">2B SEC actuates and strips 2B 4KV bus from offsite power, loading the bus from its EDG</span> in BLACKOUT loading (Mode II* — Single Bus UV).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q47</div>
Degraded voltage relays actuate at <span class="val-alarm">&lt; 95%</span> of nominal 4160V (sustained for <span class="hi-exam">&gt; 13 seconds</span>). Fast bus transfer relays actuate at <span class="hi-exam">&lt; 70%</span> of nominal. When degraded voltage is detected on a single bus (e.g., 3600V from failing SPT), and <span class="hi-exam">SI and SECs have been reset</span>, the SEC actuates in <span class="hi-exam">Mode II* (Single Bus Degraded UV)</span> — strips the bus from offsite power and loads it onto its EDG. <span class="hi-trap">Mode III and Mode IV require an active SI signal — after SI/SEC reset, SEC can only actuate in Mode I (Blackout) or Mode II* (Single Bus Degraded UV). 3600V is above the 70% fast transfer threshold (2912V) so no fast transfer occurs.</span>
</div>

## 1A 4KV Bus Loads

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q49</div>
The 460V Vital Buses are fed from their respective 4KV Vital Buses. With the <span class="hi-exam">1A 4KV Vital Bus locked out on bus differential, the 1A 460V Vital Bus (and its 11 Hydrogen Recombiner) is de-energized</span>; the 1B 4KV / 1B 460V remain energized, so only 12 Recombiner is available.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q61</div>
On a single 4KV vital-bus UV / Bus Differential lockout, only that bus loads in blackout sequencing. <span class="hi-exam">Loss of the A bus deenergizes its SW pumps, and the standby AUTO SW pump on another bus starts on low SW header pressure</span>. See [[Service Water]], [[SECs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q69</div>
<span class="hi-exam">Unit 1 SW pump power assignments are reversed from Unit 2</span> (U1: C,C,B,A,A; U2: A,A,B,B,C,C). After a 500KV loss + 1A bus Bus-Differential trip + SI, the A-bus SW pumps (15, 16) lose power and the AUTO-selected pump is locked out by SEC initiation. See [[Service Water]], [[SECs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q53</div>
Unit 1 — 1A 4KV Vital Bus powers <span class="hi-exam">15 and 16 SW Pumps</span> (associated with #3 SW Bay). A 1A Bus Differential with #3 SW Bay already C/Ted has <span class="hi-exam">no additional impact on SW operation</span> because 15 and 16 SW Pumps are already isolated. <span class="hi-exam">12 SW Pump (C Bus) auto-starts on low SW header pressure</span> when 13 SW Pump trips, maintaining SW flow. Correct procedure entry: AB.4KV-0001, Loss of 1A 4KV Vital Bus. <span class="hi-trap">Unit difference: on Unit 2, the 2A bus powers 21 and 22 SW pumps (not associated with a single bay) — a 2A bus loss impacts operating SW pumps directly.</span>
</div>

## 2B 4KV Bus Loads

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q57</div>
When the "B" SEC loads the 2B 4KV bus in the <span class="hi-exam">II* Mode</span>, 3 minutes later (no operator action): <span class="hi-exam">Rx power &gt;100%</span> from the auto-start of 22 AFP on SEC mode II*; <span class="hi-exam">22 CC pump running</span> (powered off 2B vital, starts on II*); <span class="hi-exam">SGBD flows = 0 gpm</span> (SGBD isolation on auto AFW pump start); and <span class="hi-exam">MTLO outlet temp rising</span> because 2SW26 closes, lowering cooling water to the MTLO cooler to none. <span class="hi-trap">22SW122 does NOT close on blackout; 22 RHR/22 CS pumps do not start in this mode.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q22</div>
Confirms 2B bus powers <span class="hi-exam">22 RHR Pump</span> and 2C bus powers <span class="hi-exam">22 SI Pump</span>. With EDG 2B unable to start following RT/SI + LOOP: 2A and 2C buses powered from their EDGs, 2B bus de-energized. Result at 15 minutes: <span class="hi-exam">22 RHR Pump stopped (2B bus), 22 SI Pump running (2C bus)</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q12</div>
Key loads on the 2B 4KV Vital Bus include: <span class="hi-exam">22 RHR Pump</span>. During a Reactor Trip + SI coincident with LOOP with EDG 2C unavailable, 2A and 2B buses are powered from EDG 2A and EDG 2B. <span class="hi-exam">22 RHR Pump (2B bus) is running; 22 SI Pump (2C bus) is stopped</span> because EDG 2C cannot be started. <span class="hi-trap">Common confusion: 22 RHR is on the B bus (not C), and 22 SI is on the C bus (not B). Pump number does NOT always match bus letter.</span>
</div>

## 2C 4KV Bus Loads

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q9</div>
MSLB + LOOP with 2C 4KV Vital Bus lost (OHA J-3, 2C 4KV VTL BUS DIFF PROT): confirms 2C bus loads lost include <span class="hi-exam">22 CS Pump, 23 CFCU, and 25 CFCU</span>. Only <span class="hi-exam">21 CS Pump (A bus)</span> and <span class="hi-exam">22 &amp; 24 CFCUs (B bus)</span> remain for containment cooling — <span class="hi-exam">design bases NOT met</span> (requires 3 CFCUs + 1 CS pump).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q29</div>
Key loads on the 2C 4KV Vital Bus include: <span class="hi-exam">22 Charging Pump, 22 SI Pump, 22 Containment Spray Pump</span>. On loss of 2C bus (bus differential), these loads are lost. Charging pump availability: <span class="hi-exam">21 CV Pump (2B bus) and 23 CV Pump (2A 460V bus) remain available</span>. <span class="hi-trap">23 CV Pump is powered from the 2A 460V bus, NOT from a 4KV bus — it remains available on loss of any 4KV bus.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.8 — Electrical]]** — TS 3.8.3.1 requires vital buses energized and OPERABLE

## Exam & Operating Coverage

### 2A 4KV Bus Loss Response

**Exam & operating coverage:**

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-g</div>
Loss of 2A 4KV Vital Bus response per AB.4KV-0001: A EDG auto-starts. 23 Charging Pump was providing seal injection/charging to Unit 2 (lost on bus loss). Close <span class="hi-exam">2CV55</span>, then start <span class="hi-exam">21 Charging Pump</span>. Alternate path: 21 Charging Pump <span class="hi-exam">trips on start</span> → start <span class="hi-exam">22 Charging Pump</span> to restore RCP seal injection and charging flow. Note: 2CV55 has ~2 minute stroke time.
</div>

### RCP Breaker & 4KV Bus Mechanics

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q31</div>
An RCP's <span class="hi-exam">4KV breaker requires its closing springs charged to close</span> — trip springs being uncharged does NOT prevent the RCP from starting (a 2015 Q31 distractor). The actual start interlock is RCP Oil Lift Pump discharge pressure at least 500 psig. See [[RCPs]].
</div>

### PZR Backup Heater Emergency Feeds

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q39</div>
PZR backup heater emergency feeds from the 4KV vital buses (via 460V): <span class="hi-exam">21 Backup Heater Group emergency-feeds from the 2C vital bus; 22 Backup Heater Group emergency-feeds from the 2A vital bus</span>. If the <span class="hi-exam">2A 4KV Vital Bus fails to reenergize after a LOOP, only 21 Backup Heater Group is available</span> to maintain PZR pressure. <span class="hi-trap">Control Group heaters (2G non-vital) have no emergency supply.</span>
</div>

## Connections

- Related systems: [[500KV]], [[460/230V AC]], [[EDGs]], [[SECs]], [[TS 3/4.8 — Electrical]]
- Related procedures: [[AB.CW-0001 — Circulating Water Malfunction]], [[AB.4KV-0001 — Loss of 4KV Vital Bus]], [[AB.4KV-0003 — Loss of 2C 4KV Bus]], [[S2.OP-SO.4KV-0008 — 4KV Group Buses Power Supply Transfer]], [[S2.OP-SO.4KV-0001 — 4KV Vital Bus Operation]], [[S2.OP-SO.DG-0001 — Diesel Generator Operation]], [[S2.OP-SO.PZR-0010 — Pressurizer Backup Heaters Power Supply Transfer]]
- Related exam questions: [[2016 Q55]], [[2018 Q11]], [[2018 Q14]], [[2018 Q19]], [[2018 Q22]], [[2018 Q29]], [[2018 Q66]], [[2019 Q12]], [[2019 Q13]], [[2019 Q19]], [[2019 Q21]], [[2020 Q9]], [[2020 Q29]], [[2020 Q47]], [[2020 Q48]], [[2020 Q53]], [[2023 Q88]], [[2023 Q93]], [[2022 Q47]], [[2015 Q31]], [[2015 Q43]], [[2015 Q57]], [[2015 Q61]], [[2015 Q69]], [[2014 Q49]], [[2014 Q57]], [[2012 Q11]], [[2012 Q39]], [[2012 Q52]]
- Related JPMs: [[2016 JPM Sim-g]], [[2016 JPM IP-k]], [[2018 JPM Sim-g]], [[2022 JPM Sim-g]], [[2020 JPM Sim-h]], [[2015 JPM Sim-e]]
- Related scenarios: [[2012 Scenario 1]], [[2012 Scenario 2]], [[2017 Scenario 8]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2015 Scenario 3]], [[2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2017 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
