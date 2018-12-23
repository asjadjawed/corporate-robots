import React from "react";

const Scroll = ({ children }) => (
  <div style={{ height: "70vh", overflow: "auto" }}>{children}</div>
);

export default Scroll;
