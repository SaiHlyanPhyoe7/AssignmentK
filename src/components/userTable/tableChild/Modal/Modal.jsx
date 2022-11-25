import React from "react";
import CreateUser from "../../../createUser/CreateUser";

const Modal = () => {
  return (
    <div className="modal_toggler">
      <h2>Edit Data Here</h2>
      <CreateUser />
    </div>
  );
};

export default Modal;
