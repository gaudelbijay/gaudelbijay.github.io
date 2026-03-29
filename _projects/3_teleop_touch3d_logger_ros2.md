---
layout: page
title: ROS 2 Haptic Teleoperation Data Logger for Manipulation Learning
description: ROS 2 teleoperation and experiment logging stack for Geomagic Touch-based arm control.
img: assets/img/teleop_haptic_frame.png
importance: 3
category: work
github: https://github.com/stevens-armlab/teleop_touch3d_logger_ros2
---

This package provides ROS 2 teleoperation and structured logging tools for haptic-control experiments using the Geomagic Touch (Touch3D) device.

Core capabilities include:

- teleoperation/control nodes and utility modules,
- reproducible rosbag-based logging workflows, and
- dataset export tools for depth-plus-joint-state learning pipelines.

It is used to build labeled interaction datasets that feed downstream observer and perception models.

### Resolve-Rate Algorithm and Frame Mapping

<div style="display: flex; flex-wrap: wrap; gap: 1.2rem; align-items: flex-start;">
  <div style="flex: 1 1 460px; min-width: 300px; border: 1px solid rgba(127, 127, 127, 0.35); border-radius: 12px; padding: 0.9rem;">
    <img
      src="{{ '/assets/img/teleop_resolve_rate.png' | relative_url }}"
      alt="Resolved-rate algorithm diagram"
      style="width: 100%; height: auto; border-radius: 8px;"
    />
    <p style="margin: 0.8rem 0 0; line-height: 1.45;">
      <strong>Figure:</strong> An implementation of the resolved-rate algorithm with radii of convergence for position and
      orientation errors \(\varepsilon_p\), \(\varepsilon_\omega\), and with linear speed decay when the errors
      \(\delta_p < \lambda_p \varepsilon_p\), \(\delta_\omega < \lambda_\xi \varepsilon_\omega\), where
      \(\lambda_p, \lambda_\xi > 1\) and the operator \((S)^\vee\) extracts the vector of a skew-symmetric matrix \(S\).
    </p>
  </div>

  <div style="flex: 1 1 460px; min-width: 300px; border: 1px solid rgba(127, 127, 127, 0.35); border-radius: 12px; padding: 0.9rem;">
    <h4 style="margin-top: 0; margin-bottom: 0.65rem;">Haptic and Robot Base Frames</h4>

    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <div style="flex: 1 1 220px; min-width: 200px; text-align: center;">
        <img
          src="{{ '/assets/img/teleop_haptic_frame.png' | relative_url }}"
          alt="Haptic interaction frame"
          style="width: 100%; height: auto; border-radius: 8px;"
        />
        <p style="margin: 0.45rem 0 0;"><strong>Figure:</strong> Haptic interaction frame</p>
      </div>

      <div style="flex: 1 1 220px; min-width: 200px; text-align: center;">
        <img
          src="{{ '/assets/img/teleop_robot_base_frame.png' | relative_url }}"
          alt="Robot base frame"
          style="width: 100%; height: auto; border-radius: 8px;"
        />
        <p style="margin: 0.45rem 0 0;"><strong>Figure:</strong> Robot base frame</p>
      </div>
    </div>

    \[
    {}^{V}\!R_{H} =
    \begin{bmatrix}
    1 & 0 & 0\\
    0 & 0 & -1\\
    0 & 1 & 0
    \end{bmatrix}
    \quad
    \text{(haptic frame expressed in viewer frame)}
    \]

    \[
    {}^{V}\!R_{B} =
    \begin{bmatrix}
    0 & -1 & 0\\
    1 & 0 & 0\\
    0 & 0 & 1
    \end{bmatrix}
    \quad
    \text{(robot-base frame expressed in viewer frame)}
    \]

    \[
    T^{V}_{A} = T^{V}_{H} T^{H}_{A},
    \qquad
    T^{\mathrm{tcp0}}_{A} = (T^{B}_{\mathrm{tcp0}})^{-1} (T^{V}_{B})^{-1} T^{V}_{A}
    \]

    \[
    \text{Frames: } V=\text{viewer},\ H=\text{haptic},\ B=\text{robot base},\ A=\text{anchor}.
    \]
  </div>
</div>
