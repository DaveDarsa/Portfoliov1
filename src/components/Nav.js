import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        </Styledul>
      </div>
    </StyledNav>
  );
};
const StyledLink = styled(Link)`
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
  font-family: "Lato", sans-serif;
  li {
    margin-left: 3.5rem;
    a {
      text-decoration: none;
      color: white;
      text-transform: uppercase;
      font-size: 1.5rem;
      letter-spacing: 2px;
    }
  }
`;
export default Nav;
