import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { sectionVars } from "../animations/PageTransitions";
//animation controller
import SectionAnims from "../util/SectionAnims";

const Portfolio = () => {
  const [portRef, animToUse] = SectionAnims();

  return (
    <StyledPortfolio
      id="portfolio"
      ref={portRef}
      animate={animToUse}
      variants={sectionVars}
    >
      <h2>My Recent Projects</h2>
      <div className="project">
        <div className="flexcontainer">
          <div className="project__img"></div>
          <div className="project__desc">
            <h3>Custom Mood</h3>
            <p>
              A webapp made for meditating/relaxing with enjoyable animated
              visuals tailored to how the user feels. Customizable
              season,weather and time of day, as well as background audio
              complementing the ambience
            </p>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="flexcontainer">
          <div className="project__desc">
            <h3>WorkSmart</h3>
            <p>
              An app made to help people manage their lives better - a personal
              admin panel for responsibilities and activities. Customizable look
              to fit the visual needs of the user and the functionality to go
              with it.
            </p>
          </div>
          <div className="project__img"></div>
        </div>
      </div>

      <div className="project">
        <div className="flexcontainer">
          <div className="project__img"></div>
          <div className="project__desc">
            <h3>Unsure for now</h3>
            <p>
              One of the apps I wanted to make but still unsure which one. It
              could be the mountainXplorer or spacespeak kind of thing.
            </p>
          </div>
        </div>
      </div>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled(motion.div)`
  background-color: #f7f7f7;
  padding: 6rem 15vw;
  h2 {
    text-align: center;
    font-family: "Mukta", sans-serif;
    font-size: 4rem;
    color: #323841;
  }
  .project {
    padding: 10rem;
    &:not(:last-of-type) {
      border-bottom: 2px solid #323841;
    }
    h3,
    p {
      font-size: 3rem;
      margin-bottom: 2.5rem;
      font-family: "Roboto", sans-serif;
    }

    .flexcontainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__img {
      width: 40rem;
      height: 20rem;
      background: gray;
      cursor: pointer;
    }
    &__desc {
      flex-basis: 40%;

      p {
        font-size: 1.9rem;
        line-height: 2.8rem;
        margin-bottom: 0;
      }
    }
  }
`;

export default Portfolio;
