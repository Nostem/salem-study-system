---
title: "TS 3/4.0 — Applicability"
category: tech-specs
status: draft
aliases:
  - applicability
  - LCO 3.0.3
  - LCO 3.0.4
  - SR 4.0
---

# TS 3/4.0 — Applicability

## LCO Applicability Rules

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.0 General Applicability (10 CFR 50.36)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.0 General</div>

Specifications 3.0.1 through 3.0.4 establish general requirements applicable to Limiting Conditions for Operation. These requirements are based on 10 CFR 50.36(c)(2): <span class="hi-exam">"Limiting conditions for operation are the lowest functional capability or performance levels of equipment required for safe operation of the facility. When a limiting condition for operation of a nuclear reactor is not met, the licensee shall shut down the reactor or follow any remedial action permitted by the technical specification until the condition can be met."</span>

There are two basic types of ACTION requirements:
1. Remedial measures that permit continued operation for an unlimited period — conformance to these ACTIONS provides an acceptable level of safety for unlimited continued operation.
2. ACTIONS that specify a time limit for restoring an inoperable system or component to OPERABLE status. <span class="hi-exam">If not completed within the allowable outage time, a shutdown is required to place the facility in a MODE where the specification no longer applies.</span>

<span class="hi-exam">The specified time limits of the ACTION requirements are applicable from the point in time it is identified that the LCO is not met.</span> The time limits also apply when a system or component is removed from service for surveillance testing or investigation of operational problems.

When a shutdown is required to comply with ACTION requirements, the plant may enter a MODE where a new specification becomes applicable. In this case, the time limits of the ACTION requirements for the new specification would apply from when that specification becomes applicable.

</div>
</details>

### LCO 3.0.1
Compliance with LCOs is required during the OPERATIONAL MODES or conditions specified. Upon failure to meet an LCO, the associated ACTION requirements shall be met.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — LCO 3.0.1 Applicability</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — LCO 3.0.1</div>

Specification 3.0.1 establishes the Applicability statement within each individual specification as the requirement for when (i.e., in which OPERATIONAL MODES or other specified conditions) conformance to the Limiting Conditions for Operation is required for safe operation. The ACTION requirements establish the remedial measures that must be taken within specified time limits when LCO requirements are not met.

</div>
</details>

### LCO 3.0.2
<span class="hi">Noncompliance exists when the LCO AND associated ACTION requirements are not met within the specified time intervals.</span> If the LCO is restored prior to expiration of the time interval, completion of the ACTION is not required.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — LCO 3.0.2 Noncompliance Definition</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — LCO 3.0.2</div>

Specification 3.0.2 clarifies that: (1) implementation of the ACTION requirements within the specified time interval constitutes compliance with a specification, and (2) <span class="hi-exam">completion of the remedial measures of the ACTION requirements is NOT required when compliance with a Limiting Condition of Operation is restored within the time interval specified in the associated ACTION requirements.</span>

</div>
</details>

### LCO 3.0.3 (Default Shutdown Action)

<div class="callout callout-important">
<div class="callout-label">LCO 3.0.3 — Default Shutdown</div>
When an LCO is not met and no applicable ACTION exists, within <span class="hi">one hour</span> initiate action to place the unit in a MODE where the specification does not apply:<br>
1. At least Hot Standby within the next <span class="val-alarm">6 hours</span><br>
2. At least Hot Shutdown within the following <span class="val-alarm">6 hours</span><br>
3. At least Cold Shutdown within the subsequent <span class="val-alarm">24 hours</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Key Exam Concept</div>
LCO 3.0.3 is the "default" shutdown action when no specific ACTION applies. The 1-hour clock to BEGIN the shutdown starts when the LCO is not met. If corrective measures are completed, the ACTION may be taken per the specified time limits measured from the time of failure.
</div>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — LCO 3.0.3 Default Shutdown Action</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — LCO 3.0.3</div>

