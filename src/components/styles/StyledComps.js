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
        padding-right: 2rem;
        font-size: 7rem;
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
