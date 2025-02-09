import React from "react";
import "../css/home.css";
import SliderComponent from "../components/SliderComponent.jsx";
import CategorySlider from "../components/CategorySlider.jsx";
import FreeShipping from "../components/FreeShipping.jsx";
import Ads from "./Ads.jsx";
import ProductsDisplay from "./ProductsDisplay.jsx";


const Home = () => {
  return (
    <>
     <div>
      <SliderComponent/>
     </div>
     <div className="catSlider">
      <CategorySlider/>
     </div>
     <div className="">
      <FreeShipping/>
     </div>
     <div className="!mt-[15px] ">
      <Ads/>
     </div>
     <div>
      <ProductsDisplay/>
     </div>
    </>
  );
};

export default Home;
