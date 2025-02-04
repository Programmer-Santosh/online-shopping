import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../css/slider.css";
import { Button } from "@mui/material";

const SliderComponent = () => {
  return (
    <>
      <div className="slider">
        <Swiper 

        
        navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="Slider-part">
              <img
                src="https://cdn.shopify.com/s/files/1/0579/3975/5089/files/Aadi_Blog_Banner.1_b65d2db5-2a2a-4c29-9204-ad55c4f09863.jpg?v=1734675390"
                alt=""
                className="image"
              />
              <h1 className="title">Most Demanded Outfit</h1>
              <p className="discount">Discount Up to 25%</p>
              <Button>
                <Link to={"/"}>Shop Now</Link>
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide><div className="Slider-part">
              <img
                src="https://www.shutterstock.com/image-photo/portrait-handsome-confident-model-sexy-600nw-2143420135.jpg" alt=""
                className="image"
              />
              <h1 className="title">Most Demanded Outfit</h1>
              <p className="discount">Discount Up to 25%</p>
              <Button>
                <Link to={"/"}>Shop Now</Link>
              </Button>
            </div></SwiperSlide>
          <SwiperSlide><div className="Slider-part">
              <img
                src="https://cdn.shopify.com/s/files/1/0579/3975/5089/files/Aadi_Blog_Banner.1_b65d2db5-2a2a-4c29-9204-ad55c4f09863.jpg?v=1734675390"
                alt=""
                className="image"
              />
              <h1 className="title">Most Demanded Outfit</h1>
              <p className="discount">Discount Up to 25%</p>
              <Button>
                <Link to={"/"}>Shop Now</Link>
              </Button>
            </div></SwiperSlide>
          <SwiperSlide><div className="Slider-part">
              <img
                src="https://cdn.shopify.com/s/files/1/0579/3975/5089/files/Aadi_Blog_Banner.1_b65d2db5-2a2a-4c29-9204-ad55c4f09863.jpg?v=1734675390"
                alt=""
                className="image"
              />
              <h1 className="title">Most Demanded Outfit</h1>
              <p className="discount">Discount Up to 25%</p>
              <Button>
                <Link to={"/"}>Shop Now</Link>
              </Button>
            </div></SwiperSlide>
          <SwiperSlide><div className="Slider-part">
              <img
                src="https://cdn.shopify.com/s/files/1/0579/3975/5089/files/Aadi_Blog_Banner.1_b65d2db5-2a2a-4c29-9204-ad55c4f09863.jpg?v=1734675390"
                alt=""
                className="image"
              />
              <h1 className="title">Most Demanded Outfit</h1>
              <p className="discount">Discount Up to 25%</p>
              <Button>
                <Link to={"/"}>Shop Now</Link>
              </Button>
            </div></SwiperSlide>
          
        </Swiper>
      </div>
    </>
  );
};

export default SliderComponent;
