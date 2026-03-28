---
layout: page
title: Event-Camera Reinforcement Learning Navigation on Jackal
description: Event-driven reinforcement learning for autonomous navigation with neuromorphic vision.
img: assets/img/12.jpg
importance: 1
category: work
github: https://github.com/gaudelbijay/event_jackal
---

Event Jackal explores navigation policies that learn directly from asynchronous event-camera signals instead of dense RGB frames or lidar.

The pipeline combines:

- binary event-map generation from neuromorphic streams,
- self-supervised contrastive feature learning, and
- Soft Actor-Critic policies (MLP/CNN/GRU/Transformer) for control.

The project focuses on simulation-to-real transfer to a physical Jackal UGV with minimal real-world calibration.
