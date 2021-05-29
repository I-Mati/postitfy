import Searchbar from "../Searchbar";
import Workspace from "../Workspace";
import "./style.css";

const Panel = ({ notes }) => (
  <div id="panelContainer">
    <div id="contentContainer">
      <Searchbar />
      <h1>Notes</h1>
      <Workspace notes={notes} />
    </div>
  </div>
);

export default Panel;
