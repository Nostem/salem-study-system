# Notes

## Right now
- review current system hierarchy. each system will need its own wiki article. right now auxiliary systems contains ccw, afw, sw, cvcs. thats fine for a general article, but for the specific info we will be building and organizing each one will need its own wiki article. we can build them as we go.
- articles have tech spec lco section and under connections ection a related tech specs. this is redundant. keep the tech spec lcos and wikilink them
- some articles dont have active wikilinks for tech spec lcos that are already ingested

## Ingesting NRC Exam Questions
The goals are multi-fold:
- ingest the questions, answers, justifications word for word. no need to re-write or paraphrase.
- make connections to relevant systems and concepts in our foundation. for example, if a question is about cvcs, make a connection to the cvcs article
- backfill and enrich existing articles. ie, if a question states what the rx trip setpoints are for prni, backfill the values in hte given articles
- also, understanding what the specific knowledge that is needed to answer the question, format the information in governing wiki article. for example, if an nrc question asks about an rcp trip setpoint, that information should be highlighted or bolded or made to stand out in some way in the rcp wiki.
- if the nrc question/answer/explanation gives some new info about a system that we dont already have, that should be incorporated & organized into the reference wiki. for example, the answer to a question may confirm that ssps train a will trip reactor trip breaker a and bypass beraker b. if that info is not already in our ssps/rps wiki, it should be added. this way we can continually reverse-engineer the systems.
- this is one is really important, procedures and setpoints change over time. its important before ingesting info from a question to check it against existing info for conflicts. if there are conflicts, do not assume, flag them and bring them up to the user. i will manually confirm what the most current answer is.
- use inline highlights and callout blocks as previously discussed
- new wiki articles and system articles may need to be generated that werent initially built.
- how to handle images/drawings etc
- How do we handle jpms?
- Sim scenarios? Valuable info but how do we incorporate? Have a separate section for sim scenarios, each scenario gets its own article maybe? 


### Questions
- how to handle wiki building. does each question/answer/explanation trio get its own wiki article?

## Future Ideas

### Incorporate GFES Banks
- question/answer . build justifications
- ingest DOE handbooks

### Quizzes
- create quizzes from ingseted question banks. DO NOT create or invent new questions. use existing questions
- Allen Murrow style tracking
- fluency guide section

### Files
- DoE handbooks
- K/A catalog
- NUREG 1021 & 1122
- links on homepage for all files: exams, etc.

### Admin
- create an admin section that handles all admin procedures from exams. begin compiling wiki articles on each procedure mentioned in exams

### JPM List
- wiki article containing all JPMs, grouped by admin/simulator/in-plant. links that reference the actual exam files

### Tech Specs
- after tech spec ingestion, review nrc adams to make sure we have all amendments covered
- sections layed out in the same way as pdf. lco, actions, surveillance requirements (only relevant surveillance requirements). each subsection should have its basis right after relevant surveillance reqs. for example, lco 3.1.1.1 should have relevant basis info right after.
- discuss wiki article layout. one article per lco? or one article for entire section (ie 3/4.1) or each subsection (ie 3/4.1.1)? 
- heavy brainstorm session around tech specs
- tech specs can be hard to read as curently written. come up with a formatting style that is easy to read and on the eyes
- include a link that takes you to the actual tech spec pdf section. perhaps we can split the large tech spec pdf into multiple smaller pdfs, by tech spec section/subsection?

### Personal accounts
- allen murrow style tracking of questions
- have a study tracker where you can mark off reviewing certin sections and/or wiki articles. can view a dashboard of study history. useful review tool.

## Recommended System Breakdown
Redo all systems wikis and split into these standard conventions. remove hte general articles like "auxiliary systems", fit all the info into the specified systems. if a system does not have any info, create the base article so we can link and backfill into it as we continue to ingest. some of the current ones are fine. some may need to be re-worded. all systems connections movig forward should point to one of these. 
also drop the concepts and fit those in the appropariate systems
re-organize all the current systems info into these systems below. the categories are proivded fo sidebar and index organization
review the ufsar as necessary to fill in basics

### List
#### Electrical
- 4KV
- 13KV
- 115V AC
- 460/230V AC
- 500KV
- DC Power (includes 125vdc, 250 vdc, 28 vdc)
- EDGs (diesel gen)
- SECs (safeguards equipment controllers)
#### Primary
- CVCS
- FHV (fuel handling ventilation)
- Pressurizer level & press control
- Pressurizer & PRT
- RCPs
- RCS (includes temperature control)
- Refueling
- RVLIS
- Rx Vessel & Internals
- Steam Generator & Blowdown
#### Emergency
- CAV (control area ventilation)
- CCW (component cooling)
- Chill Water
- Containment (contains cfcus, iodine removal, rod drive ventilation, rx nozzle support ventilation, reactor shield ventilation, containment pressure-vacuum relief, hydrogen recomb)
- Containment Spray
- ECCS
- ESF & Design
- RHR
- Service Water
- Spent Fuel Pool
- SPAV (switchgear & penetration area ventilation)
#### Control
- AMSAC
- Control Rod Drive
- Excore NIs (nuclear instruments)
- Incores (incore flux mapping, CETs, subcooling margin monitor0
- Radiation Monitoring
- RPS/SSPS (includes reactor protection, solid state protection, instrumentation & control)
#### Secondary
- Feed & Condensate (includes feed pumps, ADFCS, feed pump lube oil)
- Main Steam (includes bleed steam, moisture separator reheaters (MSR), gland steam (GS), )
- Condenser Air Removal
- Circ Water (circulating water)
- Main Turbine (includes main generator, digital ehc, turbine supervisory)
- Steam Dumps
- TAC (Turbine Aux Cooling)
- TGA Ventilation (turbine building ventilation)
- MTLO (main turbine lube oil)
#### Auxiliary
- ABV (aux building ventilation)
- AFW
- Annunciators (overhead and auxiliary)
- Control air (includes service air, and station air)
- Demin Water
- Fire Protection
- Stator Cooling Water (differences between unit 1 and 2, have different sections in the wiki for each unit)
- Waste Gas
- Waste Liquid
