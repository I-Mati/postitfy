import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const Searchbar = () => (
  <div id="searchContainer">
    <div id="searchBar">
      <FontAwesomeIcon icon={faSearch} size="lg" />
      <input id="searchInput" placeholder="Search your Post It" />
    </div>
  </div>
);

export default Searchbar;
