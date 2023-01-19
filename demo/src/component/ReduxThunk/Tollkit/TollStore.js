import { configureStore } from "@reduxjs/toolkit";
import ProductToll from "./dataAPI/API2/ProductToll";
import PostToll from "./dataAPI/PostToll";
import reduxTollkit from "./reduxTollkit";

export const store = configureStore({
  reducer: {
    counter: reduxTollkit,
    post: PostToll,
    product: ProductToll,
  },
});
