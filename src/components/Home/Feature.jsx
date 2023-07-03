import React from "react";

import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Items from "../../utils/Items";

const Feature = ({ ifExists, featureData: { head1, items } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "0rem",
    pagination: false,
    padding: "0rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 3 },
      500: { perPage: 4 },
      425: { perPage: 4 },
    },
  };
  return (
    <div className="flex flex-col">
      {head1.map((val, i) => (
        <div className="flex pl-[15vh] gap-10 py-20 md:flex-col md:pl-3">
          <div className="w-[90vh] flex items-center">
            <h1 className="text-gray-600 text-2xl font-bold">
              {ifExists ? val.title1 : val.title2}
            </h1>
          </div>
          <div className="w-[100vh] text-[#777] text-lg md:w-[45vh]">
            <p className="font-semibold">{val.desc}</p>
          </div>
        </div>
      ))}

      <div className="pl-[40vh] w-[200vh] pb-10 md:pl-[2vh] md:w-[100vh]">
        <Splide options={splideOptions}>
          {items.map((data, i) => (
            <SplideSlide>
              <Items key={i} {...data} ifExists={ifExists} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Feature;
