---
layout: page
title: Diffusion-Based Defense Against Adversarial Perception Attacks
description: Adversarial image-attack detection and denoising with diffusion models and frequency analysis.
img: assets/img/image_attacked_at_itr_212.png
importance: 6
category: work
github: https://github.com/gaudelbijay/diffusion-defender
---

Diffusion-Based Defense Against Adversarial Perception Attacks targets online adversarial robustness for vision-based robotic systems.

The project combines:

- an FFT-based attack detector, and
- diffusion-model denoising to recover usable visual observations.

It is built to improve perception reliability when image streams are corrupted by adversarial perturbations.

### Main Attack Image

{% include figure.liquid path="assets/img/image_attacked_at_itr_212.png" title="Attacked frame at iteration 212." class="img-fluid rounded z-depth-1" %}

### Poster

<div style="width: 100%; height: 95vh; min-height: 1200px;">
  <iframe
    src="{{ '/assets/pdf/casualty_sim_env_poster_24x36.pdf#zoom=page-fit' | relative_url }}"
    title="Casualty Simulation Environment Poster"
    width="100%"
    height="100%"
    style="border: 0;"
  ></iframe>
</div>
