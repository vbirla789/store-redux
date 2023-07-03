import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import CartItems from "./CartItems";
import { getTotals } from "../../redux/cartReducer";

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);

  const totalAmount = useSelector((state) => state.cart.cartTotalAmount);

  useEffect(() => {
    dispatch(getTotals());
  }, [products, dispatch]);

  return (
    <div className="absolute z-100 bg-[#E4E4E4] opacity-100 py-5 px-5  top-20 right-4 w-[60vh] flex flex-col gap-10 min-h-[80vh] rounded md:w-[45vh]">
      <h1>Products in your cart</h1>
      {products?.map((item, i) => (
        <CartItems item={item} key={i} />
      ))}
      <div className="absolute , bottom-10">
        <div className="flex justify-between w-[60vh]">
          <h1>Subtotal</h1>
          <span className="mr-10">₹{totalAmount}</span>
        </div>
        <div>
          <button className="bg-slate-900 text-white px-4 py-1 mb-0 mt-5 rounded">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
