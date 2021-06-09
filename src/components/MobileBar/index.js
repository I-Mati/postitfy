/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faTimesCircle,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import emptyBin from "../../assets/empty-bin.png";
import fullBin from "../../assets/full-bin.png";

import "./style.css";

const Mobilebar = ({ newNote, inTrash }) => {
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
    <div id="mobileBar" className={open && "grid"}>
      {open && (
        <>
          <div id="addNote" onClick={handleOpen}>
            <FontAwesomeIcon
              icon={open ? faChevronLeft : faTimesCircle}
              size="xs"
              color="white"
            />
          </div>
          <div
            onClick={() => onAddNewNote("yellow")}
            className="yellow barbox"
          />
          <div
            onClick={() => onAddNewNote("orange")}
            className="orange barbox"
          />
          <div onClick={() => onAddNewNote("green")} className="green barbox" />
          <div onClick={() => onAddNewNote("blue")} className="blue barbox" />
          <div
            onClick={() => onAddNewNote("violet")}
            className="violet barbox"
          />
        </>
      )}
      {!open && (
        <>
          <div id="plusButton" className="rotate-45" onClick={handleOpen}>
            <FontAwesomeIcon icon={faTimesCircle} size="xs" color="white" />
          </div>
          <Link to="/trash">
            <img
              width="45px"
              src={!inTrash ? emptyBin : fullBin}
              alt="trash icon"
            />
          </Link>
        </>
      )}
    </div>
  );
};

export default Mobilebar;
