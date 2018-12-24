import React from "react";

const Scroll = ({ children }) => (
  <div
    style={{
      height: "100%",
      overflow: "auto",
      border: "1px solid black",
      boxSizing: "border-box"
    }}
  >
    {children}
  </div>
);

export default Scroll;
