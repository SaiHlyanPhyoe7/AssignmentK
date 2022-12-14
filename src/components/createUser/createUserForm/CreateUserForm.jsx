import React, { useState } from "react";

const CreateUserForm = ({
  submitHandler,
  formRef,
  fileClick,
  imageHandler,
  radioValueHandler,
}) => {
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

  return (
    <form onSubmit={submitHandler} ref={formRef}>
      <div className="file-flex">
        <label htmlFor="">Photo : </label>
        <div className="file">
          <input
            required
            ref={fileClick}
            onChange={imageHandler}
            className="hidden"
            type="file"
          />
          <div className="flex file-box form-input border-none">
            <button onClick={() => fileClick.current.click()}>
              Choose file
            </button>
            <p>No File Chosen</p>
          </div>
        </div>
      </div>
      <div className="file-flex">
        <label htmlFor="email">Email : </label>
        <input required type="email" className="file-box form-input" />
      </div>
      <div className="file-flex">
        <label htmlFor="password">Password : </label>
        <input required type="password" className="file-box form-input" />
      </div>
      <div className="file-flex">
        <label htmlFor="confirm_password">Confirm Password : </label>
        <input required type="password" className="file-box form-input" />
      </div>
      <div className="file-flex">
        <label htmlFor="name">Name : </label>
        <input required type="text" className="file-box form-input" />
      </div>
      <div className="file-flex">
        <label htmlFor="phnumber">Phone Number : </label>
        <input required type="number" className="file-box form-input" />
      </div>
      <div className="file-flex">
        <label htmlFor="birthday">Birthday : </label>
        <input
          required
          type="date"
          className="file-box form-input form-input"
        />
      </div>
      <div className="file-flex">
        <label htmlFor="nrc">NRC : </label>
        <div className="select-box">
          <div>
            <select className="select-box-radius" id="">
              {optionArray.map((data, index) => {
                return (
                  <option key={index} value={data.id}>
                    {data.id}
                  </option>
                );
              })}
            </select>
            <select className="select-box-radius" id="">
              {optionArray.map((data, index) => {
                return (
                  <option key={index} value={data.state}>
                    {data.state}
                  </option>
                );
              })}
            </select>
            <select className="select-box-radius" id="">
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
      <div className="file-flex flex-file">
        <label htmlFor="gender">Gender :</label>
        <div className="radio-box">
          <div onChange={radioValueHandler} className="radio-file-box">
            <input required type="radio" name="gender" value="male" id="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div onChange={radioValueHandler} className="radio-file-box">
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
  );
};

export default CreateUserForm;
