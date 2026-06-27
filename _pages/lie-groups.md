---
layout: page
title: Lie - Groups
permalink: /blog/lie-groups/
description: Lie group chapters and study notes.
nav: false
---

<style>
  .lie-group-note {
    margin: 0 0 1.4rem;
    padding: 1rem 1.1rem;
    color: var(--global-text-color-light);
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    line-height: 1.6;
  }

  .lie-chapter-cards {
    display: grid;
    gap: 1.25rem;
  }

  .lie-chapter-card {
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

  .lie-chapter-card:hover {
    color: inherit;
    text-decoration: none;
    border-color: var(--global-theme-color);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }

  .lie-chapter-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(1.35rem, 3vw, 2.1rem);
  }

  .lie-chapter-date {
    margin-bottom: 0.75rem;
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .lie-chapter-title {
    margin: 0;
    color: var(--global-text-color);
    font-size: clamp(1.55rem, 3vw, 2.2rem);
    line-height: 1.1;
    letter-spacing: 0;
  }

  .lie-chapter-summary {
    max-width: 36rem;
    margin: 0.85rem 0 0;
    color: var(--global-text-color-light);
    font-size: 1rem;
    line-height: 1.55;
  }

  .lie-chapter-visual {
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

  .lie-chapter-visual svg {
    width: min(84%, 260px);
    height: auto;
  }

  .cone-ring {
    animation: cone-spin 6s linear infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

  .cone-shadow {
    animation: cone-breathe 3s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

  .recipe-flow-a {
    animation: recipe-flow-a 4.8s ease-in-out infinite;
  }

  .recipe-flow-b {
    animation: recipe-flow-b 4.8s ease-in-out infinite 0.45s;
  }

  .recipe-flow-c {
    animation: recipe-flow-c 4.8s ease-in-out infinite 0.9s;
  }

  .recipe-core {
    animation: recipe-pulse 3.2s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

  @keyframes cone-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes cone-breathe {
    0%,
    100% {
      opacity: 0.24;
      transform: scaleX(0.82);
    }
    50% {
      opacity: 0.42;
      transform: scaleX(1.08);
    }
  }

  @keyframes recipe-flow-a {
    0%,
    100% {
      opacity: 0.28;
      transform: translateX(0);
    }
    45% {
      opacity: 1;
      transform: translateX(28px);
    }
  }

  @keyframes recipe-flow-b {
    0%,
    100% {
      opacity: 0.28;
      transform: translateX(0);
    }
    45% {
      opacity: 1;
      transform: translateX(22px);
    }
  }

  @keyframes recipe-flow-c {
    0%,
    100% {
      opacity: 0.28;
      transform: translateX(0);
    }
    45% {
      opacity: 1;
      transform: translateX(18px);
    }
  }

  @keyframes recipe-pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.9;
    }
    50% {
      transform: scale(1.04);
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cone-ring,
    .cone-shadow,
    .recipe-flow-a,
    .recipe-flow-b,
    .recipe-flow-c,
    .recipe-core {
      animation: none;
    }
  }

  @media (max-width: 680px) {
    .lie-chapter-card {
      grid-template-columns: 1fr;
    }

    .lie-chapter-visual {
      min-height: 175px;
      order: -1;
    }
  }
</style>

<p class="lie-group-note">These posts heavily use ideas from <em>Lie Groups: An Introduction Through Linear Groups</em> by Wulf Rossmann.</p>

<div class="lie-chapter-cards">
  <a class="lie-chapter-card" href="{{ '/blog/2026/stretch-vs-shear/' | relative_url }}">
    <div class="lie-chapter-body">
      <div class="lie-chapter-date">Jun 27, 2026</div>
      <h2 class="lie-chapter-title">Stretch vs Shear</h2>
      <p class="lie-chapter-summary">A visual comparison of hyperbolic stretches and parabolic shears in SL(2, R), through eigen-directions, area preservation, and the geometry of the unit circle.</p>
    </div>
    <div class="lie-chapter-visual" aria-hidden="true" style="background:#ece3d0;">
      <svg viewBox="0 0 240 210" role="img">
        <defs>
          <marker id="stretchShearArrowLie" markerHeight="7" markerWidth="7" orient="auto" refX="6" refY="3.5">
            <path d="M0 0 L7 3.5 L0 7 Z" fill="#b8552f"></path>
          </marker>
        </defs>
        <path d="M30 164 H210" stroke="#2a241e" stroke-opacity="0.22" stroke-width="2"></path>
        <path d="M120 184 V26" stroke="#2a241e" stroke-opacity="0.18" stroke-width="2"></path>
        <ellipse cx="83" cy="108" rx="42" ry="16" fill="#6e7a36" fill-opacity="0.14" stroke="#6e7a36" stroke-width="4"></ellipse>
        <line x1="39" y1="108" x2="129" y2="108" stroke="#6e7a36" stroke-width="5" stroke-linecap="round" marker-end="url(#stretchShearArrowLie)"></line>
        <ellipse cx="157" cy="108" rx="36" ry="18" fill="#b8552f" fill-opacity="0.14" stroke="#b8552f" stroke-width="4" transform="rotate(-24 157 108)"></ellipse>
        <path d="M123 135 L182 74" fill="none" stroke="#b8552f" stroke-width="5" stroke-linecap="round" marker-end="url(#stretchShearArrowLie)"></path>
        <circle cx="83" cy="108" r="5" fill="#2a241e"></circle>
        <circle cx="157" cy="108" r="5" fill="#2a241e"></circle>
        <text x="83" y="58" text-anchor="middle" fill="#6e7a36" font-size="17" font-family="serif">Stretch</text>
        <text x="157" y="58" text-anchor="middle" fill="#b8552f" font-size="17" font-family="serif">Shear</text>
        <text x="120" y="177" text-anchor="middle" fill="#2a241e" font-size="16" font-family="serif">det = 1</text>
      </svg>
    </div>
  </a>

  <a class="lie-chapter-card" href="{{ '/blog/2026/the-exponential-map/' | relative_url }}">
    <div class="lie-chapter-body">
      <div class="lie-chapter-date">Jun 25, 2026</div>
      <h2 class="lie-chapter-title">The Exponential Map</h2>
      <p class="lie-chapter-summary">A visual guide to matrix exponentials, Lie algebra structure, and the geometry of SL(2, R).</p>
    </div>
    <div class="lie-chapter-visual" aria-hidden="true">
      <svg viewBox="0 0 240 210" role="img">
        <defs>
          <linearGradient id="coneFillLie" x1="60" y1="34" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#b8552f" stop-opacity="0.82"></stop>
            <stop offset="1" stop-color="#3a6fa8" stop-opacity="0.3"></stop>
          </linearGradient>
        </defs>
        <ellipse class="cone-shadow" cx="120" cy="174" rx="60" ry="13" fill="#2a241e"></ellipse>
        <path d="M120 34 L55 174 L185 174 Z" fill="url(#coneFillLie)" opacity="0.52"></path>
        <path d="M55 174 C80 154 160 154 185 174" fill="none" stroke="#b8552f" stroke-width="4"></path>
        <g class="cone-ring">
          <ellipse cx="120" cy="112" rx="49" ry="16" fill="none" stroke="#f0c28f" stroke-width="4"></ellipse>
          <circle cx="168" cy="112" r="5" fill="#f0c28f"></circle>
          <circle cx="72" cy="112" r="3.5" fill="#3a6fa8"></circle>
        </g>
        <line x1="120" y1="34" x2="120" y2="178" stroke="#2a241e" stroke-opacity="0.34" stroke-width="2"></line>
        <path d="M82 84 C104 70 139 70 160 84" fill="none" stroke="#2a241e" stroke-opacity="0.32" stroke-width="2"></path>
      </svg>
    </div>
  </a>

  <a class="lie-chapter-card" href="{{ '/blog/2026/substitution-principle-adjoints/' | relative_url }}">
    <div class="lie-chapter-body">
      <div class="lie-chapter-date">Jun 26, 2026</div>
      <h2 class="lie-chapter-title">The Substitution Principle</h2>
      <p class="lie-chapter-summary">A geometric route from power series as universal recipes to conjugation, Lie brackets, and adjoint representations.</p>
    </div>
    <div class="lie-chapter-visual" aria-hidden="true" style="background:#07190b;">
      <svg viewBox="0 0 240 210" role="img">
        <defs>
          <marker id="recipeArrowLie" markerHeight="7" markerWidth="7" orient="auto" refX="6" refY="3.5">
            <path d="M0 0 L7 3.5 L0 7 Z" fill="#f0c28f"></path>
          </marker>
          <linearGradient id="recipeCoreFillLie" x1="72" y1="58" x2="168" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#3a6fa8" stop-opacity="0.42"></stop>
            <stop offset="1" stop-color="#b8552f" stop-opacity="0.24"></stop>
          </linearGradient>
        </defs>
        <rect class="recipe-core" x="74" y="52" width="92" height="106" rx="8" fill="url(#recipeCoreFillLie)" stroke="#3dc9b0" stroke-width="3"></rect>
        <text x="120" y="89" text-anchor="middle" fill="#f2ead9" font-size="17" font-family="serif">1 + X</text>
        <text x="120" y="115" text-anchor="middle" fill="#f2ead9" font-size="16" font-family="serif">+ X^2/2!</text>
        <text x="120" y="139" text-anchor="middle" fill="#f2ead9" font-size="15" font-family="serif">+ ...</text>
        <g class="recipe-flow-a">
          <circle cx="28" cy="72" r="10" fill="#3a6fa8" fill-opacity="0.88"></circle>
          <line x1="42" y1="72" x2="70" y2="72" stroke="#f0c28f" stroke-width="4" stroke-linecap="round" marker-end="url(#recipeArrowLie)"></line>
        </g>
        <g class="recipe-flow-b">
          <rect x="22" y="101" width="22" height="22" rx="3" fill="#b8552f" fill-opacity="0.84"></rect>
          <line x1="47" y1="112" x2="70" y2="112" stroke="#f0c28f" stroke-width="4" stroke-linecap="round" marker-end="url(#recipeArrowLie)"></line>
        </g>
        <g class="recipe-flow-c">
          <path d="M24 151 C30 139 41 139 47 151" fill="none" stroke="#4a8c5c" stroke-width="5" stroke-linecap="round"></path>
          <line x1="50" y1="151" x2="70" y2="151" stroke="#f0c28f" stroke-width="4" stroke-linecap="round" marker-end="url(#recipeArrowLie)"></line>
        </g>
        <line x1="166" y1="86" x2="210" y2="72" stroke="#f0c28f" stroke-width="4" stroke-linecap="round" marker-end="url(#recipeArrowLie)"></line>
        <line x1="166" y1="112" x2="210" y2="112" stroke="#f0c28f" stroke-width="4" stroke-linecap="round" marker-end="url(#recipeArrowLie)"></line>
        <line x1="166" y1="138" x2="210" y2="151" stroke="#f0c28f" stroke-width="4" stroke-linecap="round" marker-end="url(#recipeArrowLie)"></line>
        <text x="211" y="68" fill="#4aa8ff" font-size="15" font-family="serif">e^x</text>
        <text x="211" y="108" fill="#ffd060" font-size="15" font-family="serif">exp X</text>
        <text x="211" y="151" fill="#3dc9b0" font-size="15" font-family="serif">Ad</text>
      </svg>
    </div>
  </a>
</div>
