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
  StyledSlideOne,
  StyledSlideTwo,
  StyledSlideThree,
  TransitionElem,
} from "../components/styles/StyledComps";

//componenets/utils
import SliderWatcher from "../util/SliderWatcher";
import SkillSection from "../components/SkillSection";
import Portfolio from "../components/Portfolio";
import { scrollTo } from "../util/ScrollTop";
//images
import clean from "../images/clean.svg";
import efficient from "../images/speedometer.svg";
import scalable from "../images/scale.svg";
import maintainable from "../images/optimized.svg";
//fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  //slider ref and initialization
  const sliderRef = SliderWatcher();

  return (
    <>
      <StyledHome
        className="infos"
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
            <StyledSlideOne
              variants={DescVariants}
              initial="initial"
              animate="animate"
              className={`skilldesc ${0}`}
              custom={0}
            >
              <h2>
                My <span>Code </span>Is
              </h2>
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
            </StyledSlideOne>

            <StyledSlideTwo
              variants={DescVariants}
              initial="initial"
              animate="animate"
              className={`skilldesc ${1}`}
              custom={1}
            >
              <p>
                I'm always <span>learning</span> and <span>improving</span>.
                Want to see what projects I've done recently?
                <button
                  onClick={(e) => {
                    scrollTo("portfolio");
                  }}
                >
                  Right This Way
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{
                      fontSize: "1.5rem",
                      padding: 0,
                      margin: 0,
                    }}
                  />
                </button>
              </p>
            </StyledSlideTwo>
            <StyledSlideThree
              variants={DescVariants}
              initial="initial"
              animate="animate"
              className={`skilldesc ${2}`}
              custom={2}
            >
              <h2>What am I up to?</h2>
              <p>
                I'm usually freelancing or tending to my side projects. If
                you've got a question or want to reach out find me on
                <a href="https://github.com/daveDarsa">Github</a>
                or send me an email from the form down below
              </p>
              <button
                onClick={(e) => {
                  scrollTo("contact");
                }}
              >
                Send me an email
                <br />
                <FontAwesomeIcon
                  icon={faArrowDown}
                  style={{
                    fontSize: "1.5rem",
                    padding: 0,
                    margin: 0,
                  }}
                />
              </button>
            </StyledSlideThree>
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
