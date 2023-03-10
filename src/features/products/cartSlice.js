import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmout: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //check for existing product in cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //if exist
      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex].cartQuantity += 1;
        toast.info("Quantity Increased", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      //if not exist -->
      else {
        //add to cart
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);
        toast.success("Product Added Successfully", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      //add to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = updatedCartItems;
      toast.error("Product Removed", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      //update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      state.cartItems = [];
      toast.error("Cart Cleared", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      //update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreseCartQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //if exist item quantity is greater than one
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info("Quantity Decrease", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      //if exist item quantity is one make remove
      else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = updatedCartItems;
        toast.error("Product Removed", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        //update local storage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    getSubtalPrice(state, action) {
      const subtotal = state.cartItems.reduce((acc, item) => {
        const { price, cartQuantity } = item;
        const itemTotalPrice = price * cartQuantity;
        acc += itemTotalPrice;
        return acc;
      }, 0);

      state.cartTotalAmout = subtotal;
    },
  },
});
//actions
export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreseCartQuantity,
  getSubtalPrice,
} = cartSlice.actions;

//reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;
