// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed papers and conference publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected research and engineering projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "Study notes and long-form guides.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "projects-event-camera-reinforcement-learning-navigation-on-jackal",
          title: 'Event-Camera Reinforcement Learning Navigation on Jackal',
          description: "Event-driven reinforcement learning for autonomous navigation with neuromorphic vision.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_event_jackal/";
            },},{id: "projects-joint-angle-human-pose-estimation-for-casualty-manipulation",
          title: 'Joint-Angle Human Pose Estimation for Casualty Manipulation',
          description: "Contact-aware 23-DoF human joint-state observer for robot-assisted casualty manipulation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_casperjointpose/";
            },},{id: "projects-ros-2-haptic-teleoperation-data-logger-for-manipulation-learning",
          title: 'ROS 2 Haptic Teleoperation Data Logger for Manipulation Learning',
          description: "ROS 2 teleoperation and experiment logging stack for Geomagic Touch-based arm control.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_teleop_touch3d_logger_ros2/";
            },},{id: "projects-ros-2-gazebo-harmonic-casualty-manipulation-simulation-stack",
          title: 'ROS 2 + Gazebo Harmonic Casualty Manipulation Simulation Stack',
          description: "ROS 2 and Gazebo simulation stack for collaborative human-robot manipulation research.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_caveman_ros2/";
            },},{id: "projects-real-time-human-pose-refinement-with-ekf-and-kinematic-constraints",
          title: 'Real-Time Human Pose Refinement with EKF and Kinematic Constraints',
          description: "Real-time 2D pose refinement with EKF and skeleton constraints for ROS 2 pipelines.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_pose_refiner/";
            },},{id: "projects-diffusion-based-defense-against-adversarial-perception-attacks",
          title: 'Diffusion-Based Defense Against Adversarial Perception Attacks',
          description: "Adversarial image-attack detection and denoising with diffusion models and image-domain Fourier-transform frequency analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_diffusion_defender/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%67%61%75%64%65%6C@%73%74%65%76%65%6E%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gaudelbijay", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
