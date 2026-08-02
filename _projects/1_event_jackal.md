---
layout: page
title: Event-Camera Reinforcement Learning Navigation on Jackal
description: Event-driven reinforcement learning for autonomous navigation with neuromorphic vision.
img: assets/img/projects/event-jackal/navigation-rollout.gif
importance: 1
category: work
github: https://github.com/gaudelbijay/event_jackal
---

# Event-Driven Reinforcement Learning for Autonomous Navigation

This project asks whether a mobile robot can navigate using an event camera as its primary exteroceptive sensor. Instead of reconstructing conventional images, the system converts the sparse asynchronous event stream into **Binary Event Maps (BEMs)**, learns a robust visual representation without manual labels, and feeds that representation to a continuous-control reinforcement-learning policy.

The complete pipeline was evaluated on a Clearpath Jackal in simulation and on physical hardware. In simulation, the best event-based agent reached an **80 ± 7% success rate**, slightly exceeding its laser-based counterpart. On hardware, the adapted policy completed **6 of 10 trials** in a 3 × 5 m obstacle course.

<div style="text-align: center; margin: 1rem 0 1.5rem;">
  <img
    src="{{ '/assets/img/projects/event-jackal/navigation-rollout.gif' | relative_url }}"
    alt="Jackal navigating around obstacles using the event-camera reinforcement-learning policy"
    style="width: 100%; max-width: 920px; height: auto; border-radius: 8px;"
  />
  <p><strong>Navigation rollout:</strong> the learned policy steers the Jackal through a cluttered environment using event-based perception.</p>
</div>

## Research problem

Conventional cameras produce dense frames at a fixed rate and can suffer from motion blur or difficult illumination. Event cameras report only per-pixel brightness changes, providing low-latency, high-dynamic-range measurements with sparse output. That efficiency is attractive for agile navigation, but it also creates a learning problem: the signal is asynchronous, has no conventional texture, and changes with both motion and scene structure.

We formulate goal-directed navigation as a partially observable Markov decision process. At each step, the policy observes an event-camera representation and the goal position in the robot frame, then commands continuous linear and angular velocities. The objective is to reach the goal before the time limit while avoiding collisions. The reward combines goal completion, progress, and collision cost:

$$
R(s_t,a_t)=20\,\mathbf{1}(d_t<d_s)+2(d_{t-1}-d_t)-5c_t.
$$

Here, <var>d</var><sub>t</sub> is the remaining goal distance, <var>d</var><sub>s</sub> is the success threshold, and <var>c</var><sub>t</sub> indicates a collision. This structure rewards decisive forward progress without allowing goal seeking to overwhelm safety.

## Event-to-action pipeline

<div style="text-align: center; margin: 1rem 0;">
  <img
    src="{{ '/assets/img/projects/event-jackal/model.png' | relative_url }}"
    alt="End-to-end architecture converting events into a Binary Event Map, a learned perception embedding, and robot actions"
    style="width: 100%; max-width: 1050px; height: auto; border-radius: 8px;"
  />
  <p><strong>System architecture.</strong> Events are accumulated into a BEM, encoded by the perception network, and combined with the relative goal before the policy generates a velocity command.</p>
</div>

Synthetic training events are generated from simulated videos using Vid2E. Within each temporal window, positive and negative events are accumulated into a BEM; opposing polarities cancel, leaving a compact representation that emphasizes moving boundaries and obstacle edges.

The perception module is trained with self-supervised contrastive learning. Standard and augmented BEMs pass through parallel encoder-decoder branches. Reconstruction and obstacle-aware objectives preserve scene geometry, while contrastive and consistency losses align representations across event perturbations. The resulting latent vector supplies the Soft Actor-Critic policy with navigation-relevant structure rather than raw event noise.

<div style="text-align: center; margin: 1rem 0 1.5rem;">
  <img
    src="{{ '/assets/img/projects/event-jackal/perception-model.png' | relative_url }}"
    alt="Self-supervised contrastive perception network for Binary Event Maps"
    style="width: 100%; max-width: 900px; height: auto; border-radius: 8px;"
  />
  <p><strong>Self-supervised perception.</strong> Consistency between an original and an augmented BEM stabilizes the latent event representation used for control.</p>
</div>

## Simulation study

The agents were trained for one million steps on 50 procedurally generated BARN-style environments and evaluated on 50 held-out environments, with 10 episodes per environment. We compared MLP, GRU, CNN, and Transformer policies, all trained with Soft Actor-Critic, and evaluated both event-camera and laser observations with one-frame and four-frame histories.

| Policy | Laser, H = 1 | Laser, H = 4 | Event, H = 1 | Event, H = 4 |
|:--|--:|--:|--:|--:|
| MLP | 69 ± 4% | 72 ± 7% | **77 ± 6%** | 64 ± 9% |
| GRU | — | 74 ± 2% | — | 75 ± 7% |
| CNN | — | 77 ± 4% | — | **80 ± 7%** |
| Transformer | — | 78 ± 6% | — | 68 ± 5% |

