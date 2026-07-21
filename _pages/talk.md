---
layout: page
title: Talk
permalink: /talk/
description: Invited talks, lectures, and presentation materials.
nav: true
nav_order: 7
---

<style>
  .talk-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(220px, 34%);
    margin-top: 1.5rem;
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

  .talk-card:hover {
    color: inherit;
    text-decoration: none;
    border-color: var(--global-theme-color);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .talk-card-content {
    padding: 1.75rem;
  }

  .talk-card-label {
    margin-bottom: 0.6rem;
    color: var(--global-theme-color);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .talk-card-title {
    margin-bottom: 0.75rem;
    font-size: 1.6rem;
  }

  .talk-card-description {
    margin: 0;
    color: var(--global-text-color-light);
    line-height: 1.65;
  }

  .talk-card-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 220px;
    padding: 2rem;
    color: #f5f3ee;
    background: #12161c;
  }

  .talk-card-visual svg {
    width: 100%;
    max-width: 260px;
    height: auto;
  }

  @media (max-width: 767px) {
    .talk-card {
      grid-template-columns: 1fr;
    }

    .talk-card-visual {
      min-height: 180px;
    }
  }
</style>

<a class="talk-card" href="{{ '/talk/2026/uav-motion-planning/' | relative_url }}">
  <div class="talk-card-content">
    <div class="talk-card-label">Guest lecture · Interactive presentation</div>
    <h2 class="talk-card-title">UAV Motion Planning</h2>
    <p class="talk-card-description">
      A talk delivered to fourth-year aeronautical engineering students at Pulchowk Campus in Kathmandu, Nepal. Explore configuration spaces, graph search, trajectory optimization, obstacle avoidance, and autonomous UAV missions.
    </p>
  </div>
  <div class="talk-card-visual" aria-hidden="true">
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="220" fill="#12161c" />
      <rect x="138" y="71" width="55" height="55" rx="5" fill="none" stroke="#2e7bd6" stroke-width="4" />
      <rect x="222" y="112" width="45" height="45" rx="5" fill="none" stroke="#2e7bd6" stroke-width="4" />
      <path d="M45 174 C 102 167, 125 115, 184 106 S 274 85, 315 43" fill="none" stroke="#e4572e" stroke-linecap="round" stroke-width="7" />
      <circle cx="45" cy="174" r="10" fill="#3fa66a" />
      <circle cx="315" cy="43" r="10" fill="#e4572e" />
    </svg>
  </div>
</a>
