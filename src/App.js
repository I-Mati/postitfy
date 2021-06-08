/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Panel from "./components/Panel";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  const isInTrash = window.location.pathname === "/trash";

  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("postitfy");
    if (localData) setNotes(JSON.parse(localData));
  }, []);

  useEffect(() => {
    localStorage.setItem("postitfy", JSON.stringify(notes));
  }, [notes]);

  const handleEditing = (id, action, payload) => {
    let updatedNotes = notes;
    switch (action) {
      case "ADD":
        // Close other notes in editing mode
        updatedNotes = notes.map((note) => {
          if (note.active) {
            return { ...note, editing: false };
          }
          return note;
        });
        setNotes([
          ...updatedNotes,
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
      case "INVERSEACTIVE":
        updatedNotes = notes.map((note) => {
          if (note.id === id) {
            return { ...note, editing: false, active: !note.active };
          }
          return note;
        });
        setNotes(updatedNotes);
        break;
      case "DELETE":
        updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
        break;
      case "DELETEALL":
        updatedNotes = notes.filter((note) => note.active === true);
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

  const filterNotes = (arrayNotes) =>
    arrayNotes.filter((note) =>
      note.text.toLowerCase().includes(search.toLowerCase())
    );
  const filteredNotes =
    search === ""
      ? []
      : isInTrash
      ? filterNotes(inactiveNotes)
      : filterNotes(activeNotes);

  return (
    <div id="layout">
      <Router>
        <Sidebar newNote={onAddNewNote} inTrash={inTrash} />
        <Switch>
          <Route exact path="/trash">
            <Panel
              editSearch={setSearch}
              searchValue={search}
              title="Deleted Notes"
              emptyStateText={
                search !== ""
                  ? "Empty Trash with this search"
                  : "Empty Trash ;)"
              }
              notes={
                search !== ""
                  ? filteredNotes.reverse()
                  : inactiveNotes.reverse()
              }
              handleNote={handleEditing}
            />
          </Route>
          <Route path="/">
            <Panel
              editSearch={setSearch}
              searchValue={search}
              title="Notes"
              emptyStateText="There are not notes, yet ;)"
              notes={
                search !== "" ? filteredNotes.reverse() : activeNotes.reverse()
              }
              handleNote={handleEditing}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
