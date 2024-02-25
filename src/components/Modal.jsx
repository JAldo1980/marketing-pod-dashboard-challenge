// Modal.jsx

import React from "react";

const Modal = (props) => {
  const { user, onClose, onDelete } = props;

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <div className="close-button-el">
            <button className="close-button" onClick={onClose}>
              X
            </button>
          </div>
          <h2>Employee Focus</h2>
          <div className="modal-image-container">
            <img className="modal-image" src={user.image} alt="" />
          </div>
          <div className="modal-info">
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
          </div>
          <div className="modal-buttons">
            <button className="red-button" onClick={handleDelete}>
              Delete
            </button>
            <button className="green-button" onClick={onClose}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
