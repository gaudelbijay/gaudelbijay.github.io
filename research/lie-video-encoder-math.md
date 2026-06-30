# Lie Group Video Encoder: Mathematical Foundations

**Draft — Bijay Gaudel, June 2026**

---

## 0. Overview

We construct a video encoder whose internal representations are elements of a Lie group, whose composition law is the group multiplication (approximated via the Baker–Campbell–Hausdorff formula), and whose output features are irreducible representation coefficients given by the Peter–Weyl theorem. The attention mechanism that performs temporal composition is a degree-2 poly-attention whose kernel naturally computes the first BCH correction — the commutator — when operating on Lie algebra-valued tokens.

The encoder is **equivariant**: if the video undergoes a rigid planar motion $h \in \mathrm{SE}(2)$, the output features transform predictably under the corresponding representation of $h$, without any need to see that transformation during training.

We develop the theory first for $G = \mathrm{SE}(2)$ (planar rigid motions), which has a 3-dimensional Lie algebra and a single non-trivial commutator relation. The extension to $\mathrm{SE}(3)$ follows the same pattern with a 6-dimensional algebra.

---

## 1. The Lie Group SE(2)

### 1.1 Definition

$\mathrm{SE}(2)$ is the group of orientation-preserving rigid motions of the plane: rotations and translations. Every element is uniquely described by an angle $\theta \in [0, 2\pi)$ and a displacement $(t_x, t_y) \in \mathbb{R}^2$.

We represent group elements as $3 \times 3$ homogeneous transformation matrices:

$$g(\theta, t_x, t_y) = \begin{pmatrix} \cos\theta & -\sin\theta & t_x \\ \sin\theta & \cos\theta & t_y \\ 0 & 0 & 1 \end{pmatrix}$$

Group multiplication (composition of motions) is matrix multiplication:

$$g_1 \cdot g_2 = g(\theta_1 + \theta_2,\; t_{x,1} + \cos\theta_1 \, t_{x,2} - \sin\theta_1 \, t_{y,2},\; t_{y,1} + \sin\theta_1 \, t_{x,2} + \cos\theta_1 \, t_{y,2})$$

The group acts on points $p = (x, y, 1)^T \in \mathbb{R}^2$ (in homogeneous coordinates) via $p \mapsto g \cdot p$.

### 1.2 The Lie Algebra $\mathfrak{se}(2)$

The Lie algebra $\mathfrak{se}(2) = T_e \mathrm{SE}(2)$ is the tangent space at the identity. It consists of $3 \times 3$ matrices of the form:

$$X(\omega, v_x, v_y) = \begin{pmatrix} 0 & -\omega & v_x \\ \omega & 0 & v_y \\ 0 & 0 & 0 \end{pmatrix}$$

with $(\omega, v_x, v_y) \in \mathbb{R}^3$. We identify $\mathfrak{se}(2) \cong \mathbb{R}^3$ via this coordinate triple: $\omega$ is the angular velocity and $(v_x, v_y)$ is the translational velocity.

The standard basis generators are:

$$E_\omega = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad E_x = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad E_y = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$

so $X = \omega E_\omega + v_x E_x + v_y E_y$.

### 1.3 Lie Bracket (Commutator)

The Lie bracket on $\mathfrak{se}(2)$ is the matrix commutator $[A, B] = AB - BA$. Computing directly on the basis:

$$[E_\omega, E_x] = E_\omega E_x - E_x E_\omega = E_y$$
$$[E_\omega, E_y] = E_\omega E_y - E_y E_\omega = -E_x$$
$$[E_x, E_y] = 0$$

In coordinates, for $X_1 = (\omega_1, v_{x,1}, v_{y,1})$ and $X_2 = (\omega_2, v_{x,2}, v_{y,2})$:

$$[X_1, X_2] = (\omega_1 E_\omega + v_{x,1} E_x + v_{y,1} E_y)(\omega_2 E_\omega + v_{x,2} E_x + v_{y,2} E_y) - \text{(reversed)}$$

