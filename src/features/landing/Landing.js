import React, { useRef, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useTransform, useViewportScroll } from "framer";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useOnScreen from "../../utils/useOnScreen";

const Landing = (props) => {
  const { scrollYProgress } = useViewportScroll();
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -200]);

  const landing = useRef();
  const isVisible = useOnScreen(landing, "-150px");
  const trigger = useScrollTrigger();

  useEffect(() => {
    isVisible ? props.check(true) : props.check(false);
  }, [isVisible]);

  const landingVariants = {
    right: {
      x: 0,

      transition: {
        delay: 0.4,
        type: "spring",
        stiffness: 60,
        duration: 2,
        from: 800,
        bounce: 0.5,
      },
    },
    enter: {
      x: 0,

      transition: {
        delay: 0.4,
        type: "spring",
        stiffness: 60,
        duration: 2,
        from: -600,
        bounce: 0.5,
      },
    },

    exit: {
      x: -600,

      transition: {
        delay: 0,
        type: "spring",
        stiffness: 60,
        duration: 2,
        from: 0,
        bounce: 0.5,
      },
    },
    exitRight: {
      x: 900,

      transition: {
        delay: 0,
        type: "spring",
        stiffness: 60,
        duration: 2,
        from: 0,
        bounce: 0.5,
      },
    },
  };

  const middleVariants = {
    exit: {
      opacity: 1,

      transition: {
        delay: 0,
        type: "spring",
        stiffness: 60,
        duration: 2,
        from: 0,
        bounce: 0.5,
      },
    },
    enter: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  };

  return (
    <div id="landing" className="landing-div">
      <motion.div
        ref={landing}
        style={{ y: yPosAnim, overflow: "hidden" }}
        variants={landingVariants}
        animate={!trigger ? "enter" : "exit"}
      >
        <div className="name-div">
          <h1>Matthew Malecki</h1>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yPosAnim }}
        initial={{ opacity: 0 }}
        variants={middleVariants}
        animate={!trigger ? "enter" : "exit"}
        className="separator-div"
      >
        <motion.div
          animate={{ y: 20, opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ y: { delay: 1, type: "spring", stiffness: 50, duration: 2, from: -600 } }}
        >
          <span className="left"></span>
        </motion.div>
        <motion.div
          animate={{ y: -20, opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ y: { delay: 1, type: "spring", stiffness: 50, bounce: 1, duration: 2, from: 600 } }}
        >
          <span className="right"></span>
        </motion.div>
      </motion.div>
      <motion.div style={{ y: yPosAnim }} variants={landingVariants} animate={!trigger ? "right" : "exitRight"}>
        <div className="title-div">
          <h1>Full-Stack Engineer</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
