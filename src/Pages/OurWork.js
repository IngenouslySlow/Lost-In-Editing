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
import { pageAnimation } from "../animation";

const OurWork = () => {
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="work/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="work/the-racer">
          <img src={theracer} alt="the racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="work/good-times">
          <img src={goodtimes} alt="goodtimes" />
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
    background: #ccc;
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

export default OurWork;