Using the bracket table:

$$[X_1, X_2] = (\omega_1 v_{x,2} - \omega_2 v_{x,1}) [E_\omega, E_x] + (\omega_1 v_{y,2} - \omega_2 v_{y,1}) [E_\omega, E_y]$$

$$= (\omega_1 v_{x,2} - \omega_2 v_{x,1}) E_y - (\omega_1 v_{y,2} - \omega_2 v_{y,1}) E_x$$

So in $\mathbb{R}^3$ coordinates:

$$[X_1, X_2] = \begin{pmatrix} 0 \\ -(\omega_1 v_{y,2} - \omega_2 v_{y,1}) \\ \omega_1 v_{x,2} - \omega_2 v_{x,1} \end{pmatrix}$$

The commutator has zero $\omega$-component: pure rotations commute with each other, and only rotation-translation cross terms are non-zero.

### 1.4 The Exponential Map

The exponential map $\exp: \mathfrak{se}(2) \to \mathrm{SE}(2)$ is the matrix exponential. For $X = (\omega, v_x, v_y)$:

**Case $\omega = 0$ (pure translation):** $\exp(X) = I + X$, giving $g(0, v_x, v_y)$.

**Case $\omega \neq 0$:** Using the closed form for $e^{tX}$ with $X^3 = -\omega^2 X$ (which holds for $\mathfrak{se}(2)$):

$$\exp(X) = I + \frac{\sin\omega}{\omega} X + \frac{1 - \cos\omega}{\omega^2} X^2$$

Expanding:

$$\exp(X) = \begin{pmatrix} \cos\omega & -\sin\omega & \frac{\sin\omega}{\omega} v_x - \frac{1-\cos\omega}{\omega} v_y \\ \sin\omega & \cos\omega & \frac{1-\cos\omega}{\omega} v_x + \frac{\sin\omega}{\omega} v_y \\ 0 & 0 & 1 \end{pmatrix}$$

Define the **Jacobian** $J(\omega) \in \mathbb{R}^{2 \times 2}$:

$$J(\omega) = \frac{1}{\omega}\begin{pmatrix} \sin\omega & -(1-\cos\omega) \\ 1-\cos\omega & \sin\omega \end{pmatrix}$$

Then the translational part of $\exp(X)$ is $J(\omega)(v_x, v_y)^T$. The logarithm (inverse map) recovers:

$$\omega = \arctan\!\left(\frac{R_{21}}{R_{11}}\right), \quad \begin{pmatrix} v_x \\ v_y \end{pmatrix} = J(\omega)^{-1} \begin{pmatrix} t_x \\ t_y \end{pmatrix}$$

where $J(\omega)^{-1} = \frac{\omega/2}{\tan(\omega/2)}\begin{pmatrix} 1 & \cot(\omega/2) \\ -\cot(\omega/2) & 1 \end{pmatrix}^{-1}$ (well-defined for $|\omega| < \pi$).

### 1.5 The BCH Formula

The Baker–Campbell–Hausdorff formula gives the composition of group elements in Lie algebra coordinates. Given $X_1, X_2 \in \mathfrak{se}(2)$:

$$\log(\exp(X_1) \cdot \exp(X_2)) = X_1 + X_2 + \frac{1}{2}[X_1, X_2] + \frac{1}{12}\bigl([X_1,[X_1,X_2]] + [X_2,[X_2,X_1]]\bigr) + \cdots$$

For $\mathfrak{se}(2)$, the BCH series **terminates at second order** for the rotation component (since all brackets of three elements involving two rotation generators vanish), but continues for the translation components. To second order:

$$\log(\exp(X_1) \exp(X_2)) \approx \underbrace{X_1 + X_2}_{\text{linear}} + \underbrace{\frac{1}{2}[X_1, X_2]}_{\text{quadratic interaction}}$$