The one-frame event MLP outperformed the one-frame laser MLP by eight percentage points. With four-frame histories, the event-based CNN achieved the highest overall evaluation result, **80 ± 7%**, compared with **77 ± 4%** for the laser CNN. The GRU learned fastest early in training, but the CNN eventually produced the lowest collision rate, highest reward plateau, and strongest held-out success.

<div style="text-align: center; margin: 1rem 0 1.5rem;">
  <img
    src="{{ '/assets/img/projects/event-jackal/training-metrics.png' | relative_url }}"
    alt="Success, collision, and reward curves for MLP, GRU, CNN, and Transformer event-based policies"
    style="width: 100%; max-width: 1050px; height: auto; border-radius: 8px;"
  />
  <p><strong>Training behavior.</strong> Success, collision rate, and episode reward over one million environment steps.</p>
</div>

### Why consistency regularization matters

Removing the perception model's consistency loss reduced final success to about **70%**, approximately 20 percentage points below the regularized training result of roughly 90%. Mean episode reward also remained 5–10 points lower. Collision rate changed comparatively little, but rollouts became indecisive and oscillatory: the agent stayed relatively safe without reliably converting perception into goal-directed motion.

<div style="text-align: center; margin: 1rem 0 1.5rem;">
  <img
    src="{{ '/assets/img/projects/event-jackal/consistency-ablation.png' | relative_url }}"
    alt="Ablation curves without consistency loss showing success, collision rate, and mean reward"
    style="width: 100%; max-width: 1050px; height: auto; border-radius: 8px;"
  />
  <p><strong>Consistency-loss ablation.</strong> Without this supervisory signal, success saturates earlier and reward remains lower.</p>
</div>

<div style="text-align: center; margin: 1rem 0 1.5rem;">
  <img
    src="{{ '/assets/img/projects/event-jackal/visualization.png' | relative_url }}"
    alt="Successful Jackal navigation trajectories across several simulated obstacle environments"
    style="width: 100%; max-width: 1050px; height: auto; border-radius: 8px;"
  />
  <p><strong>Held-out rollouts.</strong> Successful trajectories across obstacle layouts with different corridor widths and turning demands.</p>
</div>

## Physical Jackal experiment

Directly deploying a policy trained only with cylindrical simulated obstacles did not work: the Jackal hesitated, spun in place, and collided. We addressed this sim-to-real gap in three stages:

1. Expanded training from one object type to **20 simulated worlds** containing varied obstacle shapes.
2. Injected event-frame noise ranging from **0.05% to 5%** of the frame dimensions to model sensor jitter and lighting variation.
3. Collected approximately **12,000 real event frames**—about **6.67 minutes at 30 Hz**—and fine-tuned the perception module before retraining the CNN policy.

The final experiment used a **3 × 5 m** arena with cardboard obstacles and a **4.5 m** start-to-goal separation. Across 10 trials with small changes in obstacle placement, the robot reached the goal 6 times and collided 4 times, yielding a **60% real-hardware success rate**. For hardware safety, minimum linear velocity was clipped to zero; all other action limits remained unchanged.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem; margin: 1rem 0; text-align: center;">
  <div style="padding: 0.8rem; border: 1px solid var(--global-divider-color); border-radius: 8px;"><strong style="font-size: 1.35rem;">20</strong><br />diverse simulated worlds</div>
  <div style="padding: 0.8rem; border: 1px solid var(--global-divider-color); border-radius: 8px;"><strong style="font-size: 1.35rem;">12,000</strong><br />real event frames</div>
  <div style="padding: 0.8rem; border: 1px solid var(--global-divider-color); border-radius: 8px;"><strong style="font-size: 1.35rem;">6 / 10</strong><br />successful hardware trials</div>
</div>

<div style="text-align: center; margin: 1rem 0 1.5rem;">
  <img
    src="{{ '/assets/img/projects/event-jackal/hardware-experiment.png' | relative_url }}"
    alt="Real Jackal velocity commands and estimated trajectory through a cardboard-obstacle arena"
    style="width: 100%; max-width: 1050px; height: auto; border-radius: 8px;"
  />
  <p><strong>Real-hardware result.</strong> Left: commanded forward velocity and heading during a physical run. Right: the test arena, with start in red, goal in blue, and the estimated trajectory in yellow. The frequent heading corrections show how the event-driven policy continually steered around the cardboard obstacles.</p>
</div>

The hardware result is deliberately reported separately from simulation: although domain randomization and real-event fine-tuning made transfer possible, 60% success remained below the simulated benchmark. The physical velocity trace also reveals jitter and abrupt corrections. These results expose the remaining challenges—limited rear field of view, risky reversing, and weak recovery after committing to a blocked corridor—while demonstrating that a compact event-based policy can control a real ground robot without a laser navigation stack.

The implementation, training configurations, and reproduction instructions are available in the [project repository](https://github.com/gaudelbijay/event_jackal).
