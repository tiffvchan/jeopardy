import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import logo from "../../assets/img/brainstation.png";
import "./CardModal.scss";
import CardTimer from "../CardTimer/CardTimer";

Modal.setAppElement("#root");

const CardModal = ({
  question,
  points,
  answer,
  isOpen,
  closeModal,
  handlesCardClick,
  status,
}) => {
  const closeCardModal = () => {
    const overlay = document.querySelector(".ReactModal__Overlay");
    overlay.classList.add("ReactModal__Overlay--closed");
    setTimeout(function () {
      closeModal();
    }, 1000);
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="cardmodal cardmodal--question" onClick={handlesCardClick}>
        {status === "points" ? (
          <p className="cardmodal__text cardmodal__text--points">{points}</p>
        ) : status === "question" ? (
          <>
            <p className="cardmodal__text cardmodal__text--qa">{question}</p>
            <CardTimer />
          </>
        ) : (
          <p className="cardmodal__text cardmodal__text--qa">{answer}</p>
        )}
      </div>
      <img className="cardmodal__image" src={logo} onClick={closeCardModal} />
    </Modal>
  );
};

export default CardModal;
