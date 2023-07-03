import React from "react";
import ListItems from "./ListItems";

const List = ({ data: { id, img, head, imgData, items } }) => {
  return (
    <div className="min-h-[150vh]">
      <div className="relative md:hidden">
        <div>
          <img src={img} className="w-[130vh]  h-[120vh]" />
        </div>
        {imgData.map((val, i) => (
          <div className="absolute top-[35vh] right-0 left-80 bottom-0 m-auto md:left-10 md:top-20">
            <h1 className="font-bold text-5xl md:texl-lg text-white mb-5">
              {val.title}
            </h1>
            <p className="text-white font-semibold">{val.desc}</p>
            <button className="flex items-center justify-center bg-white text-slate-700 ml-20 md:ml-0 mt-5 px-5 py-3 text-semibold font-semibold">
              {val.button}
            </button>
          </div>
        ))}
      </div>
      {head.map((val, i) => (
        <div className="flex items-center justify-center flex-col w-[130vh] gap-10 mt-10 text-slate-700 md:w-[40vh] md:ml-5">
          <h1 className="text-5xl font-semibold md:text-4xl ">{val.title}</h1>
          <p className="font-normal">{val.desc}</p>
        </div>
      ))}
      <div className="flex gap-2  my-10 md:flex-wrap md:w-[50vh] md:gap-5 md:items-center md:justify-center ">
        {items.map((data, i) => (
          <ListItems {...data} />
        ))}
      </div>
    </div>
  );
};

export default List;
