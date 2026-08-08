---
layout: page
title: Dijkstra and A*
permalink: /talk/2026/dijkstra-a-star/
description: An interactive presentation on Dijkstra's shortest-path algorithm, A*, heuristics, and sampling-based motion planning.
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
  An interactive presentation on shortest-path search, from Dijkstra's algorithm and A* heuristics to sampling-based motion planning.
</p>

<iframe
  class="talk-deck-frame"
  src="{{ '/assets/talks/dijkstra-a-star.html' | relative_url }}"
  title="Dijkstra and A* interactive presentation"
  loading="eager"
  allowfullscreen
></iframe>

<p class="talk-deck-link">
  <a href="{{ '/assets/talks/dijkstra-a-star.html' | relative_url }}" target="_blank" rel="noopener">Open the presentation full screen <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
</p>
