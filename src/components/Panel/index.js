/* eslint-disable react/jsx-props-no-spreading */
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Searchbar from "../Searchbar";
import Postit from "../Postit";
import "./style.css";

const Panel = ({ title, notes, handleNote }) => {
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

  if (notes.length === 0) {
    return (
      <div id="panelContainer">
        <div id="contentContainer">
          <Searchbar />
          {isInTrash && renderBack()}
          <h1 id="containerTitle">{title}</h1>
          <div id="emptyState">
            <h1>There are not notes, yet ;)</h1>
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
        <h1 id="containerTitle">{title}</h1>

        <div id="workspaceContainer">
          {notes.map((note) => (
            <Postit handleNote={handleNote} isInTrash={isInTrash} {...note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Panel;
