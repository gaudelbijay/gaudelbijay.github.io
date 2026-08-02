---
layout: page
title: Safe Cross-Embodiment Grasp-Compliance Calibration
description: Few-shot calibration of passive grasp-compliance models for previously unseen robot hands.
img: assets/img/projects/mapscoff/allegro.gif
importance: 0
category: work
github: https://github.com/stevens-armlab/graspCompliance
_styles: |
  .gc-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.1rem 0 1.5rem;
  }

  .gc-badge {
    padding: 0.32rem 0.75rem;
    border: 1px solid var(--global-theme-color);
    border-radius: 999px;
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }

  .gc-hero {
    margin: 0 0 1.8rem;
  }

  .gc-hero figure {
    margin: 0;
  }

  .gc-hero figcaption {
    margin-top: 0.6rem;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: center;
  }

  .gc-lede {
    font-size: 1.04rem;
    line-height: 1.75;
  }

  .gc-metrics,
  .gc-protocol,
  .gc-compare,
  .gc-benchmarks {
    display: grid;
    gap: 0.8rem;
    margin: 1.3rem 0 1.9rem;
  }

  .gc-metrics {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .gc-hand-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
    margin: 1.25rem 0 2rem;
  }

  .gc-hand-card {
    margin: 0;
    overflow: hidden;
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    background: var(--global-card-bg-color);
    transition: border-color 180ms ease;
  }

  .gc-hand-card:hover {
    border-color: var(--global-theme-color);
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
    font-size: 1.05rem;
  }

  .gc-hand-card span {
    margin-top: 0.2rem;
    color: var(--global-text-color-light);
    font-size: 0.84rem;
  }

  .gc-metric,
  .gc-step,
  .gc-pipe {
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

  .gc-callout {
    margin: 1.25rem 0 1.6rem;
    padding: 1rem 1.15rem;
    border: 1px solid var(--global-divider-color);
    border-left: 4px solid var(--global-theme-color);
    border-radius: 8px;
    background: var(--global-card-bg-color);
  }

  .gc-callout p {
    margin: 0;
  }

  .gc-callout p + p {
    margin-top: 0.5rem;
  }

  .gc-callout-label {
    display: block;
    margin-bottom: 0.35rem;
    color: var(--global-theme-color);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .gc-callout.warn {
    border-left-color: var(--global-warning-block-title);
    background: var(--global-warning-block-bg);
    color: var(--global-warning-block-text);
  }

  .gc-callout.warn .gc-callout-label {
    color: var(--global-warning-block-title);
  }

  .gc-callout.tip {
    border-left-color: var(--global-tip-block);
    background: var(--global-tip-block-bg);
    color: var(--global-tip-block-text);
  }

  .gc-callout.tip .gc-callout-label {
    color: var(--global-tip-block-title);
  }

  .gc-concept {
    margin: 1.4rem 0 1.9rem;
    padding: 1.2rem 1.3rem 1.4rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    background: var(--global-card-bg-color);
  }

  .gc-concept h3 {
    margin: 0 0 0.4rem;
    font-size: 1.02rem;
  }

  .gc-concept p {
    margin: 0;
    color: var(--global-text-color-light);
    font-size: 0.92rem;
    line-height: 1.55;
  }

  .gc-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.9rem;
    margin: 1.3rem 0 0.6rem;
    flex-wrap: wrap;
  }

  .gc-flow-term {
    padding: 0.55rem 0.9rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    font-size: 0.95rem;
    color: var(--global-text-color-light);
  }

  .gc-flow-box {
    padding: 0.6rem 1.15rem;
    border: 2px solid var(--global-theme-color);
    border-radius: 10px;
    color: var(--global-theme-color);
    font-weight: 700;
    font-size: 1.02rem;
  }

  .gc-flow-arrow {
    font-size: 1.3rem;
    color: var(--global-text-color-light);
  }

  .gc-compare {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gc-panel {
    padding: 1rem 1.1rem 1.2rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    background: var(--global-card-bg-color);
  }

  .gc-panel.unsafe {
    border-color: rgba(204, 0, 0, 0.35);
  }

  .gc-panel-head {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
  }

  .gc-panel-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.3rem;
    height: 1.3rem;
    flex: none;
    border-radius: 50%;
    font-size: 0.78rem;
    color: #fff;
    background: var(--global-tip-block);
  }

  .gc-panel.unsafe .gc-panel-icon {
    background: var(--global-danger-block);
  }

  .gc-rail {
    position: relative;
    height: 3rem;
    margin: 1rem 0 0.5rem;
    border-bottom: 2px dashed var(--global-divider-color);
  }

  .gc-rail-force {
    position: absolute;
    top: 0;
    left: 10%;
    color: var(--global-theme-color);
    font-size: 0.82rem;
    font-weight: 700;
  }

  .gc-puck {
    position: absolute;
    bottom: -0.55rem;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    background: var(--global-tip-block);
    left: 66%;
  }

  .gc-panel.unsafe .gc-puck {
    background: var(--global-danger-block);
    left: 8%;
  }

  .gc-rail-legend {
    display: flex;
    gap: 1rem;
    margin: 0.2rem 0 0.7rem;
    color: var(--global-text-color-light);
    font-size: 0.78rem;
  }

  .gc-panel p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.55;
  }

  .gc-pipeline {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .gc-pipe {
    flex: 1 1 190px;
    padding: 0.9rem 1rem;
  }

  .gc-pipe strong {
    display: block;
    color: var(--global-theme-color);
    font-size: 0.92rem;
  }

  .gc-pipe span {
    display: block;
    margin-top: 0.3rem;
    color: var(--global-text-color-light);
    font-size: 0.82rem;
    line-height: 1.4;
  }

  .gc-pipe-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    color: var(--global-text-color-light);
    font-size: 1.2rem;
  }

  .gc-protocol {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .gc-step {
    position: relative;
    padding: 1rem 1rem 1rem 3.1rem;
    transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
  }

  .gc-step:hover {
    border-color: var(--global-theme-color);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
    transform: translateY(-2px);
  }

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

  .gc-benchmarks {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gc-benchmark {
    padding: 1rem 1.1rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    background: var(--global-card-bg-color);
  }

  .gc-benchmark strong {
    display: block;
    margin-bottom: 0.3rem;
    color: var(--global-theme-color);
  }

  .gc-benchmark p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.55;
  }

  .gc-table-wrap {
    overflow-x: auto;
    margin: 1rem 0 1.6rem;
  }

  .gc-table {
    width: 100%;
    min-width: 620px;
    border-collapse: collapse;
    font-size: 0.9rem;
  }

  .gc-table th,
  .gc-table td {
    padding: 0.6rem 0.7rem;
    border-bottom: 1px solid var(--global-divider-color);
    text-align: right;
  }

  .gc-table th:first-child,
  .gc-table td:first-child {
    text-align: left;
  }

  .gc-table th {
    color: var(--global-theme-color);
    font-weight: 700;
  }

  .gc-table tbody tr:hover {
    background: var(--global-code-bg-color);
  }

  .gc-win {
    color: var(--global-theme-color);
    font-weight: 700;
  }

  .gc-delta-pos {
    color: var(--global-tip-block);
    font-weight: 600;
  }

  .gc-delta-neg {
    color: var(--global-danger-block);
    font-weight: 600;
  }

  .gc-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    padding: 0.6rem 1.1rem;
    border: 1px solid var(--global-theme-color);
    border-radius: 8px;
    color: var(--global-theme-color) !important;
    font-weight: 600;
    text-decoration: none !important;
    transition: background 150ms ease, color 150ms ease;
  }

  .gc-cta:hover {
    background: var(--global-theme-color);
    color: var(--global-hover-text-color) !important;
  }

  @media (max-width: 780px) {
    .gc-protocol,
    .gc-compare,
    .gc-benchmarks {
      grid-template-columns: 1fr;
    }
    .gc-pipe-arrow {
      display: none;
    }
  }

