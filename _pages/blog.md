---
layout: page
title: Blog
permalink: /blog/
description: Study notes and long-form guides.
nav: true
nav_order: 6
---

<style>
  .blog-cards {
    display: grid;
    gap: 1.25rem;
    margin-top: 1.5rem;
  }

  .blog-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(210px, 32%);
    min-height: 210px;
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

  .blog-card:hover {
    color: inherit;
    text-decoration: none;
    border-color: var(--global-theme-color);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }

  .blog-card-group {
    display: grid;
    gap: 1rem;
    padding: clamp(1rem, 2.5vw, 1.35rem);
    background:
      linear-gradient(135deg, rgba(184, 85, 47, 0.08), transparent 52%),
      var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.055);
  }

  .blog-card-group-header {
    padding: 0.25rem 0.25rem 0.1rem;
  }

  .blog-card-group-label {
    margin-bottom: 0.45rem;
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .blog-card-group-title {
    margin: 0;
    color: var(--global-text-color);
    font-size: clamp(1.55rem, 3vw, 2.15rem);
    line-height: 1.08;
    letter-spacing: 0;
  }

  .blog-card-group-note {
    max-width: 52rem;
    margin: 0.7rem 0 0;
    color: var(--global-text-color-light);
    font-size: 0.98rem;
    line-height: 1.55;
  }

  .blog-card-group-list {
    display: grid;
    gap: 1rem;
  }

  .blog-card-plate {
    min-height: 235px;
  }

  .blog-card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(1.35rem, 3vw, 2.1rem);
  }

  .blog-card-date {
    margin-bottom: 0.75rem;
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .blog-card-title {
    margin: 0;
    color: var(--global-text-color);
    font-size: clamp(1.55rem, 3vw, 2.2rem);
    line-height: 1.1;
    letter-spacing: 0;
  }

  .blog-card-summary {
    max-width: 36rem;
    margin: 0.85rem 0 0;
    color: var(--global-text-color-light);
    font-size: 1rem;
    line-height: 1.55;
  }

  .blog-card-visual {
    position: relative;
    display: grid;
    min-height: 210px;
    place-items: center;
    overflow: hidden;
    background:
      linear-gradient(135deg, rgba(184, 85, 47, 0.14), transparent 54%),
      linear-gradient(315deg, rgba(58, 111, 168, 0.16), transparent 52%),
      color-mix(in srgb, var(--global-card-bg-color) 88%, var(--global-theme-color));
  }

  .blog-card-visual svg {
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

  .svd-input {
    animation: svd-rotate-input 4.5s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

  .svd-output {
    animation: svd-stretch-output 4.5s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

  .svd-vector-a {
    animation: svd-vector-a 4.5s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: 30px 130px;
  }

  .svd-vector-b {
    animation: svd-vector-b 4.5s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: 30px 130px;
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

  .series-bar-a,
  .series-bar-b,
  .series-bar-c,
  .series-bar-d {
    animation: series-fill 4.6s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: left center;
  }

  .series-bar-b {
    animation-delay: 0.24s;
  }

  .series-bar-c {
    animation-delay: 0.48s;
  }

  .series-bar-d {
    animation-delay: 0.72s;
  }

  .series-dot {
    animation: series-dot 4.6s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

  .lie-constellation-ring {
    animation: lie-constellation-turn 12s linear infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

  .lie-constellation-node-a {
    animation: lie-constellation-pulse 4.8s ease-in-out infinite;
  }

  .lie-constellation-node-b {
    animation: lie-constellation-pulse 4.8s ease-in-out infinite 0.6s;
  }

  .lie-constellation-node-c {
    animation: lie-constellation-pulse 4.8s ease-in-out infinite 1.2s;
  }

  .lie-constellation-node-d {
    animation: lie-constellation-pulse 4.8s ease-in-out infinite 1.8s;
  }

  .lie-constellation-bracket {
    animation: lie-constellation-bracket 5.2s ease-in-out infinite;
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

  @keyframes svd-rotate-input {
    0%,
    100% {
      transform: rotate(-18deg);
    }
    50% {
      transform: rotate(18deg);
    }
  }

  @keyframes svd-stretch-output {
    0%,
    100% {
      transform: rotate(-8deg) scale(1.35, 0.74);
    }
    50% {
      transform: rotate(16deg) scale(0.8, 1.36);
    }
  }

  @keyframes svd-vector-a {
    0%,
    100% {
      transform: rotate(-12deg) scaleX(1.05);
    }
    50% {
      transform: rotate(22deg) scaleX(1.48);
    }
  }

  @keyframes svd-vector-b {
    0%,
    100% {
      transform: rotate(66deg) scaleX(0.92);
    }
    50% {
      transform: rotate(104deg) scaleX(1.22);
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

  @keyframes series-fill {
    0%,
    12% {
      transform: scaleX(0.08);
      opacity: 0.35;
    }
    42%,
    82% {
      transform: scaleX(1);
      opacity: 0.95;
    }
    100% {
      transform: scaleX(0.08);
      opacity: 0.35;
    }
  }

  @keyframes series-dot {
    0%,
    100% {
      transform: translateX(-52px);
      opacity: 0.35;
    }
    48%,
    78% {
      transform: translateX(34px);
      opacity: 1;
    }
  }

  @keyframes lie-constellation-turn {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes lie-constellation-pulse {
    0%,
    100% {
      opacity: 0.58;
      transform: scale(0.86);
    }
    45% {
      opacity: 1;
      transform: scale(1.18);
    }
  }

  @keyframes lie-constellation-bracket {
    0%,
    100% {
      transform: scale(0.92);
      opacity: 0.62;
    }
    50% {
      transform: scale(1.08);
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cone-ring,
    .cone-shadow,
    .svd-input,
    .svd-output,
    .svd-vector-a,
    .svd-vector-b,
    .recipe-flow-a,
    .recipe-flow-b,
    .recipe-flow-c,
    .recipe-core,
    .series-bar-a,
    .series-bar-b,
    .series-bar-c,
    .series-bar-d,
    .series-dot,
    .lie-constellation-ring,
    .lie-constellation-node-a,
    .lie-constellation-node-b,
    .lie-constellation-node-c,
    .lie-constellation-node-d,
    .lie-constellation-bracket {
      animation: none;
    }
  }

  @media (max-width: 680px) {
    .blog-card {
      grid-template-columns: 1fr;
    }

    .blog-card-visual {
      min-height: 175px;
      order: -1;
    }
  }
</style>

<div class="blog-cards">
  <a class="blog-card blog-card-plate" href="{{ '/blog/lie-groups/' | relative_url }}">
    <div class="blog-card-body">
      <div class="blog-card-date">Chapters</div>
      <h2 class="blog-card-title">Lie - Groups</h2>
      <p class="blog-card-summary">A chapter path through CBH foundations, matrix exponentials, stretch and shear, and the substitution principle.</p>
    </div>
    <div class="blog-card-visual" aria-hidden="true">
      <svg viewBox="0 0 240 210" role="img">
        <defs>
          <radialGradient id="lieConstellationGlow" cx="50%" cy="48%" r="58%">
            <stop offset="0" stop-color="#f0c28f" stop-opacity="0.34"></stop>
            <stop offset="0.72" stop-color="#3a6fa8" stop-opacity="0.12"></stop>
            <stop offset="1" stop-color="#b8552f" stop-opacity="0"></stop>
          </radialGradient>
        </defs>
        <circle cx="120" cy="105" r="76" fill="url(#lieConstellationGlow)"></circle>
        <g class="lie-constellation-ring">
          <ellipse cx="120" cy="105" rx="74" ry="44" fill="none" stroke="#2a241e" stroke-opacity="0.18" stroke-width="2"></ellipse>
          <ellipse cx="120" cy="105" rx="74" ry="44" fill="none" stroke="#2a241e" stroke-opacity="0.14" stroke-width="2" transform="rotate(60 120 105)"></ellipse>
          <ellipse cx="120" cy="105" rx="74" ry="44" fill="none" stroke="#2a241e" stroke-opacity="0.14" stroke-width="2" transform="rotate(120 120 105)"></ellipse>
        </g>
        <path d="M66 75 C94 44 148 43 176 76 C204 109 177 163 120 165 C63 164 36 109 66 75Z" fill="none" stroke="#c8b99f" stroke-width="2"></path>
        <g class="lie-constellation-node-a">
          <circle cx="120" cy="48" r="8" fill="#b8552f"></circle>
          <text x="120" y="52" text-anchor="middle" fill="#fcf9f1" font-size="10" font-family="serif">C</text>
        </g>
        <g class="lie-constellation-node-b">
          <circle cx="184" cy="104" r="8" fill="#3a6fa8"></circle>
          <text x="184" y="108" text-anchor="middle" fill="#fcf9f1" font-size="10" font-family="serif">E</text>
        </g>
        <g class="lie-constellation-node-c">
          <circle cx="120" cy="162" r="8" fill="#5e7a4e"></circle>
          <text x="120" y="166" text-anchor="middle" fill="#fcf9f1" font-size="10" font-family="serif">S</text>
        </g>
        <g class="lie-constellation-node-d">
          <circle cx="56" cy="104" r="8" fill="#c2723c"></circle>
          <text x="56" y="108" text-anchor="middle" fill="#fcf9f1" font-size="10" font-family="serif">P</text>
        </g>
        <text class="lie-constellation-bracket" x="120" y="116" text-anchor="middle" fill="#2a241e" font-size="36" font-family="serif">[ , ]</text>
      </svg>
    </div>
  </a>

  <a class="blog-card" href="{{ '/blog/2026/series-and-convergence/' | relative_url }}">
    <div class="blog-card-body">
      <div class="blog-card-date">Jun 28, 2026</div>
      <h2 class="blog-card-title">Series &amp; Convergence</h2>
      <p class="blog-card-summary">A visual path from partial sums and convergence tests to Taylor series, matrix exponentials, logarithms, and BCH corrections.</p>
    </div>
    <div class="blog-card-visual" aria-hidden="true">
      <svg viewBox="0 0 240 210" role="img">
        <defs>
          <linearGradient id="seriesGlow" x1="36" y1="42" x2="190" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#58c4e4" stop-opacity="0.26"></stop>
            <stop offset="0.55" stop-color="#c080f0" stop-opacity="0.18"></stop>
            <stop offset="1" stop-color="#e8d84b" stop-opacity="0.2"></stop>
          </linearGradient>
        </defs>
        <rect x="34" y="38" width="172" height="134" rx="8" fill="url(#seriesGlow)" stroke="#58c4e4" stroke-opacity="0.45" stroke-width="3"></rect>
        <text x="62" y="76" fill="#2a241e" font-size="31" font-family="serif">Σ</text>
        <text x="95" y="73" fill="#2a241e" font-size="15" font-family="serif">aₙ</text>
        <line x1="62" y1="102" x2="182" y2="102" stroke="#2a241e" stroke-opacity="0.24" stroke-width="2"></line>
        <rect class="series-bar-a" x="62" y="95" width="58" height="14" rx="7" fill="#58c4e4" fill-opacity="0.88"></rect>
        <rect class="series-bar-b" x="62" y="118" width="42" height="12" rx="6" fill="#68e090" fill-opacity="0.82"></rect>
        <rect class="series-bar-c" x="62" y="139" width="30" height="10" rx="5" fill="#e8d84b" fill-opacity="0.82"></rect>
        <rect class="series-bar-d" x="62" y="157" width="21" height="8" rx="4" fill="#c080f0" fill-opacity="0.86"></rect>
        <line x1="176" y1="86" x2="176" y2="168" stroke="#b8552f" stroke-width="3" stroke-linecap="round" stroke-dasharray="5 7"></line>
        <circle class="series-dot" cx="142" cy="102" r="7" fill="#b8552f"></circle>
        <text x="156" y="125" fill="#2a241e" font-size="15" font-family="serif">Sₙ → S</text>
      </svg>
    </div>
  </a>

  <a class="blog-card" href="{{ '/blog/2025/linear-algebra-study-guide/' | relative_url }}">
    <div class="blog-card-body">
      <div class="blog-card-date">Feb 8, 2025</div>
      <h2 class="blog-card-title">Linear Algebra Study Guide</h2>
      <p class="blog-card-summary">A compact study path through vectors, transformations, eigenstructure, SVD, subspaces, and core computations.</p>
    </div>
    <div class="blog-card-visual" aria-hidden="true">
      <svg viewBox="0 0 240 210" role="img">
        <defs>
          <marker id="arrowHead" markerHeight="7" markerWidth="7" orient="auto" refX="6" refY="3.5">
            <path d="M0 0 L7 3.5 L0 7 Z" fill="#b8552f"></path>
          </marker>
        </defs>
        <g transform="translate(35 28)">
          <circle class="svd-input" cx="56" cy="78" r="42" fill="none" stroke="#3a6fa8" stroke-width="4"></circle>
          <ellipse class="svd-output" cx="132" cy="78" rx="31" ry="44" fill="#b8552f" fill-opacity="0.14" stroke="#b8552f" stroke-width="4"></ellipse>
          <path d="M30 130 H174" stroke="#2a241e" stroke-opacity="0.26" stroke-width="2"></path>
          <path d="M30 130 V12" stroke="#2a241e" stroke-opacity="0.26" stroke-width="2"></path>
          <line class="svd-vector-a" x1="30" y1="130" x2="112" y2="130" stroke="#b8552f" stroke-width="5" stroke-linecap="round" marker-end="url(#arrowHead)"></line>
          <line class="svd-vector-b" x1="30" y1="130" x2="96" y2="130" stroke="#3a6fa8" stroke-width="5" stroke-linecap="round"></line>
          <circle cx="30" cy="130" r="5" fill="#2a241e"></circle>
        </g>
      </svg>
    </div>
  </a>
</div>
