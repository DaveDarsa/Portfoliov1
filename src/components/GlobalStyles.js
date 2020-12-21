import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin:0;
        padding:0;
    }
    html{
        font-size:62.5%;
    }
    body{
        font-size:inherit;
        scroll-behavior:smooth;
    }

`;

export default GlobalStyles;
