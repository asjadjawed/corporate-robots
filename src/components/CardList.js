import React from "react";
import Card from "./Card";

import "./CardList.css";

const CardList = ({ robots, showModal }) => {
  return (
    <div id="CardList">
      {robots.map(robot => (
        <Card robot={robot} key={robot.id} showModal={showModal} />
      ))}
    </div>
  );
};

export default CardList;
