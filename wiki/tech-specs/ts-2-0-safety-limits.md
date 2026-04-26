---
title: "TS 2.0 — Safety Limits and LSSS"
category: tech-specs
status: draft
aliases:
  - safety limits
  - LSSS
  - reactor trip setpoints
  - trip setpoint table
---

# TS 2.0 — Safety Limits and Limiting Safety System Settings

## 2.1 Safety Limits

### Reactor Core (2.1.1)

<div class="callout callout-important">
<div class="callout-label">Safety Limit 2.1.1</div>
The combination of THERMAL POWER, pressurizer pressure, and the highest operating loop coolant temperature (Tavg) shall not exceed the limits shown in Figure 2.1-1 for 4-loop operation.
</div>

**Applicability:** Modes 1 and 2

**Action:** If exceeded, be in Hot Standby within <span class="val-trip">1 hour</span>.

### RCS Pressure (2.1.2)

<div class="callout callout-important">
<div class="callout-label">Safety Limit 2.1.2</div>
RCS pressure shall not exceed <span class="hi">2735 psig</span>.
</div>

**Applicability:** Modes 1, 2, 3, 4, and 5

**Actions:**
- Modes 1 and 2: Be in Hot Standby with RCS pressure within limit within <span class="val-trip">1 hour</span>
- Modes 3, 4, and 5: Reduce RCS pressure to within limit within <span class="val-trip">5 minutes</span>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q43</div>
SL 2.1.2 RCS Pressure Safety Limit = <span class="hi-exam">2735 psig</span>. Mode 3 action: reduce RCS pressure within limit within <span class="hi-exam">5 minutes</span>. Modes 1 and 2 action: within <span class="hi-exam">1 hour</span> (60 minutes). <span class="hi-trap">Trap: 2485 psig is the PZR safety valve setpoint, NOT the RCS Safety Limit. Candidates confuse 5 minutes (Modes 3-5) with 60 minutes (Modes 1-2).</span>
</div>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 2.1 Safety Limits</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 2.1</div>

**2.1.1 Reactor Core:**

<span class="hi-exam">The reactor core safety limit prevents overheating of the fuel and possible cladding perforation which would result in the release of fission products to the reactor coolant. Overheating of the fuel cladding is prevented by restricting fuel operation to within the nucleate boiling regime where the heat transfer coefficient is large and the cladding surface temperature is slightly above the coolant saturation temperature.</span>

<span class="hi-exam">Operation above the upper boundary of the nucleate boiling regime could result in excessive cladding temperatures because of the onset of departure from nucleate boiling (DNB) and the resultant sharp reduction in heat transfer coefficient. DNB is not a directly measurable parameter during operation; therefore THERMAL POWER, Reactor Coolant Temperature, and Pressure have been related to DNB through correlations developed to predict the DNB flux and the location of DNB for axially uniform and non-uniform heat flux distributions. The local DNB heat flux ratio, DNBR, defined as the ratio of the heat flux that would cause DNB at a particular core location to the local heat flux, is indicative of the margin to DNB.</span>

<span class="hi-exam">The DNB design basis: uncertainties in the WRB-1 and WRB-2 correlations, plant operating parameters, nuclear and thermal parameters, fuel fabrication parameters, and computer codes are considered statistically such that there is at least a <span class="hi">95% probability with 95% confidence level</span> that DNBR will not occur on the most limiting fuel rod during Condition I and II events.</span>

The safety limit curves show loci of THERMAL POWER, RCS pressure, and average temperature for which the minimum DNBR is no less than the design DNBR value, or the average enthalpy at the vessel exit equals the enthalpy of saturated liquid. When the axial power imbalance is not within tolerance, the axial power imbalance affect on the Overtemperature delta-T trips will reduce the setpoints to provide protection consistent with core safety limits.

**2.1.2 RCS Pressure:**

<span class="hi-exam">The RCS pressure safety limit of <span class="hi">2735 psig</span> protects the integrity of the Reactor Coolant System from overpressurization and prevents the release of radionuclides contained in the reactor coolant from reaching the containment atmosphere.</span>

The reactor pressure vessel and pressurizer are designed to Section III of the ASME Code for Nuclear Power Plant, which permits a maximum transient pressure of <span class="hi">110% (2735 psig) of design pressure</span>. RCS piping and fittings are designed to ANSI B 31.1 1955 Edition; valves are designed to ANSI B 16.5, MSS-SP-66-1964, or ASME Section III-1968, which permit maximum transient pressures of up to <span class="hi">120% (2985 psig)</span> of component design pressure. The entire RCS is hydrotested at <span class="hi">3107 psig (125% of design pressure)</span> to demonstrate integrity prior to initial operation. *(Amendment No. 197)*
</div>
</details>

## 2.2 Reactor Trip System Instrumentation Setpoints (Table 2.2-1)

