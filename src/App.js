import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Panel from "./components/Panel";
import Sidebar from "./components/Sidebar";
import Postit from "./components/Postit";
import "./App.css";

const App = () => {
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
    <div id="layout">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/">
            <Panel notes={notes} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