---

<div class="gc-badges">
  <span class="gc-badge">Few-shot · K ≤ 20</span>
  <span class="gc-badge">7 robot hands</span>
  <span class="gc-badge">Passive by construction</span>
  <span class="gc-badge">0 passivity violations</span>
</div>

<div class="gc-hero">
  {% include figure.liquid path="assets/img/projects/mapscoff/overview.svg" class="img-fluid rounded z-depth-1" zoomable=true caption="MAPscoff adapts a passive grasp-compliance model to an unseen robot hand using only 20 wrench-displacement probes." %}
</div>

<p class="gc-lede">MAPscoff is a few-shot calibration method for predicting how a grasped object will move when forces and torques are applied to it. The central challenge is <strong>cross-embodiment generalization</strong>: the method must adapt to a robot hand whose kinematics, actuation, contact mechanics, and compliance regime were absent from training.</p>

<p>The method estimates an interpretable local compliance model from only $K=20$ probe measurements while guaranteeing that the resulting compliance is passive. This safety property matters because the calibrated model can be inverted and used by a Cartesian impedance controller; an unconstrained, non-passive estimate can inject energy and destabilize that controller.</p>

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

### What is grasp compliance?

<div class="gc-concept">
  <h3>Force in, motion out — mapped by <span style="color: var(--global-theme-color);">C</span></h3>
  <p>Compliance is just the local relationship between a wrench applied to a grasped object and the small displacement it produces. Probe the grasp with a force/torque $w$, watch the object settle at a new pose, and the ratio between the two is the compliance operator $C$. A stiffer grasp produces a smaller displacement for the same wrench; a softer one produces a larger one.</p>
  <div class="gc-flow">
    <span class="gc-flow-term">wrench $w$</span>
    <span class="gc-flow-arrow">&#8594;</span>
    <span class="gc-flow-box">C</span>
    <span class="gc-flow-arrow out">&#8594;</span>
    <span class="gc-flow-term">displacement $\Delta x$</span>
  </div>