In coordinates, writing $X_i = (\omega_i, v_{x,i}, v_{y,i})$:

$$\omega_\text{BCH} = \omega_1 + \omega_2$$

$$v_{x,\text{BCH}} = v_{x,1} + v_{x,2} - \tfrac{1}{2}(\omega_1 v_{y,2} - \omega_2 v_{y,1})$$

$$v_{y,\text{BCH}} = v_{y,1} + v_{y,2} + \tfrac{1}{2}(\omega_1 v_{x,2} - \omega_2 v_{x,1})$$

The correction terms $\frac{1}{2}(\omega_1 v_{y,2} - \omega_2 v_{y,1})$ and $\frac{1}{2}(\omega_1 v_{x,2} - \omega_2 v_{x,1})$ are the rotation-translation coupling: when you rotate and then translate, the effective translation is not simply the sum, but is rotated by the accumulated angle. This is the essential geometric fact that a naive sum of velocities misses.

---

## 2. Frame Embedding into $\mathfrak{se}(2)$

### 2.1 Global Motion Embedding via Optical Flow

Given consecutive frames $I_t, I_{t+1}: \Omega \to \mathbb{R}^C$ with $\Omega \subset \mathbb{R}^2$, let $F_t: \Omega \to \mathbb{R}^2$ denote the optical flow field (estimated by any standard method: RAFT, FlowFormer, etc.).

Under a rigid planar motion $X = (\omega, v_x, v_y) \in \mathfrak{se}(2)$, a point $p = (x, y)^T$ moves to first order as:

$$\dot{p} = \begin{pmatrix} -\omega y + v_x \\ \omega x + v_y \end{pmatrix}$$

We fit $X_t$ to the observed flow field $F_t$ by least squares. Define the design matrix row at pixel $p = (x, y)$:

$$A(p) = \begin{pmatrix} -y & 1 & 0 \\ x & 0 & 1 \end{pmatrix} \in \mathbb{R}^{2 \times 3}$$

and the coordinate vector $\xi = (\omega, v_x, v_y)^T \in \mathbb{R}^3$. The linear model for flow at $p$ is $A(p)\xi$. The least-squares solution over all pixels:

$$\xi_t^* = \left(\sum_{p \in \Omega} A(p)^T A(p)\right)^{-1} \left(\sum_{p \in \Omega} A(p)^T F_t(p)\right)$$

Expanding $\sum_p A(p)^T A(p)$:

$$\mathcal{I} = \begin{pmatrix} \sum(x^2 + y^2) & -\sum y & \sum x \\ -\sum y & |\Omega| & 0 \\ \sum x & 0 & |\Omega| \end{pmatrix}$$

This matrix $\mathcal{I}$ is the **spatial information matrix** of the image domain, determined solely by the pixel grid geometry and is therefore precomputable. The optimal Lie algebra element is:

$$X_t^* = \mathcal{I}^{-1} \sum_{p \in \Omega} A(p)^T F_t(p) \in \mathfrak{se}(2) \cong \mathbb{R}^3$$

This gives one $\mathbb{R}^3$ vector per frame transition, capturing the dominant rigid motion.

### 2.2 Learned Patch Embedding

Global motion is too coarse for rich video understanding. We also embed each frame into a sequence of **local tokens** with Lie-algebra-valued features. Divide $I_t$ into $N$ spatial patches $\{p_i^t\}_{i=1}^N$. A learned encoder $\phi_\theta: \mathbb{R}^{P \times P \times C} \to \mathfrak{se}(2)^K$ maps each patch to $K$ Lie algebra elements, where $K$ is the number of feature "channels" in the Lie algebra space.

More precisely, for patch $p_i^t$:

$$\mathbf{X}_i^t = \phi_\theta(p_i^t) \in \mathfrak{se}(2)^K \cong \mathbb{R}^{3K}$$

