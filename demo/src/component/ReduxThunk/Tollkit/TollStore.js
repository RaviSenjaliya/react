import { configureStore } from "@reduxjs/toolkit";
import PostToll from "./dataAPI/PostToll";
import reduxTollkit from "./reduxTollkit";

export const store = configureStore({
  reducer: {
    counter: reduxTollkit,
    post: PostToll,
  },
});
