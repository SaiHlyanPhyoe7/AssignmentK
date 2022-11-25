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
      console.log(action.payload);
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
    filteredDate: (state, action) => {
      state.change = [
        ...state.org.filter(
          (i) =>
            i.time_to_filter > action.payload.start_date_seconds &&
            i.time_to_filter < action.payload.end_date_seconds
        ),
      ];
    },
  },
});

export const { receive, filteredInput, filteredDate } = inputSlicer.actions;
export default inputSlicer.reducer;

// if (startSecond>databaseSecone && endsecond<databaseSecond){
//   data
// }
