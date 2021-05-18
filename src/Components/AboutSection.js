import React from "react";

//Importing images
import home1 from "../Img/home1.png";

//Importing styled components
// import styled from "styled-components";
import { Description, Image, Hide, About } from "../styles";

//Framer motion thing
import { motion } from "framer-motion";
import { titleAnim, fadeAnim, imageAnim } from "../animation";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnim}>
          Contact us for photography and videography ideas . We have
          professionals with amazing skills
        </motion.p>
        <motion.button variants={fadeAnim}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={imageAnim}
          src={home1}
          alt="A guy with a camera"
        />
      </Image>
    </About>
  );
};

export default AboutSection;
