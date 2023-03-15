import { NextPage } from "next";
import styled from "styled-components";
import { Svg, Polyline } from 'react-svg-path';
import {SlTarget} from 'react-icons/sl';
import {SiJavascript, SiPython, SiLaravel, SiCsharp, SiReact} from 'react-icons/si';
import {TfiTarget} from 'react-icons/tfi';

const LearningProcess:NextPage = () => {
  return (
    <Learning>
        <h5 className="Text">How I learn about new technology <span className="colored">?</span></h5>
        <div className="Story">
            <div className="Story-part">
                <div className="Story-part-icon">
                    <div>
                        <SlTarget />
                    </div>
                </div>
                <div className="Story-part-description">
                    <span className="PartHead">First step<span className="colored">!</span></span>
                </div>
            </div>
            <article>
                <span className="PartHead centerHead">Choose new technology<span className="colored">!</span></span>
                <div className="TechsAnim">
                    <SiJavascript />
                    <SiReact />
                    <SiPython />
                    <SiLaravel />
                    <SiCsharp />
                    <span className="TechsAnim-target">
                        <TfiTarget />
                    </span>
                </div>
            </article>


        </div>
    </Learning>
  )
}

const Learning = styled.section`
width: 100%;
height: 300vh;
margin-top: 5rem;
display: flex;
flex-direction: column;

.TechsAnim {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    margin-top: 2rem;
    font-size: 5rem;
    position: relative;

    &-target {
        position: absolute;
        color: red;
        font-size: 7.5rem;
        left: 10%;
        animation: choose 15s linear infinite;
    }
}

@keyframes choose {
    0% {
        left: 10%;
    }
    10% {
        left: 80%;
    }
    20% {left: 30%;}
    30% {left: 70%;}
    40% {left: 15%;}
    50% {left: 80%;}

    60% {
        left: 45%;
    }
    70% {
        left: 45%;
    }
    71% {
        left: 45%;
        transform: scale(1.2);
    }
    72% {
        left: 45%;
        transform: scale(1);
    }
    80% {
        left: 45%;
    }
    85% {
        left: 80%;
    }
    95% {
        left: 25%;
    }
    100% {
        left: 10%;
    }
}

.PartHead {
  font-size: 2rem;
  color: white;
  font-family: 'Arimo';
  font-weight: bold;
  margin-left: 2rem;
  font-weight: bold;
}

.centerHead {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0rem;
}

.Text {
  font-size: 2.5rem;
  color: white;
  font-family: 'Arimo';
  font-weight: bold;
  margin-left: 2rem;
  font-weight: bold;
}

.Story {
    width: 100%;
    height: 300vh;

    &-part {
        position: sticky;
        top: 20px;
        display: flex;
        color: white;
        &-icon {
            background-color: black;
            border-radius: 50%;
            & > div {
                color: white;
                font-size: 2rem;
                width: 10rem;
                height: 10rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                border: 3px solid white;
                margin: 5rem;
                font-size: 3rem;
                background: black;
            }
        }

        &-description {
            margin-top: 5rem;
            color: white;
            font-size: 2rem;
            display: flex;
            flex-direction: column;

            & > p {
                margin-top: 1rem;
                font-size: 1.2rem;
                line-height: 1.5rem;
                font-family: 'Arimo';
                text-indent: 50px;
                padding: 0rem 2rem;
                text-align: justify;
            }
        }
    }
}

`;

export default LearningProcess;