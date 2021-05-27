/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import "./style.css";

const ColorPicker = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div id="plusButton" onClick={handleOpen}>
        +
      </div>
      {open && (
        <div id="circleContainer">
          <div className="circle yellow" />
          <div className="circle violet" />
          <div className="circle green" />
          <div className="circle blue" />
          <div className="circle orange" />
        </div>
      )}
    </>
  );
};

export default ColorPicker;
