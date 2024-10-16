import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.colors.backgroundSecondary};
        transition: background-color .2s;
        padding: 50px 0 0 0;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        line-height: 1.429;
        color: black;
    }
`