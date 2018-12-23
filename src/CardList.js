import React from "react";
import Card from "./Card";
import robotList from "./robots";
import "./CardList.css";

const CardList = () => {
  return (
    <div id="CardList">
      {robotList.map(robot => (
        <Card robot={robot} />
      ))}
    </div>
  );
};

export default CardList;
