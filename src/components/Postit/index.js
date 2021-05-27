import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Postit = ({ text, date, category, color }) => (
  <div id="postItContainer" className={color}>
    {text}
  </div>
);

Postit.defaultValues = {
  text: "Lorem Ipsum",
  date: "22/01/2012",
  category: "unknown",
  color: "orange",
};

Postit.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Postit;
