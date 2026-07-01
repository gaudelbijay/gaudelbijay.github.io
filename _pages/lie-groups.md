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

  .lie-chapter-group {
    padding: clamp(1.1rem, 3vw, 1.6rem);
    background:
      linear-gradient(135deg, rgba(184, 85, 47, 0.08), transparent 44%),
      var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.07);
  }

  .lie-chapter-group-header {
    max-width: 44rem;
    margin: 0 0 1.25rem;
    padding: 0.15rem 0.2rem 0.35rem;
  }

  .lie-chapter-kicker {
    margin-bottom: 0.65rem;
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .lie-chapter-posts {
    display: grid;
    gap: 1rem;
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

  .lie-chapter-posts .lie-chapter-card {
    min-height: 200px;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.055);
  }

  .chapter-path-line {
    animation: chapter-path-dash 5.8s ease-in-out infinite;
  }

  .chapter-path-dot-a {
    animation: chapter-path-dot 5.8s ease-in-out infinite;
  }

  .chapter-path-dot-b {
    animation: chapter-path-dot 5.8s ease-in-out infinite 0.55s;
  }

  .chapter-path-dot-c {
    animation: chapter-path-dot 5.8s ease-in-out infinite 1.1s;
  }

  .chapter-path-dot-d {
    animation: chapter-path-dot 5.8s ease-in-out infinite 1.65s;
  }

  .chapter-path-page {
    animation: chapter-path-page 4.8s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
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

  .stretch-shear-stretch {
    animation: stretch-shear-stretch 4.8s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

  .stretch-shear-stretch-line {
    animation: stretch-shear-stretch-line 4.8s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: left center;
  }

  .stretch-shear-shear {
    animation: stretch-shear-shear 4.8s ease-in-out infinite 0.35s;
    transform-box: fill-box;
    transform-origin: center;
  }

  .stretch-shear-shear-line {
    animation: stretch-shear-shear-line 4.8s ease-in-out infinite 0.35s;
  }

  .stretch-shear-det {
    animation: stretch-shear-det 4.8s ease-in-out infinite;
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

  @keyframes chapter-path-dash {
    0%,
    100% {
      stroke-dashoffset: 140;
      opacity: 0.5;
    }
    50% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  @keyframes chapter-path-dot {
    0%,
    100% {
      opacity: 0.42;
      transform: scale(0.82);
    }
    42% {
      opacity: 1;
      transform: scale(1.18);
    }
  }

  @keyframes chapter-path-page {
    0%,
    100% {
      transform: translateY(0) rotate(-2deg);
    }
    50% {
      transform: translateY(-5px) rotate(2deg);
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

  @keyframes stretch-shear-stretch {
    0%,
    100% {
      transform: scaleX(0.84) scaleY(1.2);
      opacity: 0.78;
    }
    50% {
      transform: scaleX(1.18) scaleY(0.86);
      opacity: 1;
    }
  }

  @keyframes stretch-shear-stretch-line {
    0%,
    100% {
      transform: scaleX(0.82);
      opacity: 0.72;
    }
    50% {
      transform: scaleX(1.08);
      opacity: 1;
    }
  }

  @keyframes stretch-shear-shear {
    0%,
    100% {
      transform: rotate(-16deg) skewX(0deg);
      opacity: 0.78;
    }
    50% {
      transform: rotate(-28deg) skewX(-14deg) translateX(6px);
      opacity: 1;
    }
  }

  @keyframes stretch-shear-shear-line {
    0%,
    100% {
      transform: translate(0, 0);
      opacity: 0.72;
    }
    50% {
      transform: translate(9px, -9px);
      opacity: 1;
    }
  }

  @keyframes stretch-shear-det {
    0%,
    100% {
      opacity: 0.62;
    }
    50% {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cone-ring,
    .cone-shadow,
    .chapter-path-line,
    .chapter-path-dot-a,
    .chapter-path-dot-b,
    .chapter-path-dot-c,
    .chapter-path-dot-d,
    .chapter-path-page,
    .recipe-flow-a,
    .recipe-flow-b,
    .recipe-flow-c,
    .recipe-core,
    .stretch-shear-stretch,
    .stretch-shear-stretch-line,
    .stretch-shear-shear,
    .stretch-shear-shear-line,
    .stretch-shear-det {
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
  <a class="lie-chapter-card" href="{{ '/blog/lie-groups/the-exponential-map/' | relative_url }}">
    <div class="lie-chapter-body">
      <div class="lie-chapter-date">Chapter 1</div>
      <h2 class="lie-chapter-title">The Exponential Map</h2>
      <p class="lie-chapter-summary">Four connected notes on matrix exponentials, stretch and shear, substitution, and the bracket corrections in CBH.</p>
    </div>
    <div class="lie-chapter-visual" aria-hidden="true">
      <svg viewBox="0 0 240 210" role="img">
        <defs>
          <linearGradient id="chapterPathFill" x1="48" y1="42" x2="184" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fcf9f1" stop-opacity="0.94"></stop>
            <stop offset="1" stop-color="#ece3d0" stop-opacity="0.74"></stop>
          </linearGradient>
        </defs>
        <g class="chapter-path-page">
          <path d="M58 38 H166 L190 62 V174 H58 Z" fill="url(#chapterPathFill)" stroke="#c8b99f" stroke-width="3"></path>
          <path d="M166 38 V63 H190" fill="none" stroke="#c8b99f" stroke-width="3"></path>
          <path d="M78 74 H153" stroke="#2a241e" stroke-opacity="0.18" stroke-width="3" stroke-linecap="round"></path>
          <path d="M78 92 H170" stroke="#2a241e" stroke-opacity="0.14" stroke-width="3" stroke-linecap="round"></path>
          <path d="M78 110 H142" stroke="#2a241e" stroke-opacity="0.14" stroke-width="3" stroke-linecap="round"></path>
        </g>
        <path class="chapter-path-line" d="M70 150 C96 120 104 134 123 102 C145 65 166 82 180 55" fill="none" stroke="#b8552f" stroke-width="5" stroke-linecap="round" stroke-dasharray="12 10"></path>
        <g class="chapter-path-dot-a">
          <circle cx="70" cy="150" r="9" fill="#c2723c"></circle>
          <text x="70" y="154" text-anchor="middle" fill="#fcf9f1" font-size="10" font-family="serif">P</text>
        </g>
        <g class="chapter-path-dot-b">
          <circle cx="108" cy="126" r="9" fill="#5e7a4e"></circle>
          <text x="108" y="130" text-anchor="middle" fill="#fcf9f1" font-size="10" font-family="serif">S</text>
        </g>
        <g class="chapter-path-dot-c">
          <circle cx="136" cy="88" r="9" fill="#3a6fa8"></circle>
          <text x="136" y="92" text-anchor="middle" fill="#fcf9f1" font-size="10" font-family="serif">E</text>
        </g>
        <g class="chapter-path-dot-d">
          <circle cx="180" cy="55" r="9" fill="#b8552f"></circle>
          <text x="180" y="59" text-anchor="middle" fill="#fcf9f1" font-size="10" font-family="serif">C</text>
        </g>
      </svg>
    </div>
  </a>
</div>
