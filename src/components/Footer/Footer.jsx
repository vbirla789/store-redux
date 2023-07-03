import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className=" py-10 text-[#777] bg-[#E4E4E4]">
      <div className="flex md:flex-col md:mx-auto md:ml-5 gap-5 mx-[30vh]">
        <div className="flex flex-col w-[40vh]">
          <h1 className="text-slate-700 text-lg font-medium">Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className="flex flex-col w-[40vh]">
          <h1 className="text-slate-700 text-lg font-medium">Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="max-w-[40vh]">
          <h1 className="text-slate-700 text-lg font-medium">About</h1>
          <p>
            At Store, we understand the importance of creating a user-friendly
            platform that caters to your needs. Whether you're searching for
            essentials, demands.
          </p>
        </div>
        <div className="max-w-[40vh]">
          <h1 className="text-slate-700 text-lg font-medium ">Contact</h1>
          <p>
            At Store, we strive to provide exceptional customer support. Our
            representatives are ready to assist you . We understand your time is
            valuable.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-slate-700 my-10">
        <FacebookIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
        <InstagramIcon fontSize="large" />
        <YouTubeIcon fontSize="large" />
        <PinterestIcon fontSize="large" />
      </div>
      <div className="flex items-center justify-center gap-5 ml-10 mx-[24vh] pb-10 md:gap-10">
        <h1 className="text-3xl font-semibold text-slate-700 md:ml-20">
          Store
        </h1>
        <span>
          The content of this site is copyright-protected and is the property of
          Store & Mauritz AB.
        </span>
      </div>
    </div>
  );
};

export default Footer;
