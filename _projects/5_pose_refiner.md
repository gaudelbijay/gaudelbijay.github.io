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

### Mathematical Formulation

For each joint $j$, the filter state and measurement are:

$$
x_{t,j} =
\begin{bmatrix}
u_{t,j} & v_{t,j} & \dot{u}_{t,j} & \dot{v}_{t,j}
\end{bmatrix}^{\!\top},
\qquad
z_{t,j} =
\begin{bmatrix}
u^{\text{meas}}_{t,j} & v^{\text{meas}}_{t,j}
\end{bmatrix}^{\!\top}.
$$

#### EKF Dynamics and Measurement Model

$$
F=
\begin{bmatrix}
1&0&\Delta t&0\\
0&1&0&\Delta t\\
0&0&1&0\\
0&0&0&1
\end{bmatrix},
\qquad
H=
\begin{bmatrix}
1&0&0&0\\
0&1&0&0
\end{bmatrix}.
$$

$$
Q=\sigma_q^2
\begin{bmatrix}
\frac{\Delta t^4}{4}&0&\frac{\Delta t^3}{2}&0\\
0&\frac{\Delta t^4}{4}&0&\frac{\Delta t^3}{2}\\
\frac{\Delta t^3}{2}&0&\Delta t^2&0\\
0&\frac{\Delta t^3}{2}&0&\Delta t^2
\end{bmatrix}.
$$

Initial covariance per joint:

$$
P_0=\operatorname{diag}\!\left(\sigma_{\text{pos},0}^2,\sigma_{\text{pos},0}^2,\sigma_{\text{vel},0}^2,\sigma_{\text{vel},0}^2\right).
$$

Confidence-dependent measurement noise:

$$
c_{\text{eff}}=\max(\operatorname{clip}(c,0,1),c_{\min}),\quad
\sigma_m=\min\!\left(\frac{\sigma_{\text{meas}}}{c_{\text{eff}}},\sigma_{\text{meas,max}}\right),\quad
R=\operatorname{diag}(\sigma_m^2,\sigma_m^2).
$$

EKF predict/update:

$$
\hat{x}_{t|t-1}=F x_{t-1|t-1},\quad
\hat{P}_{t|t-1}=F P_{t-1|t-1}F^\top + Q,
$$

$$
y_t=z_t-H\hat{x}_{t|t-1},\quad
S_t=H\hat{P}_{t|t-1}H^\top+R+\varepsilon I,
$$

$$
K_t=\hat{P}_{t|t-1}H^\top S_t^{-1},
$$

$$
x_{t|t}=\hat{x}_{t|t-1}+K_t y_t,\quad
P_{t|t}=(I-K_tH)\hat{P}_{t|t-1}.
$$

Outlier/confidence gating used before accepting an update:

$$
d_t^2 = y_t^\top S_t^{-1} y_t,\qquad
\text{accept update if } c \ge c_{\text{update,min}} \text{ and } d_t^2 \le \tau_M.
$$

If the gate fails, the implementation keeps prediction $(\hat{x}_{t|t-1},\hat{P}_{t|t-1})$.

#### Bone-Length Learning and Projection

For each bone $(a,b)$:

$$
\ell_{ab}^{\text{obs}}=\|p_a-p_b\|_2,
\qquad
\ell_{ab} \leftarrow \operatorname{median}\!\left(\{\ell_{ab}^{\text{obs}}\}_{1:N}\right)
$$

after warmup; then optional EMA adaptation:

$$
\ell_{ab}\leftarrow (1-\alpha_\ell)\,\ell_{ab}+\alpha_\ell\,\ell_{ab}^{\text{obs}}.
$$

Optional global scale (when enabled):

$$
s=\operatorname{clip}\!\left(\operatorname{median}_{(a,b)}\frac{\|p_a-p_b\|_2}{\ell_{ab}},\,s_{\min},\,s_{\max}\right),\quad
\ell_{ab}^{*}=s\,\ell_{ab}.
$$

Length correction step (iterated over passes):

$$
r=\|p_b-p_a\|_2,\quad
e=(r-\ell_{ab}^{*})\,\gamma_\ell,\quad
e\leftarrow \operatorname{clip}(e,\,-\eta_{\max}\ell_{ab}^{*},\,\eta_{\max}\ell_{ab}^{*}),
$$

