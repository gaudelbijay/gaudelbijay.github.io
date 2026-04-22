---
layout: page
title: Diffusion-Based Defense Against Adversarial Perception Attacks
description: Adversarial image-attack detection and denoising with diffusion models and image-domain Fourier-transform frequency analysis.
img: assets/img/img_attacked_at_itr_212.png
importance: 6
category: work
github: https://github.com/gaudelbijay/diffusion-defender
---

Diffusion-Based Defense Against Adversarial Perception Attacks targets online adversarial robustness for vision-based robotic systems.

The project combines:

- an FFT-based attack detector, and
- diffusion-model denoising to recover usable visual observations.

It is built to improve perception reliability when image streams are corrupted by adversarial perturbations.

### Video Demonstration

This video presents an online reinforcement learning experiment for continuous middle-vehicle tracking under adversarial perturbations. Without Diffusion Defender, corrupted observations induce control oscillations and progressive trajectory deviation, resulting in repeated loss of stable target lock. With Diffusion Defender, denoised observations preserve tracking-critical visual structure, enabling smoother control, stronger trajectory invariance, and sustained tracking of the middle vehicle. The defended policy is markedly more stable and substantially harder to deflect from its intended path.

<div style="position: relative; width: 100%; padding-top: 56.25%; margin-bottom: 1rem;">
  <iframe
    src="https://www.youtube.com/embed/FWT1ylETfQM"
    title="Diffusion Defender Video Demonstration"
    style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0; border-radius: 8px;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

### Qualitative and Quantitative Results

<div style="display: flex; flex-wrap: wrap; gap: 0.9rem; align-items: flex-start;">
  <figure style="flex: 1 1 420px; min-width: 280px; margin: 0;">
    <img
      src="{{ '/assets/img/img_attacked_at_itr_212.png' | relative_url }}"
      alt="Adversarially attacked image at iteration 212"
      style="width: 100%; height: auto; border-radius: 8px;"
    />
    <figcaption style="margin-top: 0.35rem;">
      <strong>Figure 1.</strong> Adversarially attacked input frame at iteration 212.
    </figcaption>
  </figure>

  <figure style="flex: 1 1 420px; min-width: 280px; margin: 0;">
    <img
      src="{{ '/assets/img/denoised_iter_212_480.png' | relative_url }}"
      alt="Denoised output for attacked frame at iteration 212"
      style="width: 100%; height: auto; border-radius: 8px;"
    />
    <figcaption style="margin-top: 0.35rem;">
      <strong>Figure 2.</strong> Diffusion-denoised reconstruction corresponding to iteration 212.
    </figcaption>
  </figure>

  <figure style="flex: 1 1 420px; min-width: 280px; margin: 0;">
    <img
      src="{{ '/assets/img/confusion_matrix.png' | relative_url }}"
      alt="Confusion matrix in percent for non-attacked and attacked classification"
      style="width: 100%; height: auto; border-radius: 8px;"
    />
    <figcaption style="margin-top: 0.35rem;">
      <strong>Figure 3.</strong> Confusion matrix (%) for Non-Attacked vs Attacked classification.
    </figcaption>
  </figure>

  <figure style="flex: 1 1 420px; min-width: 280px; margin: 0;">
    <img
      src="{{ '/assets/img/magnitude_spectrum.png' | relative_url }}"
      alt="Averaged magnitude spectrum with detection threshold gamma"
      style="width: 100%; height: auto; border-radius: 8px;"
    />
    <figcaption style="margin-top: 0.35rem;">
      <strong>Figure 4.</strong> Averaged FFT magnitude spectrum with threshold $\gamma$ for attack detection.
    </figcaption>
  </figure>
</div>

### Paper (PDF)

<div style="width: 100%; height: 95vh; min-height: 1200px;">
  <iframe
    src="{{ '/assets/pdf/diffusion_defender.pdf#zoom=page-fit' | relative_url }}"
    title="Diffusion Defender PDF"
    width="100%"
    height="100%"
    style="border: 0;"
  ></iframe>
</div>
