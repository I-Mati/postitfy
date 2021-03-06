import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ColorPicker from "../ColorPicker";
import emptyBin from "../../assets/empty-bin.png";
import fullBin from "../../assets/full-bin.png";
import "./style.css";

const Sidebar = ({ newNote, inTrash }) => (
  <div id="sidebar">
    <div id="elementContainer">
      <Link to="/">
        <h1 id="logo">Postitfy</h1>
      </Link>
      <ColorPicker newNote={newNote} />
    </div>
    <Link to="/trash">
      <img id="trash" src={!inTrash ? emptyBin : fullBin} alt="trash icon" />{" "}
    </Link>
  </div>
);

Sidebar.defaultValues = {
  inTrash: true,
};

Sidebar.propTypes = {
  inTrash: PropTypes.number.isRequired,
};

export default Sidebar;
