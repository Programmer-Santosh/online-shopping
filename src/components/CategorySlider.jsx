import React from "react";
import "../css/slider.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
const CategorySlider = () => {
  return (
    <>
      <div className="catSlider !m-[10px] ">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://i.pinimg.com/736x/47/42/c7/4742c712595010ebb6cb6bb0aeff5aaf.jpg"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Jwellery</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://i.pinimg.com/736x/51/d3/88/51d38806d50482762c700eca5717a32f.jpg"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Appliances</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJKaqTnqHiG0qYmFTT2rExoQgeGs3gwoC7A&s"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Fashion</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://www.pngall.com/wp-content/uploads/2/Bag-PNG-Image.png"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Bags</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2022/11/KE/VX/MV/116453489/white-casual-shoes-for-men.jpg"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Shoes</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://c8.alamy.com/comp/2FN9B08/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-isolated-on-white-background-3d-illustration-2FN9B08.jpg"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Groceries</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://c8.alamy.com/comp/2B1594C/makeup-professional-cosmetics-on-white-background-2B1594C.jpg"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Makeup</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://m.media-amazon.com/images/I/81lYC-4Yd7L._AC_SL1500_.jpg"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Jacket</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://i.pinimg.com/736x/47/42/c7/4742c712595010ebb6cb6bb0aeff5aaf.jpg"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Jwellery</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://i.pinimg.com/736x/51/d3/88/51d38806d50482762c700eca5717a32f.jpg"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Appliances</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJKaqTnqHiG0qYmFTT2rExoQgeGs3gwoC7A&s"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Fashion</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://www.pngall.com/wp-content/uploads/2/Bag-PNG-Image.png"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Bags</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2022/11/KE/VX/MV/116453489/white-casual-shoes-for-men.jpg"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Shoes</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://c8.alamy.com/comp/2FN9B08/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-isolated-on-white-background-3d-illustration-2FN9B08.jpg"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Groceries</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://c8.alamy.com/comp/2B1594C/makeup-professional-cosmetics-on-white-background-2B1594C.jpg"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Makeup</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="parentSwiper">
            <div className="swiperClass">
              <div className="image">
                <img
                  src="https://m.media-amazon.com/images/I/81lYC-4Yd7L._AC_SL1500_.jpg"
                  alt=""
                  className="image"
                />
              </div>

              <Link to={"/id"} className="link">Jacket</Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CategorySlider;
