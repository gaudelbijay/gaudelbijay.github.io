---
layout: page
title: Few-Shot Grasp Compliance Identification Across Robot Hands
description: Identifying a grasp's 6x6 compliance from only three load tests on an unseen robot hand, using a population prior learned from other hands.
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
    margin: 1.25rem 0 2.5rem;
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
    .gc-hand-grid {
      grid-template-columns: 1fr;
    }
  }

---

<div class="gc-badges">
  <span class="gc-badge">Few-shot · K = 3 load tests</span>
  <span class="gc-badge">6 robot hands</span>
  <span class="gc-badge">MuJoCo + Isaac Gym</span>
  <span class="gc-badge">PSD compliance by construction</span>
</div>

<p class="gc-lede">A grasp is usually judged by whether it holds the object. In forceful tasks such as tool use, insertion, or in-hand placement, a held object still moves under load, and <strong>grasp compliance</strong>, the matrix relating a load on the object to its displacement, governs that motion. This project estimates a grasp's compliance on a <strong>robot hand it has never seen</strong> from only <strong>three load tests</strong>, by completing those few measurements with what other hands have in common.</p>

<p>The paper, <em>Few-Shot Grasp Compliance Identification Across Robot Hands</em>, first adapts positive-semidefinite (PSD) least squares to grasps, then proposes <strong>MAPS</strong>, a maximum a posteriori estimator whose prior is learned from other hands' identified compliances. Its selective variant, <strong>S-MAP</strong>, drops that prior when a grasp's own load tests contradict it.</p>

<div class="gc-metrics">
  <div class="gc-metric"><strong>3 loads</strong><span>Load tests per grasp, against ≥7 needed without a prior</span></div>
  <div class="gc-metric"><strong>34–77%</strong><span>Lower error than PSD least squares at K = 3</span></div>
  <div class="gc-metric"><strong>74%</strong><span>Lower error on 115 fresh grasps with all settings frozen</span></div>
  <div class="gc-metric"><strong>14–29%</strong><span>Directional-stiffness error from three load tests</span></div>
  <div class="gc-metric"><strong>23 ms</strong><span>Median S-MAP calibration time on one CPU core</span></div>
</div>

## Six Hands, One Cross-Hand Question

The study spans **six robot hands**: rigid two-finger grippers, a soft tendon-driven hand, and dexterous three- and four-finger hands. Each animation shows a simulated grasp of the kind probed by the load tests. Every result on this page is a transfer to a held-out hand whose data never enter its own prior.

<div class="gc-hand-grid">
  <figure class="gc-hand-card">
    <img src="{{ '/assets/img/projects/mapscoff/franka.gif' | relative_url }}" alt="Franka parallel-jaw gripper grasping the test object">
    <figcaption><strong>Franka Hand</strong><span>2-finger · parallel-jaw gripper</span></figcaption>
  </figure>
  <figure class="gc-hand-card">
    <img src="{{ '/assets/img/projects/mapscoff/robotiq-2f85.gif' | relative_url }}" alt="Robotiq 2F-85 underactuated gripper grasping the test object">
    <figcaption><strong>Robotiq 2F-85</strong><span>2-finger · underactuated gripper</span></figcaption>
  </figure>
  <figure class="gc-hand-card">
    <img src="{{ '/assets/img/projects/mapscoff/sbir.gif' | relative_url }}" alt="SBIR tendon-driven hand grasping the test object">
    <figcaption><strong>SBIR</strong><span>3-finger · tendon-driven research hand</span></figcaption>
  </figure>
  <figure class="gc-hand-card">
    <img src="{{ '/assets/img/projects/mapscoff/dex-ee.gif' | relative_url }}" alt="Shadow DEX-EE three-finger hand grasping the test object">
    <figcaption><strong>Shadow DEX-EE</strong><span>3-finger · dexterous end effector</span></figcaption>
  </figure>
  <figure class="gc-hand-card">
    <img src="{{ '/assets/img/projects/mapscoff/leap.gif' | relative_url }}" alt="LEAP Hand grasping the test object">
    <figcaption><strong>LEAP Hand</strong><span>4-finger · dexterous hand</span></figcaption>
  </figure>
  <figure class="gc-hand-card">
    <img src="{{ '/assets/img/projects/mapscoff/allegro.gif' | relative_url }}" alt="Allegro Hand grasping the test object">
    <figcaption><strong>Allegro Hand</strong><span>4-finger · dexterous hand</span></figcaption>
  </figure>
