import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import { GlobalContext } from "../../GlobalContext";
import { useContext } from "react";

const ShortDesc:NextPage = () => {

  const {LinkHandler} = useContext(GlobalContext);

  return (
    <ShortDescStyles>
      <h2 className="Header">About me<span className="colored">.</span></h2>
      <div className="Body">
        <div className="Body-img">
          <div className="Body-img-container coloredBackground"></div>
        </div>
        <div className="Body-paragraph">
          <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor volutpat erat, at mollis erat fringilla sed. Fusce non lectus augue. Ut pellentesque aliquet pharetra. Aliquam ac orci ut nibh bibendum suscipit. Nulla pretium euismod varius. Etiam dignissim ante at magna commodo scelerisque. In at nunc dolor. Donec ornare sed urna sit amet vulputate. Aenean sed eros non massa aliquam hendrerit id eu urna. Ut vitae ex vitae erat cursus congue. Pellentesque facilisis ut sapien quis tempus. Vestibulum felis nulla, mattis sit amet ligula eget, interdum pretium turpis.
            Praesent luctus mollis neque quis rutrum. Maecenas sed dui ligula. Donec nec libero dui. Duis placerat lectus a viverra facilisis. Sed gravida risus augue, porttitor feugiat urna mollis in. Curabitur lacinia mollis nulla ac hendrerit. Maecenas nec tellus at tellus aliquet aliquam cursus vel nibh.

          </p>
        </div>
      </div>
      <div className="Buttons">
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
}

.Body {
  flex-grow: .975;
  display: flex;
  &-img {
    flex-grow: .4;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    background: #0070F3;

    &:hover {
      cursor: pointer;
      background: black;
      color: #0070F3;
    }
  }
}
`;

export default ShortDesc;