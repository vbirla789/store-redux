import React from "react";
import Hero from "../../components/Home/Hero";
import Feature from "../../components/Home/Feature";
import { featureData, photos } from "../../data/data";
import Categories from "../../components/Home/Categories";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature featureData={featureData} ifExists={true} />
      <Categories photos={photos} />
      <Feature featureData={featureData} ifExists={false} />
    </div>
  );
};

export default Home;
