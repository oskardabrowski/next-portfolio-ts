import { NextPage } from "next";
import { useEffect, useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../GlobalContext";

const HomeHeader:NextPage = () => {

  const {isPageLoading} = useContext(GlobalContext);

  useEffect(() => {
    setTimeout(() => {
      let particleBackground1:any = null;
      let particleBackground2:any = null;
      // @ts-ignore
      particleBackground1 = particleground(document.querySelector("#particles-background"), {
      	dotColor: "rgba(0, 193, 30, 0.5)",
      	lineColor: "rgba(80, 255, 108, 0.25)",
      	minSpeedX: 0.075,
      	maxSpeedX: 0.15,
      	minSpeedY: 0.075,
      	maxSpeedY: 0.15,
      	density: 5000, // One particle every n pixels
      	curvedLines: false,
      	proximity: 50, // How close two dots need to be before they join
      	parallaxMultiplier: 20, // Lower the number is more extreme parallax
      	particleRadius: 3, // Dot size
      });
      // @ts-ignore
      particleBackground2 = particleground(document.querySelector("#particles-foreground"), {
      	dotColor: "rgba(0, 112, 243, 1)",
      	lineColor: "rgba(0, 174, 255, 0.5)",
      	minSpeedX: 0.3,
      	maxSpeedX: 0.6,
      	minSpeedY: 0.3,
      	maxSpeedY: 0.6,
      	density: 25000, // One particle every n pixels
      	curvedLines: false,
      	proximity: 250, // How close two dots need to be before they join
      	parallaxMultiplier: 15, // Lower the number is more extreme parallax
      	particleRadius: 5, // Dot size
      });

      return () => {
        particleBackground1.destroy();
        particleBackground2.destroy();
      }
    }, 50);
  }, []);

  // useEffect(() => {
  //   if(isPageLoading) {
  //     // @ts-ignore
  //     particles1.destroy();
  //     // @ts-ignore
  //     particles2.destroy();
  //   }
  // }, [isPageLoading]);


  return (
    <HomeHeaderSection>
      <div id="ParticlesBackground">
        <div id="particles-background" className="vertical-centered-box"></div>
        <div id="particles-foreground" className="vertical-centered-box"></div>
      </div>
      <div id="HigherContent" className="HigherContent">
        <h1>
          <span>Hello! I'm Oskar Dąbrowski</span><br />
          <span><span className="colored">Full-Stack</span> Developer</span>
        </h1>
      </div>
    </HomeHeaderSection>
  )
}

export default HomeHeader;

const HomeHeaderSection = styled.header`
width: 100%;
height: 100vh;
margin: 0px;
padding: 0px;
display: flex;
align-items: center;
justify-content: center;

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
}


#particles-foreground {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}

#ParticlesBackground {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

#particles-background, #particles-foreground {
  background: none;
  width: 100%;
  height: 100vh;
}

/* #particles-background {
  background: mix(#3f3251, #002025, 70%);
  background-image: -moz-linear-gradient(45deg, #3f3251 2%, #002025 100%);
  background-image: -webkit-linear-gradient(45deg, #3f3251 2%, #002025 100%);
  background-image: linear-gradient(45deg, #3f3251 2%, #002025 100%);
} */


@keyframes rotate { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);}}

@keyframes fade { 0% { opacity: 1;} 50% { opacity: 0.25;}}

@keyframes fade-in { 0% { opacity: 0;} 100% { opacity: 1;}}
`;