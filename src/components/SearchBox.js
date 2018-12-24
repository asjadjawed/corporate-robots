import React from "react";

const SearchBox = ({ onSearchChange }) => (
  <input
    id="SearchBox"
    type="search"
    placeholder="search executives"
    style={{
      textAlign: "center",
      color: "white",
      outline: "none",
      border: "none",
      borderRadius: "40px",
      padding: "10px",
      fontSize: "1rem",
      fontFamily: `"Sansita", sans-serif`,
      background: "#004050"
    }}
    onChange={onSearchChange}
  />
);

export default SearchBox;
