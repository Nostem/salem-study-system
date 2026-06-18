---
title: Steam Dumps
category: systems
status: draft
aliases:
  - condenser steam dumps
  - steam dump valves
  - steam dump
---

# Steam Dumps

## Function & Design Basis

The Steam Dump System (Turbine Bypass System) relieves steam from the steam generators directly to the main condenser to reduce the sensible heat in the primary system following a load reduction not exceeding 50 percent (UFSAR §7.7.2.7). Its purpose is to reduce RCS transients following a substantial turbine load reduction by bypassing main steam directly to the condenser, thereby maintaining an artificial load on the steam generators; the Control Rod System can then reduce the reactor temperature to a new equilibrium value without causing overtemperature and/or overpressure conditions (UFSAR §7.7.2.7).

The bypass system can accommodate 40 percent of full load steam flow which, in conjunction with the 10-percent load-follow capability of the Reactor Control System, enables the Nuclear Steam Supply System to accept a 50-percent load rejection from full load without a reactor trip (UFSAR §7.7.2.7, §10.4.4). Following a reactor and turbine trip, decay heat and sensible heat stored in the reactor coolant are removed without actuating the steam generator safety valves by means of controlled steam dump to the condenser and injection of feedwater to the steam generators (UFSAR §7.7.2.7). The Steam Dump System also acts as a supplemental heat sink for a load reduction of up to 50 percent of rated load, including the 10-percent step load change capability of the NSSS, without a reactor trip (UFSAR §10.4.4).

The system is not required for safety (it resides in UFSAR §7.7, Control Systems Not Required for Safety) (UFSAR §7.7.2.7).

## Key Components

- **Turbine bypass (steam dump) valves** — 12 bypass valves are required, 4 per condenser shell. There is a limitation on the maximum flow permissible through any one valve of <span class="val-normal">1100000 lb/hr</span> should it fail in the open position (UFSAR §10.4.4). All steam-dump steam flows to the main condenser via the bypass lines (UFSAR §7.7.2.7).
- **Atmospheric (main steam) relief valves (MS10 / MSIO)** — a power-operated main steam relief valve is provided on each main steam line upstream of the MSIVs; total relief capacity for the 4-valve set equals 10 percent of full load flow. These remotely variable-setpoint valves can be used to bleed off reactor decay heat during cooldown when the condenser is unavailable (UFSAR §10.4.4).
- **Main steam safety valves** — five per main steam line with setpoints <span class="val-alarm">1070 / 1100 / 1110 / 1120 / 1125 psig</span>, total relief capacity equal to 100 percent of full load flow; back up the steam-dump path should a load drop exceed 50 percent or the MSIVs be closed under load (UFSAR §10.4.4).

The full-load average coolant temperature is significantly greater than the saturation temperature corresponding to the pressure setting of the steam generator safety valves; this, together with the thermal capacity of the primary system being greater than that of the steam system, requires a heat sink be available to prevent lifting the steam generator safety valves following a reactor/turbine trip (UFSAR §10.4.4).

## Power Supplies

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q34</div>
Steam Dump I/P converters are powered by <span class="hi-exam">C/D 115 VAC Instrument Bus</span>. Loss of power to the I/P converters causes the Steam Dumps to <span class="hi-exam">fail CLOSED</span>. Steam Dump <span class="hi-exam">blocking solenoids are powered from 125 VDC</span> (different power source than I/P converters). <span class="hi-trap">Trap: confusing I/P converter power (115 VAC) with blocking solenoid power (125 VDC). Also, steam dumps fail closed on loss of I/P power — not as-is.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q40</div>
Each TB40 Turbine Bypass Valve is rated for <span class="hi-exam">5.33% steam flow</span>. If 23TB40 fails fully open at 60% power, reactor power rises to approximately <span class="hi-exam">65.33%</span> (power follows steam flow — turbine control valves do NOT automatically compensate). Steam Dump Train A and Train B Arming/Blocking solenoids are <span class="hi-exam">in SERIES</span>. Depressing BEZEL "OFF & RESET BYPASS TAVG" Pushbutton <span class="hi-exam">A OR B</span> removes air pressure to 23TB40, causing it to close. <span class="hi-trap">Trap: if solenoids were in parallel, BOTH A AND B would need to be depressed. Since they are in series, either one is sufficient.</span>
</div>

