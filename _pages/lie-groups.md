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

  .lie-theory-generator-x,
  .lie-theory-generator-y,
  .lie-theory-generator-z {
    animation: lie-theory-generator 4.6s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: 120px 110px;
  }

  .lie-theory-generator-y {
    animation-delay: 0.32s;
  }

  .lie-theory-generator-z {
    animation-delay: 0.64s;
  }

  .lie-theory-bracket {
    animation: lie-theory-bracket 4.6s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

  .lie-theory-spark {
    animation: lie-theory-spark 4.6s ease-in-out infinite;
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

  @keyframes lie-theory-generator {
    0%,
    100% {
      opacity: 0.72;
      transform: translate(0, 0) rotate(0deg);
    }
    42% {
      opacity: 1;
      transform: translate(4px, -3px) rotate(5deg);
    }
    68% {
      opacity: 0.9;
      transform: translate(-3px, 4px) rotate(-4deg);
    }
  }

  @keyframes lie-theory-bracket {
    0%,
    100% {
      opacity: 0.64;
      transform: scale(0.92);
    }
    46% {
      opacity: 1;
      transform: scale(1.08);
    }
  }

  @keyframes lie-theory-spark {
    0%,
    28%,
    100% {
      opacity: 0;
      transform: scale(0.4);
    }
    50%,
    72% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cone-ring,
    .cone-shadow,
    .recipe-flow-a,
    .recipe-flow-b,
    .recipe-flow-c,
    .recipe-core,
    .stretch-shear-stretch,
    .stretch-shear-stretch-line,
    .stretch-shear-shear,
    .stretch-shear-shear-line,
    .stretch-shear-det,
    .lie-theory-generator-x,
    .lie-theory-generator-y,
    .lie-theory-generator-z,
    .lie-theory-bracket,
    .lie-theory-spark {
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
          <linearGradient id="coneFillLieGroups" x1="60" y1="34" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#b8552f" stop-opacity="0.82"></stop>
            <stop offset="1" stop-color="#3a6fa8" stop-opacity="0.3"></stop>
          </linearGradient>
        </defs>
        <ellipse class="cone-shadow" cx="120" cy="174" rx="60" ry="13" fill="#2a241e"></ellipse>
        <path d="M120 34 L55 174 L185 174 Z" fill="url(#coneFillLieGroups)" opacity="0.52"></path>
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

  <a class="lie-chapter-card" href="{{ '/blog/lie-groups/lie-theory/' | relative_url }}">
    <div class="lie-chapter-body">
      <div class="lie-chapter-date">Chapter 2</div>
      <h2 class="lie-chapter-title">Lie theory</h2>
      <p class="lie-chapter-summary">Concrete Lie groups and algebras, starting with SO(3): rotations, infinitesimal generators, brackets, and the exponential bridge.</p>
    </div>
    <div class="lie-chapter-visual" aria-hidden="true" style="background:#ECE3D0;">
      <svg viewBox="0 0 240 210" role="img">
        <circle cx="120" cy="110" r="70" fill="#ffffff" stroke="#e4e0d8" stroke-width="2"></circle>
        <g>
          <ellipse cx="120" cy="110" rx="76" ry="28" fill="none" stroke="#2A241E" stroke-opacity="0.2" stroke-width="3"></ellipse>
          <ellipse cx="120" cy="110" rx="76" ry="28" fill="none" stroke="#2A241E" stroke-opacity="0.16" stroke-width="3" transform="rotate(62 120 110)"></ellipse>
          <ellipse cx="120" cy="110" rx="76" ry="28" fill="none" stroke="#2A241E" stroke-opacity="0.13" stroke-width="3" transform="rotate(122 120 110)"></ellipse>
        </g>
        <line class="lie-theory-generator-x" x1="120" y1="110" x2="176" y2="110" stroke="#1a5ca8" stroke-width="5" stroke-linecap="round"></line>
        <line class="lie-theory-generator-y" x1="120" y1="110" x2="120" y2="48" stroke="#1a7a40" stroke-width="5" stroke-linecap="round"></line>
        <line class="lie-theory-generator-z" x1="120" y1="110" x2="74" y2="146" stroke="#c0392b" stroke-width="5" stroke-linecap="round"></line>
        <circle cx="120" cy="110" r="6" fill="#2A241E"></circle>
        <text x="78" y="184" fill="#2A241E" font-size="20" font-family="serif">SO(3)</text>
        <circle class="lie-theory-spark" cx="151" cy="105" r="5" fill="#B8552F"></circle>
        <text class="lie-theory-bracket" x="150" y="184" fill="#B8552F" font-size="17" font-family="serif">[ , ]</text>
      </svg>
    </div>
  </a>
</div>
