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
`;

export default ContactHead