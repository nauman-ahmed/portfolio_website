# Autonomous Systems Security & Risk Modeling

**Stack:** CARLA Simulator, Autonomous Vehicles, Cybersecurity, Risk Assessment, Threat Modeling, SFOP Framework, Attack Simulation, Safety-Critical Systems

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

**Autonomous Systems Security & Risk Modeling** examines how cyberattacks against self-driving systems translate into real-world consequences - and how those consequences can be quantified rather than described. Attacks are simulated in a driving environment, their impact scored across four dimensions, and mitigations proposed on the basis of measured risk.

**My Role:** Designed security features - attack scenario modelling, the quantitative impact assessment framework, and the mitigation strategy.

**Project Overview:**

**1. Attack Scenario Simulation:**

Modeled and simulated cyberattack scenarios against autonomous driving systems - including steering manipulation and camera spoofing - inside the CARLA simulator, where consequences can be observed without physical risk.

**2. Quantitative Impact Framework:**

Designed an impact assessment framework spanning Safety, Financial, Operational, and Privacy (SFOP) dimensions, so an attack's severity is expressed as a structured score rather than a qualitative judgement.

**3. Context-Aware Impact Models:**

Developed mathematical models estimating attack impact from contextual driving parameters and system state, recognizing that the same attack carries very different consequences at highway speed than in a stationary vehicle.

**4. Risk-Based Mitigation:**

Evaluated system vulnerabilities and proposed mitigation strategies prioritized by assessed risk, directing defensive effort toward the attacks that matter most.

## Project Description

**1. Simulation Environment (CARLA):**

**Attack Modelling:**

- CARLA simulator used as the testbed for autonomous driving scenarios.

- Attacks modelled and executed against a simulated vehicle rather than physical hardware.

- Simulation enabling observation of consequences that would be unsafe or impossible to test on real roads.

**Attack Scenarios:**

- Steering manipulation, targeting the vehicle's control path directly.

- Camera spoofing, targeting the perception layer the driving stack depends on.

- Scenarios selected to cover distinct points of compromise across the autonomy pipeline.

---

**2. Impact Assessment Framework (SFOP):**

**Four-Dimensional Scoring:**

- **Safety** - potential for physical harm to occupants and other road users.

- **Financial** - monetary cost arising from a successful attack.

- **Operational** - degradation or loss of the vehicle's intended function.

- **Privacy** - exposure of personal or vehicle data.

**Framework Design:**

- Quantitative structure allowing attacks to be compared on a common basis.

- Separation of dimensions preventing a single severe consequence from masking others.

---

**3. Mathematical Impact Models:**

**Contextual Estimation:**

- Models estimating impact as a function of contextual driving parameters rather than a fixed severity rating.

- System state incorporated so assessed impact reflects the conditions at the moment of attack.

- Formulation supporting consistent, repeatable scoring across differing scenarios.

---

**4. Vulnerability Evaluation and Mitigation:**

**Assessment:**

- Evaluation of system vulnerabilities exposed by the simulated attack scenarios.

- Identification of points in the autonomy stack most sensitive to compromise.

**Mitigation Strategy:**

- Risk-based mitigation proposals prioritized according to assessed impact.

- Recommendations oriented toward safety-critical autonomous systems, where consequences of failure are physical rather than purely digital.

## SFOP Impact Framework

The assessment framework scores each attack across four independent impact dimensions. Keeping them separate prevents a single dominant consequence from concealing damage in other areas.

**1. Safety (S):**

- Potential for physical harm to vehicle occupants, pedestrians, and other road users.

- The dimension that distinguishes autonomous vehicle security from conventional IT security, where compromise rarely causes injury.

**2. Financial (F):**

- Monetary consequences arising from a successful attack.

- Covers direct costs as well as losses following from operational disruption.

**3. Operational (O):**

- Degradation or loss of the vehicle's intended function.

- Captures attacks that impair capability without necessarily causing immediate physical harm.

**4. Privacy (P):**

- Exposure of personal data or vehicle telemetry.

- Accounts for attacks whose damage is informational rather than kinetic.

**Contextual Weighting:**

- Impact estimated from driving parameters and system state at the time of attack.

- The same technical compromise scores differently depending on operating conditions, reflecting real severity rather than a fixed worst case.

## Technologies & Methods

**1. Simulation:**

- CARLA simulator for autonomous driving scenario construction and execution.

- Simulated attack injection against steering control and camera perception.

- Repeatable scenario runs supporting controlled comparison between attacks.

**2. Security Analysis:**

- Threat modelling of the autonomous driving stack.

- Vulnerability evaluation across control and perception subsystems.

- Attack surface analysis for safety-critical vehicle systems.

**3. Risk Assessment:**

- SFOP impact framework spanning Safety, Financial, Operational, and Privacy dimensions.

- Quantitative scoring enabling comparison across dissimilar attacks.

- Risk-based prioritization of mitigation measures.

**4. Mathematical Modelling:**

- Impact estimation models parameterized by driving context and system state.

- Formal treatment of severity in place of qualitative rating alone.
