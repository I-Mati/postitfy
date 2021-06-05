/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Searchbar from "../Searchbar";
import Postit from "../Postit";
import "./style.css";

const Panel = ({ title, emptyStateText, notes, handleNote }) => {
  const location = useLocation();
  const isInTrash = location.pathname === "/trash";

  const renderBack = () => (
    <div id="backButton">
      <Link to="/">
        <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        Back
      </Link>
    </div>
  );

  const renderDeleteAll = () => (
    <div onClick={() => handleNote("", "DELETEALL", {})} id="deleteAllButton">
      Delete All
    </div>
  );

  if (notes.length === 0) {
    return (
      <div id="panelContainer">
        <div id="contentContainer">
          <Searchbar />
          {isInTrash && renderBack()}
          <div id="titlecontainer">
            <h1 id="title">{title}</h1>
            {isInTrash && renderDeleteAll()}
          </div>

          <div id="emptyState">
            <h1>{emptyStateText}</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="panelContainer">
      <div id="contentContainer">
        <Searchbar />
        {isInTrash && renderBack()}
        <div id="titlecontainer">
          <h1 id="title">{title}</h1>
          {isInTrash && renderDeleteAll()}
        </div>

        <div id="workspaceContainer">
          {notes.map((note) => (
            <Postit key={note.id} handleNote={handleNote} {...note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Panel;
