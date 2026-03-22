---
layout: page
title: Pose Refiner
description: Real-time 2D pose refinement with EKF and skeleton constraints for ROS 2 pipelines.
img: assets/img/1.jpg
importance: 5
category: work
github: https://github.com/stevens-armlab/pose_refiner
---

Pose Refiner improves noisy 2D keypoints from human-pose detectors in real time.

The method combines:

- Extended Kalman Filter temporal smoothing,
- confidence/outlier gating, and
- skeleton-length and joint-angle consistency constraints.

It is designed as a calibration-free ROS 2 component for stable downstream robot-perception tasks.
