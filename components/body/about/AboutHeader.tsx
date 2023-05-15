import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const AboutHeader:NextPage = () => {
  return (
    <Header>
      <Image fill={true} src="/images/Moasic.png" alt="" />
      <h1>I'm Oskar Dąbrowski</h1>
      <h2><span className="colored">Software</span> Developer</h2>
    </Header>
  )
}

const Header = styled.header`
width: 100%;
height: 100vh;
color: white;

img {
  width: 100%;
  opacity: .75;
}

h1 {
  position: absolute;
  top: 35%;
  left: -50%;
  opacity: 0;
  font-size: 4rem;
  font-family: 'Arimo';
  animation: goRightH1 2s 1s ease-out forwards;
}

h2 {
  position: absolute;
  top: 50%;
  left: -50%;
  opacity: 0;
  font-size: 3rem;
  font-family: 'Arimo';
  animation: goRightH2 2s 2s ease-out forwards;
}

@keyframes goRightH1 {
  0% {
    left: -50%;
    opacity: 0;
  }
  100% {
    left: 20%;
    opacity: 1;
  }
}
@keyframes goRightH2 {
  0% {
    left: -50%;
    opacity: 0;
  }
  100% {
    left: 50%;
    opacity: 1;
  }
}

`;

export default AboutHeader