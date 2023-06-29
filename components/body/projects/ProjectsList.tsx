import { NextPage } from 'next';
import React, {useContext} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {IoLogoReact, IoLogoJavascript} from 'react-icons/io5';
import {AiFillGithub} from 'react-icons/ai';
import {BsFlagFill} from 'react-icons/bs';
import { GlobalContext } from '../../GlobalContext';
import Link from 'next/link';

const ProjectsList:NextPage = () => {
  const {isPageLoading, LinkHandler, isSkillWindowOpened, setIsSkillWindowOpened, SkillData} = useContext(GlobalContext);

  return (
    <List>
      {
        [1,2,3,4,5,6,7,8,9].map((el, index) => {
          return (<Link onClick={(e) => LinkHandler(e, `/projects/${index}`)} title="Read more" href={`/projects/${index}`} className="Item">
            <div className="Item-image">
              <div className="Item-image-container">
                <div>
                  <Image src="/images/projects/testingimg.png" fill={true} alt="" />
                </div>
              </div>
              <span className="Item-image-top"></span>
              <span className="Item-image-bottom"></span>
            </div>
            <div className="Item-content">
              <span className="Item-content-name">Project Name</span>
              <div className="Item-content-tech">
                <IoLogoReact />
                <IoLogoJavascript />
                <IoLogoJavascript />
              </div>
              <div className="Item-content-git">
                <div className="Item-content-git-container">
                  <a title="Project's github repository" href="#"><AiFillGithub /></a>
                  <a title="Project's demo" href="#"><BsFlagFill /></a>
                </div>
              </div>
            </div>
          </Link>);
        })
      }
    </List>
  )
}

const List = styled.div`
width: 100%;
color: white;
min-height: 100vh;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: start;
/* overflow: hidden; */

.Item {
  margin: 1rem;
  width: 25rem;
  height: 15rem;
  background: white;
  z-index: 1000;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  transition: all .5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &-image {
    height: 100%;
    position: relative;
    &-container {
      height: 100%;
      width: 10rem;
      overflow: hidden;
      clip-path: polygon(0 0, 65% 0, 100% 100%, 0% 100%);
      position: relative;
      & > div {
        position: relative;
        height: 100%;
        width: 20rem;
        top: 0;
        left: 0;
      }
    }

    &-top {
      position: absolute;
      width: 2rem;
      height: 50%;
      background: #00AEFF;
      z-index: 1000;
      top: 0;
      left: 6rem;
      transform: skewX(15deg);
      box-shadow: -5px 0px 0px rgba(255,255,255,.25);
    }
    &-bottom {
      position: absolute;
      width: 2.5rem;
      height: 50%;
      background: #008cff;
      z-index: 1000;
      bottom: 0;
      left: 8.5rem;
      transform: skewX(15deg);
      box-shadow: -6px 0px 0px rgba(255,255,255,.3);
    }

  }
  &-content {
    color: black;
    font-family: 'Arimo';
    height: 100%;
    width: 15rem;
    margin: 1rem 0rem;
    position: relative;
    &-name {
      font-size: 1.5rem;
      font-weight: bold;
    }
    &-tech {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      font-size: 2.5rem;
    }
    &-git {
      margin: 1rem 0rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: right;
      position: absolute;
      left: 0;
      bottom: 1rem;
      font-size: 3rem;
      &-container {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        & > a {
          color: black;
          transition: all .5s ease-in-out;
          font-size: 2rem;
          &:hover {
            color: #00AEFF;
          }
        }
      }
    }
  }
}

`;

export default ProjectsList