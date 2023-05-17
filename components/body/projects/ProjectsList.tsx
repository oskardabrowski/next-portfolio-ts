import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ProjectsList:NextPage = () => {
  return (
    <List>
      <a href="#" className="Item">
        <div className="Item-image">
          <div className="Item-image-container">
            <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1794&q=80" alt="" />
          </div>
          <span className="Item-image-top"></span>
          <span className="Item-image-bottom"></span>
        </div>
        <div className="Item-content">
          <span className="Item-content-name">Project Name</span>
          <div className="Item-content-tech">
            Technologies
          </div>
          <div className="Item-content-git">
            github
          </div>
        </div>
      </a>
      <div className="Item"></div>
      <div className="Item"></div>
      <div className="Item"></div>
      <div className="Item"></div>
      <div className="Item"></div>
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

  &-image {
    height: 100%;
    position: relative;
    &-container {
      height: 100%;
      width: 10rem;
      overflow: hidden;
      clip-path: polygon(0 0, 65% 0, 100% 100%, 0% 100%);
      & > img {
        height: 100%;
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
      font-size: 1.2rem;
      font-weight: bold;
    }
    &-tech {
      margin: 1rem 0rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-git {
      margin: 1rem 0rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      bottom: 1rem;
    }
  }
}

`;

export default ProjectsList