Each column $X_{i,k}^t \in \mathfrak{se}(2) \cong \mathbb{R}^3$ is a "feature velocity" in the $k$-th channel. The full token set at time $t$ is $\mathbf{X}^t = \{X_{i,k}^t\}_{i,k}$.

---

## 3. Poly-Attention as BCH Composer

### 3.1 Standard Self-Attention Cannot Compute Commutators

Standard self-attention with queries $Q \in \mathbb{R}^{N \times d}$, keys $K \in \mathbb{R}^{N \times d}$, values $V \in \mathbb{R}^{N \times d}$:

$$\text{Attn}(Q, K, V)_i = \sum_j \frac{\exp(Q_i^T K_j / \sqrt{d})}{\sum_k \exp(Q_i^T K_k / \sqrt{d})} V_j$$

The attention weight between tokens $i$ and $j$ depends only on the **inner product** $Q_i^T K_j$ — a degree-1 polynomial in each of $Q_i$ and $K_j$. The BCH correction $[X_i, X_j]$ is a **degree-1 polynomial in each token** (linear in $X_i$, linear in $X_j$), but it is **bilinear** — it cannot be decomposed as a function of $X_i$ alone plus a function of $X_j$ alone. Standard attention cannot compute it.

**Formally:** For the commutator $[X_1, X_2]_\alpha = \sum_{\beta\gamma} c^\alpha_{\beta\gamma} X_1^\beta X_2^\gamma$ (structure constants), this is a sum over all pairs of components. The standard attention score $Q^T K = \sum_\alpha X_1^\alpha X_2^\alpha$ only accesses the **diagonal** $\beta = \gamma$. The commutator accesses the full tensor $X_1 \otimes X_2$.

### 3.2 Degree-2 Poly-Attention

Following Chakrabarti, Pitassi, Alman (arXiv 2602.02422), a **degree-2 poly-attention** is an attention mechanism whose scoring function is a degree-2 polynomial in the token features. Define:

$$s_{ij}^{(2)} = \sum_{\alpha,\beta} W_{\alpha\beta} X_i^\alpha X_j^\beta$$

where $W \in \mathbb{R}^{3 \times 3}$ is a learned weight matrix. This is an arbitrary bilinear form on $\mathfrak{se}(2) \times \mathfrak{se}(2)$.

Any bilinear form decomposes into symmetric and antisymmetric parts:

$$s_{ij}^{(2)} = X_i^T W_s X_j + X_i^T W_a X_j$$

where $W_s = (W + W^T)/2$ and $W_a = (W - W^T)/2$.

The **commutator** $[X_i, X_j]$ in $\mathfrak{se}(2)$ is exactly the antisymmetric part of the bilinear form defined by the structure constants:

$$[X_i, X_j]^\alpha = \sum_{\beta\gamma} c^\alpha_{\beta\gamma} X_i^\beta X_j^\gamma, \quad c^\alpha_{\beta\gamma} = -c^\alpha_{\gamma\beta}$$

Therefore: **a degree-2 poly-attention with learned antisymmetric weight $W_a$ can compute the commutator $[X_i, X_j]$ for any choice of $W_a$ matching the structure constants $c^\alpha_{\cdot\cdot}$.**

### 3.3 The BCH Attention Layer

Define a **BCH attention layer** operating on a sequence of Lie-algebra-valued tokens $(X_1, \ldots, X_T)$ with $X_t \in \mathfrak{se}(2)^K$.

For each output position $i$, the layer computes:

$$\tilde{X}_i = \sum_j \alpha_{ij}^{(1)} X_j + \sum_{j,k} \alpha_{ijk}^{(2)} [X_j, X_k]$$

where:
- $\alpha_{ij}^{(1)} \in \mathbb{R}$ are degree-1 attention weights (standard attention scores, softmax-normalized)
- $\alpha_{ijk}^{(2)} \in \mathbb{R}$ are degree-2 attention weights over ordered pairs $(j, k)$

