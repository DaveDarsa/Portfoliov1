import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const StyledHome = styled(motion.div)`
  height: 93vh;
  display: flex;
  position: relative;
  overflow: hidden;
  .infoleft {
    border-top: 2px solid #9ab4c2;
    padding: 8vw;
    padding-top: 8rem;
    flex: 1;
    background-color: #3f4652;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    h1 {
      color: white;
      letter-spacing: 3px;
      text-transform: capitalize;
      font-family: "Mukta", sans-serif;
      font-weight: lighter;
      font-size: 6.5rem;
      line-height: 9rem;
      span {
        font-size: 7rem;
        padding: 0 1rem;
        display: inline-block;
        color: #e44e4e;
        font-weight: 500;
      }
    }
  }
  .inforight {
    z-index: 1;
    padding: 8vw;
    flex: 1;
    background-color: #f7f7f7;
    position: relative;
    border-bottom: 1px solid #3f4652;
    /* background-color: #e44e4e; */
  }
`;

export const TransitionElem = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 5;
  background-color: #e44e4e;
  width: 100vw;
`;
export const DescElement = styled(motion.div)`
  border: 1px solid green;
  padding: 2rem;
  margin-bottom: 2 rem;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 90%;
  width: 90%;
  transform: translate(-50%, -50%);
`;

export const StyledLink = styled(Link)`
  z-index: 50;
  text-decoration: none;
  font-size: 3.5rem;
  display: inline-block;
  padding-top: 0.5rem;
  color: white;
  font-family: "bungee outline", sans-serif;
`;
export const StyledNav = styled(motion.nav)`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  height: 6vh;
  display: flex;
  padding: 1rem 10vw;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  /* background-color: rgba(230, 42, 25, 0.8); */
  background-color: #272c33;
  & > * {
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  .logobox {
    border: 2px solid green;
  }
`;

export const Styledul = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  font-family: "Lato", sans-serif;
  li {
    position: relative;
    margin-left: 3.5rem;
    padding-bottom: 0.5rem;

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0%;
      width: 0;
      visibility: hidden;
      background-color: #9ab4c2;
      padding: 0.1rem;
      transition: width 500ms cubic-bezier(0.535, -0.355, 0.43, 1.47);
    }
    &:hover::after {
      width: 90%;
      visibility: visible;
    }
    &:last-child::after {
      content: "";
      padding: 0;
    }
    a {
      text-decoration: none;
      color: white;
      text-transform: uppercase;
      font-size: 1.7rem;
      letter-spacing: 2px;
      transition: all 0.3s ease;
      position: relative;
      img {
        padding-top: 0.1rem;
        height: 3.5rem;
      }
    }
  }
`;
//reusable line for skills section
export const Line = styled.div`
  width: 70%;
  height: 0.3rem;
  margin: 2rem auto;
  border-radius: 2rem;
  background-color: ${(props) => {
    return props.color;
  }};
`;
//skills section styling
export const StyledSkills = styled(motion.div)`
  padding: 15rem;
  padding-top: 5rem;
  padding-bottom: 50rem;
  /* background-color: #23323a; */
  background-color: #323841;
  .aboutme {
    font-size: 2.1rem;
    line-height: 3.5rem;
    text-transform: none;
    font-family: "Mukta", sans-serif;
    margin-top: 2.5rem;
    font-weight: 400;
    color: #e9eff2;
    span {
      color: #e44e4e;
    }
  }
  .skillset {
    display: flex;
    margin-top: 5rem;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .desc {
      margin-bottom: 5rem;
      font-family: "Roboto", sans-serif;
      letter-spacing: 0.5rem;
      word-spacing: -0.2rem;
      color: white;
      font-size: 4rem;
      /* side by side design */
      /* flex-basis: 45%; */
      /* padding-left: 5rem; */
      /* display: flex; */
      /* align-items: center;
    justify-content: space-evenly; */
      span {
        /* display: inline-block; */
        display: block;
        margin-top: 1.5rem;
        width: 120%;
        transform: translateX(-10%);
        height: 0.4rem;
        border-radius: 2rem;
        background-color: #e44e4e;
      }
    }
  }
  .skillsetIcons {
    width: 80%;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: baseline;

    & > * {
      filter: contrast(100%);
      transition: filter 0.2s ease;
      cursor: pointer;
    }
    & > *:hover {
      filter: contrast(120%);
    }
    & > div > svg {
      width: 18rem;
      height: 18rem;
    }
    .logobox {
      text-align: center;
      p {
        color: #f7f7f7;
        font-size: 2rem;
        line-height: 3rem;
        max-width: fit-content;
        word-wrap: break-word;
      }

      &:last-of-type svg {
        transform: translateX(2.5rem);
      }
    }
  }
  h2 {
    font-family: "Roboto", sans-serif;
    color: #f7f7f7;
    letter-spacing: 2.5px;
    text-align: center;
    font-size: 4rem;
  }
  .otherskills {
    margin-top: 2rem;
    border: 5px solid green;
    padding: 10rem 15rem;
    display: flex;
    justify-content: space-between;
    h4 {
      flex-basis: 45%;
      font-size: 1.8rem;
      color: #f7f7f7;
    }
    .skilllist {
      flex-basis: 55%;
      font-size: 2rem;
      color: #f7f7f7;
    }
    .skillitem {
      border: 2px solid green;

      .skillicon {
      }
      .skillname {
      }
    }
  }

  .languages,
  .futuregoals {
    padding: 5rem 15rem;
    color: #f7f7f7;
  }
`;