</div>

<div class="gc-hero">
  {% include figure.liquid path="assets/img/projects/mapscoff/paper-overview.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Overview. (a) A wrench w produces motion x. (b) Compliances identified on source hands and their mean form the population prior. (c) A few load tests excite only part of the wrench space. (d) For a held-out grasp, the tests alone leave directions unresolved, which the prior fills in. (e) The identified compliance predicts responses, warns when a calibration is unreliable, and plans loads." %}
</div>

## Problem formulation

### What is grasp compliance?

<div class="gc-concept">
  <h3>Force in, motion out, mapped by <span style="color: var(--global-theme-color);">C</span></h3>
  <p>Apply a small wrench $w$ (force and torque) to a grasped object and it settles at a slightly different pose relative to the hand. The local map from load to displacement is the grasp compliance $C$. A stiffer grasp moves less under the same load, a softer one moves more, and $C$ also says <em>which directions</em> the grasp yields to.</p>
  <div class="gc-flow">
    <span class="gc-flow-term">wrench $w$</span>
    <span class="gc-flow-arrow">&#8594;</span>
    <span class="gc-flow-box">C</span>
    <span class="gc-flow-arrow out">&#8594;</span>
    <span class="gc-flow-term">displacement $x$</span>
  </div>
</div>

Classical grasp mechanics predicts the Cartesian stiffness from contact compliance $C\_c$, joint compliance $C\_\theta$, the hand Jacobian $J$ and the grasp matrix $G$:

$$
K_x = G\left(C_c + J C_\theta J^{\top}\right)^{-1} G^{\top},
\qquad
C_x = K_x^{-1}.
$$

Those stiffnesses are rarely known for a new hand and change with every grasp, so instead of modelling them we **identify the effective compliance directly from load tests**. This folds friction, the hand's controller, and the finite settling time into one predictive model of the closed grasp.

### Load tests and the local model

A scenario $s$ fixes a hand, object, grasp state, controller, and collection protocol. Load tests apply load cases that yield wrench–response pairs

$$
\mathcal{G}_s=\left\{(w_{s,i},\,x_{s,i})\right\}_{i=1}^{M_s},
\qquad
w=\begin{bmatrix} f^{\top} & \tau^{\top}\end{bmatrix}^{\top}\in\mathbb{R}^{6},
$$

where $x\in\mathbb{R}^6$ is the measured object translation and rotation relative to the hand. Forces and torques, translations and rotations carry different units, so they are rescaled into **energy-conjugate coordinates** with a fixed object length $\ell$:

$$
D=\operatorname{diag}(I_3,\ \ell I_3),\qquad y=Dx,\qquad u=D^{-\top}w,
$$

which keeps the work $u^{\top}y=w^{\top}x$ unchanged and maps a physical compliance $C\_p$ to $C=DC\_pD^{\top}$. The response is modelled locally as

$$
y_i = C\,u_i + b + \epsilon_i,
\qquad
C=C^{\top}\succeq 0,
$$

where $b$ collects wrench-independent motion such as settling drift and $\epsilon\_i$ collects noise and model mismatch. The pair $(C,b)$ is the grasp's compliance operator. Effective stiffness along a direction $e$ is $1/(e^{\top}Ce)$.

<div class="gc-callout">
  <span class="gc-callout-label">Why positive semidefinite</span>
  <p>In the conservative case the grasp stores elastic energy $\tfrac12 w^{\top}C_x w$ under load $w$, like a generalized spring. The PSD constraint makes the static map monotone, $(u_1-u_2)^{\top}(\hat y_1-\hat y_2)\ge 0$: a load increment never does negative work on the displacement increment it causes.</p>