## Automatic Features & Setpoints

The dump valves are modulated by the reactor coolant average temperature signal. The required number of steam-dump valves can be tripped quickly to stroke full open, or modulate, depending upon the magnitude of the temperature error signal resulting from loss of load (UFSAR §7.7.2.7). The error signal determines whether a group of valves is tripped open or modulated open; in either case they are modulated when the error is below the trip-open setpoints (UFSAR §7.7.2.7).

Two automatic controllers select on the basis of whether control rods are available:

### Load Rejection Controller (rods available)

When a load rejection occurs, if the difference between the required temperature setpoint of the RCS and the actual average temperature exceeds a predetermined amount, a signal actuates the load-rejection steam-dump controller. This circuit prevents a large increase in reactor coolant temperature following a large, sudden load decrease; the error signal is the difference between the lead/lag compensated auctioneered T<sub>avg</sub> and the reference T<sub>avg</sub>, and is based on turbine steamline inlet pressure (UFSAR §7.7.2.7). Following a sudden load decrease, T<sub>ref</sub> is immediately decreased and T<sub>avg</sub> tends to increase, generating an immediate demand signal for steam dump. Since control rods are available, steam dump terminates as the error comes within the maneuvering capability of the control rods; the steam-dump flow reduces proportionally as the rods reduce the average coolant temperature, and the artificial load is removed as T<sub>avg</sub> is restored to its programmed equilibrium value (UFSAR §7.7.2.7).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q50</div>
Main Generator trip at <span class="hi-exam">46% power (below P-9 ≈ 49%)</span>: causes a Main Turbine trip but <span class="hi-exam">NO reactor trip</span> (turbine-trip / Rx-trip is blocked below P-9). With no operator action, control rods insert in AUTO to lower Tave; steam dumps open in <span class="hi-exam">Average Temperature Control / Load Reject Control Mode</span>. With the MT tripped, the <span class="hi-exam">Tref signal (derived from Main Turbine Steamline inlet pressure) is set to 551°F</span> (the Load Reject Tref with a <span class="hi-exam">5°F dead band</span> over no-load Tref of <span class="val-normal">547°F</span>) — Tave stabilizes at ~<span class="hi-exam"><span class="val-normal">551°F</span></span> while dumps modulate to maintain Tave ≤5°F above 547°F. <span class="hi-exam">Rod Control T-error stops at &lt;1.0°F from program (547-548°F) since the rod program signal is also based on Turbine Steamline inlet pressure (now zero)</span>. <span class="hi-trap">~547°F is the Plant Trip Controller stabilization point — NOT applicable here because no reactor trip occurred. Reactor trip / TRIP-1 / TRIP-2 / TRIP-3 transitions are not entered.</span>
</div>

### Plant Trip (Turbine Trip) Controller (rods NOT available)

