import { NextPage } from 'next';
import styled from 'styled-components';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {IoIosMail} from 'react-icons/io';
import Link from 'next/link';
import { GlobalContext } from '../GlobalContext';
import { useContext, useRef, useState, useEffect } from 'react';

const Footer:NextPage = () => {
  const ref = useRef(null);

  const {LinkHandler, isInViewport} = useContext(GlobalContext);

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
    <FooterElement ref={ref}>
        <div className="Footer First" style={{ left: isIntersecting ? '-10%' : '-110%' }}>
          <div>Copyright © Oskar Dąbrowski {new Date().getFullYear()}</div>
        </div>
        <div className="Footer Second" style={{ right: isIntersecting ? '-10%' : '-110%' }}>
          <div>
            <a href="https://github.com/oskardabrowski" target='blank'><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/oskar-d%C4%85browski-024455226/" target='blank'><AiFillLinkedin /></a>
            <Link onClick={(e) => LinkHandler(e, '/contact')} href="/contact"><IoIosMail /></Link>
          </div>
        </div>
    </FooterElement>
  )
}

const FooterElement = styled.footer`
width: 100%;
height: 50vh;
color: white;
overflow: hidden;
position: relative;
margin-top: 10rem;

.Footer {
    width: 65vw;
    height: 48%;
    background: linear-gradient(to right, #0070F3, #00AEFF);
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 1.5s ease-in-out;
    filter: sepia(100%) hue-rotate(190deg) saturate(900%);

}

.First {
  left: -10%;
  clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%);
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  & > div {
    font-family: 'Arimo';
    font-size: 2rem;
    margin-right: 10rem;
    color: white;
    font-weight: bold;
  }
}
.Second {
  top: 52%;
  right: -10%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  font-size: 3rem;

  & > div {
    display: flex;

    & > a {
      color: white;
      padding: 1rem;

      &:hover {
        color: green;
      }
    }
  }
}

`;


export default Footer;