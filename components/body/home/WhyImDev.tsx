import { NextPage } from "next";
import styled from "styled-components";
import {IoMdRocket} from "react-icons/io";
import {AiFillCloud} from 'react-icons/ai';
import {BsFillCloudsFill} from 'react-icons/bs';
import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../../GlobalContext";


const WhyImDev:NextPage = () => {
  const ref = useRef(null);

  const {isInViewport} = useContext(GlobalContext);

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setIsIntersecting(isInViewport(ref.current));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SkyIsNoLimit ref={ref}>
      <article className="Picture">
        <AiFillCloud className="Picture-cloud1" style={{opacity: isIntersecting ? '1' : '0'}}/>
        <IoMdRocket className="Picture-rocket colored" style={{opacity: isIntersecting ? '1' : '0'}}/>
        <BsFillCloudsFill className="Picture-cloud2" style={{opacity: isIntersecting ? '1' : '0'}}/>
      </article>
      <article style={{left: isIntersecting ? '25%' : '-50%'}} className="Part1 Text">
        <p><span className="colored">Sky</span> is not the limit</p>
      </article>
      <article style={{right: isIntersecting ? '35%' : '-50%'}} className="Part2 Text">
        <p>our <span className="colored">mind</span> is.</p>
      </article>
    </SkyIsNoLimit>
  )
}

const SkyIsNoLimit = styled.section`
width: 100%;
height: 100vh;
position: relative;
overflow: hidden;
.Picture {
  width: 100%;
  height: 100vh;
  position: relative;
  color: #0070F3;

  &-cloud1 {
    position: absolute;
    top: 47.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 7.5rem;
    color: white;
    transition-delay: 1;
    transition: all 2s ease-in-out;
  }
  &-cloud2 {
    position: absolute;
    top: 55%;
    left: 45%;
    transform: translate(-50%, -50%);
    font-size: 7.5rem;
    color: white;
    transition-delay: 2;
    transition: all 3s ease-in-out;
  }

  &-rocket {
    position: absolute;
    top: 42.5%;
    left: 45%;
    transform: translate(-50%, -50%);
    transform: rotate(-45deg);
    font-size: 7.5rem;
    transition-delay: 3;
    transition: all 4s ease-in-out;
  }
}

.Text {
  font-size: 2.5rem;
  color: white;
  font-family: 'Arimo';
  font-weight: bold;
}

.Part1 {
  position: absolute;
  top: 30%;
  transition-delay: 2;
  transition: all 3s ease-in-out;
}

.Part2 {
  position: absolute;
  bottom: 30%;
  transition-delay: 2;
  transition: all 3s ease-in-out;
}

@media(max-width: 62.5em) {
  .Picture {
    &-cloud1 {
      left: 55%;
    }
  }
}

@media(max-width: 50em) {
  .Picture {
    &-cloud1 {
      left: 60%;
    }
  }

  .Text {
    font-size: 2.5rem;
    color: white;
    font-family: 'Arimo';
    font-weight: bold;
  }

  .Part1 {
    margin-left: -5rem;
  }

  .Part2 {
    margin-right: -5rem;
  }
}

@media(max-width: 37.5em) {
  .Picture {
    &-cloud1 {
      left: 65%;
    }
  }

  .Text {
    font-size: 1.75rem;
    color: white;
    font-family: 'Arimo';
    font-weight: bold;
  }

  .Part1 {
    margin-left: -5rem;
  }

  .Part2 {
    margin-right: -5rem;
  }
}


`;

export default WhyImDev