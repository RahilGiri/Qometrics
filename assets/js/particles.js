// Initializes tsparticles background
document.addEventListener('DOMContentLoaded', () => {
  if (typeof tsParticles !== 'undefined') {
    tsParticles.load("tsparticles", {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 30, // Optimized for performance
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 200,
            links: {
              opacity: 0.5,
              color: "#00FF66"
            }
          },
        },
      },
      particles: {
        color: {
          value: "#00FF66",
        },
        links: {
          color: "#00FF66",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 40, // Reduced particle count
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: false, // Disabled retina scaling for performance
    });
  }
});
