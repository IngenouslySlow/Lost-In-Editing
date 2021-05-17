import React from "react";

//Importing images
import home1 from "../Img/home1.png";

//Importing styled components
// import styled from "styled-components";
import { Description, Image, Hide, About } from "../styles";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for photography and videography ideas . We have
          professionals with amazing skills
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="A guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
