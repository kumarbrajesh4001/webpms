import { createSlice } from "@reduxjs/toolkit";

const sessionReducer = createSlice({
  name: "userInfo",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((cv) => cv.alias !== action.payload);
    },
  },
});

export const { add, remove } = sessionReducer.actions;

export default sessionReducer.reducer;
