import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";

const Product = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  // const products = useSelector((state) => state.cart.products);
  const productData = useSelector((state) => state.cart.productData);

  // console.log(productData);

  const compare = () => {
    let compareProductData = productData.filter((e) => {
      return e.id == id;
    });
    setData(compareProductData);
  };
  // console.log(data);

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div>
      {data.map((val, i) => (
        <ProductItem val={val} />
      ))}
    </div>
  );
};

export default Product;
