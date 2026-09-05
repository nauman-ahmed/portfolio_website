# Multi-Agent 3D Coverage Path Planning - Liquid Neural Networks (Master's Thesis)

**Stack:** Python, PyTorch, Reinforcement Learning, PPO, Liquid Neural Networks, LTC, Deep Learning, Multi-Agent Systems

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

**Multi-Agent Coverage Path Planning with Liquid Neural Networks** investigates whether Liquid Time-Constant (LTC) networks can drive cooperative coverage behaviour in a team of agents operating under hard safety constraints - and whether the learned policy holds up on environments it has never seen.

**My Role:** Reinforcement Learning Engineer - designed the simulation environment, safety constraint model, and training pipeline, and ran the generalization evaluation.

**Project Overview:**

**1. Liquid Neural Networks for Control:**

Investigated the effectiveness of Liquid Time-Constant (LTC) networks in multi-agent coverage path planning, demonstrating stable learning and generalization under safety constraints.

**2. Safety-Critical Simulation:**

Built a voxel-based 3D environment of 20x20x6 encoding collision avoidance, constrained flyability, and forced-return planning as first-class constraints rather than soft penalties.

**3. Policy Training:**

Trained across 11,436 episodes using Proximal Policy Optimization (PPO), with coverage and reward improving consistently and late training windows reaching near 97% mean coverage.

**4. Generalization Result:**

On 100 held-out fixed-seed environments, the selected checkpoint achieved 93.0% mean coverage at budget 150 and 88.0% at budget 100 - demonstrating generalization to unseen layouts rather than overfitting to the training set.

**5. Safety Record:**

Recorded zero collision penalties across fixed-seed evaluation, with agents exhibiting complementary rather than redundant exploration.

_Submitted as a Master's thesis at the University of Passau (Chair of Informatik), March 2026. Examiners: Prof. Dr. Mario Döller and Prof. Dr. Harald Kosch._

## Project Description

**1. Research Question:**

**Liquid Time-Constant Networks:**

- Investigated whether LTC networks are effective as policy networks for multi-agent coverage path planning.

- Evaluated learning stability across training and generalization to environments held out from training.

- Assessed behaviour specifically under safety constraints rather than in an unconstrained setting.

---

**2. Simulation Environment:**

**Voxel-Based World:**

- Three-dimensional voxel grid of 20x20x6 representing the coverage space.

- Discretized representation supporting volumetric coverage tracking across the full space.

**Safety-Critical Constraints:**

- Collision avoidance between cooperating agents.

- Constrained flyability restricting which regions of the voxel space are traversable.

- Forced-return planning requiring agents to reserve capability to return, rather than pursuing coverage without regard to recovery.

---

**3. Training Setup:**

**Reinforcement Learning:**

- Proximal Policy Optimization (PPO) as the training algorithm.

- 11,436 training episodes with consistent improvement in coverage and reward.

- Strong positive association observed between episode return and final coverage.

- Late training windows reaching approximately 97% mean coverage.

- Two-agent setup requiring cooperative rather than independent coverage behaviour.

---

**4. Evaluation:**

**Generalization Testing:**

- Evaluated on 100 held-out fixed-seed environments not encountered during training.

- Four checkpoint selection criteria compared; selection by best 100-episode rolling mean of return proved most reliable.

- 93.0% mean coverage at budget 150 and 88.0% at budget 100 under greedy decoding.

- Zero collision penalties recorded across fixed-seed evaluation.

- Performance sustained under constrained conditions, indicating the policy generalizes rather than memorizing training layouts.

## Technologies Used

**1. Machine Learning Framework:**

- PyTorch for model definition, training loops, and gradient computation.

- Python as the primary implementation language.

**2. Reinforcement Learning:**

- Proximal Policy Optimization (PPO) as the on-policy training algorithm.

- Multi-agent reinforcement learning formulation for cooperative coverage.

- Reward design incorporating coverage objectives alongside safety constraints.

**3. Neural Architecture:**

- Liquid Time-Constant (LTC) networks as the policy architecture.

- Liquid Neural Networks explored for their continuous-time dynamics and stability properties.

- Deep learning techniques applied to sequential decision-making under constraints.

**4. Simulation:**

- Custom voxel-based 3D environment at 20x20x6 resolution.

- Safety constraint modelling for collision avoidance, flyability, and forced return.

- Randomized environment generation for held-out generalization testing.

## Libraries & Dependencies

**Core Libraries:**

1. **PyTorch** - Deep learning framework for policy network training and inference.

2. **Python** - Implementation language for the environment, agents, and training pipeline.

**Reinforcement Learning:**

3. **PPO (Proximal Policy Optimization)** - On-policy algorithm driving policy updates across ~11K episodes.

4. **Liquid Time-Constant (LTC) Networks** - Continuous-time neural architecture used as the agent policy.

**Simulation:**

5. **Custom Voxel Environment** - Purpose-built 20x20x6 3D coverage simulator with safety-critical constraints.
