import React from "react";
import { Link } from "react-router-dom";

const Items = ({ id, img1, img2, title, price, ifExists }) => {
  return (
    <Link className="link">
      <div className=" flex flex-col drop-shadow-xl w-[50%]">
        <div className="image">
          <img src={ifExists ? img1 : img2} alt="" className="rounded" />
        </div>
        <h2 className="font-normal mt-2">{title}</h2>
        <div className="prices">
          <h3>₹{price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Items;
