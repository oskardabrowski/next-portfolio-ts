import { NextPage } from "next";
import StyledComponentsRegistry from "./lib/registry";

const About:NextPage = () => {
    return <StyledComponentsRegistry>
        <div>
            About Page
        </div>
    </StyledComponentsRegistry>
}

export default About;