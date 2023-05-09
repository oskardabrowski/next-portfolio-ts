import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

const AboutDescription:NextPage = () => {
  return (
    <AboutContainer>
      <h2 className="Head">Who am I<span className="colored">?</span></h2>
      <p className="Desc">One of these days i'm going to get that red dot, just you wait and see catty ipsum.
        Run outside as soon as door open i love cats i am one wake up scratch humans leg for
        food then purr then i have a and relax, flee in terror at cucumber discovered on floor
        yet sniff all the things yet find a way to fit in tiny box. My water bowl is clean
        and freshly replenished, so i'll drink from the toilet attempt to leap between furniture
        but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to
        do that now i shall wash myself intently yet pose purrfectly to show my beauty or purr,
        yet as lick i the shoes or slap kitten brother with paw who's the baby. Reward the chosen
        human with a slow blink eat plants, meow, and throw up because i ate plants attack the dog
        then pretend like nothing happened growl at dogs in my sleep for run around the house at
        4 in the morning love and coo around boyfriend who purrs and makes the perfect moonlight
        eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125
        sweater).
      </p>
      <div className="Image">
        <div className="Image-center"></div>
      </div>
      <h3 className="Head">Why programming<span className="colored">?</span></h3>
      <p className="Desc">One of these days i'm going to get that red dot, just you wait and see catty ipsum.
        Run outside as soon as door open i love cats i am one wake up scratch humans leg for
        food then purr then i have a and relax, flee in terror at cucumber discovered on floor
        yet sniff all the things yet find a way to fit in tiny box. My water bowl is clean
        and freshly replenished, so i'll drink from the toilet attempt to leap between furniture
        but woefully miscalibrate and bellyflop onto the floor.
      </p>
    </AboutContainer>
  )
}

const AboutContainer = styled.article`
width: 100%;
height: auto;
font-family: 'Arimo';
color: white;
z-index: 100;
margin-top: 5rem;

.Head {
  font-size: 3rem;
  margin-left: 2rem;
}

.Desc {
  margin: 1rem 2rem;
  font-size: 1.5rem;
  text-indent: 50px;
  text-align: justify;
  line-height: 2.25rem;
}

.Image {
  width: 100%;
  padding: 2rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &-center {
    width: 20rem;
    height: 20rem;
    background: linear-gradient(to top right, #0070F3, #00AEFF);
    border-radius: 50rem;
  }
}

`;

export default AboutDescription