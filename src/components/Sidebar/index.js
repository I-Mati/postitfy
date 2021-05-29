import React from "react";
import PropTypes from "prop-types";
import ColorPicker from "../ColorPicker";
import emptyBin from "../../assets/empty-bin.png";
import fullBin from "../../assets/full-bin.png";
import "./style.css";

const Sidebar = ({ newNote, inTrash }) => (
  <div id="sidebar">
    <div id="elementContainer">
      <h1 id="logo">Postitfy</h1>
      <ColorPicker newNote={newNote} />
    </div>
    <img id="trash" src={!inTrash ? emptyBin : fullBin} alt="trash icon" />
  </div>
);

Sidebar.defaultValues = {
  inTrash: true,
};

Sidebar.propTypes = {
  inTrash: PropTypes.number.isRequired,
};

export default Sidebar;
