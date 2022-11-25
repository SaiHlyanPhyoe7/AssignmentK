import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const ReceiveModalData = createSlice({
  name: "receiveModalData",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getData } = ReceiveModalData.actions;
export default ReceiveModalData.reducer;
