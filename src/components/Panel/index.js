import Sidebar from "../Sidebar";
import Searchbar from "../Searchbar";
import Dashboard from "../Dashboard";
import "./style.css";

const Panel = () => (
  <div id="panelContainer">
    <Sidebar />
    <div id="contentContainer">
      <Searchbar />
      <Dashboard />
    </div>
  </div>
);

export default Panel;
