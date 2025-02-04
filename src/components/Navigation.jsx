import React from "react";

import CategoryPanel from "../components/CategoryPanel.jsx";
import "../css/header.css";
import Navlist from "./Navlist.jsx";
const Navigation = () => {
  return (
    <>
      <div className="navParent flex flex-row items-center ">
        <div className="categories w-[25%]">
          <CategoryPanel />

          {/*  */}
        </div>
        <div className="navlists w-[70%] ml-10">
          <Navlist />
        </div>
        <div className="navChild">
          
          <div className="electronics"></div>
          <div className="bags"></div>
          <div className="footwear"></div>
          <div className="groceries"></div>
          <div className="beauty"></div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
