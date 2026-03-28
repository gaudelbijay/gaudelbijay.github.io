---
layout: page
title: Joint-Angle Human Pose Estimation for Casualty Manipulation
description: Depth-only human joint-state observer with feasible-set estimation.
img: assets/img/3.jpg
importance: 2
category: work
github: https://github.com/stevens-armlab/casperjointpose
---

CasperJointPose is a depth-based observer for human joint-state estimation in robot-interaction settings.

From a single depth frame, it predicts:

- bounded joint-angle point estimates,
- an energy-based feasible set of likely poses, and
- body-link class logits.

The repository includes staged training, calibration for feasible-set thresholds, and inference-time candidate refinement workflows.
