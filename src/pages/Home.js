import React from "react";
//animation variants
import {
  TransitionVariants,
  DescVariants,
  TransitionElemVars,
} from "../animations/PageTransitions";

//useful modules
import { motion, AnimatePresence } from "framer-motion";
//component styles
import {
  StyledHome,
  DescElement,
  TransitionElem,
} from "../components/styles/StyledComps";

//componenets/utils
import SliderWatcher from "../util/SliderWatcher";
import SkillSection from "../components/SkillSection";
import Portfolio from "../components/Portfolio";

const Home = () => {
  //slider ref and initialization
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
    <>
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
      <SkillSection />
      <Portfolio />
    </>
  );
};

export default Home;
