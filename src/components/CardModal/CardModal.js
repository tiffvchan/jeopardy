import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import logo from "../../assets/img/brainstation.png";
import "./CardModal.scss";

Modal.setAppElement("#root");

const modalStyles = {
  content: {
    position: "absolute",
    padding: "0",
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1358db",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

const CardModal = ({
  question,
  points,
  answer,
  isOpen,
  closeModal,
  addToRevealed,
}) => {
  const [status, setStatus] = useState("points");

  const handlesCardClick = () => {
    if (status === "points") {
      setStatus("question");
    } else if (status === "question") {
      setStatus("answer");
    } else if (status === "answer") {
      setStatus("complete");
      // setCompleted(true);
      addToRevealed();
    }
  };
  return (
    <Modal isOpen={isOpen} style={modalStyles}>
      <div className="cardmodal cardmodal--question" onClick={handlesCardClick}>
        {status === "points" ? (
          <p className="cardmodal__text">{points}</p>
        ) : status === "question" ? (
          <p className="cardmodal__text">{question}</p>
        ) : (
          <p className="cardmodal__text">{answer}</p>
        )}
      </div>
      <img className="cardmodal__image" src={logo} onClick={closeModal} />
    </Modal>
  );
};

export default CardModal;