| # | Functional Unit | Trip Setpoint | Allowable Value |
|---|----------------|---------------|-----------------|
| 1 | Manual Reactor Trip | N/A | N/A |
| 2 | Power Range Neutron Flux (Low) | ≤<span class="val-trip">25%</span> RTP | ≤26% RTP |
| 2 | Power Range Neutron Flux (High) | ≤<span class="val-trip">109%</span> RTP | ≤110% RTP |
| 3 | Power Range High Positive Rate | ≤<span class="val-trip">5%</span> RTP (τ ≥ 2 sec) | ≤5.5% RTP |
| 5 | Intermediate Range Neutron Flux | ≤<span class="val-trip">25%</span> RTP | ≤38.5% RTP |
| 6 | Source Range Neutron Flux | ≤<span class="val-trip">10⁵ cps</span> | ≤1.44 x 10⁵ cps |
| 7 | Overtemperature Delta-T | See Note 1 | See Note 3 |
| 8 | Overpower Delta-T | See Note 2 | See Note 4 |
| 9 | Pressurizer Pressure — Low | ≥<span class="val-trip">1865 psig</span> | ≥1855 psig |
| 10 | Pressurizer Pressure — High | ≤<span class="val-trip">2385 psig</span> | ≤2395 psig |
| 11 | Pressurizer Water Level — High | ≤<span class="val-trip">92%</span> of instrument span | ≤93% |
| 12 | Loss of Flow | ≥<span class="val-trip">90%</span> of design flow per loop | ≥89% |
| 13 | SG Water Level — Low-Low | ≥<span class="val-trip">14.0%</span> NR span | ≥13.0% NR span |
| 15 | Undervoltage — RCPs | ≥<span class="val-trip">2900 volts</span> each bus | ≥2850 volts |
| 16 | Underfrequency — RCPs | ≥<span class="val-trip">56.5 Hz</span> each bus | ≥56.4 Hz |
| 17A | Turbine Trip — Low Auto Stop Oil | ≥<span class="val-trip">45 psig</span> | ≥45 psig |
| 17B | Turbine Trip — Stop Valve Closure | ≤<span class="val-trip">15%</span> off full open | ≤15% |

*Design flow is 82500 gpm per loop.*

### OT Delta-T Trip Setpoint (Note 1)

K1 = <span class="hi">1.22</span>, K2 = 0.02037, K3 = 0.001020

T' (reference Tavg at RTP) = <span class="hi">≤577.9°F</span>

P' (indicated RCS nominal operating pressure) = <span class="hi">2235 psig</span>

Lead-lag time constants: τ1 = 30 sec ±10%, τ2 = 4 sec ±10%

f1(delta-I) deadband: -33% to +11%. Beyond deadband: -2.34%/% (negative) and -2.37%/% (positive).

### OP Delta-T Trip Setpoint (Note 2)

