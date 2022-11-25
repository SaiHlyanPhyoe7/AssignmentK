import { configureStore } from "@reduxjs/toolkit";
import inputSlicer from "./slicers/InputSlicer";
import AuthContextSlicer from "./slicers/AuthContextSlicer";
import getData from "./slicers/ReceiveModalData";

export const store = configureStore({
  reducer: {
    filterInput: inputSlicer,
    getData: getData,
  },
});
