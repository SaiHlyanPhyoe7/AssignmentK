import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  org: [],
  change: [],
};

const inputSlicer = createSlice({
  name: "inputSlicer",
  initialState,
  reducers: {
    receive: (state, action) => {
      state.org = action.payload;
      state.change = action.payload;
    },
    filteredInput: (state, action) => {
      if (action.payload.length < 1) {
        state.change = state.org;
      } else {
        state.change = [
          ...state.org.filter((i) => i.name.includes(action.payload)),
          ...state.org.filter((i) => i.email.includes(action.payload)),
          ...state.org.filter((i) => i.phNumber.includes(action.payload)),
        ];
      }
    },
  },
});

export const { receive, filteredInput } = inputSlicer.actions;
export default inputSlicer.reducer;
