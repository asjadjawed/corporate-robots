import React from "react";
import Card from "./Card";

import "./CardList.css";

const CardList = ({ robots }) => {
  return (
    <div id="CardList">
      {robots.map(robot => (
        <Card robot={robot} key={robot.id} />
      ))}
    </div>
  );
};

export default CardList;
