import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Searchbar from "../Searchbar";
import Workspace from "../Workspace";
import "./style.css";

const Panel = () => {
  const [notes, setNotes] = useState([
    {
      text: "Lorem Ipsum",
      date: "22/01/2012",
      category: "unknown",
      color: "orange",
    },
    {
      text: "Lorem Ipsumasdsad",
      date: "22/01/2012",
      category: "unknown",
      color: "violet",
    },
  ]);

  return (
    <div id="panelContainer">
      <Sidebar />
      <div id="contentContainer">
        <Searchbar />
        <h1>Notes</h1>
        <Workspace notes={notes} />
      </div>
    </div>
  );
};

export default Panel;