</div>

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

- $\mathbf{C}\_s\in\mathbb{R}^{6\times6}$ is the local Cartesian compliance operator,
- $\mathbf{b}\_s\in\mathbb{R}^{6}$ is a wrench-independent quasi-static settling offset, and
- $\boldsymbol{\varepsilon}\_{s,i}$ captures measurement noise and residual local nonlinearity.

The matrix $\mathbf{C}\_s$ maps force and torque into translation and rotation. Its translational, rotational, and coupled blocks can be written as

$$
\mathbf{C}_s
=
\begin{bmatrix}
\mathbf{C}_{pp} & \mathbf{C}_{p\tau} \\
\mathbf{C}_{rp} & \mathbf{C}_{r\tau}
\end{bmatrix},
$$

so the model captures not only direct translation under force and rotation under torque, but also cross-coupled behavior such as torque-induced translation. Neither $\mathbf{C}\_s$ nor $\mathbf{b}\_s$ is stored as a supervised label; both must be inferred from the raw wrench-displacement observations.

### Cross-embodiment few-shot task

Let $\mathcal{H}\_{\mathrm{train}}$ denote the source hands and let $h^{\star}\notin\mathcal{H}\_{\mathrm{train}}$ be a held-out target hand. All learned priors and baselines are trained without any scenario from $h^{\star}$. At deployment, the calibrator receives only a small support set from one target-hand grasp,

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

<div class="gc-callout">
  <span class="gc-callout-label">Passivity requirement</span>
  <p>The desired compliance is a symmetric positive-semidefinite operator:</p>

$$
\mathbf{C}=\mathbf{C}^{\top},
\qquad
\mathbf{C}\succeq\mathbf{0}.
$$

  <p>Equivalently, every wrench must satisfy $\mathbf{w}^{\top}\mathbf{C}\mathbf{w}\ge 0$. This inequality is the quasi-static passivity condition — it prevents the learned wrench-to-displacement map from containing a negative-work direction.</p>
</div>

## Why passivity matters

A physically safe compliance must therefore satisfy

$$
\mathbf{C}\succeq\mathbf{0}
\quad\Longleftrightarrow\quad
\mathbf{w}^{\top}\mathbf{C}\mathbf{w}\ge0
\quad\text{for every }\mathbf{w}.
$$

The quantity $\mathbf{w}^{\top}\mathbf{C}\mathbf{w}$ represents the work associated with the wrench-induced displacement. A negative value means the estimated grasp moves against the applied wrench and behaves as if it adds energy. This can make $\mathbf{K}\_x=\mathbf{C}^{-1}$ unsuitable as a controller stiffness and lead to unstable behavior.

<div class="gc-compare" aria-label="Animated comparison of passive and non-passive compliance">
  <div class="gc-panel">
    <div class="gc-panel-head"><span class="gc-panel-icon">&#10003;</span><strong>Passive estimate</strong></div>
    <div class="gc-rail">
      <span class="gc-rail-force">wrench w &#8594;</span>
      <span class="gc-puck"></span>
    </div>
    <div class="gc-rail-legend"><span>&#8594; applied wrench</span><span>&#9679; object response</span></div>
    <p>The displacement follows the applied wrench: $\mathbf{w}^{\top}\mathbf{C}\mathbf{w}\ge0$. The model does not add energy.</p>
  </div>
  <div class="gc-panel unsafe">
    <div class="gc-panel-head"><span class="gc-panel-icon">!</span><strong>Passivity violation</strong></div>
    <div class="gc-rail">
      <span class="gc-rail-force">wrench w &#8594;</span>
      <span class="gc-puck"></span>
    </div>
    <div class="gc-rail-legend"><span>&#8594; applied wrench</span><span>&#9679; object response</span></div>
    <p>The displacement opposes the wrench: $\mathbf{w}^{\top}\mathbf{C}\mathbf{w}<0$. An unconstrained model can destabilize control.</p>
  </div>
