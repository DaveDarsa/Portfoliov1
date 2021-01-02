import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ghicon from "../images/ghLight.png";

const NavVariants = {
  hidden: {
    y: -150,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const Nav = () => {
  return (
    <StyledNav variants={NavVariants} initial="hidden" animate="visible">
      <div className="logoBox">
        <StyledLink to="/">D</StyledLink>
      </div>
      <div className="menuItems">
        <Styledul>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <Link to="/project/1">About</Link>
          </li>
          <li>
            <a href="https://github.com/daveDarsa">
              <img src={ghicon} alt="github icon" />
            </a>
          </li>
        </Styledul>
      </div>
    </StyledNav>
  );
};
const StyledLink = styled(Link)`
  z-index: 50;
  text-decoration: none;
  font-size: 3.5rem;
  display: inline-block;
  padding-top: 0.5rem;
  color: white;
  font-family: "bungee outline", sans-serif;
`;
const StyledNav = styled(motion.nav)`
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

const Styledul = styled.ul`
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
export default Nav;