Following a turbine trip, as monitored by the turbine trip signal, the load-rejection steam-dump controller is defeated and the turbine-trip (plant-trip) steam-dump controller becomes active. Since control rods are not available in this situation, the demand signal is the error signal between the lead/lag compensated auctioneered T<sub>avg</sub> and the no-load reference T<sub>avg</sub>. When the error signal exceeds a predetermined setpoint, the dump valves are tripped open in a prescribed sequence; as the error reduces in magnitude (indicating RCS T<sub>avg</sub> is being reduced toward the reference no-load value) the dump valves are modulated by the plant-trip controller to regulate the rate of removal of decay heat and thus gradually establish the equilibrium hot shutdown condition (UFSAR §7.7.2.7).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q35</div>
Steam dump controller selection depends on which Reactor Trip Breaker opens: <span class="hi-exam">Plant Trip Controller activates when Reactor Trip Train B Breaker opens</span>. <span class="hi-exam">Load Rejection Controller activates when ONLY Reactor Trip Train A Breaker opens</span> (or neither breaker opens). The <span class="hi-exam">Load Rejection Controller has a 4&deg;F dead band</span> — it will stabilize RCS T<sub>AVG</sub> at <span class="hi-exam"><span class="val-normal">551&deg;F</span> (547&deg;F no-load T<sub>AVG</sub> + 4&deg;F dead band)</span>. The <span class="hi-exam">Plant Trip Controller has NO dead band</span> and will restore T<sub>AVG</sub> to <span class="val-normal">547&deg;F</span> (no-load T<sub>AVG</sub>). <span class="hi-trap">Trap: confusing which controller has the dead band (Load Rejection, not Plant Trip) and which trip breaker activates each controller (Train B = Plant Trip, Train A only = Load Rejection).</span>
</div>

### High Steam Flow / Lo-Lo Tavg Steamline Isolation Interaction

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q51</div>
Steam dumps failing FULL OPEN at 20% power pass ~52% steam flow, exceeding the <span class="hi-exam">Hi Steam Flow setpoint of 40% (0–20% power band)</span>; with coincident Lo Tavg (&lt;<span class="val-trip">543°F</span>) or Lo Steam Pressure (&lt;<span class="val-trip">600 psig</span>), an automatic Main Steamline Isolation signal is generated before the dumps turn off at 543°F.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q18</div>
<span class="hi-exam">MSLI signals for high steam flow with Lo-Lo Tavg CANNOT be blocked</span> — not even by manually actuating and resetting SI. If steam dump rate is too high during EOP-directed depressurization, high steam flow + P-12 (Lo-Lo Tavg) will actuate MSLI, closing all MSIVs and making steam dumps unavailable. Continue depressurization via MS10 atmospheric dump valves. High steamline differential pressure causes SI, not MSLI — different signals.
</div>

## Design Features & Interlocks

The T<sub>avg</sub> signal is the same as that used in the RCS; the lead/lag compensation for the T<sub>avg</sub> signal compensates for lags in the plant thermal response and in valve positioning (UFSAR §7.7.2.7). The dump valves are arranged so the error signal can either trip a group of valves full open or modulate them, providing the rapid heat-removal path that lets the NSSS accept a 50-percent load rejection without a trip (UFSAR §7.7.2.7).

Cooldown / heat-sink backup interlock: should the condenser not be available as a heat sink, the steam generator safety valves and power-operated relief valves (PORVs / MS10 atmospheric reliefs) open to dump steam to the atmosphere; when the safety valves reseat, the PORVs are used to remove residual heat and control steam pressure, with Auxiliary Feedwater maintaining steam generator level (UFSAR §10.4.4).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q52</div>
P-12 vs FW Interlock — what prevents over-cooling on an uncomplicated Rx trip from 100% power: <span class="hi-exam">P-12 is 3/4 RCS Tavgs &lt;<span class="val-alarm">543°F</span> and shuts the Steam Dump valves</span>. On an uncomplicated Rx trip, <span class="hi-exam">steam dumps modulate to control Tavg at ~547°F</span>, so RCS Tavg does NOT reach 543°F and P-12 does NOT actuate. The actual over-cooling protection comes from the <span class="hi-exam">Feedwater Interlock (auctioneered hi Tave &lt;554°F + reactor trip)</span>, which closes the BF19s and BF40 Feed Reg Valves to terminate feedwater.
</div>

## Effects of Loss / Malfunction

