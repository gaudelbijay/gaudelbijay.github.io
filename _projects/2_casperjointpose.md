---
layout: page
title: Joint-Angle Human Pose Estimation for Casualty Manipulation
description: Contact-aware 23-DoF human joint-state observer for robot-assisted casualty manipulation.
img: assets/img/projects/casualty-pose/human_casualty_manipulation.png
importance: 2
category: work
github: https://github.com/stevens-armlab/casperjointpose
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
      This project estimates the joint angles of a passive human body while a mobile
      manipulator grasps and moves a casualty. The goal is not only to see a body in
      depth, but to give the robot a physically meaningful 23-DoF joint state, contact
      belief, and uncertainty signal it can use while handling limbs safely.
    </p>
  </div>
  <img
    class="casper-image"
    src="{{ '/assets/img/projects/casualty-pose/human_casualty_manipulation.png' | relative_url }}"
    alt="Mobile manipulator interacting with an articulated casualty model"
  />
</section>

<div class="casper-metrics">
  <div class="casper-metric">
    <strong>23 DoF</strong>
    <span>articulated human state estimated from a single depth view</span>
  </div>
  <div class="casper-metric">
    <strong>65,350</strong>
    <span>simulated frames across five Gazebo worlds</span>
  </div>
  <div class="casper-metric">
    <strong>2.89&deg;</strong>
    <span>test MAE for the best medium model</span>
  </div>
  <div class="casper-metric">
    <strong>88.35%</strong>
    <span>test joints within 5 degrees</span>
  </div>
  <div class="casper-metric">
    <strong>92.82%</strong>
    <span>test joints within 10 degrees</span>
  </div>
  <div class="casper-metric">
    <strong>702 FPS</strong>
    <span>small model throughput at 1.425 ms per frame</span>
  </div>
</div>

<section class="casper-section">
  <h2>Story</h2>
  <p>
    Casualty manipulation is a harder perception problem than ordinary pose
    detection. A rescue robot may be holding a forearm or leg, the body can be
    partially occluded, and the action that matters is a joint-space action: whether a
    limb is bending toward or away from feasible human motion. I built the observer
    around that constraint. It predicts bounded joint-angle pseudo-measurements,
    estimates which body link is in contact, and keeps a calibrated feasible set of
    likely human configurations rather than a single brittle pose.
  </p>
</section>

<section class="casper-section">
  <h2>Method</h2>
  <div class="casper-two-col">
    <div>
      <p>
        The perception stack uses one depth camera and wrist force/torque sensing.
        The paper's observer takes a two-channel input made from normalized depth and
        an invalid-depth mask, then passes it through a fixed lightweight CNN encoder.
        Four CNN stages are pooled with GAP + Linear + GELU into a global descriptor
        \( \mathbf{z}_\tau \). Direct projection heads use that descriptor to predict
        bounded joint-angle pseudo-measurements, per-joint log-variance,
        grasped-link probabilities, and the optional energy score used for
        feasible-set supervision. Those outputs feed a contact-aware extended Kalman
        filter that gates contact updates, blocks joints according to the likely
        grasped link, masks unstable gains, and inflates innovation covariance when
        the normalized innovation squared test indicates mismatch.
      </p>
      <p>
        Training data was collected in simulation with randomized Gazebo scenes and
        small camera-pose variation. The final dataset contains 65,350 frames split
        80/10/10 for train, validation, and test, with contact classes balanced across
        left forearm, right forearm, left leg, right leg, and no contact.
      </p>
    </div>
    <figure class="casper-figure">
      <img
        src="{{ '/assets/img/projects/casualty-pose/overview.png' | relative_url }}"
        alt="Overview of the depth observer, contact reasoning, and EKF fusion pipeline"
      />
      <figcaption>
        The full observer fuses depth, segmentation, robot kinematics, and wrist force
        signals into joint angles, contact belief, and uncertainty.
      </figcaption>
    </figure>
  </div>

  <figure class="casper-figure">
    <img
      src="{{ '/assets/img/projects/casualty-pose/architecture.png' | relative_url }}"
      alt="Network architecture for depth-based joint angle, uncertainty, and contact prediction"
    />
    <figcaption>
      The reported observer uses a compact CNN encoder with direct per-joint
      projection heads. It does not use attention-based query decoding or kinematic
      graph refinement, keeping the backbone/head design fixed across ablations.
    </figcaption>
  </figure>
</section>

<section class="casper-section">
  <h2>Results</h2>
  <p>
    The best medium model reached <strong>2.89&deg; &plusmn; 0.13&deg;</strong> test
    MAE, with <strong>88.35% &plusmn; 0.53%</strong> of joint estimates within
    5 degrees and <strong>92.82% &plusmn; 0.35%</strong> within 10 degrees. Against
    reproduced depth-pose baselines, the MAE dropped by 30.53% versus Abobakr,
    33.10% versus D3KE, 58.30% versus Collings, and 58.54% versus Pose2Sim.
  </p>

  <div class="casper-table-wrap">
    <table class="casper-table">
      <thead>
        <tr>
          <th>Model</th>
          <th>Test MAE</th>
          <th>&le;5&deg;</th>
          <th>&le;7&deg;</th>
          <th>&le;10&deg;</th>
          <th>Link accuracy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Best medium observer</td>
          <td>2.89&deg; &plusmn; 0.13&deg;</td>
          <td>88.35% &plusmn; 0.53%</td>
          <td>90.32% &plusmn; 0.34%</td>
          <td>92.82% &plusmn; 0.35%</td>
          <td>89.44% &plusmn; 1.06%</td>
        </tr>
        <tr>
          <td>Best small observer</td>
          <td>2.94&deg; &plusmn; 0.04&deg;</td>
          <td>88.35% &plusmn; 0.00%</td>
          <td>90.29% &plusmn; 0.34%</td>
          <td>92.55% &plusmn; 0.05%</td>
          <td>93.67% &plusmn; 0.29%</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="casper-callout">
    Contact fusion improved the useful part of the distribution without making the
    system separably worse at the 5 degree threshold. The contact-aware EKF beat an
    unguided contact-on filter by +1.62, +3.28, +0.55, and +0.34 percentage points
    across the right forearm, left forearm, left leg, and right leg contact modes.
  </div>
</section>

<section class="casper-section">
  <h2>Plots</h2>
  <div class="casper-two-col">
    <figure class="casper-figure">
      <img
        src="{{ '/assets/img/projects/casualty-pose/coverage_vs_target.png' | relative_url }}"
        alt="Coverage transfer curves for feasible-set calibration"
      />
      <figcaption>
        Coverage transfer curves show how feasible-set calibration tracks target
        inclusion across validation and test splits.
      </figcaption>
    </figure>
    <figure class="casper-figure">
      <img
        src="{{ '/assets/img/projects/casualty-pose/feasible_set_pareto.png' | relative_url }}"
        alt="Feasible-set inclusion and set-size Pareto plot"
      />
      <figcaption>
        The feasible-set Pareto plot makes the tradeoff between candidate-set size and
        inclusion explicit.
      </figcaption>
    </figure>
  </div>

  <figure class="casper-figure">
    <img
      src="{{ '/assets/img/projects/casualty-pose/calibration_benchmark.png' | relative_url }}"
      alt="Calibration benchmark boxplots for contact confidence"
    />
    <figcaption>
      Temperature scaling preserved contact classification performance while improving
      calibration: ECE15 dropped from 0.159 to 0.071 and Brier score from 0.074 to
      0.050.
    </figcaption>
  </figure>
</section>