</div>

<div class="gc-compare" aria-label="Comparison of a monotone and a non-monotone compliance estimate">
  <div class="gc-panel">
    <div class="gc-panel-head"><span class="gc-panel-icon">&#10003;</span><strong>PSD estimate</strong></div>
    <div class="gc-rail">
      <span class="gc-rail-force">load w &#8594;</span>
      <span class="gc-puck"></span>
    </div>
    <div class="gc-rail-legend"><span>&#8594; applied load</span><span>&#9679; object response</span></div>
    <p>The displacement follows the load: $w^{\top}Cw\ge0$. The grasp behaves like a spring.</p>
  </div>
  <div class="gc-panel unsafe">
    <div class="gc-panel-head"><span class="gc-panel-icon">!</span><strong>Indefinite estimate</strong></div>
    <div class="gc-rail">
      <span class="gc-rail-force">load w &#8594;</span>
      <span class="gc-puck"></span>
    </div>
    <div class="gc-rail-legend"><span>&#8594; applied load</span><span>&#9679; object response</span></div>
    <p>The displacement opposes the load: $w^{\top}Cw<0$. No physical grasp responds this way.</p>
  </div>
</div>

### Few-shot identification on a held-out hand

The held-out hand $h^{\star}$ stands in for a new hand: none of its load tests shape the prior or any hyperparameter. On it, $K$ load cases, the **support**, calibrate one grasp's estimate $(\widehat C,\widehat b)$, which is then scored on further load cases on the same grasp, the **queries**, that were never used for calibration or for choosing any setting.

<div class="gc-callout warn">
  <span class="gc-callout-label">Why three load tests are not enough on their own</span>
  <p>A symmetric $C$ has 21 free entries and $b$ six more. With a free offset only differences between load cases inform $C$, so $K$ load cases excite at most $K-1$ wrench directions, and with $r$ excited directions $(6-r)(7-r)/2$ entries of $C$ are unobservable. Uniquely identifying $C$ from the target alone needs <strong>at least seven</strong> well-spread load cases (six with a separately measured zero-load tare). At $K=3$, at least ten of the 21 entries are unconstrained by the grasp's own data, and each extra load case costs time and may break the grasp.</p>
  <p>The goal is therefore a <strong>prior-regularized estimate</strong> at $K=3$ that fills the unexcited directions with knowledge from other hands.</p>
</div>

## Method

<div class="gc-pipeline">
  <div class="gc-pipe"><strong>1. Load test</strong><span>PSD least squares adapted to grasps: tare, energy-conjugate coordinates, robust re-weighting.</span></div>
  <div class="gc-pipe-arrow">&#8594;</div>
  <div class="gc-pipe"><strong>2. Population prior</strong><span>Mean and covariance of compliances identified on source hands, rescaled to the target.</span></div>
  <div class="gc-pipe-arrow">&#8594;</div>
  <div class="gc-pipe"><strong>3. MAPS</strong><span>MAP fit of a PSD $C$ and offset $b$ anchored to the scaled prior.</span></div>
  <div class="gc-pipe-arrow">&#8594;</div>
  <div class="gc-pipe"><strong>4. S-MAP check</strong><span>Leave-one-out comparison with a prior-free fit; keep whichever predicts better.</span></div>
</div>

### 1. The load test

A zero-load tare precedes the $K$ load cases where it is recorded. $C$ is kept inside the PSD cone throughout the solve rather than projected afterwards. Contacts can slip or reseat under a load, so inconsistent load cases are down-weighted with robust weights

$$
v_i=\min\!\left(1,\ \frac{t}{\max(r_i,10^{-12})}\right),
\qquad
r_i=\lVert Cu_i+b-y_i\rVert,
\qquad
t=\operatorname{median}(r)+1.5\,\sigma_{\mathrm{rob}}(r),
$$

