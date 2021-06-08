/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const ColorPicker = ({ newNote }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const onAddNewNote = (color) => {
    setOpen(false);
    newNote(color);
    history.push("/");
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
          <div
            onClick={() => onAddNewNote("yellow")}
            className="circle yellow fadeIn"
          />
          <div
            onClick={() => onAddNewNote("violet")}
            className="circle violet fadeIn"
          />
          <div
            onClick={() => onAddNewNote("green")}
            className="circle green fadeIn"
          />
          <div
            onClick={() => onAddNewNote("blue")}
            className="circle blue fadeIn"
          />
          <div
            onClick={() => onAddNewNote("orange")}
            className="circle orange fadeIn"
          />
        </div>
      )}
    </>
  );
};

export default ColorPicker;
