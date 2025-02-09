import React from "react";
import '../css/bannerbox.css';
const Bannerbox = (props) => {
  return (
    <>
      <div className="box ">
        <img className="!transition-all hoverScale"
          src={props.img}
          alt="??"
          height={props.height}
        />{" "}
      </div>
    </>
  );
};

export default Bannerbox;