K4 = <span class="hi">1.09</span>, K5 = 0.02/°F (increasing Tavg), K6 = 0.00149/°F (T > T")

Rate-lag time constant: τ3 = 10 sec ±10%

f2(delta-I) = 0 for all delta-I

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 2.2 Reactor Trip System Instrumentation Setpoints</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 2.2</div>

<span class="hi-exam">The Trip Setpoints are the nominal values at which the bistables are set. A bistable is properly adjusted when the "as-left" value is within the band for CHANNEL CALIBRATION accuracy (± rack calibration + comparator setting accuracy).</span>

<span class="hi-exam">Trip Setpoints and Allowable Values are conservatively adjusted with respect to the analytical limits to account for: calibration tolerances, instrumentation uncertainties, instrument drift, and severe environment errors for RPS channels that must function in harsh environments (10 CFR 50.49). The methodology is consistent with ISA-S67.04-1982, endorsed via NRC Regulatory Guide 1.105, Rev. 2.</span>

The actual nominal Trip Setpoint entered into the bistable is more conservative than the Allowable Value to account for changes in random measurement errors (e.g., drift during the surveillance interval) detectable by a CHANNEL FUNCTIONAL TEST. If the measured setpoint does not exceed the Allowable Value, the bistable is considered OPERABLE.

**Manual Reactor Trip:** Redundant channel to automatic protective instrumentation; provides manual reactor trip capability.

**Power Range Neutron Flux (High):** <span class="hi-exam">Provides core protection against reactivity excursions too rapid to be protected by temperature and pressure protective circuitry.</span>

**Power Range Neutron Flux (Low):** <span class="hi-exam">Provides redundant protection in the power range for a power excursion beginning from low power. May be manually bypassed when P-10 is active (two of four power range channels indicate above approximately <span class="hi">9% RTP</span>); automatically reinstated when P-10 becomes inactive (three of four channels indicate below approximately 9% RTP).</span>

**Power Range High Positive Rate:** <span class="hi-exam">Provides protection against rapid flux increases characteristic of rod ejection events from any power level. Complements Power Range High and Low trips for rod ejection from partial power.</span>

**Intermediate and Source Range Neutron Flux:** <span class="hi-exam">Provide core protection during reactor startup. Source Range initiates reactor trip at approximately <span class="hi">10⁵ counts per second</span> unless manually blocked when P-6 becomes active. Intermediate Range initiates trip at approximately <span class="hi">25% RTP</span> unless manually blocked when P-10 becomes active. No credit taken in accident analyses for these trips; required to enhance overall RPS reliability.</span>

**Overtemperature delta-T:** <span class="hi-exam">Provides core protection to prevent DNB for all combinations of pressure, power, coolant temperature, and axial power distribution, provided the transient is slow with respect to piping transit delays from the core to temperature detectors (approximately <span class="hi">4 seconds</span>), and pressure is within the range between High and Low Pressure reactor trips. Includes corrections for changes in density and heat capacity of water with temperature and dynamic compensation for piping delays.</span> With normal axial power distribution, this reactor trip limit is always below the core safety limit. If axial peaks are greater than design (as indicated by top-bottom power range detector difference), the reactor trip is automatically reduced.

**Overpower delta-T:** <span class="hi-exam">Provides assurance of fuel integrity (no melting) under all possible overpower conditions, limits the required range for Overtemperature delta-T protection, and provides a backup to the High Neutron Flux trip. As a result of the new AREVA steam generators, credit is taken for operation of this trip in accident analyses for protection of the reactor core following a main steam line break.</span>

**Pressurizer Pressure (High):** <span class="hi-exam">Backed up by pressurizer code safety valves for RCS overpressure protection; set lower than the pressurizer safety valve set pressure (<span class="hi">2485 psig</span>).</span>

**Pressurizer Pressure (Low):** Provides protection by tripping the reactor in the event of a loss of reactor coolant pressure.

**Pressurizer Water Level (High):** <span class="hi-exam">Ensures protection against RCS overpressurization by limiting the water level to a volume sufficient to retain a steam bubble and prevent water relief through pressurizer safety valves. No credit taken in accident analyses; required to enhance RPS reliability.</span>

**Loss of Flow:** <span class="hi-exam">Provides core protection to prevent DNB in the event of a loss of one or more RCPs. Above <span class="hi">11% RTP</span> (P-7 equivalent), reactor trip occurs if flow in any two loops drops below 90% of nominal full loop flow. Above <span class="hi">36% RTP</span> (P-8), reactor trip occurs if flow in any single loop drops below 90% of nominal full loop flow. Three-loop operation above the 4-loop P-8 setpoint has not been evaluated and is not permitted.</span>

**SG Water Level Low-Low:** <span class="hi-exam">Prevents operation with SG water level below the minimum volume required for adequate heat removal capacity. The setpoint provides allowance that sufficient water inventory will be in the steam generators at the time of trip to allow for starting delays of the auxiliary feedwater system.</span>

**Undervoltage and Underfrequency — RCP Busses:** <span class="hi-exam">Provide core protection against DNB resulting from loss of voltage or underfrequency to more than one RCP. Specified setpoints assure a reactor trip signal is generated before the low flow trip setpoint is reached. Time delays are incorporated to prevent spurious trips from momentary electrical transients. For undervoltage: time delay set so signal reaches reactor trip breakers within <span class="hi">0.9 seconds</span> following simultaneous trip of two or more RCP bus circuit breakers. For underfrequency: time delay set so signal reaches reactor trip breakers within <span class="hi">0.3 seconds</span> after the underfrequency setpoint is reached.</span>

**Turbine Trip:** <span class="hi-exam">Causes a direct reactor trip when operating above P-9. No credit taken in accident analyses; required to enhance RPS reliability.</span>

**Safety Injection Input from ESF:** If a reactor trip has not already been generated by RPS, ESF automatic actuation logic will initiate a reactor trip upon any signal that initiates a safety injection. Provided to protect the core in the event of a LOCA.

**RCP Breaker Position Trip:** <span class="hi-exam">An anticipatory trip providing core protection against DNB resulting from opening of two or more pump breakers above P-7. Blocked below P-7. No credit taken in accident analyses; required to enhance RPS reliability.</span> *(Amendment Nos. 197, 261)*
</div>
</details>

---

<a href="/salem-study-system/ts-pdfs/ts-2-0.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-2.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[RPS/SSPS]], [[RCS]]
- Related concepts: [[Rx Vessel & Internals]], [[RCS]], [[ESF & Design]]
- Related exam questions: [[2018 Q43]], [[2020 Q37]]
- Related exam: [[2018 NRC Written Exam]], [[2020 NRC Written Exam]]
