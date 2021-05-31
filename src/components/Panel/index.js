import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Searchbar from "../Searchbar";
import Workspace from "../Workspace";
import "./style.css";

const Panel = ({ title, notes, handleNote }) => {
  const location = useLocation();
  const isInTrash = location.pathname === "/trash";
  return (
    <div id="panelContainer">
      <div id="contentContainer">
        <Searchbar />
        {isInTrash && (
          <div id="backButton">
            <Link to="/">
              <FontAwesomeIcon icon={faAngleLeft} size="lg" />
              Back
            </Link>
          </div>
        )}
        <h1>{title}</h1>
        <Workspace notes={notes} handleNote={handleNote} />
      </div>
    </div>
  );
};

export default Panel;
