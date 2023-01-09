import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchedProduct = createAsyncThunk(
  "products/fetchedProduct", // slice's name property / actionName=) products/fetchedProduct
  async () => {
    const response = await axios.get(
      "https://eager-sable-airedale.glitch.me/products"
    );
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchedProduct.pending, (state, action) => {
      state.status = "Loading...";
    });

    builder.addCase(fetchedProduct.fulfilled, (state, action) => {
      state.status = "";
      state.items = action.payload; // [...state,action.payload] is running in bg
    });

    builder.addCase(fetchedProduct.rejected, (state, action) => {
      state.status = "Something went wrong";
    });
  },
});

const productReducer = productSlice.reducer;
export default productReducer;
