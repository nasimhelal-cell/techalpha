import productReducer, {
  fetchedProduct,
} from "../features/products/productSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

store.dispatch(fetchedProduct());
