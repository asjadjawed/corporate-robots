import React from "react";
import "./Card.css";

const Card = ({ robot }) => {
  const { name, title } = robot;
  return (
    <div className="Card">
      <img src={`https://robohash.org/${name}?size=150x150`} alt="A robot" />
      <div>
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
