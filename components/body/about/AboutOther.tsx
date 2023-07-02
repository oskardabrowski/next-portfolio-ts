import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from "../../GlobalContext";
import { useContext, useRef, useState, useEffect } from "react";

const AboutOther:NextPage = () => {
  const ref = useRef(null);

  const {isInViewport} = useContext(GlobalContext);

   const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if(isInViewport(ref.current)) {
          setTimeout(() => {
            setIsIntersecting(true);
          }, 250);
        } else {
          setIsIntersecting(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <OtherWrapper ref={ref}>
      <h3 className="Head" style={{ transition: 'all 2.5s ease-in-out', left: isIntersecting ? '0%' : '-100%' }}>My other interests<span className="colored">!</span></h3>
      <div className="Item" style={{ transition: 'all 2.5s ease-in-out', left: isIntersecting ? '0%' : '150%' }}>
        <div className="ImageWrapper" style={{ background: 'linear-gradient(to top right, #CF0000, #FF0000)' }}>
          <div className="ImageContainer">
            <img src="/images/interests/Movies.jpg" alt="Movies"/>
          </div>
        </div>
        <div className="ShortDescription">
          <div className="Subhead">Movies</div>
          <div className="Text"><p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel egestas nisi, pretium viverra elit. Vivamus scelerisque imperdiet hendrerit. Integer bibendum venenatis dui in hendrerit. Etiam semper maximus risus, ut lobortis elit gravida non. In maximus accumsan ex. Nulla congue ut est nec sodales. Vestibulum lectus est, lobortis in efficitur a, eleifend nec eros. Aenean et rutrum metus. Quisque et congue ante. Sed a scelerisque erat, sit amet vulputate elit. Suspendisse eu nulla facilisis, commodo sapien et, mattis nulla. Duis a velit ut eros aliquam faucibus at eget risus. Cras eget euismod ante, ut scelerisque diam.
          </p></div>
        </div>
      </div>
      <div className="Item" style={{ transition: 'all 2.5s 2s ease-in-out', left: isIntersecting ? '0%' : '-150%' }}>
        <div className="ImageWrapper" style={{ background: 'linear-gradient(to top right, #00B001, #00FF02)' }}>
          <div className="ImageContainer">
            <img src="/images/interests/Books.jpg" alt="Movies"/>
          </div>
        </div>
        <div className="ShortDescription">
          <div className="Subhead">Books</div>
          <div className="Text"><p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel egestas nisi, pretium viverra elit. Vivamus scelerisque imperdiet hendrerit. Integer bibendum venenatis dui in hendrerit. Etiam semper maximus risus, ut lobortis elit gravida non. In maximus accumsan ex. Nulla congue ut est nec sodales. Vestibulum lectus est, lobortis in efficitur a, eleifend nec eros. Aenean et rutrum metus. Quisque et congue ante. Sed a scelerisque erat, sit amet vulputate elit. Suspendisse eu nulla facilisis, commodo sapien et, mattis nulla. Duis a velit ut eros aliquam faucibus at eget risus. Cras eget euismod ante, ut scelerisque diam.
          </p></div>
        </div>
      </div>
      <div className="Item" style={{ transition: 'all 2.5s 4s ease-in-out', left: isIntersecting ? '0%' : '150%' }}>
        <div className="ImageWrapper" style={{ background: 'linear-gradient(to top right, #B900CF, #E400FF)' }}>
          <div className="ImageContainer">
            <img style={{ width: 'auto', height: '100%', position: 'relative', left: '-50%' }} src="/images/interests/Graphic.jpg" alt="Movies"/>
          </div>
        </div>
        <div className="ShortDescription">
          <div className="Subhead">Graphic</div>
          <div className="Text"><p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel egestas nisi, pretium viverra elit. Vivamus scelerisque imperdiet hendrerit. Integer bibendum venenatis dui in hendrerit. Etiam semper maximus risus, ut lobortis elit gravida non. In maximus accumsan ex. Nulla congue ut est nec sodales. Vestibulum lectus est, lobortis in efficitur a, eleifend nec eros. Aenean et rutrum metus. Quisque et congue ante. Sed a scelerisque erat, sit amet vulputate elit. Suspendisse eu nulla facilisis, commodo sapien et, mattis nulla. Duis a velit ut eros aliquam faucibus at eget risus. Cras eget euismod ante, ut scelerisque diam.
          </p></div>
        </div>
      </div>
    </OtherWrapper>
  )
}

const OtherWrapper = styled.div`
width: 100%;
min-height: 10rem;
color: white;
font-family: 'Arimo';
margin: 3rem 0rem;
overflow: hidden;
.Head {
  font-size: 3rem;
  margin-left: 2rem;
  position: relative;
}

.ShortDescription {
  padding: 0rem 1.5rem;
}

.Text {
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: justify;
  text-indent: 50px;
}

.Subhead {
  font-size: 1.75rem;
  font-weight: bold;
}

.Item {
  margin: 1rem 0rem;
  display: flex;
  padding: 0rem 1rem;
  position: relative;
  &:nth-child(3) {
    flex-direction: row-reverse;
  }
}

.ImageWrapper {
  width: 22.5rem;
  height: 22.5rem;
  min-width: 22.5rem;
  min-height: 22.5rem;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ImageContainer {
  width: 20rem;
  height: 20rem;
  overflow: hidden;
  border-radius: 50%;
  & > img {
    width: 100%;
  }
}

@media(max-width: 62.5em) {
  .Item {
    flex-direction: column;
    align-items: center;
    &:nth-child(3) {
      flex-direction: column;
    }
  }
}

@media(max-width: 50em) {
  .Head {
    font-size: 2rem;
    margin-left: 2rem;
    position: relative;
    transition: all 2.5s ease-in-out;
  }

  .Text {
    margin-top: .5rem;
    font-size: 1.15rem;
    line-height: 1.5rem;
    text-indent: 3rem;
  }

  .ImageWrapper {
    width: 15rem;
    height: 15rem;
    min-width: 15rem;
    min-height: 15rem;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ImageContainer {
    width: 12.5rem;
    height: 12.5rem;
    overflow: hidden;
    border-radius: 50%;
    & > img {
      width: 100%;
    }
  }
}

`;

export default AboutOther