<span class="hi-exam">Planned entry into LCO 3.0.3 should be avoided.</span> If it is not practicable to avoid planned entry, plant risk should be assessed and managed in accordance with 10 CFR 50.65(a)(4). <span class="hi">One hour is allowed to prepare for an orderly shutdown before initiating a change in plant operation.</span> This time permits the operator to coordinate the reduction in electrical generation with the load dispatcher to ensure the stability and availability of the electrical grid.

The time limits specified to enter lower MODES permit the shutdown to proceed in a controlled and orderly manner that is well within the specified maximum cooldown rate and within the cooldown capabilities of the facility assuming only the minimum required equipment is OPERABLE. This reduces thermal stresses on components of the primary coolant system and the potential for a plant upset that could challenge safety systems.

<span class="hi-exam">The time limits of Specification 3.0.3 allow 37 hours total for the plant to be in COLD SHUTDOWN when a shutdown is required during the POWER MODE of operation.</span> If a lower MODE of operation is entered in less time than allowed, the total allowable time to enter COLD SHUTDOWN is not reduced. For example, if HOT STANDBY is entered in 2 hours, the time allowed to reach HOT SHUTDOWN is the next 11 hours because the total time to reach HOT SHUTDOWN is not reduced from the allowable limit of 13 hours.

<span class="hi-exam">The shutdown requirements of Specification 3.0.3 do NOT apply in MODES 5 and 6</span>, because the ACTION requirements of individual specifications define the remedial measures to be taken.

If remedial measures permitting continued operation under the provisions of the ACTION requirements are completed, the shutdown may be terminated. The time limits of the ACTION requirements are applicable from the point in time there was a failure to meet the LCO.

</div>
</details>

### LCO 3.0.4 (Mode Entry Restrictions)

<div class="callout callout-important">
<div class="callout-label">LCO 3.0.4 — Mode Entry</div>
When an LCO is not met, entry into a MODE in the Applicability shall only be made when:<br>
a. The ACTIONS permit continued operation for an unlimited period, OR<br>
b. After a risk assessment addressing inoperable systems, OR<br>
c. An allowance is stated in the individual specification
</div>

<div class="callout callout-trap">
<div class="callout-label">Exam Trap</div>
LCO 3.0.4 does NOT prevent mode changes required to comply with ACTIONS or that are part of a shutdown. You CAN transition through modes during a required shutdown even if other LCOs are not met in those modes.
</div>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — LCO 3.0.4 Mode Entry Restrictions</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — LCO 3.0.4</div>

<span class="hi-exam">LCO 3.0.4.a</span> allows entry into a MODE with the LCO not met when the associated ACTIONS to be entered will permit continued operation within the MODE for an unlimited period of time. This is acceptable without regard to the status of the unit before or after the MODE change.

<span class="hi-exam">LCO 3.0.4.b</span> allows entry after performance of a risk assessment addressing inoperable systems and components, consideration of the results, determination of acceptability, and establishment of risk management actions. The risk assessment uses the plant program for implementing 10 CFR 50.65(a)(4). <span class="hi-exam">The LCO 3.0.4.b risk assessments do not have to be documented.</span> A small subset of systems determined more important to risk contain Notes prohibiting use of LCO 3.0.4.b — these are identified in the individual LCOs.

<span class="hi-exam">LCO 3.0.4.c</span> allows entry based on a specific ACTION in the Specification stating it is applicable. This is typically applied to specifications describing values and parameters (e.g., RCS Specific Activity) based on NRC plant-specific approval.

<span class="hi-exam">The provisions of LCO 3.0.4 shall NOT prevent changes in MODES required to comply with ACTIONS, nor changes resulting from any unit shutdown</span> (i.e., Mode 1→2, 2→3, 3→4, 4→5 transitions).