The degree-1 weights handle the linear aggregation $\sum_j X_j$ in BCH. The degree-2 weights handle the $\frac{1}{2}[X_j, X_k]$ correction.

**Explicit scoring for degree-2 weights:**

$$s_{ijk}^{(2)} = \langle W_q^{(2)} X_i, \; W_{k1}^{(2)} X_j \otimes W_{k2}^{(2)} X_k \rangle$$

where the angular bracket contracts the query against the outer product of the two keys. This is the poly-attention construction from the paper: the "attention polynomial" in $X_j, X_k$ with query $X_i$ as the "attention center."

### 3.4 Tree-Attention Structure

The key result of Chakrabarti et al. is that **tree-attention** — poly-attention whose dependency graph is a tree — runs in $O(T^2)$ time (same as standard attention) while being significantly more expressive.

For the BCH application: form a binary tree over the token sequence. At each leaf is a single token $X_t$. At each internal node, compute:

$$X_\text{node} = X_L + X_R + \frac{1}{2}[X_L, X_R]$$

where $X_L, X_R$ are the left and right children. This is exactly the **second-order BCH truncation** applied recursively. The tree computes:

$$X_\text{root} \approx \log\bigl(\exp(X_1) \cdot \exp(X_2) \cdots \exp(X_T)\bigr)$$

up to third-order BCH errors. The tree structure gives $O(T \log T)$ total commutator computations, and with learned weights to modulate contributions at each level, the model can adapt to how strongly BCH corrections matter at each temporal scale.

**Remark:** For $\mathfrak{se}(2)$, the degree-3 BCH terms involve double commutators $[X, [X, Y]]$ which have the form:

$$[X, [X, Y]]^\alpha = \sum_{\beta\gamma\delta} c^\alpha_{\beta\mu} c^\mu_{\gamma\delta} X^\beta X^\gamma Y^\delta$$

These are degree-2 in $X$ and degree-1 in $Y$ — a degree-3 poly-attention term. Adding a degree-3 layer below the degree-2 layer in the tree provides the third-order correction, at $O(T^3)$ cost if computed naively (but tractable for short sequences with moderate $T$).

---

## 4. Peter–Weyl Decomposition as Feature Basis

### 4.1 The Peter–Weyl Theorem

Let $G$ be a compact Lie group (or more generally, a unimodular locally compact group). The **Peter–Weyl theorem** states that the Hilbert space $L^2(G)$ (square-integrable functions on $G$) decomposes as an orthogonal direct sum over irreducible unitary representations (irreps):

$$L^2(G) \cong \bigoplus_{\pi \in \hat{G}} V_\pi \otimes V_\pi^*$$

where $\hat{G}$ is the set of equivalence classes of irreps and $V_\pi$ is the representation space of $\pi$. The matrix coefficient functions $\pi_{mn}(g) = \langle e_m, \pi(g) e_n \rangle$ form an orthogonal basis for $L^2(G)$, with:

$$\langle \pi_{mn}, \rho_{kl} \rangle_{L^2(G)} = \frac{1}{\dim \pi} \delta_{\pi\rho} \delta_{mk} \delta_{nl}$$

This means: any function $f: G \to \mathbb{R}$ (or $\mathbb{C}$) has a unique expansion $f(g) = \sum_{\pi \in \hat{G}} \sum_{m,n} \hat{f}_{mn}^\pi \cdot \pi_{mn}(g)$, where the **Fourier coefficients** $\hat{f}_{mn}^\pi = \dim\pi \int_G f(g) \overline{\pi_{mn}(g)} \, dg$.

### 4.2 Irreducible Representations of SE(2)

