import { NextPage } from 'next';
import styled from 'styled-components';

const Footer:NextPage = () => {
  return (
    <FooterElement>
        <div className="Footer-Top"></div>
        <div className="Footer-Bottom"></div>
    </FooterElement>
  )
}

const FooterElement = styled.footer`
width: 100%;
height: 50vh;
color: white;
overflow: hidden;
position: relative;

.Footer {
    width: 100%;
    height: 50%;
    background: linear-gradient(to right, #0070F3, #00AEFF);
    color: white;
    transform: skew(25deg, 0deg);
    position: absolute;

    &-Top {
        left: 0%;
        top: 0;
    }
    &-Bottom {
        bottom: 0;
        right: 0%;
    }
}
`;


export default Footer;