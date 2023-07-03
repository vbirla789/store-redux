import { Lists } from "../../data/data";
import List from "../../components/Products/List";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { counterSlice } from "../../redux/cartReducer";

const Products = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const productsData = useSelector((state) => state.cart.productsData);

  // console.log(productsData);

  const compare = () => {
    let compareProductsData = productsData.filter((e) => {
      return e.id == id;
    });
    setData(compareProductsData);
  };
  // console.log(data);

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div className="pt-[15vh] flex">
      <div className="flex flex-col gap-7 pl-10 w-[60vh] md:hidden">
        <div>
          <h1 className="font-semibold text-xl mb-4">New Arrivals</h1>
          <div className="flex flex-col gap-3 text-lg font-medium">
            <span>View All</span>
            <span>Clothes</span>
            <span>Shoes & Accesories</span>
          </div>
        </div>
        <div>
          <h1 className="font-semibold  mb-4 text-xl ">The Essentials</h1>
          <div className="flex flex-col font-medium text-lg ">
            <span>The Collection</span>
            <span>About</span>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl mb-3">Sustainability</h1>
          <div className="flex flex-col gap-3 font-medium text-lg ">
            <span>Store Take Care</span>
            <span>Learn More</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {data.map((val, i) => (
          <List data={val} />
        ))}
      </div>
    </div>
  );
};

export default Products;
