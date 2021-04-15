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
    nav{
        display:flex;
        align-items:center;
      
    }
  
    .logoBox a{
        font-size:5rem;
    }
    .aboutme{
        letter-spacing:.2rem !important;
        font-size:2.2rem !important;
    }
    @media screen and (max-width:1600px){
        html{
            font-size:50%;
        }
    }
    @media screen and (max-width:1200px){
        html{
            font-size:35%;
        }
        .aboutme{
            font-size:2.5rem !important;
        }
        .logobox p{
            font-size:2.5rem !important;
        }
        .otherskills,.languages,.futuregoals{
            padding:5rem 0 !important;
        }
        nav{
          .menuItems{
            transform:translateY(1rem);  
        }
    }
    }
    @media screen and (max-width: 800px) {
       .project {
        padding: 5rem 0 !important;
    
      
    }
    @media screen and (max-width:700px){
        .portfolio {
        padding: 6rem 5vw !important;
      }
        .skillsetIcons{
            width:80% !important;
            display:flex !important;
            flex-wrap:wrap;
            justify-content:space-around;
            align-content:space-between;

         &>.logobox{
             flex-basis:30vw !important;
         }
        }
        .skilldesc:first-of-type {
        padding-top:5rem;
            }
        .infoleft{
            text-align:center;
        }
        .infos{
            flex-direction:column;
        }
        .otherskills { 
        .skilllist{
            display:flex;
            align-items:center;
            .styled{
                transform:translateY(1rem) !important;
                overflow:hidden;
            }
        }
        .skillitem{
            width:25%;
 
           }
        }
        .skillname{
                font-size:1.3rem !important;
            }
        
        .messagewrap{
            flex-direction:column;
            label{
                text-align:left !important;
            }

        }
    }

    @media screen and (max-width:570px){
        .skillsetIcons{
            width:100% !important;
            justify-content:center !important;
            &>.logobox{
             flex-basis:50vw !important;
             margin-bottom:5rem;
         }
        }
 
        .messagewrap{
            flex-basis:60% !important;
            margin:0;
            transform:translateX(-1rem);
        }
    }
    }
     @media screen and (max-width:450px){
        .portfolio {
        padding: 6rem 2vw !important;
      }
     }

    @media screen and (max-width:400px){
        html{
            font-size:30%;
        } 
     
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
