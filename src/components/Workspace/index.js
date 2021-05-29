/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Postit from "../Postit";
import "./style.css";

const Workspace = ({ notes, handleNote }) => {
  if (notes.length === 0)
    return (
      <div id="emptyState">
        <h1>There are not notes, yet ;)</h1>
      </div>
    );
  return (
    <div id="workspaceContainer">
      {notes.map((note) => (
        <Postit handleNote={handleNote} {...note} />
      ))}
    </div>
  );
};

export default Workspace;
