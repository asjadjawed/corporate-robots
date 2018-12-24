import React from "react";

const SearchBox = ({ onSearchChange }) => (
  <input
    id="SearchBox"
    type="search"
    placeholder="Search Executives"
    style={{
      textAlign: "center",
      outline: "none",
      border: "1px solid black",
      borderRadius: "40px",
      padding: "10px",
      fontSize: "1rem",
      fontFamily: `"Sansita", sans-serif`
    }}
    onChange={onSearchChange}
  />
);

export default SearchBox;