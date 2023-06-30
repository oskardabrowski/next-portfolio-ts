import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import { GlobalContext } from "../../GlobalContext";
import { useContext, useRef, useState, useEffect } from "react";

const ShortDesc:NextPage = () => {
  const ref = useRef(null);

  const {LinkHandler, isInViewport} = useContext(GlobalContext);

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
    <ShortDescStyles ref={ref}>
      <h2 className="Header" style={{ left: isIntersecting ? '0%' : '-50%'}}>About me<span className="colored">.</span></h2>
      <div className="Body">
        <div className="Body-img" style={{ left: isIntersecting ? '0%' : '-50%'}}>
          <div className="Body-img-container coloredBackground"></div>
        </div>
        <div className="Body-paragraph" style={{ right: isIntersecting ? '0%' : '-110%'}}>
          <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor volutpat erat, at mollis erat fringilla sed. Fusce non lectus augue. Ut pellentesque aliquet pharetra. Aliquam ac orci ut nibh bibendum suscipit. Nulla pretium euismod varius. Etiam dignissim ante at magna commodo scelerisque. In at nunc dolor. Donec ornare sed urna sit amet vulputate. Aenean sed eros non massa aliquam hendrerit id eu urna. Ut vitae ex vitae erat cursus congue. Pellentesque facilisis ut sapien quis tempus. Vestibulum felis nulla, mattis sit amet ligula eget, interdum pretium turpis.
            Praesent luctus mollis neque quis rutrum. Maecenas sed dui ligula. Donec nec libero dui. Duis placerat lectus a viverra facilisis. Sed gravida risus augue, porttitor feugiat urna mollis in. Curabitur lacinia mollis nulla ac hendrerit. Maecenas nec tellus at tellus aliquet aliquam cursus vel nibh.

          </p>
        </div>
      </div>
      <div className="Buttons" style={{ left: isIntersecting ? '0%' : '-100%'}}>
        <Link className="Buttons-link" href="/about" onClick={(e) => LinkHandler(e, '/about')}>Read more</Link>
      </div>
    </ShortDescStyles>
  )
}

const ShortDescStyles = styled.section`
width: 100%;
min-height: 100vh;
color: white;
display: flex;
flex-direction: column;

.Header {
  font-family: 'Arimo';
  font-size: 2.5rem;
  margin-top: 1rem;
  margin-left: 2rem;
  position: relative;
  transition: all 1.5s ease-in-out;
}

.Body {
  flex-grow: .975;
  display: flex;
  overflow: hidden;
  &-img {
    flex-grow: .4;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 1.5s .25s ease-in-out;
    &-container {
      border-radius: 50%;
      width: 25rem;
      height: 25rem;
    }
  }
  &-paragraph {
    flex-grow: .6;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    transition: all 2.5s .25s ease-in-out;
    position: relative;

    & > p {
      font-family: 'Arimo';
      font-size: 1.5rem;
      line-height: 2.5rem;
      text-indent: 5rem;
      text-align: justify;
    }
  }
}

.Buttons {
  margin: 1rem;
  &-link {
    padding: .75rem;
    font-family: 'Arimo';
    color: white;
    font-weight: bold;
    border-radius: 50rem;
    transition: all .5s ease-in-out;
    transition: left 1.5s .5s ease-in-out;
    background: #0070F3;
    position: relative;

    &:hover {
      cursor: pointer;
      background: black;
      color: #0070F3;
    }
  }
}

@media(max-width: 75em) {
  .Body {
    flex-direction: column;
  }
}
@media(max-width: 50em) {
  .Header {
    font-size: 2rem;
  }
  .Body {
    &-img {
      &-container {
        width: 15rem;
        height: 15rem;
      }
    }
    &-paragraph {
      & > p {
        font-size: 1.15rem;
        line-height: 1.75rem;
        text-indent: 3rem;
      }
    }
  }
}
`;

export default ShortDesc;