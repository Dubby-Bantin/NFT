import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper/modules";
import { IoIosArrowDown } from "react-icons/io";
import { artWorks1 } from "../../utils";
const ArtWork1 = () => {
  return (
    <div className="xs:hidden lg:flex flex-wrap flex-col items-center justify-center text-center mb-10 overflow-hidden">
      <div className="lg:px-36 w-full mb-16">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
          }}
          // pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper_button_next",
            prevEl: ".swiper_button_prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Navigation]}
        >
          <div className="absolute h-[30rem] w-[100rem]  top-1/2 left-2  z-[999] overflow-x-hidden lg:block hidden">
            <div className="flex items-center justify-between px-5 py-3 w-[75rem] z-[9999]  text-[2rem] text-purple-950">
              <div className="h-[50px] w-[50px] filter__button flex items-center justify-center  rotate-45">
                <button className="swiper_button_prev">
                  <IoIosArrowDown className="rotate-45" />
                </button>
              </div>
              <div className="h-[50px] w-[50px] filter__button flex items-center justify-center rotate-45">
                <button className="swiper_button_next">
                  <IoIosArrowDown className="-rotate-[135deg]" />
                </button>
              </div>
            </div>
          </div>

          {artWorks1.map((art, i) => (
            <SwiperSlide key={i} className="gradient">
              <img
                className={`${
                  i !== 2 && i !== 0 && "filter__button2"
                } h-[25rem] object-cover ${
                  i == 0 && "lg:rotate-[30deg] top-9 relative"
                } ${i == 2 && "lg:-rotate-[29deg] top-10  relative"} `}
                src={art}
                alt="slide_image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <div className="text-white flex flex-col items-center gap-6">
          <h1 className="text-[2rem] lg:w-1/2 font-bold">
            AWESOME NFT'S ART SELL AND EARN
          </h1>
          <p className="lg:w-1/3 w-[25rem] text-sm">
            With Brandname you can now easily trade your NFTs with a Fast and
            huge bid.We have the best gas fee ,friendly with the price and value
            of your asset
          </p>

          <button className="py-[.8rem] mb-5 px-[2rem] text-[12px] filter__button bg-gradient-to-r from-[#1D09BD] to-[#EB01E3] ">
            VIEW MORE
          </button>

          <div className="line w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default ArtWork1;
