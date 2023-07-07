import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import Menudropdown from "./Menudropdown";
import { data } from "../../data/data";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);

  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // console.log("search term", searchTerm);
  };

  return (
    <div
      className={
        !navState
          ? "z-50 flex items-center gap-[15vh] absolute text-lg md:gap-[10vh] lg:justify-between py-5  lg:px-5 xl:pl-[20vh] w-full lg:pl-[0]"
          : "sticky top-0 left-0 right-0 h-[10vh] flex items-center justify-around md:justify-between z-50 bg-[#E4E4E4] opacity-80 text-lg md:px-5 lg:h-[8vh]"
      }
    >
      <div className="flex gap-4 pt-2 ml-5 lg:hidden">
        <div className="flex ">
          <span>INR</span>
          <KeyboardArrowDownIcon />
        </div>
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
      </div>
      <div>
        <Link to="/">
          {" "}
          <h1 className="text-3xl font-semibold md:pt-2 md:pl-1 lg:pl-10">
            STORE
          </h1>
        </Link>
      </div>
      <div className="flex gap-4 pt-2 items-center">
        {/* <div className="md:hidden">
          <Link to="/">Home</Link>
        </div>
        <div className="md:hidden">
          <Link>About</Link>
        </div>
        <div className="md:hidden">
          <Link>Contact</Link>
        </div>
        <div className="md:hidden">
          <Link>Stores</Link>
        </div> */}
        <div className="text-black flex">
          <input
            placeholder="Search"
            type="search"
            value={value}
            onChange={onChange}
            className="rounded-full text-base px-4 py-1 md:py-2 lg:mr-5 w-[60vh] md:w-[83%] lg:absolute top-[12vh] left-10 bg-[#807c77] opacity-50 outline-none lg:bg-[#E4E4E4] md:opacity-80 placeholder-black lg:py-3"
          />
          <button onClick={() => onSearch(value)}>
            <SearchIcon />
          </button>
        </div>
        <div className="absolute top-20 bg-[#807c77] opacity-50 md:bg-[#E4E4E4] md:opacity-80 px-4 rounded-md  w-[60vh] md:w-[55vh] md:top-[22vh] md:right-5">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const name = item.name.toLowerCase();

              return (
                searchTerm && name.startsWith(searchTerm) && name !== searchTerm
              );
            })
            .map((item) => (
              <div onClick={() => onSearch(item.name)} key={item.id}>
                <NavLink to={`/product/${item.id}`}>{item.name}</NavLink>
              </div>
            ))}
        </div>
        {/* 
        <div>
          <PersonOutlineIcon fontSize="medium" />
        </div> */}
        <div>
          <FavoriteBorderIcon fontSize="medium" />
        </div>
        <div onClick={() => setOpen(!open)} className="relative">
          <ShoppingCartIcon fontSize="medium" />
          <span className="absolute top-0 left-4 text-white text-sm rounded-full bg-gray-500 h-[20px] w-[20px] flex items-center justify-center">
            {products.length}
          </span>
        </div>
        <div className="hidden md:block mt-1 ml-2">
          <RxHamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
          {isMenuOpen && <Menudropdown isMenuOpen={isMenuOpen} />}
        </div>
        <div
          className={
            isMenuOpen
              ? "absolute top-[40vh] right-[50vh] hidden md:block md:right-5 md:top-4"
              : "hidden"
          }
        >
          <RxCross1
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black"
          />
        </div>
      </div>

      {open && <Cart />}
    </div>
  );
};

export default Navbar;
