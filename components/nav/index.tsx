import type { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import {AiOutlineMenu} from 'react-icons/ai';
import {IoClose, IoPersonSharp, IoMail} from 'react-icons/io5';
import {AiFillHome, AiFillCode} from 'react-icons/ai';
import { useRouter } from 'next/router';
import React, {useContext, useState, useEffect, useRef, MutableRefObject} from 'react';
import { GlobalContext } from '../GlobalContext';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { BiMedal } from 'react-icons/bi';

const Nav:NextPage = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const {isPageLoading, LinkHandler, isSkillWindowOpened, setIsSkillWindowOpened, SkillData} = useContext(GlobalContext);
    const router = useRouter();

    const LoaderRef = useRef<HTMLDivElement>(null);
    const LoaderWhiteRef = useRef<HTMLDivElement>(null);
    const Shadow1WhiteRef = useRef<HTMLDivElement>(null);
    const Shadow2WhiteRef = useRef<HTMLDivElement>(null);
    const BeforeTechWindow = useRef() as MutableRefObject<HTMLDivElement>;
    const TechWindow = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        if(isPageLoading) {
            LoaderRef.current!.style.clipPath = 'circle(150% at 50% 50%)';
        } else {
            setTimeout(() => {
                LoaderRef.current!.style.clipPath = 'circle(0% at 50% 50%)';
            }, 1550)
        }
    }, [isPageLoading]);

    const closeSkillWindow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        BeforeTechWindow.current.style.animation = 'showuprotaterev .25s linear forwards';
        TechWindow.current.style.animation = 'showuprev .25s linear forwards';
        setTimeout(() => {
            setIsSkillWindowOpened(!isSkillWindowOpened);
            BeforeTechWindow.current.style.animation = 'showuprotate .25s linear forwards';
            TechWindow.current.style.animation = 'showup .25s linear forwards';
        }, 550);
    }

    return <Navigator>
        <button id="OpenCloseMenu" className="MenuButton" onClick={() => setMenuOpened(!menuOpened)}>
            {menuOpened ? <IoClose /> : <AiOutlineMenu />}
        </button>
        <div className="MenuShadow" style={menuOpened ? { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' } : { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}></div>
        <div className="MenuBlueShadow" style={menuOpened ? { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' } : { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}></div>
        <div id="MenuOptions" style={menuOpened ? { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' } : { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }} className="MenuOptions">
            <Link onClick={(e) => LinkHandler(e, '/')} className="MenuOptions__link" href="/">
                <div style={{ borderColor: router.pathname === '/' ? '#00C11E' : 'rgba(0,0,0,0)' }} className="MenuOptions__link-icon"><AiFillHome /></div>
                <span className="MenuOptions__link-name">Home</span>
            </Link>
            <Link onClick={(e) => LinkHandler(e, '/about')} className="MenuOptions__link" href="/about">
                <div style={{ borderColor: router.pathname === '/about' ? '#00C11E' : 'rgba(0,0,0,0)' }} className="MenuOptions__link-icon"><IoPersonSharp /></div>
                <span className="MenuOptions__link-name">About</span>
            </Link>
            <Link onClick={(e) => LinkHandler(e, '/projects')} className="MenuOptions__link" href="/projects">
                <div style={{ borderColor: router.pathname === '/projects' ? '#00C11E' : 'rgba(0,0,0,0)' }} className="MenuOptions__link-icon"><AiFillCode /></div>
                <span className="MenuOptions__link-name">Projects</span>
            </Link>
            <Link onClick={(e) => LinkHandler(e, '/contact')} className="MenuOptions__link" href="/contact">
                <div style={{ borderColor: router.pathname === '/contact' ? '#00C11E' : 'rgba(0,0,0,0)' }} className="MenuOptions__link-icon"><IoMail /></div>
                <span className="MenuOptions__link-name">Contact</span>
            </Link>
        </div>
        <div id="Loader" ref={LoaderRef}>
            <div ref={LoaderWhiteRef} className="Loader-white" style={{ transition: isPageLoading ? 'all 1.5s ease-in-out' : 'all 1s ease-in-out' , clipPath: isPageLoading ? 'polygon(100% 100%, 100% 0, 0 0, 100% 100%, 0 0, 0 100%, 100% 100%, 0 0)' : 'polygon(100% 0, 100% 0, 100% 0, 100% 0, 0 100%, 0 100%, 0 100%, 0 100%)' }}>
                <span>Loading...</span>
            </div>
            <div ref={Shadow1WhiteRef} className="Loader-shadow1" style={{ transition: isPageLoading ? 'all 1s ease-in-out' : 'all 1.25s ease-in-out' , clipPath: isPageLoading ? 'polygon(100% 100%, 100% 0, 0 0, 100% 100%, 0 0, 0 100%, 100% 100%, 0 0)' : 'polygon(100% 0, 100% 0, 100% 0, 100% 0, 0 100%, 0 100%, 0 100%, 0 100%)' }}></div>
            <div ref={Shadow2WhiteRef} className="Loader-shadow2" style={{ transition: isPageLoading ? 'all .5s ease-in-out' : 'all 1.5s ease-in-out' , clipPath: isPageLoading ? 'polygon(100% 100%, 100% 0, 0 0, 100% 100%, 0 0, 0 100%, 100% 100%, 0 0)' : 'polygon(100% 0, 100% 0, 100% 0, 100% 0, 0 100%, 0 100%, 0 100%, 0 100%)' }}></div>
        </div>
        <div style={{ display: isSkillWindowOpened ? 'flex' : 'none' }} className="TechDescription">
            <div ref={BeforeTechWindow} className="TechDescription-before"></div>
            <div ref={TechWindow} className="TechDescription-container">
                <div className="TechDescription-container-head">
                    <div></div>

                    <div className="TechDescription-container-head-icons">
                        {
                            SkillData.link ? <a title="Example project!" href="#" className="TechDescription-container-head-icons-secondIco"><BsFillFileEarmarkCodeFill /></a> : ''
                        }
                        <div className="TechDescription-container-head-icons-tech"><SkillData.ico /></div>
                        {
                            SkillData.used ? <div className="TechDescription-container-used"><BiMedal /><span>I use this technology in commercial projects</span></div> : ''
                        }
                    </div>
                    <div  className="TechDescription-container-head-name">{SkillData.tech}</div>
                    <span className="TechDescription-container-head-shadow"></span>

                </div>
                <div className="TechDescription-container-desc">
                    <p>
                        {SkillData.desc}
                    </p>
                    <button className="TechCloseButton" style={{ zIndex: '1' }} onClick={(e) => closeSkillWindow(e)}>Ok</button>
                </div>

            </div>
        </div>
    </Navigator>
}

const Navigator = styled.nav`
position: fixed;
top: 0rem;
right: 0rem;
width: 100%;
height: 0%;
z-index: 1000000000;

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.TechCloseButton {
    padding: .5rem .75rem;
    border: none;
    font-family: 'Arimo';
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
    border-radius: 50rem;
    background: #00AEFF;
    transition: all .5s ease-in-out;
    &:hover {
        cursor: pointer;
        background: #0070F3;
    }
}

@keyframes showup {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes showuprotate {
    0% {
        transform: scale(0) rotate(0deg);
    }
    100% {
        transform: scale(1) rotate(6.5deg);
    }
}
@keyframes showuprev {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}
@keyframes showuprotaterev {
    0% {
        transform: scale(1) rotate(6.5deg);
    }
    100% {
        transform: scale(0) rotate(0deg);
    }
}

.TechDescription {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;

    &-before {
        content: '';
        position: absolute;
        width: 30rem;
        height: 27.5rem;
        background: none;
        border-radius: 15px;
        transform: scale(0) rotate(0deg);
        border: 5px solid white;
        transition: all .5s ease-in-out;
        animation: showuprotate .25s linear forwards;
    }

    &-container {
        width: 30rem;
        height: 27.5rem;
        border-radius: 15px;
        overflow: hidden;
        background: white;
        position: relative;
        transition: all .25s ease-in-out;
        transform: scale(0);
        animation: showup .5s linear forwards;


        &-used {
            width: 100%;
            padding: 1rem 0rem;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Arimo';
            font-weight: bold;
            color: #00CA22;

            & > span {
                margin-left: .8rem;
                color: transparent;
                background: linear-gradient(to top right, #00FF2A, #00A31B);
                background-clip: text;
                -webkit-background-clip: text;
            }
        }

        &-desc {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;



            & > p, a {
                padding: .5rem 0rem;
                margin: 0rem .75rem;
            }

            & > p {
                font-size: 1.1rem;
                font-family: 'Arimo';
                color: black;
                line-height: 1.5rem;
                text-align: justify;
                text-indent: 50px;
            }

            & > a {
                font-family: 'Arimo';
                color: black;
                display: flex;
                align-items: center;
                & > span {
                    margin-left: .5rem;
                }

                &:hover {
                    color: black;
                }
            }
        }

        &-head {
            height: 17.5rem;
            font-size: 2rem;
            font-family: 'Arimo';
            font-weight: bold;
            width: 100%;
            padding: 0rem 0rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            color: white;
            background: #00AEFF;
            position: relative;

            &-icons {
                margin: 4rem 0rem 0rem 0rem;
                display: flex;
                align-items: end;
                & > div, a {
                    margin: 0rem 1rem;
                }

                &-secondIco {
                    color: black;
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: .5rem;
                    border-radius: 50%;
                    position: absolute;

                    &:nth-child(1) {
                        left: 20%;
                    }
                    &:nth-child(3) {
                        right: 20%;
                    }
                }

                &-tech {
                    color: black;
                    background: white;
                    font-size: 4rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    border-radius: 50%;
                }
            }

            &-name {
                margin-bottom: 1rem;
            }

            & > div {
                z-index: 10;
            }

            &-shadow {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: #0070F3;
                clip-path: polygon(100% 0, 0% 100%, 100% 100%);
            }
            & > span {
                margin-left: 0rem;
            }

            & > button {
                margin-right: 1rem;
                font-size: 2.5rem;
                background: none;
                border: none;
                display: flex;
                align-items: center;
                color: white;
                &:hover {
                    cursor: pointer;
                    color: black;
                }
            }
        }
    }
}

#Loader {
    position: fixed;
    top: 0rem;
    left: 0rem;
    z-index: 1000000000;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0);
    display: flex;
    align-items: center;
    justify-content: center;

}

.Loader {
    &-white {
        background-color: white;
        z-index: 100;
        width: 100%;
        height: 100vh;
        position: relative;
        top: 0rem;
        left: 0rem;
        display: flex;
        align-items: center;
        justify-content: center;

        & > span {
            position: absolute;
            font-family: 'Arimo';
            font-size: 2rem;
            font-weight: bold;
            background: linear-gradient(to top right, #0070F3, #00AEFF);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        & > svg {
            position: absolute;
        }
    }
    &-shadow1 {
        background-color: rgba(0, 112, 243, .5);
        z-index: 10;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0rem;
        left: 0rem;
    }
    &-shadow2 {
        background-color: rgba(80, 255, 108, .5);
        z-index: 1;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0rem;
        left: 0rem;
    }
}

.MenuShadow {
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    z-index: 100000;
    transition: all .5s ease-in-out;
}
.MenuBlueShadow {
    position: absolute;
    top: 0;
    right: 0;
    width: 31%;
    height: 100vh;
    background-color: rgba(0,112,243,.25);
    z-index: 100000;
    transition: all .5s ease-in-out;
}
.MenuButton {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: black;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    border: 5px solid #0070f3;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    z-index: 1000000;
    &:hover {
        cursor: pointer;
    }
}
.MenuOptions {
    position: absolute;
    top: 0rem;
    right: 0rem;
    width: 30%;
    height: 100vh;
    background: linear-gradient(to top right, #0070F3, #0070F3, #00AEFF, #00AEFF);
    transition: all .5s ease-in-out;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    z-index: 100000;

    &__link {
        margin-left: 5rem;

        &:hover {
            .MenuOptions__link-icon {
                background-color: #50FF6C;
            }
        }

        &-icon {
            width: 3.5rem;
            height: 3.5rem;
            min-width: 3.5rem;
            min-height: 3.5rem;
            border-radius: 50%;
            background-color: black;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .5s ease-in-out;
            font-size: 1.5rem;

            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            border: 4px solid rgba(0,0,0,0);


        }
        &-name {
            margin-left: 1rem;
            font-size: 1.5rem;
            font-family: 'Arimo';
        }
        &:not(:last-child) {
                margin-bottom: .75rem;
            }
        align-items: center;
        display: flex;
        color: white;



    }
}

@media(max-width: 68.75em) {
    .MenuBlueShadow {
        width: 41%;
    }
    .MenuOptions {
        width: 40%;
    }
}
@media(max-width: 50em) {
    .MenuBlueShadow {
        width: 51%;
    }
    .MenuOptions {
        width: 50%;
    }
}
@media(max-width: 37.5em) {
    .MenuBlueShadow {
        width: 100%;
    }
    .MenuOptions {
        width: 100%;
    }
    .TechDescription {
        &-before {
            display: none;
        }

        &-container {
            width: 100%;
            border-radius: 0px;

            &-head {
                &-icons {
                    &-secondIco {
                        &:nth-child(1) {
                            left: 10%;
                        }
                        &:nth-child(3) {
                            right: 10%;
                        }
                    }
                }
            }
        }
    }
}

`;

export default Nav;