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
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-event-camera-reinforcement-learning-navigation-on-jackal",
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
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
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
