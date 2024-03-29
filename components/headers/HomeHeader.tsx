import { NextPage } from "next";
import { useCallback } from "react";
import styled from "styled-components";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const HomeHeader:NextPage = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
    }, []);

  return (
    <HomeHeaderSection>
      <section id="ParticlesBackground">
           <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className = "CanvasWrapper"

            options={{
                background: {
                    color: "transparent",
                },
                fpsLimit: 60,
                fullScreen: false,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "repulse",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 150,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "rgba(0, 112, 243, 1)",
                    },
                    links: {
                        color: "rgba(0, 174, 255, 0.5)",
                        distance: 250,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: true,
                        speed: 2,
                        bounce: false,
                        straight: false,
                        direction: "none",
                    },
                    decay: {
                      enable: true,
                      value: 0.05,
                    },
                    gravity: {
                      enable: true,
                      maxSpeed: 2
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                },
                detectRetina: true,
            }}
        />
      </section>
      <div id="HigherContent" className="HigherContent">
        <h1 className="HigherContent-header">
          <span className="HigherContent-header-big">Hello! I&apos;m Oskar Dąbrowski</span><br />
          <span  className="HigherContent-header-small"><span className="colored">Full-Stack</span> Developer</span>
        </h1>
      </div>
    </HomeHeaderSection>
  )
}

export default HomeHeader;

const HomeHeaderSection = styled.header`
width: 100%;
height: 100vh;
max-height: 100vh;
margin: 0px;
padding: 0px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
overflow: hidden;

#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.HigherContent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  background: transparent;
  color: white;
  font-family: 'Arimo';
  display: flex;
  align-items: center;
  &-header {
    margin-left: 5rem;
    &-big {
      left: -150%;
      margin-bottom: 2rem;
      font-size: 4rem;
      position: relative;
      animation: goRight 3s 1s forwards ease;
    }
    &-small {
      left: -150%;
      position: relative;
      font-size: 3rem;
      margin-left: 2rem;
      animation: goRight 3s 3s forwards ease;
    }
  }
}

#ParticlesBackground {
  /* position: relative; */
  width: 100%;
  height: 100vh;
  /* overflow: hidden; */

  & > #tsparticles {
      overflow: hidden !important;
  }
}

#particles-background, #particles-foreground {
  background: none;
  width: 100%;
  height: 100vh;
}

@keyframes rotate { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);}}

@keyframes fade { 0% { opacity: 1;} 50% { opacity: 0.25;}}

@keyframes fade-in { 0% { opacity: 0;} 100% { opacity: 1;}}

@keyframes goRight {
  0% {
    opacity: 0;
    left: -150%;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    left: 0%;
  }
}

@media(max-width: 62.5em) {
  .HigherContent {
    &-header {
      margin-left: 2rem;
      &-big {
        font-size: 3rem;
      }
      &-small {
        font-size: 2rem;
      }
    }
  }
}

@media(max-width: 43.75em) {
  .HigherContent {
    &-header {
      margin-left: 0rem;
      width: 100%;
      &-big {
        width: 100%;
        display: flex;
        font-size: 2.5rem;
        text-align: center;
        margin: 0;
      }
      &-small {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-left: 0rem;
        font-size: 1.5rem;
        text-align: center;
        & > span {
          margin-right: .5rem;
        }
      }
    }
  }
}

`;