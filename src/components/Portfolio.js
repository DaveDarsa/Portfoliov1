import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { sectionVars } from "../animations/PageTransitions";
//animation controller
import SectionAnims from "../util/SectionAnims";

const Portfolio = () => {
  const [portRef, animToUse] = SectionAnims();

  return (
    <StyledPortfolio ref={portRef} animate={animToUse} variants={sectionVars}>
      Projects
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled(motion.div)`
  background-color: greenyellow;
  padding: 20rem;
`;

export default Portfolio;
