import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { sectionVars } from "../animations/PageTransitions";
//animation controller
import SectionAnims from "../util/SectionAnims";

const SkillSection = () => {
  const [skillRef, animToUse] = SectionAnims();

  return (
    <StyledSkills ref={skillRef} animate={animToUse} variants={sectionVars}>
      Tech Stack
    </StyledSkills>
  );
};

const StyledSkills = styled(motion.div)`
  background-color: cyan;
  padding: 20rem;
`;

export default SkillSection;
