---
layout: page
title: Safe Cross-Embodiment Grasp-Compliance Calibration
description: Few-shot calibration of passive grasp-compliance models for previously unseen robot hands.
img: assets/img/projects/mapscoff/overview-card.png
importance: 0
category: work
github: https://github.com/stevens-armlab/graspCompliance
_styles: |
  .gc-metrics,
  .gc-protocol,
  .gc-passivity {
    display: grid;
    gap: 0.8rem;
    margin: 1.25rem 0 1.8rem;
  }

  .gc-metrics {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .gc-hand-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin: 1.25rem 0 2rem;
  }

  .gc-hand-card {
    margin: 0;
    overflow: hidden;
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    background: var(--global-card-bg-color);
    transition: transform 180ms ease, box-shadow 180ms ease;
  }

  .gc-hand-card:hover {
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.14);
    transform: translateY(-3px);
  }

  .gc-hand-card img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    background: #111;
  }

  .gc-hand-card figcaption {
    padding: 0.9rem 1rem 1rem;
    text-align: center;
  }

  .gc-hand-card strong,
  .gc-hand-card span {
    display: block;
  }

  .gc-hand-card strong {
    color: var(--global-text-color);
    font-size: 1.08rem;
  }

  .gc-hand-card span {
    margin-top: 0.2rem;
    color: var(--global-text-color-light);
    font-size: 0.86rem;
  }

  .gc-hand-card:last-child:nth-child(odd) {
    grid-column: 1 / -1;
    width: calc(50% - 0.5rem);
    justify-self: center;
  }

  .gc-metric,
  .gc-step,
  .gc-energy {
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    background: var(--global-card-bg-color);
  }

  .gc-metric {
    padding: 0.9rem;
  }

  .gc-metric strong {
    display: block;
    color: var(--global-theme-color);
    font-size: 1.35rem;
  }

  .gc-metric span {
    font-size: 0.82rem;
    line-height: 1.35;
  }

  .gc-protocol {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .gc-step {
    position: relative;
    padding: 1rem 1rem 1rem 3.1rem;
    overflow: hidden;
    animation: gc-step-cycle 7.2s ease-in-out infinite;
  }

  .gc-step:nth-child(2) { animation-delay: 1.2s; }
  .gc-step:nth-child(3) { animation-delay: 2.4s; }
  .gc-step:nth-child(4) { animation-delay: 3.6s; }
  .gc-step:nth-child(5) { animation-delay: 4.8s; }
  .gc-step:nth-child(6) { animation-delay: 6s; }

  .gc-step-number {
    position: absolute;
    top: 0.9rem;
    left: 0.9rem;
    color: var(--global-theme-color);
    font-family: monospace;
    font-size: 1.15rem;
    font-weight: 700;
  }

  .gc-step strong,
  .gc-step span {
    display: block;
  }

  .gc-step span {
    margin-top: 0.25rem;
    color: var(--global-text-color-light);
    font-size: 0.82rem;
    line-height: 1.4;
  }

  .gc-passivity {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gc-energy {
    padding: 1rem;
  }

  .gc-energy-head {
    display: flex;
    gap: 0.65rem;
    align-items: center;
    margin-bottom: 0.65rem;
  }

  .gc-energy-dot {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background: var(--global-theme-color);
    animation: gc-glow 1.8s ease-in-out infinite;
  }

  .gc-energy.unsafe .gc-energy-dot {
    background: #dc3545;
    animation: gc-warning 1.2s ease-in-out infinite;
  }

  .gc-energy p {
    margin: 0;
    color: var(--global-text-color-light);
  }

  @keyframes gc-step-cycle {
    0%, 12% {
      border-color: var(--global-theme-color);
      box-shadow: 0 0 0 4px rgba(0, 118, 222, 0.12);
      transform: translateY(-2px);
    }
    22%, 100% {
      border-color: var(--global-divider-color);
      box-shadow: none;
      transform: translateY(0);
    }
  }

  @keyframes gc-glow {
    50% { box-shadow: 0 0 0 7px rgba(0, 118, 222, 0.16); }
  }

  @keyframes gc-warning {
    50% { opacity: 0.35; }
  }

  @media (max-width: 780px) {
    .gc-hand-grid { grid-template-columns: 1fr; }
    .gc-hand-card:last-child:nth-child(odd) {
      grid-column: auto;
      width: 100%;
    }
    .gc-protocol { grid-template-columns: 1fr; }
    .gc-passivity { grid-template-columns: 1fr; }
  }

  @media (prefers-reduced-motion: reduce) {
    .gc-step,
    .gc-energy-dot { animation: none; }
  }
---

{% include figure.liquid path="assets/img/projects/mapscoff/overview.svg" title="MAPscoff adapts a passive grasp-compliance model to an unseen robot hand using only 20 wrench-displacement probes." class="img-fluid rounded z-depth-1" %}

MAPscoff is a few-shot calibration method for predicting how a grasped object will move when forces and torques are applied to it. The central challenge is **cross-embodiment generalization**: the method must adapt to a robot hand whose kinematics, actuation, contact mechanics, and compliance regime were absent from training.

The method estimates an interpretable local compliance model from only $K=20$ probe measurements while guaranteeing that the resulting compliance is passive. This safety property matters because the calibrated model can be inverted and used by a Cartesian impedance controller; an unconstrained, non-passive estimate can inject energy and destabilize that controller.

<div class="gc-metrics">
  <div class="gc-metric"><strong>7 hands</strong><span>Two-, three-, and four-finger embodiments</span></div>
  <div class="gc-metric"><strong>8,805</strong><span>Simulated grasp scenarios</span></div>
  <div class="gc-metric"><strong>436,609</strong><span>Stable wrench responses</span></div>
  <div class="gc-metric"><strong>20 probes</strong><span>Few-shot adaptation for a held-out hand</span></div>
  <div class="gc-metric"><strong>0</strong><span>Passivity violations by construction</span></div>
</div>

## Seven-Hand Grasp Showcase

The benchmark spans rigid industrial grippers, an underactuated gripper, a soft tendon-driven hand, and dexterous multi-finger hands. These animations show the actual simulated grasp configurations used to generate the wrench-displacement data.

<div class="gc-hand-grid">
  <figure class="gc-hand-card">
    <img src="{{ '/assets/img/projects/mapscoff/franka.gif' | relative_url }}" alt="Franka parallel-jaw gripper grasping the test object" loading="lazy">
    <figcaption><strong>Franka</strong><span>2-finger · parallel-jaw gripper</span></figcaption>
  </figure>
  <figure class="gc-hand-card">
    <img src="{{ '/assets/img/projects/mapscoff/robotiq-2f85.gif' | relative_url }}" alt="Robotiq 2F-85 underactuated gripper grasping the test object" loading="lazy">
    <figcaption><strong>Robotiq 2F-85</strong><span>2-finger · underactuated gripper</span></figcaption>
  </figure>
  <figure class="gc-hand-card">
    <img src="{{ '/assets/img/projects/mapscoff/umi.gif' | relative_url }}" alt="UMI parallel squeeze gripper grasping the test object" loading="lazy">
    <figcaption><strong>UMI</strong><span>2-finger · parallel squeeze gripper</span></figcaption>
  </figure>
  <figure class="gc-hand-card">
    <img src="{{ '/assets/img/projects/mapscoff/sbir.gif' | relative_url }}" alt="SBIR soft tendon-spring hand grasping the test object" loading="lazy">
    <figcaption><strong>SBIR</strong><span>3-finger · soft tendon-spring hand</span></figcaption>
  </figure>
  <figure class="gc-hand-card">
    <img src="{{ '/assets/img/projects/mapscoff/dex-ee.gif' | relative_url }}" alt="DEX-EE three-finger hand grasping the test object" loading="lazy">
    <figcaption><strong>DEX-EE</strong><span>3-finger · dexterous end effector</span></figcaption>
  </figure>
  <figure class="gc-hand-card">
    <img src="{{ '/assets/img/projects/mapscoff/leap.gif' | relative_url }}" alt="LEAP direct-drive hand grasping the test object" loading="lazy">
    <figcaption><strong>LEAP Hand</strong><span>4-finger · direct-drive dexterous hand</span></figcaption>
  </figure>
  <figure class="gc-hand-card">
    <img src="{{ '/assets/img/projects/mapscoff/allegro.gif' | relative_url }}" alt="Allegro direct-drive hand grasping the test object" loading="lazy">
    <figcaption><strong>Allegro Hand</strong><span>4-finger · direct-drive dexterous hand</span></figcaption>
  </figure>
</div>

## Problem formulation

### Local grasp-response model

Each scenario $s$ is a stable grasp equilibrium defined by one robot hand, one object, one contact configuration, and one set of physical parameters. The grasp is probed locally with small Cartesian loads so that its response can be approximated around that equilibrium.

For probe $i$, the input is a six-dimensional wrench

$$
\mathbf{w}_{s,i}
=
\begin{bmatrix}
f_x & f_y & f_z & \tau_x & \tau_y & \tau_z
\end{bmatrix}^{\!\top}
\in \mathbb{R}^{6},
$$

and the measured output is the corresponding six-dimensional object displacement in the palm frame,

$$
\Delta\mathbf{x}_{s,i}
=
\begin{bmatrix}
\Delta p_x & \Delta p_y & \Delta p_z &
\Delta r_x & \Delta r_y & \Delta r_z
\end{bmatrix}^{\!\top}
\in \mathbb{R}^{6}.
$$

The complete response set for scenario $s$ is

$$
\mathcal{D}_s
=
\left\{
\left(\mathbf{w}_{s,i},\Delta\mathbf{x}_{s,i}\right)
\right\}_{i=1}^{N_s}.
$$

Within the small-motion regime, the grasp is represented by the affine model

$$
\Delta\mathbf{x}_{s,i}
=
\mathbf{C}_s\mathbf{w}_{s,i}
+ \mathbf{b}_s
+ \boldsymbol{\varepsilon}_{s,i},
$$

where

- $\mathbf{C}_s\in\mathbb{R}^{6\times6}$ is the local Cartesian compliance operator,
- $\mathbf{b}_s\in\mathbb{R}^{6}$ is a wrench-independent quasi-static settling offset, and
- $\boldsymbol{\varepsilon}_{s,i}$ captures measurement noise and residual local nonlinearity.

The matrix $\mathbf{C}_s$ maps force and torque into translation and rotation. Its translational, rotational, and coupled blocks can be written as

$$
\mathbf{C}_s
=
\begin{bmatrix}
\mathbf{C}_{pp} & \mathbf{C}_{p\tau} \\
\mathbf{C}_{rp} & \mathbf{C}_{r\tau}
\end{bmatrix},
$$

so the model captures not only direct translation under force and rotation under torque, but also cross-coupled behavior such as torque-induced translation. Neither $\mathbf{C}_s$ nor $\mathbf{b}_s$ is stored as a supervised label; both must be inferred from the raw wrench-displacement observations.

### Cross-embodiment few-shot task

Let $\mathcal{H}_{\mathrm{train}}$ denote the source hands and let $h^{\star}\notin\mathcal{H}_{\mathrm{train}}$ be a held-out target hand. All learned priors and baselines are trained without any scenario from $h^{\star}$. At deployment, the calibrator receives only a small support set from one target-hand grasp,

$$
\mathcal{S}_{K}
=
\left\{
\left(\mathbf{w}_i,\Delta\mathbf{x}_i\right)
\right\}_{i=1}^{K},
\qquad K\in\{0,1,2,3,5,10,20\}.
$$

It must estimate $\widehat{\mathbf{C}}$ and $\widehat{\mathbf{b}}$, then predict displacements for disjoint query wrenches:

$$
\widehat{\Delta\mathbf{x}}_j
=
\widehat{\mathbf{C}}\mathbf{w}_j
+\widehat{\mathbf{b}},
\qquad
\left(\mathbf{w}_j,\Delta\mathbf{x}_j\right)
\in\mathcal{Q},
\qquad
\mathcal{S}_K\cap\mathcal{Q}=\varnothing.
$$

This is stricter than ordinary regression: the output must generalize to unseen loads, come from a previously unseen hand, use very little calibration data, and remain suitable for downstream control.

### Physical requirement

The desired compliance is a symmetric positive-semidefinite operator:

$$
\mathbf{C}=\mathbf{C}^{\top},
\qquad
\mathbf{C}\succeq\mathbf{0}.
$$

Equivalently, every wrench must satisfy

$$
\mathbf{w}^{\top}\mathbf{C}\mathbf{w}\ge 0.
$$

This inequality is the quasi-static passivity condition. It prevents the learned wrench-to-displacement map from containing a negative-work direction.

## Why passivity matters

A physically safe compliance must therefore satisfy

$$
\mathbf{C}\succeq\mathbf{0}
\quad\Longleftrightarrow\quad
\mathbf{w}^{\top}\mathbf{C}\mathbf{w}\ge0
\quad\text{for every }\mathbf{w}.
$$

The quantity $\mathbf{w}^{\top}\mathbf{C}\mathbf{w}$ represents the work associated with the wrench-induced displacement. A negative value means the estimated grasp moves against the applied wrench and behaves as if it adds energy. This can make $\mathbf{K}_x=\mathbf{C}^{-1}$ unsuitable as a controller stiffness and lead to unstable behavior.

<div class="gc-passivity" aria-label="Animated comparison of passive and non-passive compliance">
  <div class="gc-energy">
    <div class="gc-energy-head"><span class="gc-energy-dot"></span><strong>Passive estimate</strong></div>
    <p>The displacement follows the applied wrench: $\mathbf{w}^{\top}\mathbf{C}\mathbf{w}\ge0$. The model does not add energy.</p>
  </div>
  <div class="gc-energy unsafe">
    <div class="gc-energy-head"><span class="gc-energy-dot"></span><strong>Passivity violation</strong></div>
    <p>The displacement opposes the wrench: $\mathbf{w}^{\top}\mathbf{C}\mathbf{w}<0$. An unconstrained model can destabilize control.</p>
  </div>
</div>

MAPscoff constrains $\mathbf{C}$ to be positive semidefinite by construction, so every estimate is passive. In the reported evaluation it produced **zero passivity violations**. By comparison, unconstrained fits produced 101,767 violations on the matched benchmark and 54,771 on the multibig benchmark.

## Method

MAPscoff combines a learned physical prior with constrained few-shot estimation.

### 1. Passive learned prior

A topology-independent grasp descriptor is passed through a neural head that predicts a factor $\mathbf{A}\in\mathbb{R}^{6\times6}$. The prior compliance is constructed as

$$
\mathbf{C}_{\mathrm{prior}}
=
\mathbf{A}\mathbf{A}^{\top}.
$$

This factorization makes $\mathbf{C}_{\mathrm{prior}}$ symmetric and positive semidefinite by construction. The prior captures structure shared across source hands, but it is used as an anchor rather than trusted as the final zero-shot answer.

### 2. Scale-from-support correction

Cross-hand transfer may preserve the directional shape of compliance while missing its absolute scale. Given support matrices

$$
\mathbf{W}
=
\begin{bmatrix}
\mathbf{w}_1^{\top}\\
\vdots\\
\mathbf{w}_K^{\top}
\end{bmatrix}
\in\mathbb{R}^{K\times6},
\qquad
\mathbf{X}
=
\begin{bmatrix}
\Delta\mathbf{x}_1^{\top}\\
\vdots\\
\Delta\mathbf{x}_K^{\top}
\end{bmatrix}
\in\mathbb{R}^{K\times6},
$$

the method first estimates a conservative scalar gain

$$
s^{\star}
=
\underset{s}{\operatorname{argmin}}
\left\|
s\mathbf{W}\mathbf{C}_{\mathrm{prior}}^{\top}
-\mathbf{X}
\right\|_{F}^{2}.
$$

The clipped, scaled prior $s^{\star}\mathbf{C}_{\mathrm{prior}}$ corrects large stiffness differences between the source hands and the target embodiment.

### 3. Prior-anchored passive MAP calibration

The core estimator solves

$$
\widehat{\mathbf{C}}
=
\underset{\mathbf{C}\succeq\mathbf{0}}{\operatorname{argmin}}
\left\|
\mathbf{W}\mathbf{C}^{\top}-\mathbf{X}
\right\|_{F}^{2}
+
\lambda
\left\|
\mathbf{C}-s^{\star}\mathbf{C}_{\mathrm{prior}}
\right\|_{F}^{2}.
$$

The first term fits the support observations. The second is the negative log-prior, anchoring the low-data estimate to transferable structure. The regularization strength is derived from an equivalent prior count and support curvature: the estimator reduces to the prior when $K=0$, then becomes increasingly support-driven as more probes arrive.

### 4. Gated wrench-independent offset

An origin-pinned model cannot represent the settling drift observed on dexterous multi-contact hands. MAPscoff therefore fits the affine objective

$$
\begin{aligned}
\left(\widehat{\mathbf{C}},\widehat{\mathbf{b}}\right)
=
\underset{\mathbf{C}\succeq\mathbf{0},\,\mathbf{b}}{\operatorname{argmin}}
\;&
\left\|
\mathbf{W}\mathbf{C}^{\top}
+\mathbf{1}\mathbf{b}^{\top}
-\mathbf{X}
\right\|_{F}^{2}\\
&+
\lambda
\left\|
\mathbf{C}-s^{\star}\mathbf{C}_{\mathrm{prior}}
\right\|_{F}^{2}
+
\lambda_b
\left\|
\mathbf{b}-\mathbf{b}_0
\right\|_{2}^{2},
\end{aligned}
$$

with $\mathbf{b}_0=\mathbf{0}$ at deployment. When enough support pairs are available, the support set is split internally and the affine offset is retained only when it reduces held-out support error. This gate activates the offset on hands such as LEAP and Allegro while leaving it mostly inactive on clean parallel-jaw grasps.

The offset does not alter the passivity guarantee because passivity belongs to the wrench-to-displacement operator $\mathbf{C}$. The vector $\mathbf{b}$ represents the equilibrium baseline of the measurement window, not a stiffness or an energy-generating mode.

In summary, the method uses:

1. **A frozen zero-shot prior.** A prior is learned across the training hands and kept fixed when a new embodiment is introduced.
2. **A support-derived scale correction.** The prior is rescaled to the target grasp before calibration.
3. **Maximum a posteriori calibration.** The support set fits a positive-semidefinite $\mathbf{C}$ while remaining anchored to the learned prior.
4. **A gated settling offset.** The vector $\mathbf{b}$ captures justified wrench-independent drift.

The comparison baseline is MAML: a shared initialization followed by inner-loop gradient adaptation on the same support pairs. Its model uses

$$
\Delta\mathbf{x}=\mathbf{C}\mathbf{w},
$$

without an offset and without a positive-semidefinite constraint. It can therefore miss an important part of dexterous-grasp motion and offers no passivity guarantee.

## Data collection

Each simulated scenario follows a controlled probe protocol. The animated sequence below mirrors the deck's collection flow; every card highlights in order and then repeats.

<div class="gc-protocol" aria-label="Six-step animated data-collection protocol">
  <div class="gc-step"><span class="gc-step-number">1</span><strong>Sample physics</strong><span>Grip, contact softness, joint damping, and small variations.</span></div>
  <div class="gc-step"><span class="gc-step-number">2</span><strong>Build and equilibrate</strong><span>Allow the grasp to settle for 20 seconds.</span></div>
  <div class="gc-step"><span class="gc-step-number">3</span><strong>Freeze state</strong><span>Save one snapshot and rewind to it before every probe.</span></div>
  <div class="gc-step"><span class="gc-step-number">4</span><strong>Probe 60 wrenches</strong><span>Use 30 force-only and 30 force-plus-torque loads.</span></div>
  <div class="gc-step"><span class="gc-step-number">5</span><strong>Measure displacement</strong><span>Ramp for 0.25 seconds, hold for one second, and record $\Delta x$.</span></div>
  <div class="gc-step"><span class="gc-step-number">6</span><strong>Filter</strong><span>Keep scenarios with at least 12 stable loads.</span></div>
</div>

The resulting dataset contains **8,805 grasp scenarios** and **436,609 stable responses** across seven hands. Each scenario stores the 60 wrench-displacement pairs, stability masks, a deployment-observable six-dimensional grasp signature, simulated physical descriptors, closure Jacobians, and the equilibrium object pose.

### Embodiment differences

The two-finger grippers are comparatively rigid and are dominated by the wrench-dependent term $Cw$. SBIR is approximately 30 times softer than those grippers. LEAP and Allegro exhibit a large wrench-independent settling offset, making them especially useful tests of whether the model captures $b$.

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

MAPscoff beats MAML on all four reported multibig held-out hands. DEX-EE is also reported as a statistical tie against the strongest learned adapter, CNP, with a difference of +0.0004 and $p=0.36$.

## Why MAPscoff performs well on dexterous hands

For LEAP and Allegro, the settling offset $b$ accounts for roughly 80–95% of the total displacement in a typical scenario. A model of the form

$$
\Delta x = Cw
$$

is pinned to the origin and cannot represent motion at zero net wrench. MAPscoff's affine model explicitly estimates $b$, allowing it to recover this dominant behavior. On Franka and Robotiq, by contrast, $b\approx0$ and $Cw$ contributes about 95% of the displacement, so a linear gradient-based adapter is naturally competitive.

## Characterized limitation: matched SBIR

SBIR exposes an important limitation of the current prior. The zero-shot prior is learned mainly from substantially more rigid hands, while SBIR is about 30 times softer. In a few rank-deficient grasps, the available support wrenches do not constrain every compliance direction, and the extrapolated prior can fill those directions with pathological values. These outliers cause the matched-benchmark mean loss even though MAPscoff wins 80% of SBIR scenarios.

The proposed remedy is an **amortized, support-conditioned prior** that reads the support pairs before producing its prior parameters. This would retain the physical constraint while avoiding unsupported extrapolation from rigid hands. The multibig result provides supporting evidence: when SBIR's own physics-randomized data is represented, MAPscoff reaches an RMSE of 0.0004 versus 0.0053 for MAML and wins every evaluated scenario.

## Takeaway

MAPscoff shows that few-shot cross-embodiment calibration does not require choosing between predictive accuracy and physical safety. Its positive-semidefinite parameterization guarantees passive compliance, while the gated offset captures a dominant source of motion in dexterous multi-contact grasps. The method produces decisive gains on LEAP and Allegro, remains competitive on rigid two-finger grippers, and clearly identifies where a more adaptive prior is needed for very soft hands.

[View the graspCompliance repository on GitHub](https://github.com/stevens-armlab/graspCompliance)
