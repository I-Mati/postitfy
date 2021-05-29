import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ColorPicker from "../ColorPicker";
import emptyBin from "../../assets/empty-bin.png";
import fullBin from "../../assets/full-bin.png";
import "./style.css";

const Sidebar = ({ isTrashEmpty = true }) => (
  <div id="sidebar">
    <div id="elementContainer">
      <h1 id="logo">Postitfy</h1>
      <ColorPicker />
    </div>
    <img id="trash" src={isTrashEmpty ? emptyBin : fullBin} alt="trash icon" />
  </div>
);

Sidebar.defaultValues = {
  isTrashEmpty: true,
};

Sidebar.propTypes = {
  isTrashEmpty: PropTypes.number.isRequired,
};

export default Sidebar;
