import React from "react";
import { sectionVars } from "../animations/PageTransitions";
import { Line, StyledSkills } from "./styles/StyledComps";
//animation controller
import SectionAnims from "../util/SectionAnims";
import JsIcon, {
  SassIcon,
  HtmlIcon,
  ReactIcon,
  Materialize,
  Css3,
  Figma,
  Framer,
  Redux,
  GitLogo,
  NodeLogo,
} from "../images/logos";

const SkillSection = () => {
  const [skillRef, animToUse] = SectionAnims();

  return (
    <StyledSkills ref={skillRef} animate={animToUse} variants={sectionVars}>
      <h2 className="title">Get to know me</h2>
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
        <div className="flexgroup">
          <h4>Other Skils</h4>
          <span></span>
        </div>

        <div className="skilllist">
          <div className="skillitem">
            <div className="skillicon css">
              <Css3 />
            </div>
            <div className="skillname">CSS</div>
          </div>

          <div className="skillitem">
            <div className="skillicon">
              <Materialize />
            </div>
            <div className="skillname">Materialize</div>
          </div>
          <div className="skillitem">
            <div className="skillicon">
              <Redux />
            </div>
            <div className="skillname">Redux</div>
          </div>
          <div className="skillitem">
            <div className="skillicon">
              <Framer />
            </div>
            <div className="skillname framer">Framer Motion</div>
          </div>
          <div className="skillitem styled">
            <div className="skillicon">💅</div>
            <div className="skillname">Styled Components</div>
          </div>

          <div className="skillitem">
            <div className="skillicon">
              <Figma />
            </div>
            <div className="skillname">Figma</div>
          </div>

          <div className="skillitem">
            <div className="skillicon">
              <GitLogo />
            </div>
            <div className="skillname">Git</div>
          </div>
          <div className="skillitem">
            <div className="skillicon">
              <NodeLogo />
            </div>
            <div className="skillname">Node.js</div>
          </div>
        </div>
      </div>
      <div className="languages">
        <div className="flexgroup">
          <h4>Languages </h4>
          <span></span>
        </div>
        <div className="flexright">
          <p>English - native proficiency, Georgian - native </p>
        </div>
      </div>
      <div className="futuregoals">
        <div className="flexgroup">
          <h4>Future Goals</h4>
          <span></span>
        </div>
        <div className="flexright">
          <p> Mastering Node, learning Deno, learning WebXR API</p>
        </div>
      </div>
    </StyledSkills>
  );
};

export default SkillSection;
