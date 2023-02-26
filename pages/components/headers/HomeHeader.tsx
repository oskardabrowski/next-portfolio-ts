import { NextPage } from "next"
import styled from "styled-components"

export const HomeHeader:NextPage = () => {
  return (
    <HomeHeaderSection>HomeHeader</HomeHeaderSection>
  )
}

const HomeHeaderSection = styled.header`
width: 100%;
height: 100vh;
margin: 0px;
padding: 0px;
`;