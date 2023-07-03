import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";

const Menudropdown = ({ isMenuOpen }) => {
  return (
    <nav
      className={`${
        isMenuOpen ? "right-0" : "-right-full"
      }  bg-[#E4E4E4] flex flex-col  gap-5 opacity-100 absolute  top-0 py-2 px-5 transition-all duration-500 w-[40vh] h-[100vh] mt-0`}
    >
      <div>
        <Link to="products/1">Men</Link>
      </div>
      <div>
        <Link to="products/2">Women</Link>
      </div>
      <div>
        <Link to="products/1">Children</Link>
      </div>
      <div>
        <Link to="products/2">Accesories</Link>
      </div>
      <div>
        <Link to="products/1">Home</Link>
      </div>
      <div>
        <Link to="products/2">About</Link>
      </div>
      <div>
        <Link to="products/1">Contact</Link>
      </div>
      <div>
        <Link to="products/2">Stores</Link>
      </div>
    </nav>
  );
};

export default Menudropdown;
