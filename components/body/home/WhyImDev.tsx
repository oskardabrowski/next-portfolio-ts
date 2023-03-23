import { NextPage } from "next";
import styled from "styled-components";
import {IoMdRocket} from "react-icons/io";
import {AiFillCloud} from 'react-icons/ai';
import {BsFillCloudsFill} from 'react-icons/bs';
import {GiBrain} from 'react-icons/gi';

const WhyImDev:NextPage = () => {
  return (
    <SkyIsNoLimit>
      <article className="Picture">
        <AiFillCloud className="Picture-cloud1" />
        <IoMdRocket className="Picture-rocket colored" />
        <BsFillCloudsFill className="Picture-cloud2" />
      </article>
      <article className="Part1 Text">
        <p><span className="colored">Sky</span> is not the limit</p>
      </article>
      <article className="Part2 Text">
        <p>our <span className="colored">mind</span> is.</p>
      </article>
    </SkyIsNoLimit>
  )
}

const SkyIsNoLimit = styled.section`
width: 100%;
height: 100vh;
position: relative;

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
  }
  &-cloud2 {
    position: absolute;
    top: 55%;
    left: 45%;
    transform: translate(-50%, -50%);
    font-size: 7.5rem;
    color: white;
  }

  &-rocket {
    position: absolute;
    top: 42.5%;
    left: 45%;
    transform: translate(-50%, -50%);
    transform: rotate(-45deg);
    font-size: 7.5rem;
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
  left: 25%;
}

.Part2 {
  position: absolute;
  bottom: 30%;
  right: 35%;
}
`;

export default WhyImDev