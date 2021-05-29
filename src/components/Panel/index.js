import Sidebar from "../Sidebar";
import Searchbar from "../Searchbar";
import Workspace from "../Workspace";
import "./style.css";

const Panel = () => (
  <div id="panelContainer">
    <Sidebar />
    <div id="contentContainer">
      <Searchbar />
      <Workspace />
    </div>
  </div>
);

export default Panel;
