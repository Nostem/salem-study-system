---
title: Annunciators
category: systems
status: draft
aliases:
  - OHA
  - overhead annunciators
  - auxiliary annunciators
---

# Annunciators

## Function & Design Basis

The plant Alarm and Annunciator Systems indicate and/or record all abnormal or alarm conditions that must be brought to the operator's immediate attention inside the Control Room (UFSAR §7.7.2.10). The systems consist of three major areas of alarm indication (UFSAR §7.7.2.10):

1. The Overhead Annunciator System (OHA)
2. The Auxiliary Alarm System / Auxiliary Annunciator System (AAS) — a sequential data operations record
3. The Control Console Alarm System

Each is discussed independently, but redundancy of alarm indication exists between them — most assigned inputs to the Auxiliary Alarm System carry status information for safety-related equipment and can be considered a backup to the other annunciator systems (UFSAR §7.7.2.10).

Because Indication and Alarm Systems are not part of the Plant Protection System and failures within them cannot affect operation of the Protection System, no limiting conditions for operation are imposed on the Alarm Systems; they perform no function in the actuation of safety-related equipment (UFSAR §7.7.2.10). Limiting conditions for operation are instead imposed on the Plant Protection Systems and equipment to assure safe operation of the unit.

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q2</div>
The OHA "F" windows (reactor-trip first-out) have <span class="hi-exam">dual red/white backlights</span>; the first signal to reach the RPS is locked in <span class="hi-exam">RED</span> and can only be reset with a keyswitch and SM permission. <span class="hi-trap">The RED box indicates the first TRIP signal — NOT the first AUTO TRIP signal.</span> When a manual and an auto trip may have raced, the <span class="hi-exam">Sequence of Events Recorder (2CC1) must be reviewed</span> to determine first-out and whether an ATWT occurred.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q28</div>
<span class="hi-exam">OHA E-48 ROD BOTTOM</span> illuminates when all rod banks are on bottom and, during a reactor startup, clears once Control Bank A is withdrawn past 20 steps (Control Banks B/C/D bypassed below 35 steps). See [[Control Rod Drive]] and [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q80</div>
The sequential SW header alarms <span class="hi-exam">B-13 (21 SW HDR), B-14 (22 SW HDR), B-15 (TURB AREA SW HDR), then B-48 (SW VLV RM FLOODED)</span> localize a SW leak — the B-48 flooding alarm points to a single CFCU supply line (78' Mech Pen Area), handled by AB.SW-0001. See [[Service Water]], [[S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B]].
</div>

## Key Components

### Overhead Annunciator System (OHA)

The OHA is comprised of seven cabinets containing all power supplies, relays, terminals, hardware, and logic to actuate ten groups of forty-eight 2-inch x 3-inch backlighted windows, for a system total capacity of 480 alarms (UFSAR §7.7.2.10). The ten displays are located in a dropped ceiling fascia above the control console for easy viewing by the control operator (UFSAR §7.7.2.10). An annunciator CRT display on the control console identifies alarm points (UFSAR §7.7.2.10). The various plant alarms are grouped into systems or related areas and situated above the console section containing the associated system control pushbuttons and indicators (UFSAR §7.7.2.10).

The ten displays do not represent ten specific alarm groupings but ten 48-point alarm window displays; alarms common to a system or of a related nature are grouped together within a display, and there may be several such groupings on one display — see UFSAR Table 7.7-2 (Overhead Annunciator Groupings) (UFSAR §7.7.2.10).

One display serves as first-out indication and is divided into two separate and independent systems: "Reactor Trip First-Out" and "Turbine Trip First-Out." The "Reactor Trip First-Out" group is further divided into "Reactor Trip" and "Safety Injection" groups for identification purposes (UFSAR §7.7.2.10).

The remotely located annunciator logic cabinets are connected by plug-in cables to the overhead display units (UFSAR §7.7.2.10).

### Auxiliary Alarm System (AAS)

Each Salem Unit has an independent Auxiliary Annunciator System (AAS) — a sequential data operations recorder used primarily for alarming and recording the loss of control circuits' potential and the off-normal position of valves (UFSAR §7.7.2.10). Each system consists of four remote panels (133, 134, 33, and 34) containing all input terminals, input logic, sequential memory, software, relays, power supplies, local/backup printer, system controls, and associated hardware to output sequential alarm conditions to a main printer in the Control Room (UFSAR §7.7.2.10). The Unit 1 AAS monitors Unit 1 parameters and provides alarm data at the Unit 1 Control Room; the Unit 2 AAS monitors Unit 2 parameters and provides corresponding data to the Unit 2 Control Room (UFSAR §7.7.2.10). Each unit's system has over 700 active inputs, each adequately isolated from the field at the point of the system (UFSAR §7.7.2.10). Operator controls (pushbuttons, etc.) are provided in control room panel 1RP9 (2RP9) and AAS panel 133-1 (134-2) (UFSAR §7.7.2.10).

### Control Console Alarm System

To facilitate plant operation, certain alarms are located on pushbutton control stations on the control console; these are actuated by either the Process Control Systems or the plant motor controls (UFSAR §7.7.2.10). To facilitate location of any pushbutton in alarm, the control console is divided into six sections referred to as Console Alarm Groups, each with a bull's-eye indication light at the top to direct the operator's attention to that section of the console (UFSAR §7.7.2.10). The Process Control Systems provide alarms via four separate and independent alarm interface cabinets, one per process control group; the alarm cabinets connect to the pushbutton stations via plug-in cables (UFSAR §7.7.2.10).

## Operation

### Alarm Acknowledge / Silence / Ringback Logic

On the OHA, separate and independent pushbuttons on the control console allow the operator to silence, acknowledge, and reset the overhead alarms; a key-operated switch on the main console resets the "First-Out" indications (UFSAR §7.7.2.10).

For the Control Console Alarm System, an alarm signal causes a back-lighted pushbutton to flash and the console audible alarm to sound until acknowledged (UFSAR §7.7.2.10). Acknowledgement silences the audible signal and leaves the alarm pushbutton lit; when the alarm condition clears, the console audible ringback signal sounds and the back-lighted pushbutton flashes again, and acknowledgement then silences the ringback and turns off the back-lighted pushbutton (UFSAR §7.7.2.10). The Console Group Alarm system has six outputs to actuate each individual alarm group indicating light and four outputs to sound the alarm and ringback horns: alarm horns sound a two-step warble until silenced or acknowledged, and ringback horns sound a steady tone for two seconds if not silenced by the operator (UFSAR §7.7.2.10).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q66</div>
A <span class="hi-exam">single piece of red tape diagonally across an OHA window means at least one (but not all) inputs are disabled</span> — the alarm "may not be a reliable source of information." The window can <span class="hi-exam">still alarm from an operable input</span>. The <span class="hi-exam">reflash capability is NOT defeated</span> — if a second valid input comes in with one already in, reflash will cause the alarm to annunciate. <span class="hi-trap">Trap: single tape does NOT mean the alarm is fully inoperable (that requires an "X"), does NOT mean reflash is defeated, and does NOT mean full functionality is present (the tape signifies something IS wrong).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q66</div>
Annunciator window marking per OP-AA-102-103-1001 (Operator Burdens Program): <span class="hi-exam">single strand of red tape diagonally = one or more inputs inoperable</span> (reflash still works). <span class="hi-exam">Two pieces of red tape in an "X" = entire window inoperable</span>. <span class="hi-trap">Red tape is NOT used to identify maintenance testing in progress.</span>
</div>

### Data Acquisition, Self-Test & Annunciator Verification

The OHA is a high-speed distributed data acquisition and display system: non-redundant input scanners collect alarm contact state data for redundant Sequential Events Recorders (SER), whose alarm data drive redundant distributed logic channels, the output of which is diode-auctioneered to drive the window boxes (UFSAR §7.7.2.10). All field inputs are optically coupled to scanner electronics that can read 64 inputs per scanner; on a detected change of state the point address, real time, and alarm state are buffered and polled by the SER, which stores the event in chronological order in a circular historical buffer (UFSAR §7.7.2.10). Normal configuration displays each alarm point on the system console CRT, prints it on the hard-copy printer, and places it in the historical buffer in the local PC (UFSAR §7.7.2.10). If the primary controller fails due to a processor lockup (processor halts) or Port 4 failure, the primary watchdog timer circuit switches to the backup controller (UFSAR §7.7.2.10).

Periodic internal self-tests are run by the SER: one test places all inputs at the scanner level in an alarm state and verifies all inputs are passed to the SER, then removes them and verifies they returned to their prior state, printing any point not responding correctly as a faulty point (UFSAR §7.7.2.10). This test can also be initiated manually via the Functional Test switch on the operator panel in annunciator cabinet 115(F), and operating it does not affect normal operation (UFSAR §7.7.2.10).

An independent Annunciator Verification System (AVS) continuously tests OHA alarm processing by inputting simulated alarm stimuli through two of the scanners, processing them through the SER and the redundant distributed logic controllers, and determining from the two controller trains' response whether the annunciator system is functioning (UFSAR §7.7.2.10). On detected failures, the AVS inputs an annunciator system trouble alarm to the OHA and to an independent indicator lamp/console group alarm, and it provides a separate trouble alarm for loss of power or self-diagnostics faults (UFSAR §7.7.2.10).

System input ground detection is provided: a ground detected on an input alarms on the OHA and on the plant process computer, and a logic failure output provides an input to the OHA and to an indicator lamp/console group alarm when certain hardware failures or communications errors occur (UFSAR §7.7.2.10).

### Power Supplies

The OHA is powered by <span class="val-normal">two separate 115 VAC, 60 Hz supplies</span>; loss of either initiates a loss-of-power alarm on the OHA, on the plant process computer, and on a console indicator lamp/console group alarm independent of the OHA system (UFSAR §7.7.2.10). Redundant power supplies are provided for the field contact power, the scanners, the SER, and the distributed logic channels (including the associated window box lamps), and each power-supply output is monitored to alarm on loss of potential (UFSAR §7.7.2.10).

The AAS is powered from <span class="val-normal">two 120 VAC power sources</span> (UFSAR §7.7.2.10). The Control Console Alarm System is supplied from <span class="val-normal">115 VAC, 125 VDC, and 28 VDC sources</span> with no internal power supplies; each alarm cabinet is fed by two 115 VAC, 60 Hz feeds driving redundant DC power supplies whose outputs are diode-auctioneered to a common bus, and each 28 VDC control circuit is protected by independent breakers (UFSAR §7.7.2.10). Control Console alarm contacts are monitored by internally supplied 125 VDC, and each alarm point can be actuated from a normally closed initiating contact or by application/removal of 115 VAC or 125 VDC (UFSAR §7.7.2.10).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q56</div>
<span class="hi-exam">Annunciators are listed as a load supplied by the 28 VDC Control Power System</span>, but <span class="hi-exam">115 VAC power is supplied to alarm panel functions</span>. Therefore, loss of the 1A 28 VDC bus does NOT defeat alarm annunciation (e.g., OHA G-6, 11 SGFP TRBL still annunciates) — overhead annunciator panel functions remain energized via 115 VAC. <span class="hi-trap">Trap: Annunciators appear on the 28 VDC load list, but the alarm panel functions themselves are 115 VAC-powered. Loss of 28 VDC alone will not stop OHA windows from coming in.</span>
</div>

### Loss of All OHA Response

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q99</div>
On a loss of all overhead annunciators (AB.ANN-0001): the <span class="hi-exam">S5 EAL requires the loss to be ≥15 minutes</span> to declare. Even with a significant transient (Rx trip at T+5), declaration waits — AB.ANN actions (e.g., swapping to the backup SER) may restore functionality. <span class="hi-exam">When neither SER is in command at T+14, an Alert is declared</span>. See [[AB.ANN-0001 — Loss of Overhead Annunciator System]], [[EP-SA-111-101 — Emergency Classification and ICMF]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q75</div>
Per S2.OP-AB.ANN-0001 (Loss of Overhead Annunciator System), if a complete and total loss of ALL OHAs occurs and cannot be restored within 15 minutes, the directed control room response is to <span class="hi-exam">initiate continuous control console walkdown</span> (and P-250, etc.). <span class="hi-trap">Trap: tripping the reactor or initiating a power reduction is NOT warranted unless overriding plant status would direct it, not just from the annunciator problem. The alternate alarm check (cycling RPS/SSPS cabinet door every 15 minutes) is for verifying status when SOME functionality is present — NOT for total loss of OHAs.</span>
</div>

## Connections

- Related systems: [[RPS/SSPS]]
- Related procedures: [[OP-AA-102-103-1001 — Operator Burdens Program]], [[S2.OP-AR.ZZ-0006 — Overhead Annunciators Window F]], [[S2.OP-AR.ZZ-0004]], [[S1.OP-AR.ZZ-0007]]
- Related abnormals: [[AB.ANN-0001 — Loss of Overhead Annunciator System]], [[AB.ROD-0002 — Dropped Rod]], [[AB.CN-0001 — Condensate System Abnormality]]
- Related exam questions: [[2014 Q2]], [[2016 Q56]], [[2016 Q66]], [[2016 Q75]], [[2020 Q66]], [[2015 Q28]], [[2015 Q80]], [[2015 Q99]], [[2012 Q1]], [[2012 Q4]], [[2012 Q10]], [[2012 Q46]], [[2012 Q52]], [[2012 Q57]], [[2012 Q58]], [[2012 Q64]]
- Related exams: [[2014 NRC Written Exam]], [[2016 NRC Written Exam]], [[2020 NRC Written Exam]], [[2015 NRC Written Exam]], [[2012 NRC Written Exam]]