</div>

MAPscoff constrains $\mathbf{C}$ to be positive semidefinite by construction, so every estimate is passive. In the reported evaluation it produced **zero passivity violations**. By comparison, unconstrained fits produced 101,767 violations on the matched benchmark and 54,771 on the multibig benchmark.

## Method

MAPscoff combines a learned physical prior with constrained few-shot estimation.

<div class="gc-pipeline">
  <div class="gc-pipe"><strong>1. Passive prior</strong><span>A neural head predicts a factor A; $C_{\text{prior}}=AA^\top$ is symmetric PSD by construction.</span></div>
  <div class="gc-pipe-arrow">&#8594;</div>
  <div class="gc-pipe"><strong>2. Scale correction</strong><span>A conservative scalar gain rescales the prior to the target grasp using the support set.</span></div>
  <div class="gc-pipe-arrow">&#8594;</div>
  <div class="gc-pipe"><strong>3. MAP calibration</strong><span>The support set fits a PSD $C$ while staying anchored to the scaled prior.</span></div>
  <div class="gc-pipe-arrow">&#8594;</div>
  <div class="gc-pipe"><strong>4. Gated offset</strong><span>An affine term $b$ is kept only when it reduces held-out support error.</span></div>
</div>

### 1. Passive learned prior

A topology-independent grasp descriptor is passed through a neural head that predicts a factor $\mathbf{A}\in\mathbb{R}^{6\times6}$. The prior compliance is constructed as

$$
\mathbf{C}_{\mathrm{prior}}
=
\mathbf{A}\mathbf{A}^{\top}.
$$

This factorization makes $\mathbf{C}\_{\mathrm{prior}}$ symmetric and positive semidefinite by construction. The prior captures structure shared across source hands, but it is used as an anchor rather than trusted as the final zero-shot answer.

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

The clipped, scaled prior $s^{\star}\mathbf{C}\_{\mathrm{prior}}$ corrects large stiffness differences between the source hands and the target embodiment.

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

with $\mathbf{b}\_0=\mathbf{0}$ at deployment. When enough support pairs are available, the support set is split internally and the affine offset is retained only when it reduces held-out support error. This gate activates the offset on hands such as LEAP and Allegro while leaving it mostly inactive on clean parallel-jaw grasps.

The offset does not alter the passivity guarantee because passivity belongs to the wrench-to-displacement operator $\mathbf{C}$. The vector $\mathbf{b}$ represents the equilibrium baseline of the measurement window, not a stiffness or an energy-generating mode.

The comparison baseline is MAML: a shared initialization followed by inner-loop gradient adaptation on the same support pairs. Its model uses

$$
\Delta\mathbf{x}=\mathbf{C}\mathbf{w},
$$

without an offset and without a positive-semidefinite constraint. It can therefore miss an important part of dexterous-grasp motion and offers no passivity guarantee.

## Data collection

Each simulated scenario follows a controlled probe protocol.

<div class="gc-protocol" aria-label="Six-step data-collection protocol">
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

<div class="gc-benchmarks">
  <div class="gc-benchmark"><strong>Matched</strong><p>Four hands grasp the same 50 objects under fixed nominal physics. This controls object variation and isolates the cross-embodiment gap. The headline comparison uses 87 scenarios per held-out hand.</p></div>
  <div class="gc-benchmark"><strong>Multibig</strong><p>All seven hands contribute larger, hand-specific collections with randomized grip, contact softness, and joint damping. This benchmark tests robustness across both morphology and physics variation.</p></div>
</div>

Accuracy is measured with root-mean-square error between the predicted and observed query displacements. Lower RMSE is better. Paired bootstrap tests are used for significance across the leave-one-hand-out trials.

## Results

### Matched benchmark

<div class="gc-table-wrap">
  <table class="gc-table">
    <thead>
      <tr><th>Held-out hand</th><th>MAPscoff RMSE ↓</th><th>MAML RMSE ↓</th><th>Improvement Δ</th><th>Scenario win rate</th><th>p-value</th></tr>
    </thead>
    <tbody>
      <tr><td>LEAP</td><td class="gc-win">0.0141</td><td>0.0648</td><td class="gc-delta-pos">+0.0507</td><td>100%</td><td>&lt;0.001</td></tr>
      <tr><td>Franka</td><td class="gc-win">0.0591</td><td>0.0623</td><td class="gc-delta-pos">+0.0032</td><td>66%</td><td>&lt;0.001</td></tr>
      <tr><td>Robotiq</td><td class="gc-win">0.1697</td><td>0.1730</td><td class="gc-delta-pos">+0.0032</td><td>46%</td><td>0.020</td></tr>
      <tr><td>SBIR</td><td>0.0713</td><td class="gc-win">0.0171</td><td class="gc-delta-neg">−0.0542</td><td>80%</td><td>&lt;0.001</td></tr>
    </tbody>
  </table>