$\mathrm{SE}(2) = \mathrm{SO}(2) \ltimes \mathbb{R}^2$ is non-compact, so the Peter–Weyl theorem applies in its non-compact form (Pontryagin duality + Mackey's theory of induced representations).

The irreps of $\mathrm{SE}(2)$ are labeled by a momentum magnitude $p \geq 0$:

- **$p = 0$:** One-dimensional representations $\pi_n(g(\theta, t)) = e^{in\theta}$ for $n \in \mathbb{Z}$ (characters of $\mathrm{SO}(2)$).

- **$p > 0$:** Infinite-dimensional representations on $L^2(\mathrm{SO}(2))$ (functions on the circle). The representation $\pi^p$ is:

$$(\pi^p(g(\theta, t))\psi)(\phi) = e^{i p (t_x \cos\phi + t_y \sin\phi)} \psi(\phi - \theta)$$

The matrix coefficients of $\pi^p$ with respect to the Fourier basis $e_n(\phi) = e^{in\phi}$ of $L^2(\mathrm{SO}(2))$ are:

$$\pi^p_{mn}(g(\theta, \mathbf{t})) = e^{-in\theta} e^{i(m-n)\cdot ?} \cdot J_{m-n}(p|\mathbf{t}|) e^{i(m-n)\arg(\mathbf{t})}$$

where $J_k$ is the Bessel function of the first kind of order $k$. (These are the **Bessel function matrix elements** of SE(2).)

**For a compact subgroup:** If we restrict to $\mathrm{SO}(2) \subset \mathrm{SE}(2)$ (pure rotations, zero translation), the irreps reduce to Fourier modes $e^{in\theta}$ for $n \in \mathbb{Z}$, which is exactly the **discrete Fourier transform**.

### 4.3 Peter–Weyl Features for the Encoder

Given the output Lie algebra element $\hat{X} \in \mathfrak{se}(2)$ from the BCH attention tree, compute the corresponding group element $\hat{g} = \exp(\hat{X}) \in \mathrm{SE}(2)$.

The **Peter–Weyl features** are the matrix coefficients of $\hat{g}$ evaluated in a finite set of irreps:

$$\Phi(\hat{g}) = \bigl\{ \pi^p_{mn}(\hat{g}) \bigr\}_{p \in \mathcal{P},\; m,n \in \mathcal{N}}$$

where $\mathcal{P} \subset \mathbb{R}^+$ and $\mathcal{N} \subset \mathbb{Z}$ are finite truncation sets chosen as hyperparameters.

In practice for the rotation component ($t = 0$, $\hat{g} = g(\hat\theta, 0, 0)$), these reduce to:

$$\Phi_n(\hat{g}) = e^{in\hat\theta} = \cos(n\hat\theta) + i\sin(n\hat\theta)$$

— exactly the Fourier features of the accumulated rotation.

For the full SE(2) case, the features include cross-terms between rotation and translation via Bessel functions:

$$\Phi_{mn}^p(\hat{g}) = J_{m-n}(p|\hat{\mathbf{t}}|) \cdot e^{-in\hat\theta} \cdot e^{i(m-n)\arg(\hat{\mathbf{t}})}$$

These features are **equivariant**: if $\hat{g}$ transforms as $\hat{g} \mapsto h \cdot \hat{g}$ under a group action $h \in \mathrm{SE}(2)$, then $\pi^p(h\hat{g}) = \pi^p(h) \pi^p(\hat{g})$, i.e., the feature vector transforms linearly by the representation matrix $\pi^p(h)$.

---

## 5. Full Architecture

### 5.1 End-to-End Description

Let $\mathcal{V} = (I_0, I_1, \ldots, I_T)$ be an input video with $T+1$ frames.

**Step 1 — Frame embedding.** Apply the patch encoder $\phi_\theta$ to each frame, producing Lie algebra tokens:

$$\mathbf{X}^t = \phi_\theta(I_t) \in \mathfrak{se}(2)^{N \times K}, \quad t = 0, \ldots, T$$

where $N$ = number of spatial patches, $K$ = number of feature channels.

**Step 2 — Optical flow integration (optional auxiliary).** Estimate flow $F_t = \mathcal{F}(I_t, I_{t+1})$ and fit global motion $X_t^* \in \mathfrak{se}(2)$ via the least-squares formula in §2.1. This provides a supervision signal: the learned token features should be consistent with the observed rigid motion between frames.

**Step 3 — BCH attention tree.** Apply $L$ layers of the BCH attention mechanism (§3.3–3.4) along the temporal dimension. Each layer computes:

$$\mathbf{X}^{t,(l+1)} = \text{BCHAttn}^{(l)}\!\left(\mathbf{X}^{t,(l)},\; \mathbf{X}^{t+1,(l)}, \ldots, \mathbf{X}^{T,(l)}\right)$$

with learnable weights $W_s^{(l)}, W_a^{(l)}, W_q^{(l)}$ at each layer. The antisymmetric weight $W_a^{(l)}$ is initialized to the $\mathfrak{se}(2)$ structure constants but is free to deviate during training.

**Step 4 — Peter–Weyl projection.** Map the output $\hat{X} \in \mathfrak{se}(2)^{N \times K}$ through the exponential map, then evaluate Peter–Weyl features:

$$\hat{g}_{i,k} = \exp(\hat{X}_{i,k}), \quad z_{i,k} = \Phi(\hat{g}_{i,k})$$

The feature vector $z \in \mathbb{C}^{N \times K \times |\mathcal{P}| \times |\mathcal{N}|^2}$ is the final representation.

**Step 5 — Task head.** A linear head $W_\text{head}$ maps $z$ (flattened and concatenated) to the task output (classification logits, regression targets, etc.).

### 5.2 Parameter Count

- Patch encoder $\phi_\theta$: standard ViT patch embed, $\sim P^2 C \cdot 3K$ parameters
- BCH attention: per layer, $3 \times 3$ symmetric weight $W_s$ (6 params) + antisymmetric $W_a$ (3 params) + query projection $W_q$ ($3 \times 3 = 9$ params) — total $\sim 18LK^2$ parameters
- Peter–Weyl projection: fixed (no parameters), $|\mathcal{P}| \times |\mathcal{N}|^2$ features per token
- Task head: linear, $N \times K \times |\mathcal{P}| \times |\mathcal{N}|^2 \times (\text{output dim})$ parameters

The BCH attention is extremely parameter-efficient: the entire temporal composition module has $O(LK^2)$ parameters, far fewer than a standard transformer.

---

## 6. Equivariance

### 6.1 Definition

The encoder $\Phi: \mathcal{V} \mapsto z$ is **$\mathrm{SE}(2)$-equivariant** if for every group element $h \in \mathrm{SE}(2)$:

$$\Phi(h \cdot \mathcal{V}) = \rho(h) \cdot \Phi(\mathcal{V})$$

where $h \cdot \mathcal{V}$ is the video transformed by $h$ (each frame $I_t$ replaced by $I_t \circ h^{-1}$, i.e., the camera moves by $h$), and $\rho(h)$ is a representation of $h$ acting on the feature space.

### 6.2 Equivariance of Each Stage

**Patch embedding equivariance.** If $\phi_\theta$ is built from $\mathrm{SE}(2)$-equivariant convolutions (e.g., using the e2cnn library), then $h \cdot I_t \mapsto \text{Ad}(h) X_{i,k}^t$, where $\text{Ad}(h): \mathfrak{se}(2) \to \mathfrak{se}(2)$ is the adjoint representation.

The adjoint representation of $g(\theta, t_x, t_y)$ on $X = (\omega, v_x, v_y) \in \mathfrak{se}(2)$ is:

$$\text{Ad}(g) X = \begin{pmatrix} 1 & 0 & 0 \\ t_y & \cos\theta & -\sin\theta \\ -t_x & \sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} \omega \\ v_x \\ v_y \end{pmatrix}$$

