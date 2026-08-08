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

  .talk-obstacle-a,
  .talk-obstacle-b {
    animation: talk-obstacle 4.8s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

  .talk-obstacle-b {
    animation-delay: 0.65s;
  }

  .talk-route {
    animation: talk-route 5.6s ease-in-out infinite;
    stroke-dasharray: 390;
    stroke-dashoffset: 390;
  }

  .talk-start,
  .talk-goal {
    animation: talk-node 2.8s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

  .talk-goal {
    animation-delay: 1.4s;
  }

  .talk-drone {
    offset-path: path("M45 174 C102 167 125 115 184 106 S274 85 315 43");
    animation: talk-drone-flight 5.6s ease-in-out infinite;
    filter: drop-shadow(0 0 6px rgba(245, 243, 238, 0.9));
  }

  @keyframes talk-obstacle {
    0%,
    100% {
      opacity: 0.48;
      transform: translateY(4px) scale(0.92);
    }
    50% {
      opacity: 1;
      transform: translateY(-4px) scale(1.06);
    }
  }

  @keyframes talk-route {
    0% {
      opacity: 0.32;
      stroke-dashoffset: 390;
    }
    42%,
    78% {
      opacity: 1;
      stroke-dashoffset: 0;
    }
    100% {
      opacity: 0.32;
      stroke-dashoffset: -390;
    }
  }

  @keyframes talk-node {
    0%,
    100% {
      opacity: 0.62;
      transform: scale(0.78);
    }
    50% {
      opacity: 1;
      transform: scale(1.28);
    }
  }

  @keyframes talk-drone-flight {
    0%,
    8% {
      opacity: 0;
      offset-distance: 0%;
      transform: scale(0.7);
    }
    16% {
      opacity: 1;
    }
    78% {
      opacity: 1;
      offset-distance: 100%;
      transform: scale(1);
    }
    90%,
    100% {
      opacity: 0;
      offset-distance: 100%;
      transform: scale(0.7);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .talk-obstacle-a,
    .talk-obstacle-b,
    .talk-route,
    .talk-start,
    .talk-goal,
    .talk-drone {
      animation: none;
    }

    .talk-route {
      stroke-dashoffset: 0;
    }

    .talk-drone {
      display: none;
    }
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

<div class="talk-cards">
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
        <rect class="talk-obstacle-a" x="138" y="71" width="55" height="55" rx="5" fill="none" stroke="#2e7bd6" stroke-width="4" />
        <rect class="talk-obstacle-b" x="222" y="112" width="45" height="45" rx="5" fill="none" stroke="#2e7bd6" stroke-width="4" />
        <path class="talk-route" d="M45 174 C 102 167, 125 115, 184 106 S 274 85, 315 43" fill="none" stroke="#e4572e" stroke-linecap="round" stroke-width="7" />
        <circle class="talk-start" cx="45" cy="174" r="10" fill="#3fa66a" />
        <circle class="talk-goal" cx="315" cy="43" r="10" fill="#e4572e" />
        <circle class="talk-drone" cx="0" cy="0" r="6" fill="#f5f3ee" />
      </svg>
    </div>
  </a>

  <a class="talk-card" href="{{ '/talk/2026/dijkstra-a-star/' | relative_url }}">
    <div class="talk-card-content">
      <div class="talk-card-label">Interactive presentation · Graph search</div>
      <h2 class="talk-card-title">Dijkstra, A*, and RRT</h2>
      <p class="talk-card-description">
        Explore shortest-path search, priority queues, admissible heuristics, grid planning, algorithmic complexity, and RRT-based sampling for motion planning.
      </p>
    </div>
    <div class="talk-card-visual" aria-hidden="true">
      <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="220" fill="#12161c" />
        <path d="M42 161 L126 76 L204 143 L311 49" fill="none" stroke="#27324a" stroke-width="5" />
        <path d="M42 161 L126 76 L311 49" fill="none" stroke="#41b8ff" stroke-width="7" />
        <circle cx="42" cy="161" r="11" fill="#37d08a" />
        <circle cx="126" cy="76" r="11" fill="#41b8ff" />
        <circle cx="204" cy="143" r="11" fill="#ffd36b" />
        <circle cx="311" cy="49" r="13" fill="#ffb021" />
        <text x="180" y="205" fill="#eaeef7" font-family="monospace" font-size="27" font-weight="700" text-anchor="middle">Dijkstra · A* · RRT</text>
      </svg>
    </div>
  </a>
</div>
