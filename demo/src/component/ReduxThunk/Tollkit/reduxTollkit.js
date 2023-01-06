import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const reduxTollkit = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (e) => {
      e.value += 1;
    },
    decrement: (e) => {
      if (e.value > 0) {
        e.value -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += parseInt(action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount } = reduxTollkit.actions;

export default reduxTollkit.reducer;
