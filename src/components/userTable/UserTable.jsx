import React, { useEffect, useState } from "react";
import { useCollection } from "../../hooks/useCollection";

import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import ChildUserTable from "./tableChild/ChildUserTable";

const UserTable = () => {
  const { documents: formValues } = useCollection("formData");
  // console.log(formValues);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const length = Math.ceil(formValues?.length / 5);
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = formValues?.slice(itemOffset, endOffset);
  // console.log(currentItems);
  const pageCount = Math.ceil(formValues?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % formValues?.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  return (
    <>
      <ChildUserTable
        formValues={currentItems}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
        length={length}
      />
    </>
  );
};

export default UserTable;
