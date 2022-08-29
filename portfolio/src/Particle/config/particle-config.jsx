const partcles = {
  background: {
    color: {
      value: "#277BC0",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#0b3354",
    },
    links: {
      color: "#0b3354",
      distance: 200,
      enable: true,
      opacity: 0.75,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 900,
      },
      value: 80,
    },
    opacity: {
      value: 0.85,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
  },
  detectRetina: true,
};
export default partcles;
