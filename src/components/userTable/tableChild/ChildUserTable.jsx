import { db } from "../../../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import HandleManipulation from "../handleManipulation/HandleManipulation";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filteredDate,
  filteredInput,
  receive,
} from "../../../feature/slicers/InputSlicer";
import Modal from "./Modal/Modal";

const ChildUserTable = ({ formValues, handlePageClick, pageCount, length }) => {
  useEffect(() => {
    dispatch(receive(formValues));
  }, [formValues]);
  const [toggleModal, setToggleModal] = useState(false);
  const handleDelete = async (id) => {
    const ref = doc(db, "formData", id);
    await deleteDoc(ref);
  };
  const [id, setId] = useState();

  const modalFormValues = useSelector((state) => state);
  const handleEdit = async (id) => {
    setToggleModal(!toggleModal);
    setId(id);
  };
  // console.log(modalFormValues);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.filterInput);

  // console.log(data.change);

  const [inputValue, setInputValue] = useState("");
  const searchHandler = (e) => {
    setInputValue(e.target.value);
    if (inputValue !== null) {
      dispatch(filteredInput(inputValue.toLowerCase()));
    } else {
      dispatch(receive(formValues));
    }
  };

  // date handle
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  // console.log(startDate, endDate);
  const start_date = new Date(startDate);
  const end_date = new Date(endDate);
  const start_date_seconds = start_date.getTime();
  const end_date_seconds = end_date.getTime();

  // console.log(start_date_seconds, end_date_seconds);
  const handleDateFilter = (e) => {
    e.preventDefault();
    dispatch(filteredDate({ start_date_seconds, end_date_seconds }));
  };

  // console.log(data.change);

  return (
    <>
      <div className="main-box">
        {/* <div className="main_box_modal">
          {toggleModal && <Modal id={id} handleEdit={handleEdit} />}
        </div> */}
        <div className="real-box">
          <h1 className="box-title">Customers</h1>
          <form className="form-box">
            <input
              onChange={(e) => setStartDate(e.target.value)}
              type="date"
              className="form-input"
              placeholder="Start Date"
            />
            <input
              onChange={(e) => setEndDate(e.target.value)}
              type="date"
              className="form-input ml"
              placeholder="End Date"
            />
            <input
              type="submit"
              className="submit-btn ml"
              onClick={handleDateFilter}
            />
          </form>
          <button className="export-btn">Export CSV</button>
          <div className="second-flex">
            <div className="select-box">
              <select name="" id="" className="select">
                <option value="5">5</option>
              </select>
              <label>entries per page</label>
            </div>
            <div>
              <input
                onChange={searchHandler}
                type="text"
                className="responsive_br"
                placeholder="Search..."
              />
            </div>
          </div>
          <table className="table">
            <thead className="theader">
              <tr>
                <td className="thead responsive_h_p" width="50px">
                  PHOTO
                </td>
                <td className="thead" width="200px">
                  NAME
                </td>
                <td className="thead" width="170px">
                  EMAIL
                </td>
                <td className="thead" width="120px">
                  PHONE
                </td>
                <td className="thead responsive_h" width="150px">
                  BIRTHDAY
                </td>
                <td className="thead responsive-table" width="100px">
                  GENDER
                </td>
                <td className="thead responsive-table" width="150px">
                  NRC
                </td>
                <td className="thead responsive-table" width="250px">
                  Created At
                </td>
                <td className="thead responsive_h" width="200px">
                  Actions
                </td>
              </tr>
            </thead>
            <tbody>
              {data.change &&
                data.change.map((data, index) => {
                  return (
                    <tr key={index} className="tdata">
                      <td className="responsive_h_p" width="100px">
                        <img
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                          src={data.photo}
                          alt=""
                        />
                      </td>
                      <td className="tdata">{data.name}</td>
                      <td className="tdata" width="250px">
                        {data.email}
                      </td>
                      <td className="tdata">{data.phNumber}</td>
                      <td className="tdata responsive-table">
                        {data.birthday}
                      </td>
                      <td className="tdata responsive-table">{data.gender}</td>
                      <td className="tdata responsive-table">
                        {data.nrc_num}/{data.nrc_state}
                        {data.nrc_national}/{data.nrc_numbers}
                      </td>
                      <td className="tdata responsive_h">
                        {data.time} {data.hour} H
                      </td>
                      <HandleManipulation
                        data={data}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="second-flex">
            <p className="except">Showing 1 to {length} entries</p>
            <ReactPaginate
              containerClassName="btn-box"
              activeLinkClassName="active"
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildUserTable;
