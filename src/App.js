import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Panel from "./components/Panel";
import Sidebar from "./components/Sidebar";
import Postit from "./components/Postit";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Lorem Ipsum",
      date: "22/01/2012",
      category: "unknown",
      color: "orange",
      editing: false,
      active: true,
    },
    {
      id: 2,
      text: "Lorem Ipsumasdsad",
      date: "22/01/2012",
      category: "unknown",
      color: "violet",
      editing: false,
      active: true,
    },
    {
      id: 3,
      text: "Editable",
      date: "22/01/2012",
      category: "unknown",
      color: "green",
      editing: true,
      active: true,
    },
  ]);

  const handleEditing = (id, action, payload) => {
    let updatedNotes = notes;
    switch (action) {
      case "EDIT":
        updatedNotes = notes.map((note) => {
          if (note.id === id) {
            return { ...note, editing: true };
          }
          return note;
        });
        setNotes(updatedNotes);
        break;
      case "CANCEL":
        updatedNotes = notes.map((note) => {
          if (note.id === id) {
            return { ...note, editing: false };
          }
          return note;
        });
        setNotes(updatedNotes);
        break;
      case "UPDATE":
        updatedNotes = notes.map((note) => {
          if (note.id === id) {
            return { ...note, editing: false, text: payload };
          }
          return note;
        });
        setNotes(updatedNotes);
        break;
      case "NOTACTIVE":
        updatedNotes = notes.map((note) => {
          if (note.id === id) {
            return { ...note, editing: false, active: false };
          }
          return note;
        });
        setNotes(updatedNotes);
        break;
      case "DELETE":
        updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
        break;
      default:
        break;
    }
  };

  const activeNotes = notes.filter((note) => note.active);
  const inTrash = notes.some((note) => note.active === false);

  return (
    <div id="layout">
      <Router>
        <Sidebar inTrash={inTrash} />
        <Switch>
          <Route path="/">
            <Panel notes={activeNotes} handleNote={handleEditing} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
