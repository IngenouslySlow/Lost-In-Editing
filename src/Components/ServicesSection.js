import React from "react";
//Importing icons
import teamwork from "../Img/teamwork.svg";
import money from "../Img/money.svg";
import clock from "../Img/clock.svg";
import diaphragm from "../Img/diaphragm.svg";
import home2 from "../Img/home2.png";
//Importing styled components
import styled from "styled-components";
//Importing styles
import { About, Description, Image } from "../styles";

//Importing animation
import { useScroll } from "../Components/useScroll";
import { scrollAnim } from "../animation";
const ServicesSection = () => {
  const [element, control] = useScroll();
  return (
    <Services
      variants={scrollAnim}
      ref={element}
      animate={control}
      initial="hidden"
    >
      <Description>
        <h2>
          High <span>quality</span> services.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 16rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default ServicesSection;
