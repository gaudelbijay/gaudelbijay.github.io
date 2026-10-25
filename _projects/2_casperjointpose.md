---
layout: page
title: Robot-as-Sensor Joint-Angle Estimation for Casualty Manipulation
description: A robot holding a casualty's limb corrects the camera's joint-angle estimate, fusing an RGB-D pose network with arm and hand proprioception in a grasp-aware error-state EKF.
img: assets/img/projects/casualty-pose/robot-grasp-forearm.png
importance: 2
category: work
github: https://github.com/gaudelbijay/caveman_ros2_isaac
_styles: |
  .casper-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
    gap: 1.4rem;
    align-items: center;
    margin: 1rem 0 1.6rem;
  }

  .casper-kicker {
    margin: 0 0 0.45rem;
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .casper-lede {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  .casper-image,
  .casper-figure img {
    width: 100%;
    height: auto;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: var(--global-card-bg-color);
  }

  .casper-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    gap: 0.75rem;
    margin: 1.4rem 0 1.7rem;
  }

  .casper-metric {
    padding: 0.85rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: var(--global-card-bg-color);
  }

  .casper-metric strong {
    display: block;
    margin-bottom: 0.18rem;
    color: var(--global-theme-color);
    font-size: 1.22rem;
    line-height: 1.15;
  }

  .casper-metric span {
    display: block;
    font-size: 0.82rem;
    line-height: 1.35;
  }

  .casper-section {
    margin: 1.9rem 0;
  }

  .casper-section h2 {
    margin-bottom: 0.55rem;
  }

  .casper-two-col {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    align-items: start;
  }

  .casper-callout {
    padding: 1rem;
    border-left: 4px solid var(--global-theme-color);
    background: var(--global-card-bg-color);
  }

  .casper-figure {
    margin: 1rem 0 1.4rem;
  }

  .casper-figure figcaption {
    margin-top: 0.45rem;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    line-height: 1.45;
  }

  .casper-table-wrap {
    overflow-x: auto;
    margin: 1rem 0;
  }

  .casper-table {
    width: 100%;
    min-width: 620px;
    border-collapse: collapse;
    font-size: 0.92rem;
  }

  .casper-table th,
  .casper-table td {
    padding: 0.65rem 0.7rem;
    border-bottom: 1px solid var(--global-divider-color);
    text-align: left;
    vertical-align: top;
  }

  .casper-table th {
    color: var(--global-theme-color);
    font-weight: 700;
  }

  .casper-table td.win {
    color: var(--global-theme-color);
    font-weight: 700;
  }

  .casper-eq {
    margin: 0.8rem 0 1rem;
  }

  .casper-callout + .casper-callout {
    margin-top: 0.8rem;
  }

  .casper-callout.warn {
    border-left-color: var(--global-warning-block-title);
    background: var(--global-warning-block-bg);
    color: var(--global-warning-block-text);
  }

  @media (max-width: 820px) {
    .casper-hero,
    .casper-two-col {
      grid-template-columns: 1fr;
    }
  }
---

<section class="casper-hero">
  <div>
    <p class="casper-kicker">Casualty manipulation perception</p>
    <p class="casper-lede">
      Can a robot that is holding a casualty's limb estimate the casualty's joint angles
      better than a camera alone? This project treats the robot itself as a sensor: a
      UR5 arm with a LEAP hand grasps a lying person's forearm or shank, and its own arm
      and hand encoders and wrist force are fused with an RGB-D pose network in a
      grasp-aware error-state EKF. Everything is built on an anatomical, physics-simulated
      human ("caveman") in Isaac Sim with a ROS 2 interface.
    </p>
  </div>
  <img
    class="casper-image"
    src="{{ '/assets/img/projects/casualty-pose/robot-grasp-forearm.png' | relative_url }}"
    alt="UR5 arm with a LEAP hand grasping the forearm of a simulated lying casualty"
  />
</section>

<div class="casper-metrics">
  <div class="casper-metric">
    <strong>+37.0%</strong>
    <span>forearm joint-angle error removed vs. vision alone (95% CI +27.6 to +45.9)</span>
  </div>
  <div class="casper-metric">
    <strong>8.66&deg; &rarr; 5.46&deg;</strong>
    <span>shoulder and elbow flexion MAE over the manipulation</span>
  </div>
  <div class="casper-metric">
    <strong>30 of 38</strong>
    <span>accepted forearm grasps improved (Wilcoxon p = 3&times;10<sup>-6</sup>)</span>
  </div>
  <div class="casper-metric">
    <strong>6.86&deg;</strong>
    <span>vision-only MAE on 12 primary angles, unseen test people</span>
  </div>
  <div class="casper-metric">
    <strong>700,128</strong>
    <span>synthetic RGB-D frames of 36 people</span>
  </div>
  <div class="casper-metric">
    <strong>32 DoF</strong>
    <span>anatomical human with passive joint mechanics</span>
  </div>
</div>

<section class="casper-section">
  <h2>Story</h2>
  <p>
    During casualty manipulation the camera is at its weakest exactly when the estimate
    matters most: the person is lying, limbs are self-occluded or hidden by the robot,
    and the pose being produced is unusual. A pose network also tends to misread a held
    limb the same way for many seconds. The robot, however, knows precisely where its
    palm is and that it is holding the limb. The question is whether that grasp geometry
    can correct the camera's persistent error, using only signals a real robot has:
    arm and hand encoders, finger closure, and wrist force.
  </p>
</section>

<figure class="casper-figure">
  <img
    src="{{ '/assets/img/projects/casualty-pose/robot-sensor-architecture.png' | relative_url }}"
    alt="Architecture of the robot-as-sensor estimator: pose network, pivot model, grasp gate, iterated error-state EKF and corrected joint angle"
  />
  <figcaption>
    The robot as a sensor for a lying casualty's limb pose. (a) The pose network reads depth
    and colour and predicts joint angles and the pelvis pose; its grasp site feeds the grasp
    planner. (b) From the arm and hand encoders, the pivot model turns the planned grasp about
    the elbow as the palm rises, giving the grasp line. (c) The grasp is a measurement only while
    the fingers are closed on the limb and the wrist force stays below the protective stop.
    (d) An iterated error-state EKF fuses vision, with a persistent bias state, and the grasp line.
    (e) Elbow flexion in one test episode: while held, vision errs by 8.4&deg;, the fused
    estimate by 1.4&deg;. Blue: camera; orange: robot; magenta: fused estimate.
  </figcaption>
</figure>

<section class="casper-section">
  <h2>Problem formulation</h2>
  <p>
    A casualty lies on the floor in view of a static RGB-D camera. The robot grasps the distal
    forearm or shank, lifts or slides it, moves it, and releases it. At each camera frame $t$ the
    goal is the casualty's joint angles $\boldsymbol{\theta}_t$, reported on shoulder and elbow
    flexion for the forearm (hip and knee for the shank), over the whole manipulation from grasp
    to release. The available signals are:
  </p>
  <ul>
    <li><strong>Vision:</strong> joint angles $\hat{\boldsymbol{\theta}}_t$ and pelvis pose $\hat T_{P,t}$ from the pose network, and a body scale $\hat\kappa$ from depth.</li>
    <li><strong>Robot:</strong> the palm pose $T_{H,t}$ from arm and hand encoders, the finger gap $\Delta_t$, and the wrist force $\mathbf{F}_t$.</li>
  </ul>
  <p>The filter state collects the pose, the grasp, the body scale, and the vision bias:</p>
  <div class="casper-eq">
$$
\mathbf{x}=\left(\boldsymbol{\theta},\ T_P,\ G,\ \kappa,\ \mathbf{b}\right),
$$
  </div>
  <p>
    where $T_P$ is the pelvis pose, $G$ the grasp (the limb relative to the palm), $\kappa$ a
    uniform body scale, and $\mathbf{b}$ a slowly varying vision bias. Treating the network's error as
    persistent rather than white is the key modelling choice: the vision residual is
  </p>
  <div class="casper-eq">
$$
\mathbf{r}_v=\boldsymbol{\theta}+\mathbf{b}-\hat{\boldsymbol{\theta}}_t ,
$$
  </div>
  <p>
    and the bias decays with a time constant $\tau$ chosen on validation people. While the grasp
    gate $h_t$ is on, the robot contributes a <strong>grasp line</strong> $\boldsymbol{\ell}_t$: the limb axis
    predicted from the palm, $(\tilde{\mathbf{p}},\tilde{\mathbf{u}})$ from $T_{H,t}G^{-1}$, must agree
    with the axis $(\mathbf{p},\mathbf{u})$ of the estimated limb given by $\boldsymbol{\theta}$, $T_P$ and $\kappa$:
  </p>
  <div class="casper-eq">
$$
\mathbf{r}_g=
\begin{bmatrix}
\left(I-\mathbf{u}\mathbf{u}^{\top}\right)\left(\tilde{\mathbf{p}}-\mathbf{p}\right)\\
\tilde{\mathbf{u}}\times\mathbf{u}
\end{bmatrix}.
$$
  </div>
  <p>
    Only the perpendicular offset and the direction are constrained; sliding along the limb and
    rolling about it are left free, because a compliant hand is a ring around the limb rather than a
    clamp. The predict step moves the limb with the measured palm displacement and decays the bias,
    and the update is iterated on the manifold:
  </p>
  <div class="casper-eq">
$$
\mathbf{x}_t^{-}=f\!\left(\mathbf{x}_{t-1}^{+},\ \delta T_{H,t}\right),
\qquad
\mathbf{x}_t^{+}=\mathbf{x}_t^{-}\boxplus K\mathbf{r}.
$$
  </div>
</section>

<section class="casper-section">
  <h2>Method</h2>
  <div class="casper-two-col">
    <div>
      <p>
        <strong>Pivot model.</strong> During the lift the forearm tilts 14&ndash;23&deg; inside the hand,
        always the same way. The grasp line therefore starts at the planned grasp $G_0$ at onset and is
        turned about the elbow as the palm rises from its pose at grasp $T_{H,t_0}$. This cuts the median
        axis-direction error from 17.5&deg; to 5.4&deg;.
      </p>
      <p>
        <strong>Grasp gate.</strong> The grasp is a measurement only while the finger encoders show the
        hand closed on the limb (a hysteretic finger-gap band) and the wrist force before the lift stays
        below the UR5's 150 N protective stop. Only grasps the robot itself accepts are evaluated.
      </p>
    </div>
    <div>
      <p>
        <strong>Pose network.</strong> The vision model reads segmented RGB and depth aligned to colour
        in a person-centred crop with eight frames of history, using a large self-supervised vision
        transformer backbone and a causal temporal transformer. It predicts 12 primary flexion angles plus a pelvis head (3.5 cm and 7.0&deg;
        on test people).
      </p>
      <p>
        <strong>Body scale.</strong> Head-to-heel length from the first depth frame, divided by the template's,
        gives $\hat\kappa$ to within 0.3% of the true length.
      </p>
    </div>
  </div>
</section>

<section class="casper-section">
  <h2>Simulated human and dataset</h2>
  <p>
    The caveman is built on NVIDIA's rigged people with 32 anatomical degrees of freedom, human
    ranges of motion (including a shoulder joint sinus), de Leva segment masses, soft-tissue collision
    hulls, and passive joint mechanics so that a relaxed or unconscious body settles realistically.
    A ROS 2 Jazzy interface exposes joint states, commands, and active, passive, or effort control.
  </p>
  <p>
    The dataset contains <strong>14,586 sequences (700,128 frames)</strong> of 36 people, split by
    person, from a simulated RealSense D435 with stereo noise, shadows, and dropout. Activities range
    from walking, falling, and crawling to 5,476 lying sequences, labelled with 32 joint angles at 30 and
    120 Hz, keypoints, person masks, and camera poses.
  </p>

  <div class="casper-table-wrap">
    <table class="casper-table">
      <thead>
        <tr>
          <th>Pose network (6 test people, MAE)</th>
          <th>GT masks</th>
          <th>Segmenter-like masks</th>
          <th>Depth only</th>
          <th>Lying postures</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Joint angles, 12 primary angles</strong></td>
          <td class="win">6.86&deg;</td>
          <td>6.93&deg;</td>
          <td>6.95&deg;</td>
          <td>12.35&deg;</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p>Lying postures roughly double the vision error, which is exactly where the robot's grasp has to help.</p>
</section>

<section class="casper-section">
  <h2>Robot study</h2>
  <p>
    A UR5 with a full LEAP hand at its real gains and 550 mA current limit, with a flange force/torque
    sensor, runs at 600 Hz physics next to a static D435 model at 30 Hz. The robot grasps the distal
    forearm and lifts it about 8 cm, or slides the shank on its heel, moves the limb, and releases it.
    The grasp is planned with vision-level error. Every setting is chosen on validation people; the test is
    a fresh confirmation set of 72 episodes on 4 test people, generated after the method was fixed.
  </p>

  <div class="casper-table-wrap">
    <table class="casper-table">
      <thead>
        <tr>
          <th>Method (test, accepted grasps)</th>
          <th>Forearm MAE (38)</th>
          <th>Gain vs. vision [95% CI]</th>
          <th>Episodes better</th>
          <th>Shank MAE (7)</th>
          <th>Shank gain</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Vision only (pose network)</td><td>8.66&deg;</td><td>&ndash;</td><td>&ndash;</td><td>4.97&deg;</td><td>&ndash;</td></tr>
        <tr><td>EKF without robot data</td><td>8.68&deg;</td><td>&minus;0.2%</td><td>4 of 38</td><td>4.97&deg;</td><td>&minus;0.1%</td></tr>
        <tr>
          <td><strong>Ours: grasp line, pivot model</strong></td>
          <td class="win">5.46&deg;</td>
          <td class="win">+37.0% [+27.6, +45.9]</td>
          <td class="win">30 of 38</td>
          <td class="win">4.54&deg;</td>
          <td class="win">+8.6%</td>
        </tr>
        <tr><td>Grasp line on the true limb axis (reference)</td><td>4.85&deg;</td><td>+44.0% [+36.0, +50.9]</td><td>33 of 38</td><td>4.55&deg;</td><td>+8.4%</td></tr>
        <tr><td>Manip4Care: rigid-grasp kinematics</td><td>8.91&deg;</td><td>&minus;2.8%</td><td>12 of 38</td><td>7.31&deg;</td><td>&minus;47.2%</td></tr>
        <tr><td>Zhu et al.: held-point tracking</td><td>14.84&deg;</td><td>&minus;71.3%</td><td>6 of 38</td><td>7.35&deg;</td><td>&minus;47.9%</td></tr>
        <tr><td>Zhu et al., given the true start posture</td><td>4.92&deg;</td><td>+43.2% [+24.0, +54.9]</td><td>35 of 38</td><td>4.48&deg;</td><td>+9.7%</td></tr>
      </tbody>
    </table>
  </div>

  <div class="casper-callout">
    The robot removes 37% of the forearm vision error over the whole manipulation, and about 45% while
    it holds the arm. Every test person gains (+33 to +48%) on both arms, and the pivot model gets within
    7 points of a line through the true limb axis. Prior trackers given the same inputs lose to vision:
    a rigid grasp ignores that the arm turns in a compliant hand, and held-point tracking accumulates the
    error of its unknown start. Only when given the casualty's true start posture, which cannot be measured
    on an unresponsive person, does Zhu et al. match the mean, with a wider spread (95th percentile 15.3&deg;
    vs. 12.6&deg;).
  </div>

  <figure class="casper-figure">
    <img
      src="{{ '/assets/img/projects/casualty-pose/fig-errors.png' | relative_url }}"
      alt="Per-episode chain-angle error for each method"
    />
    <figcaption>Chain-angle error per episode (box: median and quartiles; points: episodes; log scale).</figcaption>
  </figure>

  <div class="casper-two-col">
    <div>
      <h3>Ablations (forearm)</h3>
      <div class="casper-table-wrap">
        <table class="casper-table" style="min-width: 0">
          <thead><tr><th>Variant</th><th>Gain vs. vision</th></tr></thead>
          <tbody>
            <tr><td><strong>Full method</strong></td><td class="win">+37.0%</td></tr>
            <tr><td>No vision-bias state (white vision noise)</td><td>+0.4%</td></tr>
            <tr><td>Camera blind to the held limb</td><td>+31.1%</td></tr>
            <tr><td>Camera blind, no palm displacement in predict</td><td>+24.2%</td></tr>
            <tr><td>Learned person mask instead of the true one</td><td>+32.0%</td></tr>
            <tr><td>No grasp gate</td><td>+34.5% (shank &minus;8.3%)</td></tr>
            <tr><td>Body scale not measured</td><td>+36.0%</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Without the bias state the gain vanishes: the vision error is persistent, and modelling it as a
        slowly varying bias is what lets the grasp correct it. The palm displacement carries the estimate
        when the camera cannot see the limb.
      </p>
    </div>
    <div>
      <h3>Off-the-shelf vision</h3>
      <div class="casper-table-wrap">
        <table class="casper-table" style="min-width: 0">
          <thead><tr><th>Vision source</th><th>Forearm gain</th><th>Shank gain</th></tr></thead>
          <tbody>
            <tr><td>Our network</td><td class="win">+37.0%</td><td>+8.6%</td></tr>
            <tr><td>NLF, as is</td><td>&minus;50.9%</td><td>&minus;18.4%</td></tr>
            <tr><td>NLF, anchored + own noise</td><td>+8.0%</td><td class="win">+17.7%</td></tr>
            <tr><td>SAM 3D Body, as is</td><td>&minus;48.5%</td><td>&minus;0.7%</td></tr>
            <tr><td>SAM 3D Body, anchored + own noise</td><td>+22.9%</td><td>+9.9%</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Single-image 3D pose models place the body 10&ndash;20 cm off and jitter frame to frame. Anchoring
        their pelvis with depth and giving them their own per-frame noise (both chosen on validation) lets
        the filter improve them too; with the robot, SAM 3D Body reaches 5.6&deg; on the forearm.
      </p>
    </div>
  </div>
</section>

<section class="casper-section">
  <h2>Manipulation episodes</h2>
  <figure class="casper-figure">
    <img
      src="{{ '/assets/img/projects/casualty-pose/fig-trajectories.png' | relative_url }}"
      alt="True, vision-only and corrected joint angles over a manipulation for each limb"
    />
    <figcaption>
      A typical episode per limb (gain closest to that limb's median): true, vision-only, and corrected
      joint angles over the manipulation.
    </figcaption>
  </figure>
  <figure class="casper-figure">
    <img
      src="{{ '/assets/img/projects/casualty-pose/fig-sequences.jpg' | relative_url }}"
      alt="Camera views of approach, grasp, lift, move and release for the left forearm, right forearm and shank"
    />
    <figcaption>
      The same manipulations from the camera at approach, grasp, lift or slide, move, and release, with the
      limb's true joints (solid) and where they were at the grasp (dashed). The camera looks down, so the lift
      shows mostly as the elbow bending; the shank only slides.
    </figcaption>
  </figure>
</section>

<section class="casper-section">
  <h2>Limitations and next steps</h2>
  <div class="casper-callout warn">
    <strong>Shank.</strong> The leg is slid on its heel rather than lifted, because a straight leg needs more
    ankle force than the arm and hand can carry, so it moves little and the planned axis is never corrected by
    a lift; 13 of 24 shank grasps hit the protective stop. The shank gain is therefore small (+8.6% on 7 accepted grasps).
  </div>
  <div class="casper-callout warn">
    <strong>In-grip turning.</strong> While the arm is moved it also turns 3&ndash;6&deg; inside the compliant grip.
    The grasp line is fixed in the palm after the hold starts, so the estimate gets the elbow's level right but
    not its faster swings. Modelling that turn, as the pivot model does for the lift, is the next step.
  </div>
  <div class="casper-callout">
    All results so far are in simulation. A hardware study with the lab's UR5, LEAP hand, and force/torque
    sensor, first on a mannequin and then on people, is planned.
  </div>
</section>
