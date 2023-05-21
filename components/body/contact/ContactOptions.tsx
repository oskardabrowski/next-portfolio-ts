import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const ContactOptions:NextPage = () => {
  return (
    <Options>
        <div className="Options">
            <div className="Options-option coloredBackground">
                <a href="https://www.linkedin.com/in/oskar-d%C4%85browski-024455226/">Linkedin</a>
            </div>
            <div className="Options-option coloredBackground">
                oskar.dabrowski12890@gmail.com
            </div>
        </div>
        <div className="ContactForm">
            <form>
                <input type="text" />
                <input type="email" />
                <textarea></textarea>
                <button>Submit</button>
            </form>
        </div>
    </Options>
  )
}

const Options = styled.div`
width: 100%;
height: auto;
display: flex;
.Options {
    width: 50%;
    &-option {
        margin: 1rem 0rem;
        padding: 1rem;
        width: 30rem;
        border-radius: 0rem 50rem 50rem 0rem;
        color: white;
        font-size: 1.2rem;
        font-family: 'Arimo';

        & > a {
            color: white;
            font-size: 1.2rem;
            font-family: 'Arimo';
            transition: all .5s ease-in-out;
            &:hover {
                cursor: pointer;
                color: blue;
            }
        }
    }
}
.ContactForm {
    width: 50%;
}
`;

export default ContactOptions