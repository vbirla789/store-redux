import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const ListItems = ({ id, img1, title, price }) => {
  const dispatch = useDispatch();

  const addCart = () => {
    const product = { id, img1, title, price };

    dispatch(addToCart(product));
  };

  return (
    <section key={id}>
      <div className="w-[35vh] flex flex-col md:w-[20vh] md:h-[10vh] md:mb-[32vh]">
        <div className="image">
          <NavLink to={`/product/${id}`}>
            <img src={img1} alt="" className="mainImg" />
          </NavLink>
        </div>
        <h2 className="font-normal">{title}</h2>
        <div className="prices">
          <h3>₹{price}</h3>
        </div>
        <button
          className="bg-slate-900 text-white rounded py-2"
          onClick={() => addCart()}
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default ListItems;
