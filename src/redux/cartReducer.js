import { createSlice } from "@reduxjs/toolkit";
import { ListItems, items } from "../data/data";
import { Toaster, toast } from "react-hot-toast";

const initialState = {
  products: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  productData: items,
  productsData: ListItems,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
        toast.success(`${action.payload.title} added to Cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeItem: (state, action) => {
      const removeItem = state.products.filter(
        (item) => item.id !== action.payload
      );
      state.products = removeItem;
      toast.success("product removed from cart");
    },
    resetCart: (state, action) => {
      state.products = [];
    },
    getTotals: (state, action) => {
      let { totalAmount } = state.products.reduce(
        (cartTotal, product) => {
          const { price } = product;

          const totalPrice = price;

          cartTotal.totalAmount += totalPrice;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );
      state.cartTotalAmount = totalAmount;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart, setProduct, getTotals } =
  counterSlice.actions;

export default counterSlice.reducer;
