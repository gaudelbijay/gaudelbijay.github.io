---
layout: page
title: Dijkstra and A* for UAV Motion Planning
permalink: /talk/2026/uav-motion-planning/
description: An interactive presentation on Dijkstra's algorithm, A*, and sampling-based motion planning for autonomous UAVs.
nav: false
---

<style>
  .talk-deck-intro {
    margin-bottom: 1rem;
    color: var(--global-text-color-light);
  }

  .talk-deck-frame {
    width: 100%;
    min-height: min(78vh, 820px);
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: #0b0e16;
  }

  .talk-deck-link {
    margin-top: 0.75rem;
    text-align: right;
  }

  @media (max-width: 767px) {
    .talk-deck-frame {
      min-height: 70vh;
    }
  }
</style>

<p class="talk-deck-intro">
  An interactive guest lecture on shortest-path search and motion planning, presented to fourth-year aeronautical engineering students at Pulchowk Campus in Kathmandu, Nepal.
</p>

<iframe
  class="talk-deck-frame"
  src="{{ '/assets/talks/dijkstra-a-star.html' | relative_url }}"
  title="Dijkstra and A* for UAV Motion Planning interactive presentation"
  loading="eager"
  allowfullscreen
></iframe>

<p class="talk-deck-link">
  <a href="{{ '/assets/talks/dijkstra-a-star.html' | relative_url }}" target="_blank" rel="noopener">Open the presentation full screen <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
</p>
