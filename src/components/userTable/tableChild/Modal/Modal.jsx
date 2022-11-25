import React from "react";
import CreateUser from "../../../createUser/CreateUser";
import { useEffect, useRef, useState } from "react";
import CreateUserForm from "../../../createUser/createUserForm/CreateUserForm";
import { useNavigate } from "react-router-dom";

//firebase import
import { db } from "../../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { getData } from "../../../../feature/slicers/ReceiveModalData";

const Modal = ({ handleEdit, id }) => {
  const formRef = useRef();
  const fileClick = useRef();
  const [img, setImg] = useState();
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [radioValue, setRadioValue] = useState("");
  const optionArray = [
    {
      id: 1,
      state: "KASANA",
    },
    {
      id: 2,
      state: "KAYANA",
    },
    {
      id: 3,
      state: "KAYANA",
    },
    {
      id: 4,
      state: "CHNA",
    },
    {
      id: 5,
      state: "MAYANA",
    },
    {
      id: 6,
      state: "BAMANA",
    },
    {
      id: 7,
      state: "YAKANA",
    },
    {
      id: 8,
      state: "SHYANA",
    },
    {
      id: 9,
      state: "SAKANA",
    },
    {
      id: 10,
      state: "MAKANA",
    },
    {
      id: 11,
      state: "YAKANA",
    },
    {
      id: 12,
      state: "MADANA",
    },
    {
      id: 13,
      state: "IYANA",
    },
    {
      id: 14,
      state: "TAKANA",
    },
  ];
  const nation = [
    {
      national: "N",
    },
    {
      national: "C",
    },
    {
      national: "O",
    },
  ];

  const submitHandler = async (e) => {
    e.preventDefault();
    db.collection("formData").doc("id").update({
    // const modalFormValues = {
      photo: img,
      email: formRef.current[2].value,
      password: formRef.current[3].value,
      confirmPassword: formRef.current[4].value,
      name: formRef.current[5].value,
      phNumber: formRef.current[6].value,
      birthday: formRef.current[7].value,
      nrc_num: formRef.current[8].value,
      nrc_state: formRef.current[9].value,
      nrc_national: formRef.current[10].value,
      nrc_numbers: formRef.current[11].value,
      gender: radioValue,
      time: today.toDateString(),
      hour: today.getHours(),
    // };
    // console.log(modalFormValues);
    // dispatch(getData(modalFormValues));
    });
    // handleEdit(modalFormValues);
    nav("/");
  };
  const imageHandler = () => {
    const reader = new FileReader();
    reader.readAsDataURL(formRef.current[0].files[0]);
    reader.onload = (e) => {
      setImg(e.target.result);
    };
  };

  const radioValueHandler = (e) => {
    setRadioValue(e.target.value);
  };
  console.log(formRef);

  return (
    <div className="modal_toggler">
      <h2>Update Data Here</h2>
      <form onSubmit={submitHandler} ref={formRef} className="modal_form">
        <div className="file-flex-modal">
          <label htmlFor="">Photo : </label>
          <div className="file">
            <input
              required
              ref={fileClick}
              onChange={imageHandler}
              className="hidden"
              type="file"
              name=""
              id=""
            />
            <div className="flex-modal file-box-modal form-input border-none">
              <button onClick={() => fileClick.current.click()}>
                Choose file
              </button>
              <p>No File Chosen</p>
            </div>
          </div>
        </div>
        <div className="file-flex-modal">
          <label htmlFor="email">Email : </label>
          <input required type="email" className="file-box-modal form-input" />
        </div>
        <div className="file-flex-modal">
          <label htmlFor="password">Password : </label>
          <input
            required
            type="password"
            className="file-box-modal form-input"
          />
        </div>
        <div className="file-flex-modal">
          <label htmlFor="confirm_password">Confirm Password : </label>
          <input
            required
            type="password"
            className="file-box-modal form-input"
          />
        </div>
        <div className="file-flex-modal">
          <label htmlFor="name">Name : </label>
          <input required type="text" className="file-box-modal form-input" />
        </div>
        <div className="file-flex-modal">
          <label htmlFor="phnumber">Phone Number : </label>
          <input required type="number" className="file-box-modal form-input" />
        </div>
        <div className="file-flex-modal">
          <label htmlFor="birthday">Birthday : </label>
          <input
            required
            type="date"
            className="file-box-modal form-input form-input"
          />
        </div>
        <div className="file-flex-modal">
          <label htmlFor="nrc">NRC : </label>
          <div className="select-box">
            <div>
              <select className="select-box-radius" name="" id="">
                {optionArray.map((data, index) => {
                  return (
                    <option key={index} value={data.id}>
                      {data.id}
                    </option>
                  );
                })}
              </select>
              <select className="select-box-radius" name="" id="">
                {optionArray.map((data, index) => {
                  return (
                    <option key={index} value={data.state}>
                      {data.state}
                    </option>
                  );
                })}
              </select>
              <select className="select-box-radius" name="" id="">
                {nation.map((data, index) => {
                  return (
                    <option key={index} value={data.national}>
                      {data.national}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <input
                required
                type="text"
                className="select-input"
                placeholder="123456"
              />
            </div>
          </div>
        </div>
        <div className="file-flex-modal radio-modal flex-file">
          <label htmlFor="gender">Gender :</label>
          <div className="radio-box">
            <div onChange={radioValueHandler} className="radio-file-box-modal">
              <input
                required
                type="radio"
                name="gender"
                value="male"
                id="male"
              />
              <label htmlFor="male">Male</label>
            </div>
            <div onChange={radioValueHandler} className="radio-file-box-modal">
              <input
                required
                type="radio"
                name="gender"
                value="female"
                id="female"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div className="btn-flex">
          <div className="submit-box">
            <button className="submit-btn translate">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
