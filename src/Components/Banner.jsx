import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import img1 from ".././assets/image/slide1.jpg"
import img2 from "../assets/image/silde2.jpg"
import img3 from ".././assets/image/slide3.jpg"

const Banner = () => {
//   const Swiper = new Swiper('.swiper', {
//   autoplay: {
//     delay: 5000,
//   },
// });
  return (
    <div className="">
      <Swiper navigation={true}  modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-[600px] ">
        <SwiperSlide><img src={img1} alt="" className="w-full h-full object-cover" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" className="w-full h-full object-cover"/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" className="w-full h-full object-cover"/></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;
