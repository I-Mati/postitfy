/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Panel from "./components/Panel";
import Sidebar from "./components/Sidebar";
import Mobilebar from "./components/MobileBar";
import "./App.css";

const App = () => {
  // this state and useEffects is to handle multiple resolutions devices
  const [windowWidth, setWindowWidth] = useState(null);

  const isInMobile = windowWidth < 601;
  useEffect(() => {
    function resize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Boolean indicate if the pathname is in trash,
  // we are unable to use react-router at this point
  // because this component is not wrapper in <Router>
  // one solution is Up routes to index.js at root
  const isInTrash = window.location.pathname === "/trash";

  // Local state where the notes data is and search word used on search bar
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  // Load data from localStorage
  useEffect(() => {
    const localData = localStorage.getItem("postitfy");
    if (localData) setNotes(JSON.parse(localData));
  }, []);

  // Every time that notes is updated, localStorage is updated too
  useEffect(() => {
    localStorage.setItem("postitfy", JSON.stringify(notes));
  }, [notes]);

  // Function that handle all cases to manage data on local state.
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

  // Tiny function to only add notes ensuring a single responsability for Sidebar > ColorPicker
  const onAddNewNote = (color) => handleEditing("", "ADD", color);

  // Filtered notes that are used on specific cases like actives and inactives
  const activeNotes = notes.filter((note) => note.active);
  const inactiveNotes = notes.filter((note) => note.active === false);

  // Boolean variable to determine if there are notes on trash to change trash icon
  const inTrash = notes.some((note) => note.active === false);

  // Filtered notes based on conditions, if something is searched in Active notes or Trash
  const filteredNotes =
    search === ""
      ? []
      : isInTrash
      ? notes.filter((note) =>
          note.text.toLowerCase().includes(search.toLowerCase())
        )
      : notes.filter((note) =>
          note.text.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div id="layout">
      <Router>
        {!isInMobile && <Sidebar newNote={onAddNewNote} inTrash={inTrash} />}
        {isInMobile && <Mobilebar newNote={onAddNewNote} inTrash={inTrash} />}
        {isInMobile && <h1 id="logo">Postitfy</h1>}
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
