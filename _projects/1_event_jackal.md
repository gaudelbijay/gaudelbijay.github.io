---
layout: page
title: Event-Camera Reinforcement Learning Navigation on Jackal
description: Event-driven reinforcement learning for autonomous navigation with neuromorphic vision.
img: assets/img/projects/event-jackal/navigation-rollout.gif
importance: 1
category: work
github: https://github.com/gaudelbijay/event_jackal
_styles: |
  .ej-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.1rem 0 1.5rem;
  }

  .ej-badge {
    padding: 0.32rem 0.75rem;
    border: 1px solid var(--global-theme-color);
    border-radius: 999px;
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }

  .ej-kicker {
    margin: 0 0 0.5rem;
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  .ej-lede {
    font-size: 1.04rem;
    line-height: 1.75;
  }

  .ej-hero {
    margin: 1.2rem 0 1.8rem;
  }

  .ej-figure {
    margin: 1.4rem 0 1.8rem;
  }

  .ej-figure figure {
    margin: 0;
  }

  .ej-hero figcaption,
  .ej-figure figcaption {
    margin-top: 0.65rem;
    color: var(--global-text-color-light);
    font-size: 0.88rem;
    line-height: 1.5;
    text-align: center;
  }

  .ej-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.8rem;
    margin: 1.3rem 0 1.9rem;
  }

  .ej-metric {
    padding: 0.9rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    background: var(--global-card-bg-color);
  }

  .ej-metric strong {
    display: block;
    color: var(--global-theme-color);
    font-size: 1.35rem;
  }

  .ej-metric span {
    font-size: 0.82rem;
    line-height: 1.35;
  }

  .ej-callout {
    margin: 1.25rem 0 1.6rem;
    padding: 1rem 1.15rem;
    border: 1px solid var(--global-divider-color);
    border-left: 4px solid var(--global-theme-color);
    border-radius: 8px;
    background: var(--global-card-bg-color);
  }

  .ej-callout p {
    margin: 0;
  }

  .ej-callout p + p {
    margin-top: 0.6rem;
  }

  .ej-callout-label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--global-theme-color);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .ej-callout-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 1.2rem;
    margin-top: 0.7rem;
    color: var(--global-text-color-light);
    font-size: 0.86rem;
  }

  .ej-callout.insight {
    border-left-color: var(--global-tip-block);
    background: var(--global-tip-block-bg);
    color: var(--global-tip-block-text);
  }

  .ej-callout.insight .ej-callout-label {
    color: var(--global-tip-block-title);
  }

  .ej-callout.warn {
    border-left-color: var(--global-warning-block-title);
    background: var(--global-warning-block-bg);
    color: var(--global-warning-block-text);
  }

  .ej-callout.warn .ej-callout-label {
    color: var(--global-warning-block-title);
  }

  .ej-table-wrap {
    overflow-x: auto;
    margin: 1rem 0 1.6rem;
  }

  .ej-table {
    width: 100%;
    min-width: 560px;
    border-collapse: collapse;
    font-size: 0.9rem;
  }

  .ej-table th,
  .ej-table td {
    padding: 0.6rem 0.7rem;
    border-bottom: 1px solid var(--global-divider-color);
    text-align: right;
  }

  .ej-table th:first-child,
  .ej-table td:first-child {
    text-align: left;
  }

  .ej-table th {
    color: var(--global-theme-color);
    font-weight: 700;
  }

  .ej-table tbody tr:hover {
    background: var(--global-code-bg-color);
  }

  .ej-win {
    color: var(--global-theme-color);
    font-weight: 700;
  }

  .ej-steps {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
    margin: 1.3rem 0 1.7rem;
  }

  .ej-step {
    position: relative;
    padding: 1rem 1rem 1rem 3.1rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    background: var(--global-card-bg-color);
    transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
  }

  .ej-step:hover {
    border-color: var(--global-theme-color);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
    transform: translateY(-2px);
  }

  .ej-step-number {
    position: absolute;
    top: 0.9rem;
    left: 0.9rem;
    color: var(--global-theme-color);
    font-family: monospace;
    font-size: 1.15rem;
    font-weight: 700;
  }

  .ej-step strong,
  .ej-step span {
    display: block;
  }

  .ej-step span {
    margin-top: 0.25rem;
    color: var(--global-text-color-light);
    font-size: 0.82rem;
    line-height: 1.4;
  }

  .ej-cta {
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

  .ej-cta:hover {
    background: var(--global-theme-color);
    color: var(--global-hover-text-color) !important;
  }

  @media (max-width: 780px) {
    .ej-steps {
      grid-template-columns: 1fr;
    }
  }
---

<div class="ej-badges">
  <span class="ej-badge">Event camera · neuromorphic vision</span>
  <span class="ej-badge">Self-supervised perception</span>
  <span class="ej-badge">Soft Actor-Critic</span>
  <span class="ej-badge">Sim-to-real on Jackal</span>
</div>

<p class="ej-kicker">Event-driven reinforcement learning for autonomous navigation</p>

<div class="ej-hero">
  {% include figure.liquid path="assets/img/projects/event-jackal/navigation-rollout.gif" class="img-fluid rounded z-depth-1" zoomable=true caption="Navigation rollout: the learned policy steers the Jackal through a cluttered environment using event-based perception." %}
</div>

<p class="ej-lede">This project asks whether a mobile robot can navigate using an event camera as its primary exteroceptive sensor. Instead of reconstructing conventional images, the system converts the sparse asynchronous event stream into <strong>Binary Event Maps (BEMs)</strong>, learns a robust visual representation without manual labels, and feeds that representation to a continuous-control reinforcement-learning policy.</p>

<p>The complete pipeline was evaluated on a Clearpath Jackal in simulation and on physical hardware. In simulation, the best event-based agent reached an <strong>80 ± 7% success rate</strong>, slightly exceeding its laser-based counterpart. On hardware, the adapted policy completed <strong>6 of 10 trials</strong> in a 3 × 5 m obstacle course.</p>

<div class="ej-metrics">
  <div class="ej-metric"><strong>80 ± 7%</strong><span>Best simulated success rate (event CNN, H = 4)</span></div>
  <div class="ej-metric"><strong>60%</strong><span>Real-hardware success rate (6 / 10 trials)</span></div>
  <div class="ej-metric"><strong>1M</strong><span>Training steps per policy</span></div>
  <div class="ej-metric"><strong>50 / 50</strong><span>Train / held-out BARN-style environments</span></div>
  <div class="ej-metric"><strong>4</strong><span>Policy architectures compared</span></div>
</div>

## Research problem

Conventional cameras produce dense frames at a fixed rate and can suffer from motion blur or difficult illumination. Event cameras report only per-pixel brightness changes, providing low-latency, high-dynamic-range measurements with sparse output. That efficiency is attractive for agile navigation, but it also creates a learning problem: the signal is asynchronous, has no conventional texture, and changes with both motion and scene structure.

We formulate goal-directed navigation as a partially observable Markov decision process. At each step, the policy observes an event-camera representation and the goal position in the robot frame, then commands continuous linear and angular velocities. The objective is to reach the goal before the time limit while avoiding collisions. The reward combines goal completion, progress, and collision cost:

<div class="ej-callout">
  <span class="ej-callout-label">Reward shaping</span>

$$
R(s_t,a_t)=20\,\mathbf{1}(d_t<d_s)+2(d_{t-1}-d_t)-5c_t.
$$

  <div class="ej-callout-legend">
    <span>$d_t$ — remaining goal distance</span>
    <span>$d_s$ — success threshold</span>
    <span>$c_t$ — collision indicator</span>
  </div>
</div>

This structure rewards decisive forward progress without allowing goal seeking to overwhelm safety.

## Event-to-action pipeline

<div class="ej-figure">
  {% include figure.liquid path="assets/img/projects/event-jackal/model.png" class="img-fluid rounded z-depth-1" zoomable=true caption="System architecture. Events are accumulated into a BEM, encoded by the perception network, and combined with the relative goal before the policy generates a velocity command." %}
</div>

Synthetic training events are generated from simulated videos using Vid2E. Within each temporal window, positive and negative events are accumulated into a BEM; opposing polarities cancel, leaving a compact representation that emphasizes moving boundaries and obstacle edges.

The perception module is trained with self-supervised contrastive learning. Standard and augmented BEMs pass through parallel encoder-decoder branches. Reconstruction and obstacle-aware objectives preserve scene geometry, while contrastive and consistency losses align representations across event perturbations. The resulting latent vector supplies the Soft Actor-Critic policy with navigation-relevant structure rather than raw event noise.

<div class="ej-figure">
  {% include figure.liquid path="assets/img/projects/event-jackal/perception-model.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Self-supervised perception. Consistency between an original and an augmented BEM stabilizes the latent event representation used for control." %}
</div>

## Simulation study

The agents were trained for one million steps on 50 procedurally generated BARN-style environments and evaluated on 50 held-out environments, with 10 episodes per environment. We compared MLP, GRU, CNN, and Transformer policies, all trained with Soft Actor-Critic, and evaluated both event-camera and laser observations with one-frame and four-frame histories.

<div class="ej-table-wrap">
  <table class="ej-table">
    <thead>
      <tr><th>Policy</th><th>Laser, H = 1</th><th>Laser, H = 4</th><th>Event, H = 1</th><th>Event, H = 4</th></tr>
    </thead>
    <tbody>
      <tr><td>MLP</td><td>69 ± 4%</td><td>72 ± 7%</td><td class="ej-win">77 ± 6%</td><td>64 ± 9%</td></tr>
      <tr><td>GRU</td><td>—</td><td>74 ± 2%</td><td>—</td><td>75 ± 7%</td></tr>
      <tr><td>CNN</td><td>—</td><td>77 ± 4%</td><td>—</td><td class="ej-win">80 ± 7%</td></tr>
      <tr><td>Transformer</td><td>—</td><td>78 ± 6%</td><td>—</td><td>68 ± 5%</td></tr>
    </tbody>
  </table>
</div>

The one-frame event MLP outperformed the one-frame laser MLP by eight percentage points. With four-frame histories, the event-based CNN achieved the highest overall evaluation result, **80 ± 7%**, compared with **77 ± 4%** for the laser CNN. The GRU learned fastest early in training, but the CNN eventually produced the lowest collision rate, highest reward plateau, and strongest held-out success.

<div class="ej-figure">
  {% include figure.liquid path="assets/img/projects/event-jackal/training-metrics.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Training behavior. Success, collision rate, and episode reward over one million environment steps." %}
</div>

### Why consistency regularization matters

<div class="ej-callout insight">
  <span class="ej-callout-label">Insight</span>
  <p>Removing the perception model's consistency loss reduced final success to about <strong>70%</strong>, approximately 20 percentage points below the regularized training result of roughly <strong>90%</strong>. Mean episode reward also remained 5–10 points lower. Collision rate changed comparatively little, but rollouts became indecisive and oscillatory: the agent stayed relatively safe without reliably converting perception into goal-directed motion.</p>
</div>

<div class="ej-figure">
  {% include figure.liquid path="assets/img/projects/event-jackal/consistency-ablation.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Consistency-loss ablation. Without this supervisory signal, success saturates earlier and reward remains lower." %}
</div>

<div class="ej-figure">
  {% include figure.liquid path="assets/img/projects/event-jackal/visualization.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Held-out rollouts. Successful trajectories across obstacle layouts with different corridor widths and turning demands." %}
</div>

## Physical Jackal experiment

Directly deploying a policy trained only with cylindrical simulated obstacles did not work: the Jackal hesitated, spun in place, and collided. We addressed this sim-to-real gap in three stages:

<div class="ej-steps">
  <div class="ej-step"><span class="ej-step-number">1</span><strong>Diversify simulation</strong><span>Expanded training from one object type to 20 simulated worlds containing varied obstacle shapes.</span></div>
  <div class="ej-step"><span class="ej-step-number">2</span><strong>Inject sensor noise</strong><span>Added event-frame noise ranging from 0.05% to 5% of the frame dimensions to model sensor jitter and lighting variation.</span></div>
  <div class="ej-step"><span class="ej-step-number">3</span><strong>Fine-tune on real events</strong><span>Collected ~12,000 real event frames (~6.67 minutes at 30 Hz) and fine-tuned the perception module before retraining the CNN policy.</span></div>
</div>

The final experiment used a **3 × 5 m** arena with cardboard obstacles and a **4.5 m** start-to-goal separation. Across 10 trials with small changes in obstacle placement, the robot reached the goal 6 times and collided 4 times, yielding a **60% real-hardware success rate**. For hardware safety, minimum linear velocity was clipped to zero; all other action limits remained unchanged.

<div class="ej-metrics">
  <div class="ej-metric"><strong>20</strong><span>Diverse simulated worlds</span></div>
  <div class="ej-metric"><strong>12,000</strong><span>Real event frames</span></div>
  <div class="ej-metric"><strong>6 / 10</strong><span>Successful hardware trials</span></div>
</div>

<div class="ej-figure">
  {% include figure.liquid path="assets/img/projects/event-jackal/hardware-experiment.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Real-hardware result. Left: commanded forward velocity and heading during a physical run. Right: the test arena, with start in red, goal in blue, and the estimated trajectory in yellow. The frequent heading corrections show how the event-driven policy continually steered around the cardboard obstacles." %}
</div>

<div class="ej-callout warn">
  <span class="ej-callout-label">Limitations</span>
  <p>The hardware result is deliberately reported separately from simulation: although domain randomization and real-event fine-tuning made transfer possible, 60% success remained below the simulated benchmark. The physical velocity trace also reveals jitter and abrupt corrections. These results expose the remaining challenges — limited rear field of view, risky reversing, and weak recovery after committing to a blocked corridor — while demonstrating that a compact event-based policy can control a real ground robot without a laser navigation stack.</p>
</div>

<a class="ej-cta" href="https://github.com/gaudelbijay/event_jackal"><i class="fa-brands fa-github"></i> View the event_jackal repository</a>

<script>
  window.addEventListener("load", function () {
    const article = document.querySelector("article");
    if (article && window.MathJax && typeof window.MathJax.typesetPromise === "function") {
      window.MathJax.typesetPromise([article]);
    }
  });
</script>
