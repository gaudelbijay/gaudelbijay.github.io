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

### Detection Visuals

<div style="display: flex; flex-wrap: wrap; gap: 0.8rem; align-items: flex-start;">
  <div style="flex: 1 1 420px; min-width: 280px;">
    <img
      src="{{ '/assets/img/confusion_matrix.png' | relative_url }}"
      alt="Confusion matrix for attack classification"
      style="width: 100%; height: auto; border-radius: 8px;"
    />
  </div>
  <div style="flex: 1 1 420px; min-width: 280px;">
    <img
      src="{{ '/assets/img/magnitude_spectrum.png' | relative_url }}"
      alt="Averaged FFT magnitude spectrum and threshold"
      style="width: 100%; height: auto; border-radius: 8px;"
    />
  </div>
</div>

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