**BCH attention equivariance.** Since the commutator is $\text{Ad}$-equivariant — $[\text{Ad}(h) X, \text{Ad}(h) Y] = \text{Ad}(h)[X, Y]$ — the BCH formula transforms covariantly:

$$\log(\exp(\text{Ad}(h) X_1) \exp(\text{Ad}(h) X_2)) = \text{Ad}(h) \log(\exp(X_1)\exp(X_2))$$

Therefore, the BCH attention tree preserves equivariance at every stage.

**Exponential map equivariance.** The exponential map intertwines the adjoint action:

$$\exp(\text{Ad}(h) X) = h \cdot \exp(X) \cdot h^{-1}$$

**Peter–Weyl equivariance.** For irrep $\pi^p$:

$$\pi^p(\exp(\text{Ad}(h) X)) = \pi^p(h \exp(X) h^{-1}) = \pi^p(h) \pi^p(\exp(X)) \pi^p(h)^{-1}$$

The feature matrix transforms by conjugation in representation space — a linear action. Taking all matrix coefficients, the full feature vector $z$ transforms under the representation $\pi^p \otimes (\pi^p)^*$, which is itself a (reducible) representation of $\mathrm{SE}(2)$.

**Conclusion:** The full encoder is $\mathrm{SE}(2)$-equivariant end-to-end, provided the patch encoder $\phi_\theta$ is equivariant.