recomputed over three refitting rounds. Each weighted subproblem is solved by accelerated projected gradient, where eigenvalue clipping is the exact Frobenius projection onto the PSD cone.

### 2. A learned population prior over hand compliances

Each source grasp is fitted with the robust PSD load test, and its upper-triangular entries are stacked into $\theta\_s=\operatorname{vech}(C\_s)\in\mathbb{R}^{21}$. Their sample mean $\mu$ and covariance $\Sigma$ summarize how compliance varies across hands. The prior's **shape** is the normalized precision

$$
\Sigma_\rho=(1-\rho)\Sigma+\rho\operatorname{diag}(\Sigma)+\varepsilon I,
\qquad
P=\frac{21\,\Sigma_\rho^{-1}}{\operatorname{tr}\left(\Sigma_\rho^{-1}\right)},
$$

so directions that vary more across hands are constrained more loosely. Hands differ in overall softness, so the mean compliance $\bar C=\operatorname{vech}^{-1}(\mu)$ is rescaled to the target by one least-squares gain fitted from the target's own load cases:

$$
a=\frac{\sum_i(\bar C u_i)^{\top}y_i}{\sum_i\lVert\bar C u_i\rVert^2+10^{-12}}.
$$

### 3. MAPS: prior-regularized identification

Given the target support, MAPS solves

$$
\min_{C=C^{\top}\succeq0,\ b}\;
\sum_{i=1}^{K} v_i\left\lVert Cu_i+b-y_i\right\rVert^2
+\lambda\left\lVert\operatorname{vech}(C)-a\mu\right\rVert_P^2
+\lambda_b\lVert b\rVert^2 .
$$

This is the MAP estimate under Gaussian noise and the prior $\operatorname{vech}(C)\sim\mathcal{N}\!\left(a\mu,(\lambda P)^{-1}\right)$, restricted to the PSD cone. The prior weight is set as $\lambda=n\_0\,\operatorname{tr}(A^{\top}A)/(21K)$, with $A$ the least-squares design matrix of the support, so the prior counts as roughly $n\_0$ extra load cases of average curvature. The prior term fills the unloaded directions and pulls hardest where source hands agree; the PSD constraint only acts where plain Bayesian ridge regression would return an indefinite operator.

### 4. S-MAP: checking the prior against the target

A prior helps when the target resembles the source hands and hurts when it does not. Two mechanisms adapt using only the support:

- **Conflict attenuation.** The prior's leftover prediction error, normalized by the spread of the target responses, gives a disagreement $d$ and a trust factor $g=1/(1+(d/\tau)^2)$ that scales the prior strength $n\_0\to g\,n\_0$.
- **Support selection.** For each support pair, both the attenuated MAPS fit $F$ and a prior-free local fit $L$ are refit without it and scored on it. S-MAP keeps $L$ if $E\_L<\eta E\_F$ and $F$ otherwise.

The same folds give a calibration-time **reliability score**, the normalized leave-one-out error $s\_{\mathrm{LOO}}=\sqrt{E\_{\mathrm{sel}}/\sum\_i\lVert y\_i\rVert^2}$, which ranks calibrations by risk. Every setting ($n\_0$, $n\_b$, $\rho$, rescaling, $\tau$, $\eta$) is selected on source-hand validation grasps only.

## Simulated load tests

<div class="gc-hero">
  {% include figure.liquid path="assets/img/projects/mapscoff/paper-protocol.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Load-test protocol in the randomized MuJoCo corpus: grasp acquisition, one load test, eligible and rejected loads of a LEAP sphere grasp, its force-only responses (whose slope is the compliance), and the source / held-out splits." %}
</div>

