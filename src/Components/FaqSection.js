import React from "react";
import { About } from "../styles";
import styled from "styled-components";
//Importing our toggle
import Toggle from "../Components/Toggle";
//Framer motion thing
import { AnimateSharedLayout } from "framer-motion";
//Import useScrll component
import { useScroll } from "../Components/useScroll";
import { scrollAnim } from "../animation";
const FaqSection = () => {
  const [element, control] = useScroll();
  return (
    <Faq variants={scrollAnim} ref={element} animate={control} initial="hidden">
      <h2>
        Any questions <span>FAQ</span>{" "}
      </h2>
      <AnimateSharedLayout>
        <Toggle className="question" title="How do i start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
              voluptas.
            </p>
          </div>
        </Toggle>
        <Toggle className="question" title="Daily schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
              voluptas.
            </p>
          </div>
        </Toggle>
        <Toggle className="question" title="Different payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
              voluptas.
            </p>
          </div>
        </Toggle>
        <Toggle className="question" title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
              voluptas.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

//Styled components

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    display: block;
    content: "";
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;
export default FaqSection;
