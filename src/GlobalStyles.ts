import { createGlobalStyle } from "styled-components";
import shape from "./assets/shapes/shape.svg";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        height: 100vh;
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, sans-serif;
        background: top left no-repeat url(${shape}) #EAF2F2;
        display: grid;
        justify-items: center;
        align-items: center;
    }
`;