<div class="gc-protocol" aria-label="Load-test protocol">
  <div class="gc-step"><span class="gc-step-number">1</span><strong>Acquire grasp</strong><span>The hand closes and settles; at least two fingers must hold the object.</span></div>
  <div class="gc-step"><span class="gc-step-number">2</span><strong>Randomize physics</strong><span>Grip strength, contact softness, joint damping, friction, and palm pose vary per grasp.</span></div>
  <div class="gc-step"><span class="gc-step-number">3</span><strong>Tare</strong><span>A zero-load reference records the unloaded pose where the corpus provides one.</span></div>
  <div class="gc-step"><span class="gc-step-number">4</span><strong>Apply a load case</strong><span>Restore the settled grasp and ramp one wrench in over 0.25 s.</span></div>
  <div class="gc-step"><span class="gc-step-number">5</span><strong>Measure response</strong><span>Object pose change relative to the palm at the end of the window.</span></div>
  <div class="gc-step"><span class="gc-step-number">6</span><strong>Filter</strong><span>Keep responses that stay finite and hold; keep grasps with ≥ 28 eligible responses.</span></div>
</div>

Three independent corpora are collected, each with its own source library and held-out-hand splits; they are never pooled.

<div class="gc-benchmarks">
  <div class="gc-benchmark"><strong>Matched (MuJoCo)</strong><p>Four hands on a shared catalog of 50 objects. 535 grasps, 80,750 responses.</p></div>
  <div class="gc-benchmark"><strong>Randomized (MuJoCo)</strong><p>Five hands, 16 objects from five shape families, broad physics randomization, zero-load tare. 505 grasps, 114,596 responses.</p></div>
  <div class="gc-benchmark"><strong>Isaac (PhysX)</strong><p>The study repeated in Isaac Gym with its own objects and grasps. 145 grasps, 125,897 responses.</p></div>
</div>

Errors are reported as query NRMSE, normalized by each grasp's own response energy so that hands of different stiffness are comparable; **predicting zero motion scores 1**. Lower is better.

## Results

### Accuracy with three and seven load tests

<div class="gc-table-wrap">
  <table class="gc-table">
    <thead>
      <tr><th>Corpus (equal-hand mean)</th><th>Prior only, K=0</th><th>PSD LS, K=3</th><th>MAPS, K=3</th><th>S-MAP, K=3</th><th>PSD LS, K=7</th><th>S-MAP, K=7</th></tr>
    </thead>
    <tbody>
      <tr><td>Matched, excl. LEAP</td><td>4.447</td><td>1.420</td><td class="gc-win">0.651</td><td>0.656</td><td>0.727</td><td class="gc-win">0.508</td></tr>
      <tr><td>Matched, all four hands</td><td>3.614</td><td>3.203</td><td>0.687</td><td class="gc-win">0.606</td><td>0.898</td><td class="gc-win">0.397</td></tr>
      <tr><td>Randomized</td><td>8.010</td><td>1.431</td><td class="gc-win">0.322</td><td>0.330</td><td>0.366</td><td class="gc-win">0.247</td></tr>
      <tr><td>Isaac</td><td>0.852</td><td>0.782</td><td>0.520</td><td class="gc-win">0.517</td><td>0.655</td><td class="gc-win">0.379</td></tr>
    </tbody>
  </table>
</div>

S-MAP beats PSD least squares hand by hand in **all 13 of 13** held-out settings at both K=3 and K=7, and MAPS alone lowers K=3 error by 34–77%. With twenty load cases, enough to identify $C$ without any prior, S-MAP is still 17–23% better than PSD least squares. Holding out objects as well as hands (60 folds) barely changes the matched K=3 errors (0.680 / 0.613).

### What the prior itself adds

Against the same load test run with a source-tuned ridge instead of the prior, the prior's own contribution at K=3 is **11%, 14%, and 4%** across the matched, randomized, and Isaac corpora, and it vanishes by K=20. Most of the gain over PSD least squares comes from adapting the load test to grasps; the prior earns its keep where load cases are scarce. Removing energy-conjugate coordinates is the most damaging single change (randomized K=3 error rises to 1.086, worse than predicting zero).

### Learned and structured baselines

