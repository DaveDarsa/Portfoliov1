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
//images
import clean from "../images/clean-code.svg";
import efficient from "../images/bar-graph.svg";
import scalable from "../images/scalable.svg";
import maintainable from "../images/optimize.svg";

const Home = () => {
  //slider ref and initialization
  const sliderRef = SliderWatcher();

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
            Hello,<span>Dave</span>here.
            <br />
            I'm a front-end Developer.
          </h1>
        </div>
        <AnimatePresence>
          <motion.div className="inforight">
            <DescElement
              variants={DescVariants}
              initial="initial"
              animate="animate"
              className={`skilldesc ${0}`}
              custom={0}
            >
              <h2>My Code Is</h2>
              <div className="descbox">
                <div className="desc__top">
                  <div className="clean">
                    <div className="img">
                      <img src={clean} alt="" />
                    </div>
                    <h3>clean</h3>
                  </div>
                  <div className="efficient">
                    <div className="img">
                      <img src={efficient} alt="" />
                    </div>
                    <h3>efficient</h3>
                  </div>
                </div>
                <div className="desc__bot">
                  <div className="scalable">
                    <div className="img">
                      <img src={scalable} alt="" />
                    </div>
                    <h3>scalable</h3>
                  </div>
                  <div className="maintainable">
                    <div className="img">
                      <img src={maintainable} alt="" />
                    </div>
                    <h3>maintainable</h3>
                  </div>
                </div>
              </div>
            </DescElement>
            <DescElement
              variants={DescVariants}
              initial="initial"
              animate="animate"
              className={`skilldesc ${1}`}
              custom={1}
            >
              second
            </DescElement>
            <DescElement
              variants={DescVariants}
              initial="initial"
              animate="animate"
              className={`skilldesc ${2}`}
              custom={2}
            >
              third
            </DescElement>
          </motion.div>
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
