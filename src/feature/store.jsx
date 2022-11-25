import { configureStore } from "@reduxjs/toolkit";
import inputSlicer from "./slicers/InputSlicer";
import AuthContextSlicer from "./slicers/AuthContextSlicer";

export const store = configureStore({
  reducer: {
    filterInput: inputSlicer,
    authContext: AuthContextSlicer
  },
});