<div class="gc-table-wrap">
  <table class="gc-table">
    <thead>
      <tr><th>Method</th><th>Matched K=3</th><th>Matched K=20</th><th>Randomized K=3</th><th>Randomized K=20</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>MAPS (ours)</strong></td><td class="gc-win">0.651</td><td class="gc-win">0.410</td><td class="gc-win">0.322</td><td class="gc-win">0.199</td></tr>
      <tr><td><strong>S-MAP (ours)</strong></td><td>0.656</td><td class="gc-win">0.410</td><td>0.330</td><td class="gc-win">0.199</td></tr>
      <tr><td>Prior-free fit (tuned)</td><td>0.729</td><td>0.418</td><td>0.375</td><td class="gc-win">0.199</td></tr>
      <tr><td>Local fit $L$</td><td>0.840</td><td>0.425</td><td>0.596</td><td>0.203</td></tr>
      <tr><td>Neural operator (PSD decoder)</td><td>0.735</td><td>0.595</td><td>0.427</td><td>0.339</td></tr>
      <tr><td>CNP-N (conditional neural process)</td><td>0.732</td><td>0.612</td><td>0.462</td><td>0.383</td></tr>
      <tr><td>KRR (RBF kernel)</td><td>0.903</td><td>0.498</td><td>0.795</td><td>0.314</td></tr>
      <tr><td>Isotropic $C=\alpha I$</td><td>0.894</td><td>0.737</td><td>0.808</td><td>0.680</td></tr>
      <tr><td>PSD least squares (Krislock et al.)</td><td>1.420</td><td>0.536</td><td>1.431</td><td>0.240</td></tr>
    </tbody>
  </table>
</div>

Matched columns exclude the drift-dominated LEAP hand. Both neural models are trained on the source hands with source-selected hyperparameters; with only four or five source hands, an explicit mean-and-covariance prior is easier to estimate than a flexible learned function.

### Fresh grasps, frozen settings

To check that the gains do not depend on the benchmark's own grasps, every setting was frozen and new grasps were acquired: 200 attempts, of which **115 held** through 20 support and 8 query responses.

<div class="gc-table-wrap">
  <table class="gc-table">
    <thead>
      <tr><th>Hand</th><th>Acquired / eligible</th><th>PSD LS, K=3</th><th>MAPS, K=3</th><th>S-MAP, K=3</th><th>Grasps improved</th></tr>
    </thead>
    <tbody>
      <tr><td>SBIR</td><td>50 / 50</td><td>1.815</td><td class="gc-win">0.829</td><td>0.856</td><td>48 of 50</td></tr>
      <tr><td>Franka</td><td>50 / 21</td><td>0.773</td><td class="gc-win">0.433</td><td class="gc-win">0.433</td><td>21 of 21</td></tr>
      <tr><td>Robotiq</td><td>50 / 29</td><td>1.846</td><td class="gc-win">0.476</td><td>0.485</td><td>27 of 29</td></tr>
      <tr><td>LEAP</td><td>50 / 15</td><td>4.370</td><td>0.689</td><td class="gc-win">0.483</td><td>15 of 15</td></tr>
      <tr><td><strong>All</strong></td><td>200 / 115</td><td>2.201</td><td>0.607</td><td class="gc-win">0.564</td><td>111 of 115</td></tr>
    </tbody>
  </table>
</div>

S-MAP lowers K=3 error by **74%** relative to PSD least squares on these fresh grasps (60% without LEAP), with a sign test of $p\le6\times10^{-5}$ on every hand.

### Effective directional stiffness

The identified compliance gives the effective stiffness along a force direction $e$, $\hat k\_e=1/(e^{\top}\widehat C\_{p,tt}\,e)$, validated against the secant stiffness of withheld force-only load pairs.

