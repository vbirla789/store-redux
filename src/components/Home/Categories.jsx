import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ photos: { img1, img2, img3, img4, img5, img6 } }) => {
  return (
    <div className="flex gap-2 items-center justify-center py-4 drop-shadow-xl md:p-2">
      <div className="flex flex-col gap-2">
        <div className="relative">
          <img src={img6} className="h-[40vh] e-[50vh] w-[50vh]" />
          <button className="absolute h-[35px]  px-5 top-0 bottom-0 left-0 right-0 m-auto text-slate-800 w-fit bg-white rounded font-semibold opacity-80 hover:opacity-90">
            <Link to="/products/1">Sale</Link>
          </button>
        </div>
        <div className="relative">
          <img src={img2} className="h-[40vh] w-[50vh]" />
          <button className="absolute h-[35px] px-5 top-0 bottom-0 left-0 right-0 m-auto w-fit text-slate-800 bg-white rounded font-semibold opacity-80 hover:opacity-90">
            <Link to="/products/2">Women</Link>
          </button>
        </div>
      </div>
      <div className="sm:hidden relative">
        <img src={img3} className="w-[50vh] h-[81vh]" />
        <button className="absolute h-[35px] px-5 top-0 bottom-0 left-0 right-0 m-auto w-fit text-slate-800 bg-white rounded font-semibold opacity-80 hover:opacity-90">
          <Link to="/products/2">New Season</Link>
        </button>
      </div>
      <div className="flex flex-col w-[100vh] gap-2">
        <div className="flex gap-2">
          <div className="relative">
            <img src={img4} className="w-[50vh] h-[40vh]" />
            <button className="absolute h-[35px] px-5 top-0 bottom-0 left-0 right-0 m-auto w-fit text-slate-800 bg-white rounded font-semibold opacity-80 hover:opacity-90">
              <Link to="/products/1">men</Link>
            </button>
          </div>
          <div className="relative">
            <img src={img5} className="w-[50vh] h-[40vh]" />
            <button className="absolute h-[35px] px-5 top-0 bottom-0 left-0 right-0 m-auto w-fit text-slate-800 bg-white rounded font-semibold opacity-80 hover:opacity-90">
              <Link to="/products/2">Accesories</Link>
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={img1} className="h-[40vh] w-[100vh]" />
          <button className="absolute h-[35px] px-5 top-0 bottom-0 left-0 right-0 m-auto w-fit text-slate-800 bg-white rounded font-semibold opacity-80 hover:opacity-90">
            <Link to="/products/1">Shoes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