The relief capacity of the power-operated relief valves is sized large enough to limit system pressure to prevent actuation of the high-pressure reactor trip even for the most adverse conditions (most negative Doppler coefficient, minimum incremental rod worth) during a loss of load with steam dump (UFSAR §7.7.3.4). If the automatic steam dump cannot accommodate the abnormal load rejection (≤50 percent), reactor power is reduced automatically down to 15 percent of full power, the steam-dump flow reduction being as fast as the RCCAs are capable of inserting negative reactivity (UFSAR §7.7.3.4).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q61</div>
2PT-507 (Steam Header Pressure Transmitter) fails HIGH with steam dumps in <span class="hi-exam">MS PRESS mode</span>: controller sees high pressure → steam dump valves <span class="hi-exam">fully OPEN</span>. Following a Rx Trip, all steam dumps open → high steam flows → rapidly lowering RCS temperatures. When Tavg < <span class="val-trip">543°F</span>, <span class="hi-exam">MSLI and SI actuate</span> (high steam flow coincident with Lo-Lo Tavg). Simultaneously, <span class="hi-exam">P-12 (Lo-Lo Tavg) blocks all steam dumps closed</span>. <span class="hi-trap">Steam dumps will NOT re-open to cycle and maintain temperature — P-12 block holds them closed. Group 1 cooldown valves will not re-open until the operator manually selects BYPASS TAVG on both trains on 2CC3.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q43</div>
2PT-507 (Steam Header Pressure Transmitter) fails LOW: in <span class="hi-exam">MS PRESS mode</span>, controller sees low pressure → steam dump valves <span class="hi-exam">CLOSE</span> (modulate closed thinking pressure is already low). With steam dumps closed, <span class="hi-exam">SG pressure rises</span> due to reduced heat removal from the RCS. MS10 atmospheric dump valves will open to maintain SG pressure. <span class="hi-trap">In TAVG mode, PT-507 failure has no effect on steam dump operation — TAVG mode uses Tavg error signal, not steam pressure.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q51</div>
If the Steam Dumps fail to ARM on a turbine-trip-induced reactor trip, core heat drops rapidly and the <span class="hi-exam">SG Atmospheric Relief Valves (MS10s) open to establish RCS temperature ~551-552°F</span>. RCS pressure does NOT rise enough to open the PORVs or PZR Safeties; <span class="hi-exam">PZR spray opens rapidly and fully to hold RCS pressure below ~2335 psig</span>. See [[Main Steam]], [[Pressurizer & PRT]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q91</div>
A <span class="hi-exam">23TB40 turbine bypass valve failing 50% open during a 6% startup</span> (steam dumps in MS Pressure control - Manual) dumps excess steam and <span class="hi-exam">slowly cools the RCS — auctioneered high RCS Tavg drops below 541&deg;F</span>. This is the Tech Spec trigger: TSAS 3.1.1.4 requires Tavg ≥ 541&deg;F in Modes 1/2, so the crew must <span class="hi-exam">restore Tavg ≥541&deg;F within 15 minutes or be in Hot Standby within the next 15 minutes</span> (open the RTBs). See [[TS 3/4.1.1 — Boration Control]]. <span class="hi-trap">PZR pressure (1984 psig and lowering) is a distractor — the controlling Tech Spec is minimum temperature for criticality, not a PZR-pressure LCO.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #2</div>
A steam dump failure drives <span class="hi-exam">21–23 TB20 steam dumps fully open with no ability to shut or turn them off</span>. The uncontrolled steam dumping forces the crew to enter AB.STM-0001 and, per its CAS, <span class="hi-exam">trip the reactor and initiate an MSLI</span> to isolate the excessive steam flow. Demonstrates that an open, uncontrollable steam dump path is an excessive-steam-flow event requiring reactor trip and steamline isolation.
</div>

## Control-Room Operation

In the steam-pressure (cooldown) mode, the dumps are controlled by steam header pressure rather than T<sub>avg</sub> error to achieve a controlled cooldown rate; the operator establishes a steam-pressure setpoint and the dumps modulate to hold the main steam header at that setpoint (UFSAR §7.7.2.7, and see Exam — 2012 Q50 / 2014 Q52). Following a reactor/turbine trip the unit transfers heat to the condenser via steam dump while the operator remotely controls feedwater to maintain steam generator level; manual override of the dumps is available at all times (UFSAR §7.7.2.7).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q70</div>
BYPASS TAVG pushbuttons for post-LOCA cooldown: Train A and Train B BYPASS TAVG blocking solenoids are in <span class="hi-exam">SERIES</span> — <span class="hi-exam">BOTH A AND B must be depressed</span> to allow condenser steam dumps to function when TAVG &lt; <span class="val-trip">543 &deg;F</span>. Per EOP-LOCA-2 Step 11, cooldown rate limit is <span class="hi-exam">100 &deg;F/HR</span> (vs 50 &deg;F/HR for normal IOPs). <span class="hi-trap">Trap: the arming/disarming solenoids for individual TB40 valves are also in series (A OR B can disarm a single valve per Q19 Q40), but the BYPASS TAVG function requires BOTH trains — both bezel pushbuttons must be depressed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q50</div>
With Steam Dumps in AUTO MS Pressure control (startup, ~18% power, generator rolling unloaded), <span class="hi-exam">lowering the MS Dump pressure setpoint causes the dumps to open to lower header pressure to the new setpoint → higher steam flow, lower Tavg → positive reactivity → reactor power rises above 18%</span>. <span class="hi-trap">Rods are NOT in auto until &gt;P-2 (15% Turbine power, not online), so they remain in manual with no operator action.</span> See [[Main Steam]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q52</div>
In MS Pressure control (AUTO), <span class="hi-exam">raising the MS Dump Pressure setpoint causes the steam dumps to SHUT</span> to raise header pressure to the new setpoint. During an 18% startup (generator rolling unloaded), this lowers steam flow / raises Tavg → <span class="hi-exam">Rx power lowers to &lt;18%</span>. Rods stay in MANUAL (no auto rod control below P-2 / 15% turbine power).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-f</div>
EOP-TRIP-2 Step 19 Steam Dump Mode Shift (Condenser Steam Dumps available): <span class="hi-exam">place Steam Dumps in Manual, align the Steam Dump Valve demand "Press %" and "Tavg %", then select "MS Pressure Control", then return to Auto</span> — leaving the dumps in MS Pressure Control - Auto. Availability is based on circulators in service and condenser vacuum established.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-e</div>
EOP-FRHS-1 condensate pump feed: isolate all MS lines EXCEPT the selected SG (22 or 24 preferred). Place steam dumps in Manual, adjust valve demand to 0%, then place in <span class="hi-exam">MS Pressure Control</span>. Depressurize selected SG below <span class="hi-exam">575 psig</span>. Bypass <span class="hi-exam">Tavg Low-Low</span> when reached. When condensate flow established and WR level rising, place steam dumps in auto.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #2</div>
SGTR cooldown is initiated using the <span class="hi-exam">Steam Dumps in MS Pressure Control (Manual) at 25% demand</span>, bypassing Tavg on steam dump control when Tavg reaches 543°F. When the <span class="hi-exam">loss of offsite power</span> occurs (condenser/steam dumps unavailable), the crew re-establishes the cooldown on the intact-SG MS10 atmospheric reliefs instead.
</div>

## Connections

- Related systems: [[Main Steam]], [[RCS]], [[115V AC]], [[Feed & Condensate]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-TRIP-2 — Reactor Trip Response]]
- Related exam questions: [[2016 Q50]], [[2016 Q52]], [[2018 Q35]], [[2018 Q70]], [[2019 Q34]], [[2019 Q40]], [[2020 Q61]], [[2023 Q18]], [[2022 Q43]], [[2022 Q63]], [[2014 Q51]], [[2014 Q52]], [[2014 Q91]], [[2012 Q50]], [[2012 Q51]], [[2012 Q54]], [[2012 Q91]]
- Related JPMs: [[2023 JPM Sim-e]], [[2015 JPM Sim-f]]
- Related scenarios: [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2015 Scenario 3]], [[2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW]], [[2012 Scenario 2]], [[2012 Scenario 3]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]