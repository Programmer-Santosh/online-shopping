import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Bannerbox from './Bannerbox.jsx';
import '../css/bannerbox.css'

const AdsBanner = (props) => {
  return (
    <>
    
      <div className="slider">
        <Swiper
        slidesPerView = {props.items}
        spaceBetween={10}
       
          navigation={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className=""
        >
            <SwiperSlide >
               <Bannerbox img={"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b530f7110494491.5feef8228f2b8.png"}/>
            </SwiperSlide>
            <SwiperSlide>
               <Bannerbox img={"https://img.freepik.com/free-vector/paper-style-podium-horizontal-banner_23-2150956904.jpg?semt=ais_hybrid"}/>
            </SwiperSlide>
            <SwiperSlide>
               <Bannerbox img={"https://images.freecreatives.com/wp-content/uploads/2016/10/Feature-Image14.jpg"}/>
            </SwiperSlide>
            <SwiperSlide>
               <Bannerbox img={"https://img.freepik.com/free-psd/horizontal-banner-facebook-cover-with-minimal-design-home-furniture-discount_237398-104.jpg?semt=ais_hybrid"}/>
            </SwiperSlide>
            <SwiperSlide>
               <Bannerbox img={"https://img.freepik.com/free-psd/horizontal-banner-facebook-cover-with-minimal-design-home-furniture-discount_237398-104.jpg?semt=ais_hybrid"}/>
            </SwiperSlide>
            <SwiperSlide>
               <Bannerbox img={"https://img.freepik.com/free-psd/horizontal-banner-facebook-cover-with-minimal-design-home-furniture-discount_237398-104.jpg?semt=ais_hybrid"}/>
            </SwiperSlide>
           

        </Swiper>
        </div>
    </>
  )
}

export default AdsBanner