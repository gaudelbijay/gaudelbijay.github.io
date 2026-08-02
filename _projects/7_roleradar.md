---
layout: page
title: RoleRadar
description: Privacy-conscious, resume-aware job discovery with evidence-based filtering and ranking.
img: assets/img/projects/roleradar/job-search-results.png
importance: 7
category: work
github: https://github.com/gaudelbijay/RoleRadar
---

RoleRadar is a privacy-conscious job discovery and application-preparation system that helps candidates find recent, relevant openings without giving up control of the application process.

It retrieves public job listings, applies user-defined constraints such as location, posting age, education, and salary, and ranks eligible roles using BM25, semantic search, or hybrid retrieval. An optional resume-aware workflow personalizes the ordering, while evidence-validated summaries clearly present each role's requirements, experience expectations, compensation, and source link.

Key features include:

- Gradio, Streamlit, and command-line interfaces,
- resume-personalized job ranking,
- hard eligibility filters backed by listing evidence,
- BM25, semantic, hybrid, and reranking options,
- optional local Gemma summaries through Ollama, and
- an adaptive source scheduler with safety limits.

The system uses public sources and local models where possible, requires no paid LLM API, and leaves final verification and application submission to the user.

### Ranked Job Results

{% include figure.liquid path="assets/img/projects/roleradar/job-search-results.png" title="RoleRadar dashboard showing ranked, evidence-rich job matches." class="img-fluid rounded z-depth-1" %}

[View RoleRadar on GitHub](https://github.com/gaudelbijay/RoleRadar)
