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
        background-color:#f7f7f7;
        overflow-x:hidden;
    }
    svg{
        height:20rem;
        width:20rem;
        
    }
    ::-webkit-scrollbar{
        width:.3rem;

    }
    ::-webkit-scrollbar-track{
        background-color:#3F4652;
    }
    ::-webkit-scrollbar-thumb{
        background-color:#E44E4E;
     
    }
  
    ::-webkit-scrollbar-corner{
        border-radius:1rem;
    }
    ::-webkit-scrollbar-button{
        background-color:#f7f7f7;
    }
`;

export default GlobalStyles;
