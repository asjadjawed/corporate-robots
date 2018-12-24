import React, { Component } from "react";
import Modal from "./Modal";
import "./Card.css";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      modalState: "off"
    };
  }

  showModal = e => {
    e.stopPropagation();
    this.setState({ modalState: "on" });
  };

  hideModal = e => {
    e.stopPropagation();
    this.setState({ modalState: "off" });
  };

  render() {
    const { id, name, title } = this.props.robot;
    return (
      <div>
        <div className="Card" onClick={this.showModal}>
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
        <Modal
          modalState={this.state.modalState}
          modalRobot={this.props.robot}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}

export default Card;
