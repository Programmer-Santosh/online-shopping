import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import "../css/freeshipping.css";
const FreeShipping = () => {
  return (
   <>
   <div className="w-[60%] !m-auto freeshipping-container !mt-10  !mb-10 rounded-2xl">
    <div className="freeshipping">
        <i className='freeshipping-icon'><TbTruckDelivery/></i>
        <h2 className='freeshipping-title uppercase'>Free Shipping</h2>

    </div>
    <div className="freeshipping-details">
        <p className='details-para'>Get Free delivery on your first shopping or over $200.</p>
    </div>
    <div className="freeshipping-price">
        <h2 className="price">-Only $200</h2>
    </div>
   </div>
   
   </>
  )
}

export default FreeShipping