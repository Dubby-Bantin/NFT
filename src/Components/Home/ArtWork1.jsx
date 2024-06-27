import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import slide1 from "../../assets/Images/slide1.png";
import slide2 from "../../assets/Images/slide2.png";
import slide3 from "../../assets/Images/slide3.png";
import { IoIosArrowDown } from "react-icons/io";
const ArtWork1 = () => {
  return (
    <div className="px-36">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
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
        className="swiper_container"
      >
        <div className="absolute h-[30rem] w-[100rem]  top-1/2 left-2  z-[999] overflow-x-hidden lg:block hidden">
          <div className="flex items-center justify-between px-5 py-3 w-[75rem] z-[9999]  text-[2rem] text-purple-950">
            <div className="h-[50px] w-[50px] filter__button flex items-center justify-center  rotate-45">
              <button className="swiper_button_prev">
                <IoIosArrowDown className="rotate-45" />
              </button>
            </div>
            <div className="h-[50px] w-[50px] filter__button flex items-center justify-center rotate-45">
              <button className="swiper_button_prev">
                <IoIosArrowDown className="-rotate-[135deg]" />
              </button>
            </div>
          </div>
        </div>
        <SwiperSlide>
          <img src={slide2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ArtWork1;
