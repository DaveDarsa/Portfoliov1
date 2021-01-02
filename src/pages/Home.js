import React from "react";
import { TransitionVariants } from "../animations/PageTransitions";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import SliderWatcher from "../util/SliderWatcher";

const TransitionElemVars = {
  initial: {
    x: "-101vw",
  },
  animate: {
    x: "100vw",
    transition: {
      type: "spring",
      duration: 3,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 2,
    },
  },
};

const DescVariants = {
  initial: {
    opacity: 0,
    // scale: 0.98,
  },
  animate: (i) => ({
    opacity: 1,
    // scale: 1,
    transition: {
      duration: 1,
      delay: i + 1,
    },
  }),
  exit: {
    opacity: 0,
    // scale: 0.98,
  },
};

const Home = () => {
  //slider ref and view
  const sliderRef = SliderWatcher();

  const skillDivs = ["I do this", "I also do THAT", "Then I do this again"].map(
    (itemText, id) => {
      return (
        <DescElement
          key={id}
          variants={DescVariants}
          initial="initial"
          animate="animate"
          custom={id}
          className={`skilldesc ${id}`}
        >
          {itemText}
        </DescElement>
      );
    }
  );

  return (
    <StyledHome
      variants={TransitionVariants}
      animate="visible"
      initial="initial"
      exit="exit"
    >
      <div className="infoleft">
        <h1>
          Hello, My name is <span>Dave</span>
          And I'm a front-end Developer.
        </h1>
      </div>
      <AnimatePresence>
        <motion.div className="inforight">{skillDivs}</motion.div>
      </AnimatePresence>

      <TransitionElem
        ref={sliderRef}
        variants={TransitionElemVars}
        animate="animate"
        initial="initial"
        // onUpdate={onUpdate}
      />
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
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
    position: relative;
    /* background-color: #e44e4e; */
  }
`;
const TransitionElem = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 5;
  background-color: #e44e4e;
  width: 100vw;
`;

const DescElement = styled(motion.div)`
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
export default Home;
