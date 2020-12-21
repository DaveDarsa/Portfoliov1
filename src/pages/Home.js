import React from "react";
import { TransitionVariants } from "../animations/PageTransitions";
import { motion } from "framer-motion";
import styled from "styled-components";

const Home = () => {
  console.log(TransitionVariants);
  return (
    <StyledHome
      variants={TransitionVariants}
      animate="visible"
      initial="initial"
      exit="exit"
    >
      <div className="infoleft">
        <h1>
          Hello, My name is <span>Davit</span>
          And I'm a front-end Developer
        </h1>
      </div>
      <div className="inforight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque,
        assumenda harum saepe dolores explicabo quidem inventore quis fuga amet!
      </div>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  height: 93vh;
  display: flex;
  .infoleft {
    padding: 10vw;
    padding-top: 8rem;
    flex: 1;
    background-color: #3f4652;
    display: flex;
    align-items: center;
    h1 {
      color: white;
      letter-spacing: 3px;
      text-transform: capitalize;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 4.3rem;
      line-height: 5.5rem;
      span {
        padding-right: 2rem;
        font-size: 5rem;
        display: inline-block;
        color: #e44e4e;
      }
    }
  }
  .inforight {
    padding: 10vw;
    flex: 1;
    background-color: #e44e4e;
  }
`;
export default Home;
