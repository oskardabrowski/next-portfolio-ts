import { NextPage } from "next";
import styled from "styled-components";
import { ReactNode ,useContext, useEffect, useState, useRef, MouseEvent } from "react";
import technologies from "../../data/technologies";
import { knownTechnologies } from "../../data/technologies";
import { GlobalContext } from "../../GlobalContext";

const SkillsAndKnownTech:NextPage = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

  const {LinkHandler, isInViewport} = useContext(GlobalContext);

   const [isIntersecting, setIsIntersecting] = useState(false);
   const [isIntersectingKnownHead, setIsIntersectingKnownHead] = useState(false);
   const [isIntersectingSkills, setIsIntersectingSkills] = useState(false);
   const [iconSize, setIconSize] = useState(false);
   const [isIntersectingKnown, setIsIntersectingKnown] = useState(false);
   const [iconKnownSize, setKnownIconSize] = useState(false);

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
      if (ref4.current) {
        if(isInViewport(ref4.current)) {
            setTimeout(() => {
                setIsIntersectingKnownHead(true);
            }, 250);
        } else {
            setIsIntersectingKnownHead(false);
        }
      }
      if (ref2.current) {
        if(isInViewport(ref2.current)) {
            setTimeout(() => {
                setTimeout(() => {
                    setIsIntersectingSkills(true);
                    setTimeout(() => {
                        setIconSize(true);
                    }, 1000);
                }, 800);
            }, 250);
        } else {
            setIsIntersectingSkills(false);
            setIconSize(false);
        }
      }
      if (ref3.current) {
        if(isInViewport(ref3.current)) {
            setTimeout(() => {
                setTimeout(() => {
                    setIsIntersectingKnown(true);
                    setTimeout(() => {
                        setKnownIconSize(true);
                    }, 1000);
                }, 1000);
            }, 250);
        } else {
            setIsIntersectingKnown(false);
            setKnownIconSize(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <SkillsAndTech ref={ref}>
        <div className="Head"><h3 className="Header" style={{ left: isIntersecting ? '0%' : '-100%'}}>Skills and known technologies<span className="colored">.</span></h3></div>
        <p className="Info" style={{ left: isIntersecting ? '0%' : '-100%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor volutpat erat, at mollis erat fringilla sed. Fusce non lectus augue. Ut pellentesque aliquet pharetra. Aliquam ac orci ut nibh bibendum suscipit.
            Nulla pretium euismod varius. Etiam dignissim ante at magna commodo scelerisque. In at nunc dolor.</p>
        <div className="Container">
            <h4 className="Header" style={{ right: isIntersecting ? '0%' : '-100%'}}>Skills<span className="colored">.</span></h4>
            <p className="Info" style={{ right: isIntersecting ? '0%' : '-100%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor volutpat erat, at mollis erat fringilla sed. Fusce non lectus augue. Ut pellentesque aliquet pharetra. Aliquam ac orci ut nibh bibendum suscipit.
            Nulla pretium euismod varius. Etiam dignissim ante at magna commodo scelerisque. In at nunc dolor.</p>
            <div className="IconsContainer" ref={ref2}>
                {technologies.map((el, index):ReactNode => {
                    function technologyDescriptionWindow(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void {
                        e.preventDefault();
                        alert('Done');
                    }

                    return <div key={index} className="SkillContainer">
                        <button onClick={(e) => technologyDescriptionWindow(e)} className={`Icon ${isIntersectingSkills ? 'iconTransform' : ''} ${iconSize ? 'IconSize' : ''}`}>
                            <div className="Icon-hidden"><el.ico /></div>
                            <span className="span1"></span>
                            <span className="span2"></span>
                            <span className="span3"></span>
                            <span className="span4"></span>
                            <span className="span5"></span>
                            <span className="span6"></span>
                            <span className="span7"></span>
                            <span className="span8"></span>
                        </button>
                    </div>;
                })}
            </div>
        </div>
        <div className="Container" ref={ref4}>
            <h4 className="Header" style={{ left: isIntersectingKnownHead ? '0%' : '-100%'}}>Known technologies<span className="colored">.</span></h4>
            <p className="Info" style={{ left: isIntersectingKnownHead ? '0%' : '-100%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor volutpat erat, at mollis erat fringilla sed. Fusce non lectus augue. Ut pellentesque aliquet pharetra. Aliquam ac orci ut nibh bibendum suscipit.
            Nulla pretium euismod varius. Etiam dignissim ante at magna commodo scelerisque. In at nunc dolor.</p>
            <div className="IconsContainer" ref={ref3}>
                {knownTechnologies.map((el, index):ReactNode => {
                    return <div key={index} className="SkillContainer">
                        <button className={`Icon ${isIntersectingKnown ? 'iconTransform' : ''} ${iconKnownSize ? 'IconSize' : ''}`}>
                            <div className="Icon-hidden" ><el.ico /></div>
                            <span className="span1"></span>
                            <span className="span2"></span>
                            <span className="span3"></span>
                            <span className="span4"></span>
                            <span className="span5"></span>
                            <span className="span6"></span>
                            <span className="span7"></span>
                            <span className="span8"></span>
                        </button>
                    </div>;
                })}
            </div>
        </div>
        <div></div>
        <div></div>
    </SkillsAndTech>
  )
}

const SkillsAndTech = styled.section`
width: 100%;
min-height: 100vh;
color: white;
padding: 7.5rem 0rem 7.5rem 0rem;
display: flex;
flex-direction: column;
overflow: hidden;

.IconsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
}

.SkillContainer {
    margin: 2.5rem;
    width: 8.5rem;
    height: 8.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Icon {
    width: 0rem;
    height: 0rem;
    font-size: 4rem;
    color: white;
    position: relative;
    border: none;
    background: none;
    transition: all .5s ease-in-out;
    transform: scale(0);

    &-hidden {
        overflow: hidden;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /* clip-path: inset(0 0 0 0); */

    /* clip-path: inset(10% 10% 10% 10%); */
    overflow: visible;

    &:hover {
        & > span {
            background-color: #00C11E;
        }
        color: #50FF6C;
        cursor: pointer;
        width: 8.5rem;
        height: 8.5rem;
    }

    & > span {
        height: .5rem;
        width: 2rem;
        background-color: #0070F3;
        position: absolute;
        transition: all .5s ease-in-out;
    }

    & > .span1 {
        top: -.5rem;
        left: -.5rem;
    }
    & > .span2 {
        top: -.5rem;
        left: 0rem;
        transform-origin: top left;
        transform: rotate(90deg);
    }
    & > .span3 {
        top: -.5rem;
        right: -.5rem;
    }
    & > .span4 {
        top: 1rem;
        right: 0rem;
        transform-origin: bottom right;
        transform: rotate(90deg);
    }
    & > .span5 {
        bottom: -.5rem;
        left: -.5rem;
    }
    & > .span6 {
        bottom: -.5rem;
        left: 0rem;
        transform-origin: bottom left;
        transform: rotate(-90deg);
    }
    & > .span7 {
        bottom: -.5rem;
        right: -.5rem;
    }
    & > .span8 {
        bottom: 1rem;
        right: 0rem;
        transform-origin: top right;
        transform: rotate(-90deg);
    }

}

.iconTransform {
    transform: scale(1);
}

.IconSize {
    width: 7.5rem;
    height: 7.5rem;
}

.Header {
  font-family: 'Arimo';
  font-size: 2.5rem;
  margin-top: 1rem;
  margin-left: 2rem;
  position: relative;
  transition: all 2s ease-out;
}

.Info {
    font-family: 'Arimo';
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-indent: 5rem;
    text-align: justify;
    position: relative;
    padding: 0rem 2rem 0rem 2rem;
    transition: all 2s ease-out;
}

.Container {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
}


`;

export default SkillsAndKnownTech;