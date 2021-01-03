import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { sectionVars } from "../animations/PageTransitions";
//animation controller
import SectionAnims from "../util/SectionAnims";
import JsIcon, { SassIcon, HtmlIcon, ReactIcon } from "../images/reactsvg";

const SkillSection = () => {
  const [skillRef, animToUse] = SectionAnims();

  return (
    <StyledSkills ref={skillRef} animate={animToUse} variants={sectionVars}>
      <h2>Things I know</h2>
      <div className="tempwrap">
        <JsIcon />
        <ReactIcon />
        <SassIcon fill="#CF649A" />
        <HtmlIcon />
      </div>
    </StyledSkills>
  );
};

const StyledSkills = styled(motion.div)`
  padding: 20rem;
  padding-top: 5rem;
  .tempwrap {
    filter: contrast(90%);
    margin-top: 5rem;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    color: #888;
    text-align: center;
    font-size: 4rem;
  }
`;

export default SkillSection;
