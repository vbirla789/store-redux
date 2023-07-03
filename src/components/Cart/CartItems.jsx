import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { removeItem } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const CartItems = ({ item: { id, img1, title, price } }) => {
  const dispatch = useDispatch();

  return (
    <div key={id}>
      <div className="flex justify-between items-center">
        <div>
          <NavLink to={`/product/${id}`}>
            <img src={img1} className="h-[50px] w-[50px]" />
          </NavLink>
        </div>
        <div>
          <h1>{title}</h1>
          <div>
            <p>${price}</p>
          </div>
        </div>
        <div>
          <button onClick={() => dispatch(removeItem(id))}>
            <DeleteOutlineIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
