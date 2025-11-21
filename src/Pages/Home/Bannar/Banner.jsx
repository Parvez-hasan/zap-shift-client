import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from "..//..//..//assets/banner/banner1.png"
import bannerImg2 from "..//..//..//assets/banner/banner2.png"
import bannerImg3 from "..//..//..//assets/banner/banner3.png"
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
        {/* banner 1 */}
      <div className="relative">
        <img src={bannerImg1} />
        <div className="absolute bottom-18 left-6
           px-5 py-2 rounded-lg flex items-center gap-2">
            <button className="bg-primary py-2 px-4 rounded-full">Track Your Parcel</button>
            <GoArrowUpRight  className=" text-white bg-black"/>
            <button className="btn ">Be A Rider</button>
        </div>
      </div>
      {/* banner 2 */}
      <div className="relative">
        <img src={bannerImg2} />
         <div className="absolute bottom-18 left-6
           px-5 py-2 rounded-lg flex items-center gap-2">
            <button className="bg-primary py-2 px-4 rounded-full">Track Your Parcel</button>
             <GoArrowUpRight  className=" text-white bg-black" />
            <button className="btn ">Be A Rider</button>
        </div>
      </div>
       {/* banner 3 */}
      <div className="relative">
        <img src={bannerImg3} />
         <div className="absolute bottom-18 left-6
           px-5 py-2 rounded-lg flex items-center gap-2">
            <button className="bg-primary py-2 px-4 rounded-full">Track Your Parcel</button>
             <GoArrowUpRight  className=" text-white bg-black"/>
            <button className="btn ">Be A Rider</button>
        </div>
      </div>
    </Carousel>

  );
};

export default Banner;
