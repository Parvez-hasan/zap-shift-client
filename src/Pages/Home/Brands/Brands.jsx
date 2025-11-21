import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amzon from "..//..//..//assets/brands/amazon.png";
import amzon_vactor from "..//..//..//assets/brands/amazon_vector.png";
import casio from "..//..//..//assets/brands/casio.png";
import moonstar from "..//..//..//assets/brands/moonstar.png";
import randstad from "..//..//..//assets/brands/randstad.png";
import star from "..//..//..//assets/brands/star.png";
import star_people from "..//..//..//assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const BandsLogo = [
  amzon,
  amzon_vactor,
  casio,
  moonstar,
  randstad,
  star,
  star_people,
];

const Brands = () => {
  return (
    <div className="py-4 px-3">
      <h2 className=" text-2xl text-gray-800 font-bold text-center py-7">
        We've helped thousands of sales teams
      </h2>

      <Swiper
        loop={true}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
         {BandsLogo.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
