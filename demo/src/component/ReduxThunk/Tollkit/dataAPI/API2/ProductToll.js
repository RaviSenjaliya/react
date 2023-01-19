import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  return fetch(`https://fakestoreapi.com/products`).then((e) => e.json());
});

const ProductToll = createSlice({
  name: "post",
  initialState: {
    userlist: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.userlist = action.payload;
      state.status = "success";
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default ProductToll.reducer;
