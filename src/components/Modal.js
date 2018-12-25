import React from "react";
import "./Modal.css";

const Modal = ({ modalState, modalRobot, hideModal }) => {
  const { id, name, title, activity, department, jobDescription } = modalRobot;
  return (
    <div id="Modal" className={modalState} onClick={hideModal}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        <img
          src={`https://robohash.org/${title.slice(0, 3) +
            id}?set=set3&size=150x150`}
          alt="Corp Drone"
        />
        <h2>{name}</h2>
        <p className="title">
          <em>{title}</em>
        </p>
        <p className="details">
          <strong>Department:</strong> {department}
          <br />
          <strong>Department Activity:</strong> {activity}
          <br />
          <strong>Job Description: </strong> {jobDescription}
        </p>
        <button onClick={hideModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
