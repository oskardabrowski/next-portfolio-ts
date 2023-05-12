import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import {AiOutlineMinus} from 'react-icons/ai';
import { GlobalContext } from "../../GlobalContext";
import { useContext, useRef, useState, useEffect } from "react";

const AboutExperience:NextPage = () => {
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
  return (
    <Experience ref={ref}>
        <div className="Head" style={{ left: isIntersecting ? '0%' : '-100%'}}>My commercial experience<span className="colored">!</span></div>
        <div className="Jobs">
            <div className="Job" style={{ opacity: isIntersecting ? '1' : '0'}}>
                <div className="Job-logo">
                    <img src="/images/EnviroSolutions-logo.png" alt="" />
                </div>
                <div className="Job-desc">
                    <span className="Job-desc-position">Junior Full-Stack Developer</span>
                    <span className="Job-desc-company">EnviroSolutions</span>
                    <span className="Job-desc-time">02.2023 - current</span>
                </div>
            </div>
            <div className="Break" style={{ opacity: isIntersecting ? '1' : '0'}}><AiOutlineMinus className="Icon" /></div>
            <div className="Job" style={{ opacity: isIntersecting ? '1' : '0'}}>
                <div className="Job-logo">
                    <img src="/images/EnviroSolutions-logo.png" alt="" />
                </div>
                <div className="Job-desc">
                    <span className="Job-desc-position">Junior Front-End Developer (Intership)</span>
                    <span className="Job-desc-company">EnviroSolutions</span>
                    <span className="Job-desc-time">10.2022 - 01.2023 (4 months)</span>
                </div>
            </div>
        </div>
    </Experience>
  )
}

const Experience = styled.div`
width: 100%;
color: white;
font-family: 'Arimo';
margin: 7.5rem 0rem;

.Break {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    transition: all 2.5s ease-in-out;

    & > .Icon {
        transform: rotate(90deg);
    }
}

.Head {
  font-size: 3rem;
  margin-left: 2rem;
  position: relative;
  transition: all 2.5s ease-in-out;
  font-weight: bold;
}

.Jobs {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0rem 0rem 0rem;
}

.Job {
    display: flex;
    transition: all 2.5s ease-in-out;
    &-desc {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
        &-position {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: .5rem;
        }
        &-company {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: .5rem;
        }
        &-time {
            font-size: 1.25rem;
            font-weight: bold;
        }
    }
}

`;

export default AboutExperience