Upon entry into a MODE with the LCO not met, LCO 3.0.1 and 3.0.2 require entry into the applicable Conditions and Required Actions until resolved, the LCO is met, or the unit is no longer within the Applicability. Surveillances do not have to be performed on associated inoperable equipment per SR 4.0.1; however, SRs must be met prior to declaring equipment OPERABLE and restoring compliance with the affected LCO.

</div>
</details>

### LCO 3.0.6 (Return to Service for Testing)

Equipment removed from service or declared inoperable to comply with ACTIONS may be returned to service under administrative control solely to perform testing required to demonstrate OPERABILITY. *(Amendment No. 234)*

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — LCO 3.0.6 Return to Service for Testing</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — LCO 3.0.6</div>

<span class="hi-exam">The sole purpose of LCO 3.0.6 is to provide an exception to LCO 3.0.2 to allow testing required to restore and demonstrate: (a) the OPERABILITY of the equipment being returned to service, or (b) the OPERABILITY of other equipment.</span>

The administrative controls ensure the time the equipment is returned to service in conflict with the ACTIONS is limited to the time absolutely necessary to perform the required testing. <span class="hi-exam">This Specification does NOT provide time to perform any other preventive or corrective maintenance.</span>

LCO 3.0.6 should not be used in lieu of other practicable alternatives that comply with Required Actions and do not require changing MODE or other conditions in the Applicability. <span class="hi-exam">LCO 3.0.6 is not intended to be used repeatedly.</span>

Examples of appropriate use: opening a manual valve closed to comply with Required Actions for RCS PIV leakage to perform testing to demonstrate leakage is now within limits; taking a tripped channel out of the tripped condition to permit logic to function and indicate appropriate response during testing of the inoperable channel.

</div>
</details>

## Surveillance Applicability Rules

### SR 4.0.1
Surveillances shall be met during the applicable MODES. Failure to meet a surveillance = failure to meet the LCO.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — SR 4.0.1 Surveillance Applicability</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — SR 4.0.1</div>

Systems and components are assumed OPERABLE when the associated Surveillance Requirements have been met. Nothing in this specification implies systems are OPERABLE when: (a) they are known to be inoperable even if still meeting SRs, or (b) the requirements of the Surveillance are known to not be met between required performances.

<span class="hi-exam">Surveillances do NOT have to be performed on inoperable equipment because the ACTIONS define the remedial measures that apply.</span> SRs must be met and performed prior to returning equipment to OPERABLE status.

<span class="hi-exam">Unplanned events may satisfy the requirements (including applicable acceptance criteria) for a given Surveillance</span> — that unplanned event may be credited as fulfilling performance of the SR. This allowance includes Surveillances whose performance is normally precluded in a given OPERATIONAL MODE.

Upon completion of maintenance, post maintenance testing is required to declare equipment OPERABLE. <span class="hi-exam">If post maintenance testing cannot be performed in the current MODE due to necessary unit parameters not being established, the equipment may be considered OPERABLE provided testing has been satisfactorily completed to the extent possible and the equipment is not otherwise believed to be incapable of performing its function.</span> This allows operation to proceed to the MODE where remaining testing can be completed (e.g., AFW turbine testing requiring steam pressure >680 psig, or HPI testing requiring a specified RCS pressure).

</div>
</details>

### SR 4.0.2
<span class="hi">Each surveillance shall be performed within the specified interval with a maximum allowable extension not to exceed 25% of the specified interval.</span>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — SR 4.0.2 Surveillance Interval Extension</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — SR 4.0.2</div>

The 25% extension permits scheduling flexibility to accommodate plant operating conditions not suitable for conducting the surveillance (e.g., transient conditions or ongoing surveillance or maintenance activities). <span class="hi-exam">It also provides flexibility to accommodate the length of a fuel cycle for surveillances performed at each refueling outage with an 18-month surveillance interval.</span> <span class="hi-exam">It is not intended that this provision be used repeatedly to extend surveillance intervals beyond that specified for surveillances not performed during refueling outages.</span>

