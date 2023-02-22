import type { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {AiOutlineMenu} from 'react-icons/ai';
import {IoClose, IoPersonSharp, IoMail} from 'react-icons/io5';
import {AiFillHome, AiFillCode} from 'react-icons/ai';
import { useRouter } from 'next/router';
import React, {MouseEvent} from 'react';

interface NavProps {
  isPageLoading: boolean;
  // other props here
}

const Nav:NextPage<NavProps> = ({isPageLoading}) => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);

    const router = useRouter();


    const LinkHandler = (e:MouseEvent, page:string) => {
        e.preventDefault();
        setTimeout(() => {
            router.push(page);
        }, 3000);
    };

    return <Navigator>
        <button id="OpenCloseMenu" className="MenuButton" onClick={() => setMenuOpened(!menuOpened)}>
            {menuOpened ? <IoClose /> : <AiOutlineMenu />}
        </button>
        <div className="MenuShadow" style={menuOpened ? { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' } : { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}></div>
        <div className="MenuBlueShadow" style={menuOpened ? { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' } : { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}></div>
        <div id="MenuOptions" style={menuOpened ? { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' } : { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }} className="MenuOptions">
            <Link onClick={(e) => LinkHandler(e, '/')} className="MenuOptions__link" href="/">
                <div style={{ borderColor: router.pathname === '/' ? '#00C11E' : 'rgba(0,0,0,0)' }} className="MenuOptions__link-icon"><AiFillHome /></div>
                <span className="MenuOptions__link-name">Strona główna</span>
            </Link>
            <Link onClick={(e) => LinkHandler(e, '/about')} className="MenuOptions__link" href="/about">
                <div style={{ borderColor: router.pathname === '/about' ? '#00C11E' : 'rgba(0,0,0,0)' }} className="MenuOptions__link-icon"><IoPersonSharp /></div>
                <span className="MenuOptions__link-name">O mnie</span>
            </Link>
            <Link onClick={(e) => LinkHandler(e, '/projects')} className="MenuOptions__link" href="/projects">
                <div style={{ borderColor: router.pathname === '/projects' ? '#00C11E' : 'rgba(0,0,0,0)' }} className="MenuOptions__link-icon"><AiFillCode /></div>
                <span className="MenuOptions__link-name">Projekty</span>
            </Link>
            <Link onClick={(e) => LinkHandler(e, '/contact')} className="MenuOptions__link" href="/contact">
                <div style={{ borderColor: router.pathname === '/contact' ? '#00C11E' : 'rgba(0,0,0,0)' }} className="MenuOptions__link-icon"><IoMail /></div>
                <span className="MenuOptions__link-name">Kontakt</span>
            </Link>
        </div>
    </Navigator>
}

const Navigator = styled.nav`
position: fixed;
top: 0rem;
right: 0rem;
width: 100%;
z-index: 1000000000;
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

`;

export default Nav;