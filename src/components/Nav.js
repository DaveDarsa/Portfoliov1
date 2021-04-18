import React from "react";
import { NavVariants } from "../animations/PageTransitions";
import ghicon from "../images/ghLight.png";

//styled components
import { StyledLink, StyledNav, Styledul } from "./styles/StyledComps";
import { scrollTo } from "../util/ScrollTop";
const Nav = () => {
  const scrollToSection = (e, location) => {
    e.preventDefault();
    e.stopPropagation();
    scrollTo(location);
  };
  return (
    <StyledNav variants={NavVariants} initial="hidden" animate="visible">
      <div className="logoBox">
        <StyledLink to="/">D</StyledLink>
      </div>
      <div className="menuItems">
        <Styledul>
          <li>
            <button onClick={(e) => scrollToSection(e, "about")}>About</button>
          </li>
          <li>
            <button onClick={(e) => scrollToSection(e, "portfolio")}>
              Portfolio
            </button>
          </li>
          <li>
            <button onClick={(e) => scrollToSection(e, "contact")}>
              Contact
            </button>
          </li>
          <li>
            <a href="https://github.com/daveDarsa" target="blank">
              <img src={ghicon} alt="github icon" />
            </a>
          </li>
        </Styledul>
      </div>
    </StyledNav>
  );
};

export default Nav;
