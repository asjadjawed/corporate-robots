import React from "react";
import "./Card.css";

const Card = ({ robot }) => {
  const { id, name, title } = robot;
  return (
    <div className="Card">
      <img
        src={`https://robohash.org/${title.slice(0, 3) +
          id}?set=set3&size=150x150`}
        alt="Corp Drone"
      />
      <div>
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
