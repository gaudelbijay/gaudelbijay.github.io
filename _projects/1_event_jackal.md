---
layout: page
title: Event-Camera Reinforcement Learning Navigation on Jackal
description: Event-driven reinforcement learning for autonomous navigation with neuromorphic vision.
img: assets/img/event_jackal_model.png
importance: 1
category: work
github: https://github.com/gaudelbijay/event_jackal
---

# Event-Driven Reinforcement Learning for Autonomous Navigation

<div style="display: flex; flex-wrap: wrap; gap: 0.8rem; align-items: flex-start;">
  <div style="flex: 1 1 460px; min-width: 280px;">
    <img
      src="{{ '/assets/img/event_jackal_model.png' | relative_url }}"
      alt="Model diagram"
      style="width: 100%; height: auto; border-radius: 8px;"
    />
  </div>
  <div style="flex: 1 1 460px; min-width: 280px;">
    <img
      src="{{ '/assets/img/event_jackal_perception_model.png' | relative_url }}"
      alt="Perception diagram"
      style="width: 100%; height: auto; border-radius: 8px;"
    />
  </div>
</div>

This repository implements an event driven reinforcement learning framework for autonomous robot navigation using neuromorphic event cameras. Instead of relying on dense frame based sensors or laser scanners, the system processes asynchronous event streams to produce compact Binary Event Maps and learns a self supervised contrastive perception embedding optimized for navigation. The learned representation is used by reinforcement learning policies including MLP, CNN, GRU, and Transformer agents trained with Soft Actor Critic. The approach achieves navigation performance comparable to laser based systems in simulation and successfully transfers to a real Jackal UGV with minimal real world calibration, demonstrating the practicality of event based perception for robotic navigation.

---
## System Platform

- Operating System: Ubuntu 20.04 LTS  
- ROS Distribution: ROS Noetic  
- GPU: 2× NVIDIA GeForce RTX 4500 Ada  
- CPU: AMD Ryzen Threadripper  
- System Memory: 128 GB RAM  

This platform was used for training reinforcement learning agents and self supervised event based perception models.

---

## Dependencies

### ROS Noetic

https://wiki.ros.org/noetic/Installation/Ubuntu

### Clearpath Jackal Simulator (ROS Noetic)

```bash
sudo apt update
sudo apt install -y ros-noetic-jackal-simulator \
                   ros-noetic-jackal-desktop \
                   ros-noetic-jackal-navigation
```
## Install Apptainer

This project uses Apptainer for containerized workflows.

- Official Apptainer documentation: https://apptainer.org/docs/
- Direct installation instructions: https://apptainer.org/docs/admin/main/installation.html

After installing, verify the installation by running:

```bash
apptainer --version
```

## Build the apptainer image
```bash
apptainer build event_nav.sif Singularity.def
```
**Move the built apptainer image `event_nav.sif` to local_buffer directory**

## Install catkin tools if needed:

```bash
sudo apt update
sudo apt install -y python3-catkin-tools
```

## Clone, build and source the workspace
```bash
source /opt/ros/noetic/setup.bash

mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone git@github.com:gaudelbijay/event_jackal.git

cd ~/catkin_ws
catkin build

source ~/catkin_ws/devel/setup.bash
```

## Training

Quick start
```bash
./start.sh
```

Overview
- Training is controlled by YAML config files under `configs/`.  
- Pass the path to the config you want with the `--config` argument to `train.py`. For example you can change the last line of `start.sh` file like:
```bash
python train.py --config configs/generalization/num_world_50.yaml
```


## Testing
```bash
python tester.py
```
**Note:** Configuration files do not need to be specified manually. During training, the active configuration is automatically copied into the `local_buffer` directory, and `tester.py` uses the same stored configuration for evaluation.

## Results

<div style="text-align: center; margin: 0.75rem 0;">
  <img
    src="{{ '/assets/img/event_rl.gif' | relative_url }}"
    alt="Event-camera reinforcement learning navigation rollout"
    style="width: 100%; max-width: 980px; height: auto; border-radius: 8px;"
  />
  <p style="margin-top: 0.45rem;">
    <strong>Figure:</strong> Event-camera RL navigation rollout from the Jackal pipeline.
  </p>
</div>

<div style="text-align: center; margin: 0.75rem 0;">
  <img
    src="{{ '/assets/img/event_jackal_training_metrics.png' | relative_url }}"
    alt="training-result"
    style="width: 100%; max-width: 980px; height: auto; border-radius: 8px;"
  />
</div>

<div style="text-align: center; margin: 0.75rem 0;">
  <img
    src="{{ '/assets/img/event_jackal_table.png' | relative_url }}"
    alt="test-table"
    style="width: 100%; max-width: 680px; height: auto; border-radius: 8px;"
  />
</div>

<div style="text-align: center; margin: 0.75rem 0;">
  <img
    src="{{ '/assets/img/event_jackal_vis.png' | relative_url }}"
    alt="vis"
    style="width: 100%; max-width: 980px; height: auto; border-radius: 8px;"
  />
</div>
