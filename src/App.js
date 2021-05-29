import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Panel from "./components/Panel";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  localStorage.setItem("pepe mujica", "socialista");
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Lorem Ipsum",
      color: "orange",
      editing: false,
      active: true,
    },
    {
      id: 2,
      text: "Lorem Ipsumasdsad",
      color: "violet",
      editing: false,
      active: true,
    },
    {
      id: 3,
      text: "Editable",
      color: "green",
      editing: true,
      active: true,
    },
  ]);

  const handleEditing = (id, action, payload) => {
    let updatedNotes = notes;
    switch (action) {
      case "ADD":
        setNotes([
          ...notes,
          {
            id: Date.now(),
            text: "",
            color: payload,
            editing: true,
            active: true,
          },
        ]);
        break;
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

  const onAddNewNote = (color) => handleEditing("", "ADD", color);
  const activeNotes = notes.filter((note) => note.active);
  const inTrash = notes.some((note) => note.active === false);

  return (
    <div id="layout">
      <Router>
        <Sidebar newNote={onAddNewNote} inTrash={inTrash} />
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
