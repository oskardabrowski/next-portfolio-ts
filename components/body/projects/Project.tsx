import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Footer from '../../footers/Footer';
import GlobalStyles from '../../GlobalStyles';
import Nav from '../../nav';
import SetIsPageLoaded from '../../nav/SetIsPageLoaded';
import Image from 'next/image';
import {BsFlagFill} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';

const Project:NextPage = () => {
  return (
    <>
    <GlobalStyles />
    <ProjectPage>
        <Nav />
        <SetIsPageLoaded />
        <h1 className="Header">Project name<span className="colored">.</span></h1>
        <div className="ProjectImage">
            <Image src="/images/projects/testingimg.png" fill={true} alt="" />
        </div>
        <div className="Grid">
            <div className="Grid-flex">
                <div className="FontWeight">Used technologies:</div>
                <div className="Grid-flex-list">
                    <a href="#" className="Icon"><AiFillGithub /></a>
                    <a href="#" className="Icon"><AiFillGithub /></a>
                    <a href="#" className="Icon"><AiFillGithub /></a>
                    <a href="#" className="Icon"><AiFillGithub /></a>
                </div>
            </div>
            <a href="#" className="Grid-flex FontWeight Link"><AiFillGithub style={{ fontSize: '2.5rem' }} />Github repository</a>
            <a href="#" className="Grid-flex FontWeight Link"><BsFlagFill style={{ fontSize: '2.5rem' }} />Project demo</a>
        </div>
        <div className="Description">
            <h2>Description:</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur sequi itaque error optio eum at, totam distinctio iusto hic molestiae reiciendis quasi non minus culpa adipisci nesciunt. Neque, numquam. Explicabo nobis veritatis voluptates quis incidunt libero, dignissimos ipsa illo quam facere ab odit cum, totam doloribus mollitia autem! Consequatur expedita rerum vel sapiente delectus, quam quia pariatur repudiandae animi illum cumque facere vitae sint perspiciatis commodi aperiam! Ea, laudantium? Necessitatibus voluptatibus blanditiis nihil aliquid quibusdam consequatur impedit porro ullam tenetur aspernatur quam eligendi tempore praesentium, nesciunt facere magni possimus quo animi, repellendus et corporis accusamus odit itaque quod? Illo!
            </p>
        </div>
        <Footer />
    </ProjectPage>
    </>

  )
}

const ProjectPage = styled.div`
background: black;
width: 100%;
min-height: 100vh;
color: white;
font-family: 'Arimo';
.Description {
    padding: 0rem 2rem;
    & > h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    & > p {
        text-indent: 50px;
        font-size: 1.2rem;
        line-height: 2rem;
    }
}
.Icon {
    font-size: 2.5rem;
    margin: .5rem;
    color: white;
    transition: color .5s ease-in-out;
    &:hover {
        color: #00AEFF;
    }
}
.Link {
    transition: color .5s ease-in-out;
    &:hover {
        color: #00AEFF;
    }
}
.FontWeight {
    font-size: 1.5rem;
    font-weight: bold;
}
.Grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 5rem;

    &-flex {
        display: flex;
        align-items: center;
        flex-direction: column;
        color: white;
        &-list {
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
        }
    }
}
.Header {
    font-weight: bold;
    margin-top: 3rem;
    margin-left: 4rem;
}
.ProjectImage {
    width: 100%;
    height: 15rem;
    margin-top: 5rem;
    margin-bottom: 2rem;
    overflow: hidden;
    position: relative;
}
`;

export default Project;