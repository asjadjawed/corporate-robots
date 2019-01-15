import React, { Component } from "react";
import "./Card.css";

const Card = ({ robot, showModal }) => {
  return (
    <div>
      <div className="Card" onClick={showModal} id={robot.id}>
        <img
          src={`https://robohash.org/${robot.title.slice(0, 3) +
            robot.id}?set=set3&size=150x150`}
          alt="Corp Drone"
        />

        <h2>{robot.name}</h2>
        <p>{robot.title}</p>
      </div>
    </div>
  );
};

export default Card;
