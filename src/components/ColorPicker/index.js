/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const ColorPicker = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        id="plusButton"
        className={!open ? "rotate-45" : "rotate-90"}
        onClick={handleOpen}
      >
        <FontAwesomeIcon icon={faTimes} size="xs" color="white" />
      </div>
      {open && (
        <div id="circleContainer">
          <div className="circle yellow fadeIn" />
          <div className="circle violet fadeIn" />
          <div className="circle green fadeIn" />
          <div className="circle blue fadeIn" />
          <div className="circle orange fadeIn" />
        </div>
      )}
    </>
  );
};

export default ColorPicker;
