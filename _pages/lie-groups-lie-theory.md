---
layout: page
title: Lie theory
permalink: /blog/lie-groups/lie-theory/
description: Chapter 2 posts for the Lie Groups study path.
nav: false
---

<style>
  .lie-back-link {
    display: inline-flex;
    align-items: center;
    margin: 0 0 1rem;
    color: var(--global-theme-color);
    font-weight: 600;
    text-decoration: none;
  }

  .lie-back-link:hover {
    text-decoration: underline;
  }

  .lie-chapter-note {
    margin: 0 0 1.25rem;
    padding: 1rem 1.1rem;
    color: var(--global-text-color-light);
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    line-height: 1.6;
  }

  .lie-post-cards {
    display: grid;
    gap: 1.25rem;
  }

  .lie-post-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(210px, 32%);
    min-height: 220px;
    overflow: hidden;
    color: inherit;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
    transition:
      transform 180ms ease,
      box-shadow 180ms ease,
      border-color 180ms ease;
  }

  .lie-post-card:hover {
    color: inherit;
    text-decoration: none;
    border-color: var(--global-theme-color);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }

  .lie-post-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(1.35rem, 3vw, 2.1rem);
  }

  .lie-post-date {
    margin-bottom: 0.75rem;
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .lie-post-title {
    margin: 0;
    color: var(--global-text-color);
    font-size: clamp(1.55rem, 3vw, 2.2rem);
    line-height: 1.1;
    letter-spacing: 0;
  }

  .lie-post-summary {
    max-width: 36rem;
    margin: 0.85rem 0 0;
    color: var(--global-text-color-light);
    font-size: 1rem;
    line-height: 1.55;
  }

  .lie-post-visual {
    position: relative;
    display: grid;
    min-height: 220px;
    place-items: center;
    overflow: hidden;
    background:
      linear-gradient(135deg, rgba(184, 85, 47, 0.14), transparent 54%),
      linear-gradient(315deg, rgba(58, 111, 168, 0.16), transparent 52%),
      color-mix(in srgb, var(--global-card-bg-color) 88%, var(--global-theme-color));
  }

  .lie-post-visual svg {
    width: min(84%, 260px);
    height: auto;
  }

  .so3-orbit-dot {
    animation: so3-orbit-dot 5.8s ease-in-out infinite;
  }

  .so3-orbit-trace {
    animation: so3-orbit-trace 5.8s ease-in-out infinite;
    stroke-dasharray: 190;
    stroke-dashoffset: 190;
  }

  .so3-exp-label {
    animation: so3-exp-label 5.8s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

  @keyframes so3-orbit-dot {
    0%,
    100% {
      transform: translate(-49px, 0);
    }
    24% {
      transform: translate(-12px, -20px);
    }
    50% {
      transform: translate(48px, 0);
    }
    76% {
      transform: translate(12px, 20px);
    }
  }

  @keyframes so3-orbit-trace {
    0% {
      opacity: 0.18;
      stroke-dashoffset: 190;
    }
    50%,
    82% {
      opacity: 1;
      stroke-dashoffset: 0;
    }
    100% {
      opacity: 0.42;
      stroke-dashoffset: 0;
    }
  }

  @keyframes so3-exp-label {
    0%,
    100% {
      opacity: 0.62;
      transform: translateY(0);
    }
    50% {
      opacity: 1;
      transform: translateY(-4px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .so3-orbit-dot,
    .so3-orbit-trace,
    .so3-exp-label {
      animation: none;
    }
  }

  @media (max-width: 680px) {
    .lie-post-card {
      grid-template-columns: 1fr;
    }

    .lie-post-visual {
      min-height: 175px;
      order: -1;
    }
  }
</style>

<a class="lie-back-link" href="{{ '/blog/lie-groups/' | relative_url }}">Back to Lie Groups</a>

<p class="lie-chapter-note">Chapter 2 gathers the core Lie theory objects: groups, tangent algebras, brackets, exponentials, and concrete examples where the abstract definitions become visible.</p>

<div class="lie-post-cards">
  <a class="lie-post-card" href="{{ '/blog/2026/so3-complete-study-guide/' | relative_url }}">
    <div class="lie-post-body">
      <div class="lie-post-date">Jul 7, 2026</div>
      <h2 class="lie-post-title">SO(3) Complete Study Guide</h2>
      <p class="lie-post-summary">A compact guide to the rotation group: orthogonal matrices, determinant one, non-commutativity, Rodrigues' formula, $\mathfrak{so}(3)$, brackets, and the exponential map.</p>
    </div>
    <div class="lie-post-visual" aria-hidden="true" style="background:#faf9f5;">
      <svg viewBox="0 0 240 210" role="img">
        <circle cx="120" cy="110" r="70" fill="#ffffff" stroke="#e4e0d8" stroke-width="2"></circle>
        <g>
          <ellipse cx="120" cy="110" rx="76" ry="28" fill="none" stroke="#162244" stroke-opacity="0.2" stroke-width="3"></ellipse>
          <ellipse cx="120" cy="110" rx="76" ry="28" fill="none" stroke="#162244" stroke-opacity="0.16" stroke-width="3" transform="rotate(62 120 110)"></ellipse>
          <ellipse cx="120" cy="110" rx="76" ry="28" fill="none" stroke="#162244" stroke-opacity="0.13" stroke-width="3" transform="rotate(122 120 110)"></ellipse>
          <ellipse class="so3-orbit-trace" cx="120" cy="110" rx="49" ry="20" fill="none" stroke="#b5820e" stroke-width="3"></ellipse>
        </g>
        <line x1="120" y1="110" x2="176" y2="110" stroke="#1a5ca8" stroke-width="5" stroke-linecap="round"></line>
        <line x1="120" y1="110" x2="120" y2="48" stroke="#1a7a40" stroke-width="5" stroke-linecap="round"></line>
        <line x1="120" y1="110" x2="74" y2="146" stroke="#c0392b" stroke-width="5" stroke-linecap="round"></line>
        <circle cx="120" cy="110" r="6" fill="#162244"></circle>
        <circle class="so3-orbit-dot" cx="120" cy="110" r="6" fill="#b5820e"></circle>
        <text x="77" y="184" fill="#162244" font-size="20" font-family="serif">SO(3)</text>
        <text class="so3-exp-label" x="149" y="184" fill="#b5820e" font-size="17" font-family="serif">exp</text>
        <text x="176" y="104" fill="#1a5ca8" font-size="12" font-family="monospace">e3</text>
        <text x="126" y="48" fill="#1a7a40" font-size="12" font-family="monospace">e2</text>
        <text x="58" y="158" fill="#c0392b" font-size="12" font-family="monospace">e1</text>
      </svg>
    </div>
  </a>
</div>
