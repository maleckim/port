import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useTransform, useElementScroll, useViewportScroll } from "framer";
import DragIndicatorOutlinedIcon from "@material-ui/icons/DragIndicatorOutlined";
import Slide from "@material-ui/core/Slide";

export default function IconBreadcrumbs(props) {
  const { about, landing, projects, contact } = props.visibility;
  const ref = useRef();

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
  const goToContact = () => {
    let poop = document.querySelector("#contact");
    poop.scrollIntoView(false);
  };

  return (
    <Slide initial={true} direction="down" in={props.status}>
      <motion.div ref={ref} className="side-nav">
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
        <PermIdentityOutlinedIcon
          className={contact ? "side-icon active" : "side-icon"}
          style={{ fontSize: 30, color: "#FF737F" }}
          onClick={() => goToContact()}
        />
      </motion.div>
    </Slide>
  );
}
