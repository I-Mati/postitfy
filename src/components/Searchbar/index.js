import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const Searchbar = ({ searchValue, editSearch }) => (
  <div id="searchContainer">
    <div id="searchBar">
      <FontAwesomeIcon icon={faSearch} size="lg" />
      <input
        id="searchInput"
        placeholder="Search your Post It"
        value={searchValue}
        onChange={(e) => editSearch(e.target.value)}
      />
    </div>
  </div>
);

export default Searchbar;
