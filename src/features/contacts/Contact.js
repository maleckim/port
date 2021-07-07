import React, { useRef, useEffect, useState } from "react";
import useOnScreen from "../../utils/useOnScreen";
import { motion } from "framer-motion";
import { useTransform, useViewportScroll } from "framer";
import Button from "@material-ui/core/Button";

const Contact = (props) => {
  const contact = useRef();
  const isVisible = useOnScreen(contact, "-300px");
  const { scrollYProgress } = useViewportScroll();
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -200]);

  const tagVariants = {
    show: {
      opacity: 1,

      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: [0.83, 0, 0.17, 1],
      },
    },
    hidden: {
      opacity: 0,

      transition: {
        duration: 0.6,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  useEffect(() => {
    isVisible ? props.check(true) : props.check(false);
  }, [isVisible]);

  return (
    <motion.div
      ref={contact}
      variants={tagVariants}
      animate={isVisible ? "show" : "hidden"}
      id="contact"
      className="contact-main"
    >
      <div className="contact-details">
        <h1>Matthew Malecki</h1>
      </div>
      <div className="contact-content">
        <Button
          variant="outlined"
          style={{
            borderColor: "white",
            color: "white",
            borderWidth: "2px",
            fontSize: "20px",
            textTransform: "none",
          }}
        >
          <a style={{ textDecoration: "none" }} href="mailto:maleckimatthewm@gmail.com">
            Email
          </a>
        </Button>

        <Button
          variant="outlined"
          style={{
            borderColor: "white",
            color: "white",
            borderWidth: "2px",
            fontSize: "20px",
            textTransform: "none",
          }}
        >
          <a style={{ textDecoration: "none" }} target="_blank" href="https://github.com/maleckim">
            Github
          </a>
        </Button>
        <Button
          variant="outlined"
          style={{
            borderColor: "white",
            color: "white",
            borderWidth: "2px",
            fontSize: "20px",
            textTransform: "none",
          }}
        >
          <a style={{ textDecoration: "none" }} target="_blank" href="https://www.linkedin.com/in/maleckimatthew/">
            LinkedIn
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default Contact;
