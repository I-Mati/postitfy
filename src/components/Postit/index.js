/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTimes,
  faCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
import "./style.css";

const Postit = ({ text, date, category, color, editing, id, handleNote }) => {
  const [valueText, setValueText] = useState(text);

  const onCancelHandle = () => {
    setValueText(text);
    handleNote(id, "CANCEL");
  };

  return (
    <div id="postItContainer" className={color}>
      {editing ? (
        <input
          id="postitInput"
          value={valueText}
          onChange={(e) => setValueText(e.target.value)}
        />
      ) : (
        text
      )}
      <div id="actions">
        {!editing && (
          <div className="actionCircle" onClick={() => handleNote(id, "EDIT")}>
            <FontAwesomeIcon icon={faPencilAlt} size="xs" color="white" />
          </div>
        )}
        {editing && (
          <>
            <div
              className="actionCircle"
              onClick={() => handleNote(id, "UPDATE", valueText)}
            >
              <FontAwesomeIcon icon={faCheck} size="xs" color="white" />
            </div>
            <div className="actionCircle" onClick={onCancelHandle}>
              <FontAwesomeIcon icon={faTimes} size="xs" color="white" />
            </div>
            <div
              className="actionCircle"
              onClick={() => handleNote(id, "NOTACTIVE")}
            >
              <FontAwesomeIcon icon={faTrash} size="xs" color="white" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

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