---

## 7. Connection to Poly-Attention Theory

The BCH attention layer defined in §3.3 is a special case of the degree-2 poly-attention of Chakrabarti et al. (2602.02422). Specifically:

The "attention polynomial" of the BCH layer is:

$$P(X_i; X_1, \ldots, X_T) = \sum_j \alpha_{ij} X_j + \sum_{jk} \alpha_{ijk} [X_j, X_k]$$

This is a degree-2 polynomial in the token variables, where the commutator $[X_j, X_k]$ is the antisymmetric bilinear term. In the language of the paper:

- The degree-1 term gives the standard attention component
- The degree-2 antisymmetric term gives the BCH correction
- The tree structure (§3.4) corresponds to the "tree-attention" subclass, which the paper proves runs in $O(T^2)$ time with "r-fold composition" expressiveness

The expressiveness result is directly relevant: "r-fold function composition" in the paper corresponds to composing $r$ Lie group elements in the BCH tree, i.e., computing $\log(e^{X_1} \cdots e^{X_r})$ to second order. The fact that tree-attention can perform r-fold composition is exactly the guarantee we need for temporal aggregation across $T$ frames.

---

## 8. Open Questions and Next Steps

1. **SE(3) generalization.** $\mathfrak{se}(3)$ is 6-dimensional with structure constants from $\mathfrak{so}(3)$ cross-coupling with $\mathbb{R}^3$. The BCH series does not terminate and higher-order terms are more significant for large rotations. What truncation order is needed for video?

2. **Non-rigid motion.** Real video contains non-rigid deformation (human bodies, cloth). Can we use an infinite-dimensional diffeomorphism group (SDiff, as in Arnold's fluid dynamics) as the feature space? The Lie algebra would then be divergence-free vector fields, and the BCH series involves vorticity commutators.

3. **Learnable structure constants.** The commutator $[X_j, X_k]$ uses the fixed structure constants of $\mathfrak{se}(2)$. What if we allow the antisymmetric weight $W_a$ in degree-2 attention to deviate from the structure constants? The model learns an "effective Lie bracket" adapted to the data distribution — a data-driven deformation of the group law.

4. **Discrete vs. continuous irreps.** The Peter–Weyl features use Bessel functions $J_k(p|\mathbf{t}|)$ which require choosing a discrete set of momenta $p \in \mathcal{P}$. How should $\mathcal{P}$ be chosen, and can it be learned?

5. **Connecting to VideoMAE / TimeSformer.** Can we initialize the BCH attention weights from a pretrained standard video transformer and fine-tune to impose Lie structure? This would test whether the Lie structure adds value on top of what standard attention already learns.

---

*End of draft. Version 0.1 — to be expanded with experiments.*
