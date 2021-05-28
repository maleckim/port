import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import DragIndicatorOutlinedIcon from "@material-ui/icons/DragIndicatorOutlined";
import Slide from "@material-ui/core/Slide";

function handleClick() {}

export default function IconBreadcrumbs(props) {
  const { about, landing, projects } = props.visibility;
  const lims = useRef(null);
  const trigger = useScrollTrigger();

  const delayOpt = {
    appear: 2000,
    enter: 2000,
    exit: 500,
  };

  const tagVariants = {
    show: {
      opacity: 1,

      transition: {
        delay: 0,
        duration: 1.2,
        ease: [0.83, 0, 0.17, 1],
      },
    },
    hidden: {
      opacity: 0,

      transition: {
        duration: 1.2,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const goToAbout = () => {
    let poop = document.querySelector("#about");
    poop.scrollIntoView(false);
  };

  const goToLanding = () => {
    let poop = document.querySelector("#landing");
    poop.scrollIntoView(false);
  };

  const goToProjects = () => {
    let poop = document.querySelector("#projects");
    poop.scrollIntoView(false);
  };

  return (
    <motion.div variants={tagVariants} animate={!trigger ? "show" : "hidden"} initial="hidden" exit="hidden">
      <motion.div
        drag={"x"}
        dragPropagation
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        className="side-nav"
      >
        <HomeOutlinedIcon
          onClick={() => goToLanding()}
          className={landing ? "side-icon active" : "side-icon"}
          style={{ fontSize: 30, color: "#FF737F" }}
        />
        <InfoOutlinedIcon
          onClick={() => goToAbout()}
          className={about ? "side-icon active" : "side-icon"}
          style={{ fontSize: 30, color: "#FF737F" }}
        />
        <CodeOutlinedIcon
          className={projects ? "side-icon active" : "side-icon"}
          style={{ fontSize: 30, color: "#FF737F" }}
          onClick={() => goToProjects()}
        />
        {/* <DragIndicatorOutlinedIcon className="draggable" style={{ fontSize: 20, color: "#FF737F" }} /> */}
      </motion.div>
    </motion.div>
  );
}
