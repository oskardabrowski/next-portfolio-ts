import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0px;
    padding: 0px;
}

html {
    margin: 0px;
    padding: 0px;
}

body {
    background-color: black;
    margin: 0px;
    padding: 0px;
}

a {
    text-decoration: none;
}

canvas {
    position: relative !important;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: black;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(to top, #0070F3, #00AEFF);
    border-radius: 50rem;
    transition: all .5s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to top, #00C11E, #50FF6C);
}

.colored {
  background: linear-gradient(to top right, #0070F3, #00AEFF);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.coloredBackground {
  background: linear-gradient(to top right, #0070F3, #00AEFF);
}

`;

export default GlobalStyles;