---
layout: page
title: Safe Cross-Embodiment Grasp-Compliance Calibration
description: Few-shot calibration of passive grasp-compliance models for previously unseen robot hands.
img: assets/img/projects/mapscoff/overview.svg
importance: 0
category: work
---

{% include figure.liquid path="assets/img/projects/mapscoff/overview.svg" title="MAPscoff adapts a passive grasp-compliance model to an unseen robot hand using only 20 wrench-displacement probes." class="img-fluid rounded z-depth-1" %}

MAPscoff is a few-shot calibration method for predicting how a grasped object will move when forces and torques are applied to it. The central challenge is **cross-embodiment generalization**: the method must adapt to a robot hand whose kinematics, actuation, contact mechanics, and compliance regime were absent from training.

The method estimates an interpretable local compliance model from only (K=20) probe measurements while guaranteeing that the resulting compliance is passive. This safety property matters because the calibrated model can be inverted and used by a Cartesian impedance controller; an unconstrained, non-passive estimate can inject energy and destabilize that controller.

## Problem formulation

Each scenario is one fixed grasp: a particular hand, object, and physics configuration. The grasp is perturbed by several small six-degree-of-freedom loads. For probe (i), the input is an applied wrench

$$
w_i = [f_x, f_y, f_z, \tau_x, \tau_y, \tau_z]^\top \in \mathbb{R}^6,
$$

and the output is the resulting object displacement in the palm frame,

$$
\Delta x_i = [\Delta p_x, \Delta p_y, \Delta p_z, \Delta r_x, \Delta r_y, \Delta r_z]^\top \in \mathbb{R}^6.
$$

MAPscoff models the local response as

$$
\Delta x_i = C_s w_i + b_s + \varepsilon_i,
$$

where (C_s \in \mathbb{R}^{6\times6}) is the scenario's Cartesian compliance matrix, (b_s \in \mathbb{R}^6) is a wrench-independent settling offset, and \(\varepsilon_i\) represents measurement noise and residual nonlinearity. Neither (C_s) nor (b_s) is stored as a training label; both are inferred from the raw wrench-displacement pairs.

## Why passivity matters

A physically safe compliance must satisfy

$$
C \succeq 0 \quad \Longleftrightarrow \quad w^\top Cw \ge 0 \text{ for every wrench } w.
$$

The quantity (w^\top Cw) represents the work associated with the wrench-induced displacement. A negative value means the estimated grasp moves against the applied wrench and behaves as if it adds energy. This can make (K=C^{-1}) unsuitable as a controller stiffness and lead to unstable behavior.

MAPscoff constrains (C) to be positive semidefinite by construction, so every estimate is passive. In the reported evaluation it produced **zero passivity violations**. By comparison, unconstrained MAML adaptation produced 101,767 violations on the matched benchmark and 54,771 on the multibig benchmark.

## Method

MAPscoff combines three components:

1. **A frozen zero-shot prior.** A prior is learned across the training hands and kept fixed when a new embodiment is introduced.
2. **Maximum a posteriori calibration.** The small support set is used to fit a positive-semidefinite compliance matrix (C), balancing the new evidence with the cross-hand prior.
3. **A gated settling offset.** The offset (b) captures motion that occurs even when the net applied wrench is zero. Gating prevents the offset from being introduced when the support data does not justify it.

The comparison baseline is MAML: a shared initialization followed by inner-loop gradient adaptation on the same support pairs. Its model uses

$$
\Delta x = Cw,
$$

without an offset and without a positive-semidefinite constraint. It can therefore miss an important part of dexterous-grasp motion and offers no passivity guarantee.

## Data collection

Each simulated scenario follows a controlled probe protocol:

1. Sample grip strength, contact softness, joint damping, and small physical variations.
2. Build the grasp and allow it to equilibrate for 20 seconds.
3. Save the exact settled state so every probe starts from the same configuration.
4. Apply 60 loads: 30 force-only probes and 30 combined force-and-torque probes.
5. Ramp each wrench over 0.25 seconds, hold it for one second, and record the palm-frame pose change.
6. Retain the scenario only when at least 12 loads remain stable.

The resulting dataset contains **8,805 grasp scenarios** and **436,609 stable responses** across seven hands. Each scenario stores the 60 wrench-displacement pairs, stability masks, a deployment-observable six-dimensional grasp signature, simulated physical descriptors, closure Jacobians, and the equilibrium object pose.

### Embodiments

The evaluation spans a deliberately varied set of hands:

- **Franka:** two-finger parallel-jaw gripper,
- **Robotiq 2F-85:** two-finger underactuated gripper,
- **UMI:** two-finger parallel squeeze gripper,
- **SBIR:** soft three-finger tendon-spring hand,
- **DEX-EE:** three-finger hand,
- **LEAP:** four-finger direct-drive hand, and
- **Allegro:** four-finger direct-drive hand.

