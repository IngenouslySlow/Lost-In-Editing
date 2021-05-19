import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <Title layout>{title}</Title>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

const Title = styled(motion.h4)`
  cursor: pointer;
`;
export default Toggle;