</div>

MAPscoff delivers its clearest matched-benchmark gain on LEAP. Franka and Robotiq are close because their rigid, nearly offset-free behavior already suits MAML's linear model. SBIR is the only mean loss: MAPscoff wins most individual scenarios, but a small number of large errors dominate the average.

### Multibig benchmark

<div class="gc-table-wrap">
  <table class="gc-table">
    <thead>
      <tr><th>Held-out hand</th><th>Scenarios</th><th>MAPscoff RMSE ↓</th><th>MAML RMSE ↓</th><th>Improvement Δ</th><th>Scenario win rate</th><th>p-value</th></tr>
    </thead>
    <tbody>
      <tr><td>LEAP</td><td>1,336</td><td class="gc-win">0.0118</td><td>0.0559</td><td class="gc-delta-pos">+0.0441</td><td>98%</td><td>&lt;0.001</td></tr>
      <tr><td>Allegro</td><td>979</td><td class="gc-win">0.0141</td><td>0.0509</td><td class="gc-delta-pos">+0.0368</td><td>100%</td><td>&lt;0.001</td></tr>
      <tr><td>SBIR</td><td>1,200</td><td class="gc-win">0.0004</td><td>0.0053</td><td class="gc-delta-pos">+0.0049</td><td>100%</td><td>&lt;0.001</td></tr>
      <tr><td>DEX-EE</td><td>939</td><td class="gc-win">0.0076</td><td>0.0169</td><td class="gc-delta-pos">+0.0093</td><td>win</td><td>—</td></tr>
    </tbody>
  </table>
</div>

MAPscoff beats MAML on all four reported multibig held-out hands. DEX-EE is also reported as a statistical tie against the strongest learned adapter, CNP, with a difference of +0.0004 and $p=0.36$.

## Why MAPscoff performs well on dexterous hands

<div class="gc-callout">
  <span class="gc-callout-label">Insight</span>
  <p>For LEAP and Allegro, the settling offset $b$ accounts for roughly 80–95% of the total displacement in a typical scenario. A model of the form $\Delta x=Cw$ is pinned to the origin and cannot represent motion at zero net wrench. MAPscoff's affine model explicitly estimates $b$, allowing it to recover this dominant behavior. On Franka and Robotiq, by contrast, $b\approx0$ and $Cw$ contributes about 95% of the displacement, so a linear gradient-based adapter is naturally competitive.</p>
</div>

## Characterized limitation: matched SBIR

<div class="gc-callout warn">
  <span class="gc-callout-label">Limitation</span>
  <p>SBIR exposes an important limitation of the current prior. The zero-shot prior is learned mainly from substantially more rigid hands, while SBIR is about 30 times softer. In a few rank-deficient grasps, the available support wrenches do not constrain every compliance direction, and the extrapolated prior can fill those directions with pathological values. These outliers cause the matched-benchmark mean loss even though MAPscoff wins 80% of SBIR scenarios.</p>
  <p>The proposed remedy is an <strong>amortized, support-conditioned prior</strong> that reads the support pairs before producing its prior parameters. This would retain the physical constraint while avoiding unsupported extrapolation from rigid hands. The multibig result provides supporting evidence: when SBIR's own physics-randomized data is represented, MAPscoff reaches an RMSE of 0.0004 versus 0.0053 for MAML and wins every evaluated scenario.</p>
</div>

## Takeaway

<div class="gc-callout tip">
  <span class="gc-callout-label">Takeaway</span>
  <p>MAPscoff shows that few-shot cross-embodiment calibration does not require choosing between predictive accuracy and physical safety. Its positive-semidefinite parameterization guarantees passive compliance, while the gated offset captures a dominant source of motion in dexterous multi-contact grasps. The method produces decisive gains on LEAP and Allegro, remains competitive on rigid two-finger grippers, and clearly identifies where a more adaptive prior is needed for very soft hands.</p>
</div>

<a class="gc-cta" href="https://github.com/stevens-armlab/graspCompliance"><i class="fa-brands fa-github"></i> View the graspCompliance repository</a>

<script>
  window.addEventListener("load", function () {
    const article = document.querySelector("article");
    if (article && window.MathJax && typeof window.MathJax.typesetPromise === "function") {
      window.MathJax.typesetPromise([article]);
    }
  });
</script>
