import React, { useRef, useState } from "react";
import { doc, update } from "firebase/firestore";
import { db } from "../../../firebase/config";
import CreateUserForm from "../../createUser/createUserForm/CreateUserForm";
import "./handleManipulation.css";

const HandleManipulation = ({ handleDelete, handleEdit, data }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <td className="tdata" style={{ display: "flex" }}>
        <button
          onClick={() => handleEdit(data.id)}
          className="edit-btn responsive_h"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(data.id)}
          className="delete-btn responsive_h"
        >
          Delete
        </button>
      </td>
      {showForm && (
        <div className="parentUpdateDataForm">
          <div className="updateDataForm">
            <CreateUserForm />
          </div>
        </div>
      )}
    </>
  );
};

export default HandleManipulation;
