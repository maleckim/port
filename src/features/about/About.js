import React, { useRef, useEffect } from "react";
import useOnScreen from "../../utils/useOnScreen";
import { motion } from "framer-motion";
import { useTransform, useViewportScroll } from "framer";

const About = (props) => {
  const about = useRef();
  const isVisible = useOnScreen(about, "-300px");
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
      ref={about}
      variants={tagVariants}
      animate={isVisible ? "show" : "hidden"}
      style={{ y: yPosAnim, overflow: "hidden", zIndex: 2, display: "flex", position: "relative" }}
      className="about-main"
      id="about"
    >
      <div className="about-content">
        <h1 style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Malesuada bibendum arcu vitae elementum curabitur vitae.
        </h1>
      </div>
    </motion.div>
  );
};

export default About;
