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
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1.5 },
    },
  };
  return (
    <div className="flex flex-col mb-10">
      {head1.map((val, i) => (
        <div className="flex px-auto py-20 md:flex-col items-center gap-10 justify-center md:py-10 mx-10">
          <div className="flex items-center">
            <h1 className="text-gray-600 text-2xl font-bold">
              {ifExists ? val.title1 : val.title2}
            </h1>
          </div>
          <div className="text-[#777] text-lg md:w-[80%] w-[80%]">
            <p className="font-semibold">{val.desc}</p>
          </div>
        </div>
      ))}

      <div className="w-[80%] mx-auto">
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
