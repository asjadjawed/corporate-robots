import React from "react";
import "./Card.css";

const Card = ({ robot }) => {
  return (
    <div id="Card">
      <img
        src={`https://robohash.org/${robot.name}?size=150x150`}
        alt="A robot"
      />
      <div>
        <h2>{robot.name}</h2>
        <hr />
        <p>{robot.title}</p>
      </div>
    </div>
  );
};

export default Card;
