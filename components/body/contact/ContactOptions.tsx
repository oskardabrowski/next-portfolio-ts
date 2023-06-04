import { NextPage } from 'next';
import React, { MutableRefObject, RefObject, useRef } from 'react';
import styled from 'styled-components';
import {IoIosMail} from 'react-icons/io';
import {BsLinkedin} from 'react-icons/bs';

const ContactOptions:NextPage = () => {
  const titleRef = useRef(null) as unknown as MutableRefObject<HTMLInputElement>;
  const emailRef = useRef(null) as unknown as MutableRefObject<HTMLInputElement>;
  const messageRef = useRef(null) as RefObject<HTMLTextAreaElement>;


  const formHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Submitted');
    console.log(titleRef.current.value);
    console.log(emailRef.current.value);
    console.log(messageRef.current?.value);
  }
  return (
    <Options>
        <div className="Options">
            <div className="Options-option coloredBackground">
                <BsLinkedin style={{fontSize: '2rem', marginRight: '1rem'}}/><a href="https://www.linkedin.com/in/oskar-d%C4%85browski-024455226/">Linkedin</a>
            </div>
            <div className="Options-option coloredBackground">
                <IoIosMail style={{fontSize: '2rem', marginRight: '1rem'}}/>oskar.dabrowski12890@gmail.com
            </div>
        </div>
        <div className="ContactForm">
            <form onSubmit={(e) => formHandler(e)} className="ContactForm-form">
                <label htmlFor="ContactTitle">Title<span className="colored">:</span></label>
                <input ref={titleRef} id="ContactTitle" className="ContactForm-form-title" type="text" placeholder="I want to contact with you about..." required />
                <label htmlFor="ContactEmail">Email<span className="colored">:</span></label>
                <input ref={emailRef} id="ContactEmail" className="ContactForm-form-email" type="email" placeholder="john.kowalski@gmail.com" required />
                <label htmlFor="ContactMessage">Message<span className="colored">:</span></label>
                <textarea ref={messageRef} id="ContactMessage" className="ContactForm-form-text" required placeholder="Hello Oskar..."></textarea>
                <button className="ContactForm-form-button">Submit</button>
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
        display: flex;
        align-items: center;

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
    &-form {
        color: white;
        font-family: 'Arimo';
        width: 90%;
        display: flex;
        flex-direction: column;
        & > label {
            font-size: 1.5rem;
            font-weight: bold;
        }
        & > input {
            padding: .75rem;
            background: none;
            font-size: 1.5rem;
            margin: .5rem 0rem 1rem 0rem;
            color: white;
            border: none;


            &:invalid {
                border-bottom: 3px solid red;
            }
            &:not(:invalid) {
                border-bottom: 3px solid #0070F3;
            }
            &:focus {
                border-bottom: 3px solid #FFB143;
            }
        }
        &-text {
            padding: .75rem;
            resize: none;
            border: none;
            background: none;
            font-size: 1.5rem;
            margin: .5rem 0rem 1rem 0rem;
            height: 15rem;
            color: white;
            &:focus {
                border-bottom: 3px solid #FFB143;
            }
            &:invalid {
                border-bottom: 3px solid red;
            }
            &:not(:invalid) {
                border-bottom: 3px solid #0070F3;
            }
        }
        &-button {
            padding: 1rem;
            width: 10rem;
            border-radius: 50rem;
            border: none;
            color: white;
            background: #0070F3;
            transition: all .5s ease-in-out;
            &:hover {
                cursor: pointer;
                background: black;
            }
        }
    }
}
`;

export default ContactOptions