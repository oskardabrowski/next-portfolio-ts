import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback } from "react";



const ProjectsHeader:NextPage = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: any) => {
    }, []);
  return (
    <ProjectsHead>
        <h1 className="ProjectsHead">Discover my projects<span className="colored">!</span></h1>
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
                  detectsOn: "canvas",
                  events: {
                    onHover: {
                      enable: true,
                      mode: "bubble"
                    },
                    resize: true
                  },
                  modes: {
                    bubble: {
                      distance: 100,
                      duration: 2,
                      opacity: 1,
                      size: 10
                    }
                  }
                },
                particles: {
                  color: {
                    value: "#0ff"
                  },
                  links: {
                    blink: false,
                    color: "transparent",
                    consent: false,
                    distance: 40,
                    enable: true,
                    opacity: 0.3,
                    width: 0.5
                  },
                  move: {
                    attract: {
                      enable: false,
                      rotate: {
                        x: 600,
                        y: 1200
                      }
                    },
                    bounce: false,
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 1,
                    straight: false
                  },
                  decay: {
                    enable: true,
                    value: 0.05,
                  },
                  number: {
                    density: {
                      enable: false,
                      area: 2000
                    },
                    limit: 0,
                    value: 400
                  },
                  opacity: {
                    animation: {
                      enable: false,
                      minimumValue: 0.05,
                      speed: 2,
                      sync: false
                    },
                    random: false,
                    value: 0.5
                  },
                  shape: {
                    type: "circle"
                  },
                  size: {
                    animation: {
                      enable: false,
                      minimumValue: 0.1,
                      speed: 40,
                      sync: false
                    },
                    random: false,
                    value: 0.5
                  }
                },
                detectRetina: false,
            }}
        />
      </section>
    </ProjectsHead>
  )
}

const ProjectsHead = styled.header`
width: 100%;
height: 50vh;
color: white;
font-family: 'Arimo';

& > img {
    opacity: .5;
}

.ParticlesBackground {
  width: 100%;
  height: 100vh;
}

.ProjectsHead {
  font-size: 3rem;
  position: absolute;
  top: 10rem;
  left: 10rem;
  z-index: 10000;
}

canvas {
  display: block;
  vertical-align: bottom;
}
#tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

.github {
  bottom: 10px;
  right: 10px;
  position: fixed;
  border-radius: 10px;
  background: #fff;
  padding: 0 12px 6px 12px;
  border: 1px solid #000;
}

.github a:hover,
.github a:link,
.github a:visited,
.github a:active {
  color: #000;
  text-decoration: none;
}

.github img {
  height: 30px;
}

.github #gh-project {
  font-size: 20px;
  padding-left: 5px;
  font-weight: bold;
  vertical-align: bottom;
}

#ParticlesBackground {
  position: fixed;

  width: 100%;
  height: 100vh;
  /* overflow: hidden; */

  & > #tsparticles {
      overflow: hidden !important;
  }
}

@media(max-width: 43.75em) {
  height: 30vh;
  .ProjectsHead {
    font-size: 2rem;
    top: 5rem;
    left: 5rem;
  }
}
@media(max-width: 31.25em) {
  .ProjectsHead {
    font-size: 1.5rem;
    top: 6rem;
    left: 1rem;
  }
}
`;

export default ProjectsHeader;