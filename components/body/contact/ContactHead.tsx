import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const ContactHead:NextPage = () => {
  return (
    <Head>Here you can contact with me<span className="colored">!</span></Head>
  )
}

const Head = styled.header`
width: auto;
height: auto;
margin: 2rem;
color: white;
font-size: 2.5rem;
font-family: 'Arimo';
font-weight: bold;
@media(max-width: 71.875em) {
    width: max-content;
    padding: 2rem;
    margin: 0;
}
@media(max-width: 43.75em) {
    font-size: 1.5rem;
    padding: 1.5rem;
}
@media(max-width: 25em) {
    font-size: 1rem;
    padding: 1rem;
}
`;

export default ContactHead