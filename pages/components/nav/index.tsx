import type { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

interface NavProps {
  isLoading: boolean;
  // other props here
}


const Nav:NextPage = () => {
    return <Navigator>
        <div id='OpenCloseMenu' className='OpenClose'>Open/Close</div>
        <div id="MenuOptions" className='Options'>
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
            <div>Link 4</div>
        </div>
    </Navigator>
}

const Navigator = styled.nav`
position: fixed;
top: 1rem;
right: 1rem;
#OpenCloseMenu {
    background-color: black;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    border: 5px solid #0070f3;
    &:hover {
        cursor: pointer;
    }
}
#MenuOptions {
    display: none;
}

`;

export default Nav;