---
layout: page
title: Real-Time Human Pose Refinement with EKF and Kinematic Constraints
description: Real-time 2D pose refinement with EKF and skeleton constraints for ROS 2 pipelines.
img: assets/img/pose_refiner_vit_ekf.png
importance: 5
category: work
github: https://github.com/stevens-armlab/pose_refiner
---

This project implements the 2D Human Pose Estimation pipeline from the poster workflow, focusing on ViTPose keypoint estimation and EKF-based refinement during manipulation.

Core pipeline:

- Human pose estimation during manipulation using ViTPose.
- Human pose estimation after correction using EKF.
- Real-time ROS 2 integration for stable downstream perception and manipulation modules.

### 2D Human Pose Estimation

<div style="display: flex; flex-wrap: wrap; gap: 0.6rem; align-items: flex-start;">
  <div style="flex: 1 1 320px; min-width: 260px; text-align: center;">
    <img
      src="{{ '/assets/img/pose_refiner_vit_raw.png' | relative_url }}"
      alt="Human pose estimation during manipulation using ViTPose"
      style="width: 100%; height: auto; border-radius: 8px;"
    />
  </div>

  <div style="flex: 1 1 320px; min-width: 260px; text-align: center;">
    <img
      src="{{ '/assets/img/pose_refiner_vit_ekf.png' | relative_url }}"
      alt="Human pose estimation after correction using EKF"
      style="width: 100%; height: auto; border-radius: 8px;"
    />
  </div>
</div>

<p style="margin-top: 0.65rem;">
  <strong>Figure:</strong> Human pose estimation during manipulation using ViTPose and human pose estimation after correction using EKF.
</p>