The two-finger grippers are comparatively rigid and are dominated by the wrench-dependent term (Cw). SBIR is approximately 30 times softer than those grippers. LEAP and Allegro exhibit a large wrench-independent settling offset, making them especially useful tests of whether the model captures (b).

## Evaluation protocol

The experiments use leave-one-hand-out evaluation. A target hand is completely excluded from training, then calibrated from 20 support probes. Accuracy and passivity are measured only on held-out query loads that were not used during calibration.

Two benchmarks test complementary forms of generalization:

- **Matched:** four hands grasp the same 50 objects under fixed nominal physics. This controls object variation and isolates the cross-embodiment gap. The headline comparison uses 87 scenarios per held-out hand.
- **Multibig:** all seven hands contribute larger, hand-specific collections with randomized grip, contact softness, and joint damping. This benchmark tests robustness across both morphology and physics variation.

Accuracy is measured with root-mean-square error between the predicted and observed query displacements. Lower RMSE is better. Paired bootstrap tests are used for significance across the leave-one-hand-out trials.

## Results

### Matched benchmark

| Held-out hand | MAPscoff RMSE ↓ | MAML RMSE ↓ | Improvement Δ | Scenario win rate | p-value |
|---|---:|---:|---:|---:|---:|
| LEAP | 0.0141 | 0.0648 | +0.0507 | 100% | <0.001 |
| Franka | 0.0591 | 0.0623 | +0.0032 | 66% | <0.001 |
| Robotiq | 0.1697 | 0.1730 | +0.0032 | 46% | 0.020 |
| SBIR | 0.0713 | 0.0171 | −0.0542 | 80% | <0.001 |

MAPscoff delivers its clearest matched-benchmark gain on LEAP. Franka and Robotiq are close because their rigid, nearly offset-free behavior already suits MAML's linear model. SBIR is the only mean loss: MAPscoff wins most individual scenarios, but a small number of large errors dominate the average.

### Multibig benchmark

| Held-out hand | Scenarios | MAPscoff RMSE ↓ | MAML RMSE ↓ | Improvement Δ | Scenario win rate | p-value |
|---|---:|---:|---:|---:|---:|---:|
| LEAP | 1,336 | 0.0118 | 0.0559 | +0.0441 | 98% | <0.001 |
| Allegro | 979 | 0.0141 | 0.0509 | +0.0368 | 100% | <0.001 |
| SBIR | 1,200 | 0.0004 | 0.0053 | +0.0049 | 100% | <0.001 |
| DEX-EE | 939 | 0.0076 | 0.0169 | +0.0093 | win | — |

MAPscoff beats MAML on all four reported multibig held-out hands. DEX-EE is also reported as a statistical tie against the strongest learned adapter, CNP, with a difference of +0.0004 and (p=0.36).

## Why MAPscoff performs well on dexterous hands

For LEAP and Allegro, the settling offset (b) accounts for roughly 80–95% of the total displacement in a typical scenario. A model of the form

$$
\Delta x = Cw
$$

is pinned to the origin and cannot represent motion at zero net wrench. MAPscoff's affine model explicitly estimates (b), allowing it to recover this dominant behavior. On Franka and Robotiq, by contrast, (b\approx0) and (Cw) contributes about 95% of the displacement, so a linear gradient-based adapter is naturally competitive.

## Characterized limitation: matched SBIR

SBIR exposes an important limitation of the current prior. The zero-shot prior is learned mainly from substantially more rigid hands, while SBIR is about 30 times softer. In a few rank-deficient grasps, the available support wrenches do not constrain every compliance direction, and the extrapolated prior can fill those directions with pathological values. These outliers cause the matched-benchmark mean loss even though MAPscoff wins 80% of SBIR scenarios.

The proposed remedy is an **amortized, support-conditioned prior** that reads the support pairs before producing its prior parameters. This would retain the physical constraint while avoiding unsupported extrapolation from rigid hands. The multibig result provides supporting evidence: when SBIR's own physics-randomized data is represented, MAPscoff reaches an RMSE of 0.0004 versus 0.0053 for MAML and wins every evaluated scenario.

## Takeaway

MAPscoff shows that few-shot cross-embodiment calibration does not require choosing between predictive accuracy and physical safety. Its positive-semidefinite parameterization guarantees passive compliance, while the gated offset captures a dominant source of motion in dexterous multi-contact grasps. The method produces decisive gains on LEAP and Allegro, remains competitive on rigid two-finger grippers, and clearly identifies where a more adaptive prior is needed for very soft hands.