The limitation is based on engineering judgment and the recognition that the most probable result of any particular surveillance being performed is the verification of conformance with the Surveillance Requirements.

</div>
</details>

### SR 4.0.3 (Missed Surveillance)

<div class="callout callout-important">
<div class="callout-label">SR 4.0.3 — Missed Surveillance</div>
If a surveillance was not performed within its specified frequency, compliance with declaring the LCO not met may be delayed up to <span class="hi">24 hours or the limit of the specified frequency, whichever is greater</span>. A risk evaluation is required for any surveillance delayed >24 hours.
</div>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — SR 4.0.3 Missed Surveillance</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — SR 4.0.3</div>

<span class="hi-exam">The delay period applies from the point in time it is discovered that the Surveillance has not been performed in accordance with Specification 3.0.2 — NOT at the time the specified frequency was not met.</span> This delay period permits performance of a missed Surveillance before complying with Required Actions or other remedial measures that might preclude its performance.

The basis for this delay includes: unit conditions, adequate planning, availability of personnel, time required to perform the Surveillance, safety significance of the delay, and recognition that the most probable result is verification of conformance.

<span class="hi-exam">SR 4.0.3 is only applicable if there is a reasonable expectation the associated equipment is OPERABLE or that variables are within limits, and it is expected that the Surveillance will be met when performed.</span> The rigor of determining reasonable expectation should increase based on the length of time since the last performance. If the Surveillance has never been performed or has not been performed for a long period, a rigorous evaluation based on objective evidence should provide a high degree of confidence.

<span class="hi-exam">Failure to comply with specified frequencies for Surveillances is expected to be an infrequent occurrence. Use of the delay period is a flexibility which is not intended to be used repeatedly.</span> All missed Surveillances will be placed in the licensee's Corrective Action Program.

For Surveillances with a frequency based on specified unit conditions rather than time intervals (e.g., prior to MODE 1 after each fuel loading), SR 4.0.3 allows the full delay period of up to the specified Frequency. Since there is no time interval specified, the missed Surveillance should be performed at the first reasonable opportunity.

<span class="hi-exam">If a Surveillance is not completed within the allowed delay period, the equipment is considered inoperable and the Completion Times of the Required Actions begin immediately upon expiration of the delay period. If a Surveillance is FAILED within the delay period, the equipment is inoperable and Completion Times begin immediately upon the failure.</span>

Completion of the Surveillance within the delay period, or within the Completion Time of the Actions, restores compliance with SR 4.0.1.

</div>
</details>

### SR 4.0.4
Entry into a MODE shall only be made when surveillances have been met within their specified frequency, except as provided by SR 4.0.3.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — SR 4.0.4 Mode Entry Surveillance Requirements</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — SR 4.0.4</div>

SR 4.0.4 ensures system and component OPERABILITY requirements and variable limits are met before entry into MODES or conditions where these systems ensure safe operation. <span class="hi-exam">Two circumstances exist where failing to meet an SR will NOT result in SR 4.0.4 restricting a MODE change:</span>

1. <span class="hi-exam">When a system or component is inoperable or outside its specified limits, the associated SRs are not required to be performed per SR 4.0.1.</span> When equipment is inoperable, SR 4.0.4 does not apply to those SRs. However, LCO 3.0.4 governs any restrictions that may apply to MODE changes.

2. <span class="hi-exam">SR 4.0.4 does not restrict MODE changes when a Surveillance has not been performed within the specified Frequency, provided the requirement to declare the LCO not met has been delayed in accordance with SR 4.0.3.</span>

The provisions of SR 4.0.4 shall NOT prevent entry into MODES required to comply with ACTIONS, nor changes resulting from any unit shutdown (Mode 1→2, 2→3, 3→4, 4→5 transitions).

</div>
</details>

*(Amendment No. 308)*

---

<a href="/salem-study-system/ts-pdfs/ts-2-0.pdf" target="_blank">View Tech Spec PDF</a>

## Connections

