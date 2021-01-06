import React from "react";
import { sectionVars } from "../animations/PageTransitions";
import { Line, StyledSkills } from "./styles/StyledComps";
//animation controller
import SectionAnims from "../util/SectionAnims";
import JsIcon, { SassIcon, HtmlIcon, ReactIcon } from "../images/logos";

const SkillSection = () => {
  const [skillRef, animToUse] = SectionAnims();

  return (
    <StyledSkills ref={skillRef} animate={animToUse} variants={sectionVars}>
      <h2>Get to know me</h2>
      <h2 className="aboutme">
        My name is <span>Davit Darsavelidze</span>. I'm from Tbilisi, Georgia.
        I've primarily been a JavaScript developer for 5+ years and counting. I
        enjoy tackling and understanding the challenging parts of the language.
        I'm obsessed with creating user-friendly interfaces with React.js
      </h2>
      <div className="skillset">
        <h3 className="desc">
          Skillset <span></span>
        </h3>
        <div className="skillsetIcons">
          <div className="logobox">
            <JsIcon />
            <Line color="#F7DF1E" />
            <p>
              Over 5 years of experience and deep understanding of JavaScript.
              Up to date with all the Es6+ concepts
            </p>
          </div>
          <div className="logobox">
            <ReactIcon />
            <Line color="#53C1DE" />
            <p>
              3+ years of experience with creating performant,maintainable and
              scalable web apps with React, Context API and Redux
            </p>
          </div>
          <div className="logobox">
            <SassIcon />
            <Line color="#CF649A" />
            <p>
              Pixel perfect implementation of a given design. One can't have CSS
              without leveraging the power of Sass
            </p>
          </div>
          <div className="logobox">
            <HtmlIcon />
            <Line color="#E44D26" />
            <p>
              Building properly structured websites. Oftentimes using the BEM
              methodology
            </p>
          </div>
        </div>
      </div>
      <div className="otherskills">
        <h4>Others:</h4>
        <div className="skilllist">
          <div className="skillitem">
            <div className="skillicon">1</div>
            <div className="skillname">CSS</div>
          </div>
          <div className="skillitem">
            <div className="skillicon"> 1</div>
            <div className="skillname">Materialize CSS</div>
          </div>
          <div className="skillitem">
            <div className="skillicon">1</div>
            <div className="skillname">Styled Components</div>
          </div>
          <div className="skillitem">
            <div className="skillicon">1</div>
            <div className="skillname">Framer Motion</div>
          </div>
          <div className="skillitem">
            <div className="skillicon">1</div>
            <div className="skillname">Redux</div>
          </div>
          <div className="skillitem">
            <div className="skillicon">1</div>
            <div className="skillname">Git</div>
          </div>
          <div className="skillitem">
            <div className="skillicon">1</div>
            <div className="skillname">Node.js</div>
          </div>
        </div>
      </div>
      <div className="languages">
        <h4>Languages I speak:</h4>
        LANGUAGES I SPEAK: English - native proficiency, Georgian - native
      </div>
      <div className="futuregoals">
        <h4>Future goals!</h4>
        Mastering Node, learning Deno, learning WebXR device APi
      </div>
    </StyledSkills>
  );
};

export default SkillSection;
