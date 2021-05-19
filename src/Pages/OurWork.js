import React from "react";

//Importing images
import athlete from "../Img/athlete-small.png";
import theracer from "../Img/theracer-small.png";
import goodtimes from "../Img/goodtimes-small.png";

//Importing styled components
import styled from "styled-components";

//Router thing
import { Link } from "react-router-dom";

//Framer motion thing
import { motion } from "framer-motion";
import {
  pageAnimation,
  fadeAnim,
  imageAnim,
  lineAnim,
  slideAnim,
  slideContainer,
} from "../animation";

const OurWork = () => {
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={slideContainer}>
        <Frame1 variants={slideAnim}></Frame1>
        <Frame2 variants={slideAnim}></Frame2>
        <Frame3 variants={slideAnim}></Frame3>
        <Frame4 variants={slideAnim}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fadeAnim}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="work/the-athlete">
          <Hide>
            <motion.img variants={imageAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fadeAnim}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="work/the-racer">
          <Hide>
            <motion.img variants={imageAnim} src={theracer} alt="the racer" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fadeAnim}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="work/good-times">
          <motion.img variants={imageAnim} src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    color: black;
    font-weight: 500;
    padding: 1rem 0;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    width: 100%;
    margin-bottom: 3rem;
  }
  img::nth-child(even) {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: top;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame animations with skew

const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background: #fffebf;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
