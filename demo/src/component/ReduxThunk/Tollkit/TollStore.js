import { configureStore } from "@reduxjs/toolkit";
import reduxTollkit from "./reduxTollkit";

export const store = configureStore({
  reducer: {
    counter: reduxTollkit,
  },
});
