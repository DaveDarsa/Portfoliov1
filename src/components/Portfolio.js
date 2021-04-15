import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { sectionVars } from "../animations/PageTransitions";
//animation controller
import SectionAnims from "../util/SectionAnims";
//gifs
import customgif from "../images/customgif.gif";
import customimg from "../images/customimg.png";
import worksmartgif from "../images/worksmartgif.gif";
import worksmartpic from "../images/worksmartpic.png";
import npmimage from "../images/npmimage.png";
import nanogif from "../images/nanogif.gif";
import nanoproject from "../images/nanoproject.png";

const Portfolio = () => {
  const [portRef, animToUse] = SectionAnims();

  return (
    <StyledPortfolio
      id="portfolio"
      className="portfolio"
      ref={portRef}
      animate={animToUse}
      variants={sectionVars}
    >
      <h2>My Recent Projects</h2>
      <div className="project">
        <div className="flexcontainer">
          <div className="project__img">
            <img src={customimg} alt="" />
            <img src={customgif} alt="" />
          </div>
          <div className="project__desc">
            <h3>Custom Mood</h3>
            <p>
              A webapp made for meditating/relaxing with enjoyable animated
              visuals and ambiance tailored to how the user feels. To top it all
              off - a chill music playlist. Also,don't forget to pet the kitty
            </p>
          </div>
        </div>
        <ul className="links">
          <li>
            <a href="https://custommood.netlify.app/" target="blank">
              Live Demo
            </a>
          </li>
          <li>
            <a href="https://github.com/DaveDarsa/custommood" target="black">
              Github
            </a>
          </li>
        </ul>
      </div>

      <div className="project">
        <div className="flexcontainer">
          <div className="project__desc">
            <h3>Nanoscopic framework</h3>
            <p style={{ marginBottom: ".5rem" }}>
              Nanoscopic framework tries to emulate some of React's
              capabilities. Not as feature rich, but lightweight, hence the
              name. More on &nbsp;
              <a
                className="npmlink"
                href="https://www.npmjs.com/package/nanoscopic-js"
              >
                NPM
              </a>
            </p>
          </div>
          <div className="project__img">
            <img className="npmimg" src={npmimage} alt="" />
          </div>
        </div>
        <ul className="links">
          <li>
            <a
              href="https://www.npmjs.com/package/nanoscopic-js"
              target="blank"
            >
              NPM Link
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DaveDarsa/nanoscopic#readme"
              target="blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>

      <div className="project">
        <div className="flexcontainer">
          <div className="project__img">
            <img src={nanoproject} alt="" />
            <img src={nanogif} alt="" />
          </div>
          <div className="project__desc">
            <h3>Nanoproject demo</h3>
            <p>
              A simple movie info webapp built using Nanoscopic framework Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Qui, adipisci.
            </p>
          </div>
        </div>
        <ul className="links">
          <li>
            <a href="http://nanoprojectdemo.netlify.app/" target="blank">
              Live Demo
            </a>
          </li>
          <li>
            <a href="https://github.com/DaveDarsa/nanoproject" target="blank">
              Github
            </a>
          </li>
        </ul>
      </div>
      <div className="project">
        <div className="flexcontainer">
          <div className="project__desc">
            <h3>WorkSmart</h3>
            <p>
              A progressive web app made to help people manage their lives
              better - a personal admin panel for responsibilities and
              activities. Create different task categories with or without
              sublists even without internet
            </p>
          </div>
          <div className="project__img">
            <img src={worksmartpic} alt="" />
            <img src={worksmartgif} alt="" />
          </div>
        </div>
        <ul className="links">
          <li>
            <a href="https://davedarsa.github.io/worksmart/" target="blank">
              Live Demo
            </a>
          </li>
          <li>
            <a href="https://github.com/DaveDarsa/worksmart" target="blank">
              Github
            </a>
          </li>
        </ul>
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
    display: flex;
    flex-direction: column;
    :nth-child(3) > ul {
      margin-left: auto;
    }
    :nth-child(5) > ul {
      margin-left: auto;
    }
    .npmimg {
      opacity: 1 !important;
    }
    .npmlink {
      color: transparent;
      font-weight: 600;
      background: linear-gradient(
        90deg,
        rgba(251, 132, 22, 1) 0%,
        rgba(219, 54, 24, 1) 42%,
        rgba(207, 37, 133, 1) 76%,
        rgba(219, 41, 219, 1) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      margin-top: 1rem;
      display: flex;
      width: 50rem;
      justify-content: space-evenly;

      li {
      }
      a {
        text-decoration: none;
        text-transform: capitalize;
        color: #53c1de;
        font-size: 2rem;
        font-weight: bold;
        transition: all 0.3s ease;
        :hover {
          color: #e44d26;
        }
      }
    }
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
      align-items: flex-start;
    }
    &__img {
      width: 50rem;
      height: 25rem;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      &:hover,
      &:active {
        img:last-of-type {
          z-index: 20;
          opacity: 1;
        }
        img:first-of-type {
          opacity: 0;
        }
      }
      img {
        border-radius: 0.5rem;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 50rem;
        object-fit: cover;
        transition: all 0.3s ease-out;
        height: 25rem;
        &:first-of-type {
          z-index: 10;
        }
        &:last-of-type {
          opacity: 0;
          z-index: 1;
        }
      }
    }
    @media screen and (max-width: 880px) {
      .project__img {
        width: 40rem;

        img {
          width: 40rem;
        }
      }
      .links {
        width: 40rem;
      }
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
