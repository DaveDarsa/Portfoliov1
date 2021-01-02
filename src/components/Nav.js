import React from "react";
import { NavVariants } from "../animations/PageTransitions";
import { Link } from "react-router-dom";
import ghicon from "../images/ghLight.png";

//styled components
import { StyledLink, StyledNav, Styledul } from "./styles/StyledComps";
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

export default Nav;
