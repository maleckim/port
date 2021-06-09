import React from "react";
import PropTypes from "prop-types";

const ScrollDots = (props) => {
  return <div className={"scrollDot " + props.className + " " + props.section}></div>;
};

ScrollDots.propTypes = {};

export default ScrollDots;