$$
\hat{d}=\frac{p_b-p_a}{\|p_b-p_a\|_2},\quad
m_a=\frac{w_b}{w_a+w_b+\varepsilon},\quad
m_b=\frac{w_a}{w_a+w_b+\varepsilon},
$$

$$
p_a \leftarrow p_a + \hat{d}(e\,m_a),\qquad
p_b \leftarrow p_b - \hat{d}(e\,m_b),
$$

with $w_a=\max(c_a,c_{\min}^{\ell})$, $w_b=\max(c_b,c_{\min}^{\ell})$.  
Hard-snap passes use full error $e=r-\ell_{ab}^{*}$ (no soft scaling).

#### Angle Reference and Angle Projection

For angle triplet $(a,k,c)$, with $v_1=p_a-p_k,\ v_2=p_c-p_k$:

$$
\theta=\operatorname{atan2}\!\big(v_{1x}v_{2y}-v_{1y}v_{2x},\ v_1^\top v_2\big).
$$

Angle wrapping:

$$
\operatorname{wrap}(\phi)=((\phi+\pi)\bmod 2\pi)-\pi.
$$

Reference-angle circular EMA:

$$
\theta_{\text{ref}} \leftarrow
\operatorname{atan2}\!\Big((1-\alpha_\theta)\sin\theta_{\text{ref}}+\alpha_\theta\sin\theta,\ 
(1-\alpha_\theta)\cos\theta_{\text{ref}}+\alpha_\theta\cos\theta\Big).
$$

Angle correction (if $|e_\theta|>\theta_{\text{err}}$, where $e_\theta=\operatorname{wrap}(\theta-\theta_{\text{ref}})$):

$$
\delta_\theta = \operatorname{clip}(k_\theta e_\theta,\,-\delta_{\max},\,\delta_{\max}),
\quad
\delta_a=\delta_\theta\frac{c_c}{c_a+c_c+\varepsilon},
\quad
\delta_c=-\delta_\theta\frac{c_a}{c_a+c_c+\varepsilon}.
$$

$$
R(\phi)=
\begin{bmatrix}
\cos\phi&-\sin\phi\\
\sin\phi&\cos\phi
\end{bmatrix},\quad
p_a\leftarrow p_k+R(\delta_a)v_1,\quad
p_c\leftarrow p_k+R(\delta_c)v_2.
$$

#### Windowed Optimization Branch (Also Implemented)

In non-`ekf_only` mode, the repo optimizes a time window $u_{1:T}$ via LM/GN:

$$
\min_{u}\ \|r(u)\|_2^2.
$$

Residual components in code:

$$
r_{\text{meas}}=\sqrt{w}\odot(u-\hat{u}),
$$

$$
r_{\text{len}}=\sqrt{\min(w_a,w_b)}\left(\|u_a-u_b\|_2-\ell_{ab}\right)\sqrt{\lambda_{\text{len}}},
$$

$$
e_\theta=\operatorname{wrap}(\theta-\theta_{\text{ref}}),\quad
g=\sigma\!\left(\frac{|e_\theta|-\theta_{\text{tol}}}{s_{\text{gate}}}\right),\quad
\rho(e_\theta)=
\begin{cases}
\frac{1}{2}e_\theta^2, & |e_\theta|\le\kappa\\
\kappa\left(|e_\theta|-\frac{1}{2}\kappa\right), & |e_\theta|>\kappa
\end{cases},
$$

$$
r_{\text{ang}}=\sqrt{g\,w_\theta}\,\sqrt{\rho(e_\theta)}\,\sqrt{\lambda_{\text{ang}}},
$$

$$
r_{\text{temp}}=\sqrt{\min(w_t,w_{t-1})}\odot(u_t-u_{t-1})\sqrt{\lambda_{\text{temp}}}.
$$

LM update solved each iteration:

$$
\left(J^\top J + \lambda_{\text{LM}} I\right)\Delta = -J^\top r,\qquad
u \leftarrow u+\Delta.
$$

Current project config uses EKF fast path by default (`ekf_only: true`) with the length and angle correction stages enabled.
