import React from "react";
import "../css/home.css";
import SliderComponent from "../components/SliderComponent.jsx";
import CategorySlider from "../components/CategorySlider.jsx";

const Home = () => {
  return (
    <>
     <div>
      <SliderComponent/>
     </div>
     <div className="catSlider">
      <CategorySlider/>
     </div>
    </>
  );
};

export default Home;
