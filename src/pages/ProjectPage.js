import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { TransitionVariants } from "../animations/PageTransitions";

const ProjectPage = () => {
  return (
    <StyledProjects
      variants={TransitionVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      projects
    </StyledProjects>
  );
};
const StyledProjects = styled(motion.div)`
  border: 1px solid green;
  height: 100vh;
  background-color: greenyellow;
`;

export default ProjectPage;
