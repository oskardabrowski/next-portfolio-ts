import { NextPage } from "next";
import styled from 'styled-components';
import Slider from "./Slider";
import { GlobalContext } from "../../GlobalContext";
import { useContext, useState, useRef, useEffect } from "react";

const SelectedProjects:NextPage = () => {
    const ref = useRef(null);

    const {isInViewport} = useContext(GlobalContext);

    const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if(isInViewport(ref.current)) {
          setTimeout(() => {
            setIsIntersecting(true);
          }, 250);
        } else {
          setIsIntersecting(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    useEffect(() => {
        var options = {
            easing: 0.075,
            duration: 500,
            dragSpeed: 1.75,
        }

        var slider = new Slider(options);

        return () => {
            slider.destroy();
        }
    },[])

  return (
    <ProjectsSlider ref={ref}>


        <h4 className="Header" style={{ left: isIntersecting ? '0%' : '-50%'}}>Selected projects<span className="colored">.</span></h4>

        <div id="planes">

         <a href="#" className="plane-wrapper">
                <div className="plane">
                    <img src="images/selectedprojects/SolarMap.png" alt="First slide" />
                </div>
         </a>

         <a href="#" className="plane-wrapper">
                <div className="plane">
                    <img src="images/selectedprojects/MalyZegarek.png" alt="Second slide" />
                </div>
         </a>

         <a href="#" className="plane-wrapper">
                <div className="plane">
                    <img src="images/selectedprojects/ShoppingApp.png" alt="Third slide" />
                </div>
         </a>
         <a href="#" className="plane-wrapper">
                <div className="plane">
                    <img src="images/selectedprojects/AliensInvaders.png" alt="Third slide" />
                </div>
         </a>
         <a href="#" className="plane-wrapper">
                <div className="plane">
                    <img src="images/selectedprojects/MovieFinder.png" alt="Third slide" />
                </div>
         </a>
      </div>



    </ProjectsSlider>
  )
}

const ProjectsSlider = styled.section`

width: 100%;
height: 100vh;
overflow: hidden;

.Header {
  font-family: 'Arimo';
  font-size: 2.5rem;
  margin-top: 1rem;
  margin-left: 2rem;
  color: white;
  position: relative;
  transition: all 1.5s ease-in-out;
}


@media screen {

    #planes {
        /* width of items * number of items */
        width: calc(((100vw / 1.5)) * 5);
        padding: 0 2.5vw;
        height: 100vh;
        display: flex;
        align-items: center;
        transition: background-color 0.5s;

        &:hover {
            cursor: grab;
        }
        &:active {
            cursor: grabbing;
        }
    }

    .plane-wrapper {
        position: relative;

        width: calc(100vw / 1.75 );
        height: 70vh;
        margin: auto 5vw;
        text-align: center;
    }

    /* disable pointer events and text selection during drag */
    #planes.dragged .plane-wrapper {
        pointer-events: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .plane-title {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        transform: translate3D(-50%, -50%, 0);
        font-size: 4vw;
        font-weight: 700;
        line-height: 1.2;
        text-transform: uppercase;

        transition: color 0.5s;
    }


    .plane {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        overflow: hidden;
        transition: filter 0.5s;


    }

    .plane img {
        display: block;
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;

        /* prevent original image from dragging */
        pointer-events: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
    }

    #drag-tip {
        position: fixed;
        right: 20px;
        bottom: 20px;
        left: 20px;
        z-index: 1;
        pointer-events: none;
        font-size: 0.9em;
        text-transform: uppercase;
        color: #032f4d;
        text-align: center;
    }

}

@media screen and (orientation: portrait) {

    #content {
        /* max-height: 100vh; */
        height: 200vh;
    }

    #planes {
        overflow: hidden;
        width: 100vw;

        padding: 2.5vh 0;
        height: 150vh;
        flex-direction: column;
    }

    .plane-wrapper {
        width: 70vw;
        height: calc(100vh / 6);
        margin: 1vw 0;
    }

    .plane-title {
        font-size: 10vw;
    }

}

@media(max-width: 50em) {
  .Header {
    font-size: 2rem;
  }
  .Body {
    &-img {
      &-container {
        width: 15rem;
        height: 15rem;
      }
    }
    &-paragraph {
      & > p {
        font-size: 1.15rem;
        line-height: 1.75rem;
        text-indent: 3rem;
      }
    }
  }
}

`;

export default SelectedProjects;