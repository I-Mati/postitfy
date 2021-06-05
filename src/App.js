import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Panel from "./components/Panel";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);

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
  const inactiveNotes = notes.filter((note) => note.active === false);
  const inTrash = notes.some((note) => note.active === false);

  return (
    <div id="layout">
      <Router>
        <Sidebar newNote={onAddNewNote} inTrash={inTrash} />
        <Switch>
          <Route exact path="/trash">
            <Panel
              title="Deleted Notes"
              notes={inactiveNotes}
              handleNote={handleEditing}
            />
          </Route>
          <Route path="/">
            <Panel
              title="Notes"
              notes={activeNotes}
              handleNote={handleEditing}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
