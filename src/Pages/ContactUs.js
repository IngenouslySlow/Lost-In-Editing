import React from "react";
//Framer motion thing
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const ContactUs = () => {
  return (
    <motion.div
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Contact Us Ya fools</h1>
    </motion.div>
  );
};

export default ContactUs;
