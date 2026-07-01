---
layout: page
title: The Exponential Map
permalink: /blog/lie-groups/the-exponential-map/
description: Chapter 1 posts for the Lie Groups study path.
nav: false
---

<style>
  .lie-chapter-note {
    margin: 0 0 1.25rem;
    padding: 1rem 1.1rem;
    color: var(--global-text-color-light);
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    line-height: 1.6;
  }

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

  .exp-flow-step-a,
  .exp-flow-step-b,
  .exp-flow-step-c,
  .exp-flow-step-d,
  .exp-flow-step-e {
    animation: exp-flow-step 5.6s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

  .exp-flow-step-b {
    animation-delay: 0.24s;
  }

  .exp-flow-step-c {
    animation-delay: 0.48s;
  }

  .exp-flow-step-d {
    animation-delay: 0.72s;
  }

  .exp-flow-step-e {
    animation-delay: 0.96s;
  }

  .exp-flow-particle {
    animation: exp-flow-particle 5.6s ease-in-out infinite;
  }

  .exp-flow-orbit {
    animation: exp-flow-orbit 5.6s ease-in-out infinite;
    stroke-dasharray: 220;
    stroke-dashoffset: 220;
  }

  .exp-flow-generator {
    animation: exp-flow-generator 5.6s ease-in-out infinite;
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

  .cbh-gap {
    animation: cbh-gap 3.8s ease-in-out infinite;
  }

  .cbh-path-a {
    animation: cbh-path-a 3.8s ease-in-out infinite;
    stroke-dasharray: 220;
    stroke-dashoffset: 220;
  }

  .cbh-path-b {
    animation: cbh-path-b 3.8s ease-in-out infinite;
    stroke-dasharray: 220;
    stroke-dashoffset: 220;
  }

  @keyframes exp-flow-step {
    0%,
    18%,
    100% {
      opacity: 0.2;
      transform: scale(0.72);
    }
    42%,
    74% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes exp-flow-orbit {
    0% {
      stroke-dashoffset: 220;
      opacity: 0.28;
    }
    48%,
    78% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 0.42;
    }
  }

  @keyframes exp-flow-particle {
    0%,
    100% {
      transform: translate(0, 0);
    }
    22% {
      transform: translate(24px, -22px);
    }
    44% {
      transform: translate(58px, -28px);
    }
    66% {
      transform: translate(90px, -8px);
    }
    82% {
      transform: translate(106px, 24px);
    }
  }

  @keyframes exp-flow-generator {
    0%,
    100% {
      transform: translateY(0);
      opacity: 0.78;
    }
    50% {
      transform: translateY(-7px);
      opacity: 1;
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

  @keyframes cbh-path-a {
    0% {
      stroke-dashoffset: 220;
      opacity: 0.25;
    }
    42%,
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  @keyframes cbh-path-b {
    0%,
    22% {
      stroke-dashoffset: 220;
      opacity: 0.25;
    }
    64%,
    100% {
      stroke-dashoffset: 0;
      opacity: 0.95;
    }
  }

  @keyframes cbh-gap {
    0%,
    62% {
      opacity: 0.15;
      transform: scaleX(0.2);
    }
    78%,
    100% {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .exp-flow-step-a,
    .exp-flow-step-b,
    .exp-flow-step-c,
    .exp-flow-step-d,
    .exp-flow-step-e,
    .exp-flow-particle,
    .exp-flow-orbit,
    .exp-flow-generator,
    .recipe-flow-a,
    .recipe-flow-b,
    .recipe-flow-c,
    .recipe-core,
    .stretch-shear-stretch,
    .stretch-shear-stretch-line,
    .stretch-shear-shear,
    .stretch-shear-shear-line,
    .stretch-shear-det,
    .cbh-gap,
    .cbh-path-a,
    .cbh-path-b {
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

<div class="lie-post-cards">
  <a class="lie-post-card" href="{{ '/blog/2026/campbell-baker-hausdorff-foundations/' | relative_url }}">
    <div class="lie-post-body">
      <div class="lie-post-date">Jul 1, 2026</div>
      <h2 class="lie-post-title">Campbell-Baker-Hausdorff Foundations</h2>
      <p class="lie-post-summary">A comprehensive animated companion to Rossmann §1.3: why Lie groups need Lie algebras, why brackets are forced, and how exp(X)exp(Y) becomes one exponential.</p>
    </div>
    <div class="lie-post-visual" aria-hidden="true" style="background:#fcf2df;">
      <svg viewBox="0 0 240 210" role="img">
        <defs>
          <marker id="cbhArrowLieChapterA" markerHeight="7" markerWidth="7" orient="auto" refX="6" refY="3.5">
            <path d="M0 0 L7 3.5 L0 7 Z" fill="#b8552f"></path>
          </marker>
          <marker id="cbhArrowLieChapterB" markerHeight="7" markerWidth="7" orient="auto" refX="6" refY="3.5">
            <path d="M0 0 L7 3.5 L0 7 Z" fill="#5e7a4e"></path>
          </marker>
        </defs>
        <path d="M34 160 H208" stroke="#2a241e" stroke-opacity="0.14" stroke-width="2"></path>
        <path d="M56 178 V42" stroke="#2a241e" stroke-opacity="0.12" stroke-width="2"></path>
        <circle cx="56" cy="160" r="6" fill="#2a241e"></circle>
        <text x="42" y="178" fill="#2a241e" font-size="16" font-family="serif">e</text>
        <path class="cbh-path-a" d="M56 160 L132 144 L172 76" fill="none" stroke="#b8552f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#cbhArrowLieChapterA)"></path>
        <path class="cbh-path-b" d="M56 160 L96 90 L158 116" fill="none" stroke="#5e7a4e" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#cbhArrowLieChapterB)"></path>
        <line class="cbh-gap" x1="158" y1="116" x2="172" y2="76" stroke="#c2723c" stroke-width="6" stroke-linecap="round"></line>
        <circle cx="172" cy="76" r="7" fill="#b8552f"></circle>
        <circle cx="158" cy="116" r="7" fill="#5e7a4e"></circle>
        <text x="122" y="136" fill="#b8552f" font-size="16" font-family="serif">X then Y</text>
        <text x="70" y="86" fill="#5e7a4e" font-size="16" font-family="serif">Y then X</text>
        <text x="181" y="103" fill="#c2723c" font-size="17" font-family="serif">[X,Y]</text>
      </svg>
    </div>
  </a>

  <a class="lie-post-card" href="{{ '/blog/2026/the-exponential-map/' | relative_url }}">
    <div class="lie-post-body">
      <div class="lie-post-date">Jun 25, 2026</div>
      <h2 class="lie-post-title">The Engine &amp; the Motion</h2>
      <p class="lie-post-summary">A visual guide to how matrices act, how exponentials turn generators into flows, and how trace-zero directions become motions in SL(2, R).</p>
    </div>
    <div class="lie-post-visual" aria-hidden="true">
      <svg viewBox="0 0 240 210" role="img">
        <defs>
          <linearGradient id="expFlowLieChapter" x1="46" y1="160" x2="190" y2="66" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#3a6fa8" stop-opacity="0.95"></stop>
            <stop offset="0.52" stop-color="#b8552f" stop-opacity="0.92"></stop>
            <stop offset="1" stop-color="#f0c28f" stop-opacity="0.88"></stop>
          </linearGradient>
          <marker id="expArrowLieChapter" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#b8552f"></path>
          </marker>
        </defs>
        <rect x="34" y="34" width="54" height="44" rx="12" fill="#2a241e" fill-opacity="0.9"></rect>
        <g class="exp-flow-generator">
          <text x="61" y="57" text-anchor="middle" fill="#fcf9f1" font-size="21" font-family="serif">X</text>
          <path d="M82 57 C102 54 112 70 122 88" fill="none" stroke="#b8552f" stroke-width="3" marker-end="url(#expArrowLieChapter)"></path>
        </g>
        <path d="M56 162 C82 116 110 96 139 100 C167 104 184 130 178 158" fill="none" stroke="#2a241e" stroke-opacity="0.2" stroke-width="13" stroke-linecap="round"></path>
        <path class="exp-flow-orbit" d="M56 162 C82 116 110 96 139 100 C167 104 184 130 178 158" fill="none" stroke="url(#expFlowLieChapter)" stroke-width="5" stroke-linecap="round"></path>
        <g fill="#fcf9f1" stroke="#b8552f" stroke-width="2">
          <circle class="exp-flow-step-a" cx="74" cy="134" r="6"></circle>
          <circle class="exp-flow-step-b" cx="99" cy="110" r="6"></circle>
          <circle class="exp-flow-step-c" cx="129" cy="100" r="6"></circle>
          <circle class="exp-flow-step-d" cx="158" cy="112" r="6"></circle>
          <circle class="exp-flow-step-e" cx="177" cy="148" r="6"></circle>
        </g>
        <g class="exp-flow-particle">
          <circle cx="56" cy="162" r="8" fill="#3a6fa8"></circle>
          <circle cx="56" cy="162" r="3" fill="#fcf9f1"></circle>
        </g>
        <text x="37" y="185" fill="#574c3b" font-size="15" font-family="serif">I</text>
        <text x="151" y="181" fill="#b8552f" font-size="17" font-family="serif">e^X</text>
        <text x="102" y="144" fill="#574c3b" font-size="13" font-family="serif">(I + X/n)^n</text>
        <text x="138" y="70" fill="#3a6fa8" font-size="15" font-family="serif">e^{tX}</text>
      </svg>
    </div>
  </a>

  <a class="lie-post-card" href="{{ '/blog/2026/stretch-vs-shear/' | relative_url }}">
    <div class="lie-post-body">
      <div class="lie-post-date">Jun 22, 2026</div>
      <h2 class="lie-post-title">Stretch vs Shear</h2>
      <p class="lie-post-summary">A visual comparison of hyperbolic stretches and parabolic shears in SL(2, R), through eigen-directions, area preservation, and the geometry of the unit circle.</p>
    </div>
    <div class="lie-post-visual" aria-hidden="true" style="background:#ece3d0;">
      <svg viewBox="0 0 240 210" role="img">
        <defs>
          <marker id="stretchShearArrowLieChapter" markerHeight="7" markerWidth="7" orient="auto" refX="6" refY="3.5">
            <path d="M0 0 L7 3.5 L0 7 Z" fill="#b8552f"></path>
          </marker>
        </defs>
        <path d="M30 164 H210" stroke="#2a241e" stroke-opacity="0.22" stroke-width="2"></path>
        <path d="M120 184 V26" stroke="#2a241e" stroke-opacity="0.18" stroke-width="2"></path>
        <ellipse class="stretch-shear-stretch" cx="83" cy="108" rx="42" ry="16" fill="#6e7a36" fill-opacity="0.14" stroke="#6e7a36" stroke-width="4"></ellipse>
        <line class="stretch-shear-stretch-line" x1="39" y1="108" x2="129" y2="108" stroke="#6e7a36" stroke-width="5" stroke-linecap="round" marker-end="url(#stretchShearArrowLieChapter)"></line>
        <ellipse class="stretch-shear-shear" cx="157" cy="108" rx="36" ry="18" fill="#b8552f" fill-opacity="0.14" stroke="#b8552f" stroke-width="4"></ellipse>
        <path class="stretch-shear-shear-line" d="M123 135 L182 74" fill="none" stroke="#b8552f" stroke-width="5" stroke-linecap="round" marker-end="url(#stretchShearArrowLieChapter)"></path>
        <circle cx="83" cy="108" r="5" fill="#2a241e"></circle>
        <circle cx="157" cy="108" r="5" fill="#2a241e"></circle>
        <text x="83" y="58" text-anchor="middle" fill="#6e7a36" font-size="17" font-family="serif">Stretch</text>
        <text x="157" y="58" text-anchor="middle" fill="#b8552f" font-size="17" font-family="serif">Shear</text>
        <text class="stretch-shear-det" x="120" y="177" text-anchor="middle" fill="#2a241e" font-size="16" font-family="serif">det = 1</text>
      </svg>
    </div>
  </a>

  <a class="lie-post-card" href="{{ '/blog/2026/substitution-principle-adjoints/' | relative_url }}">
    <div class="lie-post-body">
      <div class="lie-post-date">Jun 20, 2026</div>
      <h2 class="lie-post-title">The Substitution Principle</h2>
      <p class="lie-post-summary">A geometric route from power series as universal recipes to conjugation, Lie brackets, and adjoint representations.</p>
    </div>
    <div class="lie-post-visual" aria-hidden="true" style="background:#07190b;">
      <svg viewBox="0 0 240 210" role="img">
        <defs>
          <marker id="recipeArrowLieChapter" markerHeight="7" markerWidth="7" orient="auto" refX="6" refY="3.5">
            <path d="M0 0 L7 3.5 L0 7 Z" fill="#f0c28f"></path>
          </marker>
          <linearGradient id="recipeCoreFillLieChapter" x1="72" y1="58" x2="168" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#3a6fa8" stop-opacity="0.42"></stop>
            <stop offset="1" stop-color="#b8552f" stop-opacity="0.24"></stop>
          </linearGradient>
        </defs>
        <rect class="recipe-core" x="74" y="52" width="92" height="106" rx="8" fill="url(#recipeCoreFillLieChapter)" stroke="#3dc9b0" stroke-width="3"></rect>
        <text x="120" y="89" text-anchor="middle" fill="#f2ead9" font-size="17" font-family="serif">1 + X</text>
        <text x="120" y="115" text-anchor="middle" fill="#f2ead9" font-size="16" font-family="serif">+ X^2/2!</text>
        <text x="120" y="139" text-anchor="middle" fill="#f2ead9" font-size="15" font-family="serif">+ ...</text>
        <g class="recipe-flow-a">
          <circle cx="28" cy="72" r="10" fill="#3a6fa8" fill-opacity="0.88"></circle>
          <line x1="42" y1="72" x2="70" y2="72" stroke="#f0c28f" stroke-width="4" stroke-linecap="round" marker-end="url(#recipeArrowLieChapter)"></line>
        </g>
        <g class="recipe-flow-b">
          <rect x="22" y="101" width="22" height="22" rx="3" fill="#b8552f" fill-opacity="0.84"></rect>
          <line x1="47" y1="112" x2="70" y2="112" stroke="#f0c28f" stroke-width="4" stroke-linecap="round" marker-end="url(#recipeArrowLieChapter)"></line>
        </g>
        <g class="recipe-flow-c">
          <path d="M24 151 C30 139 41 139 47 151" fill="none" stroke="#4a8c5c" stroke-width="5" stroke-linecap="round"></path>
          <line x1="50" y1="151" x2="70" y2="151" stroke="#f0c28f" stroke-width="4" stroke-linecap="round" marker-end="url(#recipeArrowLieChapter)"></line>
        </g>
        <line x1="166" y1="86" x2="210" y2="72" stroke="#f0c28f" stroke-width="4" stroke-linecap="round" marker-end="url(#recipeArrowLieChapter)"></line>
        <line x1="166" y1="112" x2="210" y2="112" stroke="#f0c28f" stroke-width="4" stroke-linecap="round" marker-end="url(#recipeArrowLieChapter)"></line>
        <line x1="166" y1="138" x2="210" y2="151" stroke="#f0c28f" stroke-width="4" stroke-linecap="round" marker-end="url(#recipeArrowLieChapter)"></line>
        <text x="211" y="68" fill="#4aa8ff" font-size="15" font-family="serif">e^x</text>
        <text x="211" y="108" fill="#ffd060" font-size="15" font-family="serif">exp X</text>
        <text x="211" y="151" fill="#3dc9b0" font-size="15" font-family="serif">Ad</text>
      </svg>
    </div>
  </a>
</div>
