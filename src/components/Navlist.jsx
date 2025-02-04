import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
const Navlist = () => {
  return (
    <>
      <div className="navlists flex items-center gap-5">
        <Link className="link" to="/home">
          Home
        </Link>

        
        <div className="parent fashion">
        <Link className="link" to="/services">
          Fashion
        </Link>
            {/* <ul className="child">
              <li><Link to={"/"}>Men</Link></li>
              <li><Link to ={"/"}>Women</Link></li>
              <li><Link to ={"/"}>Kids</Link></li>
              <li><Link to ={"/"}>Formal</Link></li>
              <li><Link to ={"/"}>Casual</Link></li>
            </ul> */}
          </div>
          <div className="parent electronics">
          <Link className="link" to="/electronics">
          Electronics
        </Link>
            {/* <ul className="child">
              <li><Link to={"/"}>Appliances</Link></li>
              <li><Link to ={"/"}>Gadgets</Link></li>
              <li><Link to ={"/"}>Smartphone</Link></li>
              <li><Link to ={"/"}>Machines</Link></li>
             
            </ul> */}
          </div>
        

        <Link className="link" to="/bags">
          Bags
        </Link>
        <Link className="link" to="/footwear">
          Footwear
        </Link>
        <Link className="link" to="/grocery">
          Groceries
        </Link>
        <Link className="link" to="/beauty">
          Beauty
        </Link>
        <Link className="link" to="/jwellery">
          Jwelleries
        </Link>
      </div>
    </>
  );
};

export default Navlist;
