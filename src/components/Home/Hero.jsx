import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Hero = () => {
  const data = [
    "https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-linen/subhome-xmedia-25-v2023r//w/1920/IMAGE-landscape-fill-d21faa0a-7ccb-4d1d-aa7c-e7d5885cf35d-default_0.jpg?ts=1687517856641",
    "https://lp2.hm.com/hmgoepprod?source=url[https%3A%2F%2Ffiles.hm.com%2Fshare%2Fassets%2F2023%2F1048%2Fc%2F1048C-16x11-Panthera-Top-Image.jpg]&scale=width[1920]&sink=format[webp],quality[100]",
    "https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-shoes/subhome-xmedia-24-v2023r//w/1920/IMAGE-landscape-fill-e2971cdf-e930-47b6-a853-db22fd100309-default_0.jpg?ts=1686922427187",
  ];
  return (
    <div>
      <Splide>
        <SplideSlide>
          <img src={data[0]} className="h-[100vh] w-[100%] " />
        </SplideSlide>
        <SplideSlide>
          <img src={data[1]} className="h-[100vh] w-[100%]" />
        </SplideSlide>
        <SplideSlide>
          <img src={data[2]} className="h-[100vh] w-[100%]" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Hero;
