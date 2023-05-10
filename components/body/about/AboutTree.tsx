import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import {AiFillHtml5, AiOutlineMinus} from 'react-icons/ai';
import {IoLogoCss3} from 'react-icons/io';
import {IoLogoReact, IoLogoJavascript} from 'react-icons/io5';
import {SiSass, SiStyledcomponents, SiTypescript, SiNextdotjs, SiQgis, SiAffinity,
    SiGit, SiBootstrap, SiWebpack, SiLeaflet, SiRedux, SiGatsby, SiElectron, SiLaravel, SiPython,
        SiTestinglibrary, SiCypress, SiExpress, SiNestjs, SiDjango, SiJquery} from 'react-icons/si';
import {DiPhp, DiNodejsSmall} from 'react-icons/di';
import {TbBrandReactNative} from 'react-icons/tb';
import {ImSvg} from 'react-icons/im';

const AboutTree:NextPage = () => {
  return (
    <TreeStyles>
      <div className="Tree">
        <div title="Starting with SVG language while learning about graphic desingn" className="Tree-icon"><ImSvg /></div>
        <div className="Tree-break"><AiOutlineMinus className="line" /></div>
        <div title="Learn about HTML and CSS" className="Tree-icon"><AiFillHtml5 /><AiOutlineMinus /><IoLogoCss3 /></div>
        <div className="Tree-break"><AiOutlineMinus className="line" /></div>
        <div title="Next step was JavaScript ES5 and jQuery" className="Tree-icon"><IoLogoJavascript /><AiOutlineMinus /><SiJquery /></div>
        <div className="Tree-break"><AiOutlineMinus className="line" /></div>
        <div title="Learning PHP, Sass, Node and Bootstrap while online course by Rick Sekuloski" className="Tree-icon"><DiPhp /><AiOutlineMinus /><SiSass /><AiOutlineMinus /><DiNodejsSmall /><AiOutlineMinus /><SiBootstrap /></div>
        <div className="Tree-break"><AiOutlineMinus className="line" /></div>
        <div title="Learning JavaScript ES11 & Webpack while next course by Rick Sekuloski" className="Tree-icon"><IoLogoJavascript /><AiOutlineMinus /><SiWebpack /></div>
        <div className="Tree-break"><AiOutlineMinus className="line" /></div>
        <div title="Learning React with useful libraries" className="Tree-icon"><SiRedux /><AiOutlineMinus /><IoLogoReact /><AiOutlineMinus /><SiStyledcomponents /></div>
        <div className="Tree-break"><AiOutlineMinus className="line" /></div>
        <div title="Learning GIT" className="Tree-icon"><SiGit /></div>
        <div className="Tree-break"><AiOutlineMinus className="line" /></div>
        <div title="Testing apps!" className="Tree-icon"><SiTestinglibrary /><AiOutlineMinus /><SiCypress /></div>
        <div className="Tree-break"><AiOutlineMinus className="line" /></div>
        <div title="Learning metaframeworks, Next is better for me :)" className="Tree-icon"><SiGatsby /><AiOutlineMinus /><SiNextdotjs /></div>
        <div className="Tree-break"><AiOutlineMinus className="line" /></div>
        <div title="Learning JS backend frameworks" className="Tree-icon"><SiExpress /><AiOutlineMinus /><SiNestjs /></div>
        <div className="Tree-break"><AiOutlineMinus className="line" /></div>
        <div title="Learning TypeScript, I love it!" className="Tree-icon"><SiTypescript /></div>
        <div className="Tree-break"><AiOutlineMinus className="line" /></div>
        <div title="Learning how to create Native Apps and Desktop Apps" className="Tree-icon"><TbBrandReactNative /><AiOutlineMinus /><SiElectron /><AiOutlineMinus /><IoLogoJavascript /></div>
      </div>
    </TreeStyles>
  )
}

const TreeStyles = styled.div`
color: white;
font-family: 'Arimo';
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 7.5rem 0rem 0rem 0rem;
.Tree {
  color: white;
  & > div {
    font-size: 5rem;
  }
  &-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-break {
    display: flex;
    align-items: center;
    justify-content: center;
    & > .line {
      transform: rotate(90deg);
    }
  }
}
`;

export default AboutTree