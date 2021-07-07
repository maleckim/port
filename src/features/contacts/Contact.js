import React, { useRef, useEffect, useState } from "react";
import useOnScreen from "../../utils/useOnScreen";
import { motion } from "framer-motion";
import { useTransform, useViewportScroll } from "framer";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
    <div className="contact-content">
      <a style={{ textDecoration: "none" }} href="mailto:maleckimatthewm@gmail.com">
        <EmailIcon />
      </a>

      <a style={{ textDecoration: "none" }} target="_blank" href="https://github.com/maleckim">
        <GitHubIcon />
      </a>

      <a style={{ textDecoration: "none" }} target="_blank" href="https://www.linkedin.com/in/maleckimatthew/">
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default Contact;