<div class="gc-table-wrap">
  <table class="gc-table">
    <thead>
      <tr><th>Hand (randomized corpus)</th><th>S-MAP, K=3</th><th>PSD LS, K=3</th><th>S-MAP, K=5</th><th>PSD LS, K=5</th><th>S-MAP, K=20</th></tr>
    </thead>
    <tbody>
      <tr><td>SBIR</td><td class="gc-win">25.6%</td><td>30.3%</td><td class="gc-win">15.3%</td><td>19.7%</td><td>14.6%</td></tr>
      <tr><td>Franka</td><td class="gc-win">28.8%</td><td>43.9%</td><td class="gc-win">23.4%</td><td>28.2%</td><td>14.4%</td></tr>
      <tr><td>Robotiq</td><td class="gc-win">14.3%</td><td>27.8%</td><td class="gc-win">7.3%</td><td>11.5%</td><td>4.6%</td></tr>
      <tr><td>LEAP</td><td class="gc-win">19.2%</td><td>24.9%</td><td class="gc-win">10.8%</td><td>12.7%</td><td>7.3%</td></tr>
      <tr><td>Allegro</td><td class="gc-win">14.1%</td><td>19.9%</td><td class="gc-win">9.6%</td><td>10.0%</td><td>6.6%</td></tr>
    </tbody>
  </table>
</div>

Three load tests recover directional stiffness to within **14–29%** on all five hands. The compliance also tells which directions a grasp yields to, loaded or not: at K=3, MAPS classifies 82.6% of query loads correctly as soft or stiff, against 74.3% for PSD least squares (randomized corpus).

## What transfers between hands

<div class="gc-callout">
  <span class="gc-callout-label">Insight</span>
  <p>The source-hand mean alone predicts poorly: hands differ so much in overall softness that it scores worse than predicting zero motion. A single load case already fixes most of this by setting the scale $a$ and the offset. The <strong>shape</strong> of the compliance transfers across hands; only its <strong>magnitude</strong> has to be measured on the target.</p>
  <p>A diagonal prior matches the full covariance within 0.003 in all three corpora, while a mean-only prior is 14–44% worse at K=3. What transfers is the mean operator and each entry's variance, much like a nominal compliance with a per-entry tolerance. More source hands help: randomized K=3 S-MAP error falls from 0.384 with one source hand to 0.322 with four.</p>
</div>

## When to trust an identification

Three load cases is also the smallest budget that can **check its own identification**. The leave-one-out score $s\_{\mathrm{LOO}}$ ranks failing calibrations with an AUROC of 0.89 in the randomized corpus (only three failures among 505 grasps, so indicative) and 0.72 in the matched corpus (62 failures), where flagging the riskiest 20% for extra load cases lowers the remaining mean error from 0.654 to 0.551. On matched LEAP grasps, whose settling drift contradicts the prior, S-MAP switches to the prior-free fit in 55% of episodes and lowers error by 0.08.

<div class="gc-callout warn">
  <span class="gc-callout-label">Limitations</span>
  <p><strong>Blind spot.</strong> A mismatch confined to directions the load cases never excited is invisible to any three-load check: in a synthetic test MAPS's error doubles there while S-MAP switches in only 2.6% of episodes, though $s_{\mathrm{LOO}}$ still rises with it.</p>
  <p><strong>Settling drift.</strong> Matched-corpus LEAP grasps start unsettled, so drift is a median 99.5% of their response energy. A zero-load tare taken before the load cases is the remedy (K=3 error drops to 0.077 with an idealized reference).</p>
  <p><strong>Simulation only.</strong> Exact resets between load cases are not available on hardware; with no reset, three sequential load cases keep the grasp intact in 81% of runs and K=3 error rises from 0.278 to 0.793 for MAPS (0.578 to 1.297 without the prior). Each prior also comes from only four or five hands. Hardware validation with force and pose sensing is the next step.</p>
</div>

## Takeaway

<div class="gc-callout tip">
  <span class="gc-callout-label">Takeaway</span>
  <p>Grasp calibration does not have to fit each grasp in isolation. A population prior learned from other hands, on a load test adapted to grasps, identifies grasp compliance and its implied stiffness from three load tests more accurately than PSD least squares at every budget tested, with the largest gain where load cases are scarce. The result stays an explicit, inspectable, positive-semidefinite compliance, and its leave-one-out score flags the calibrations not to trust.</p>
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
