import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        border: 0;
        margin: 0;
    }
    html, body {
        box-sizing: inherit;
        font-family: Open-Sans, Helvetica, sans-serif;
    }
`;
