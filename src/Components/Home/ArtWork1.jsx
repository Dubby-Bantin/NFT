import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import { artWorks1 } from "../../utils";
const ArtWork1 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-10 overflow-hidden">
      <div className="lg:px-36 w-full mb-16">
        <Swiper
          className="md:w-[60rem] w-full  h-[510px] rounded-lg"
          modules={[Autoplay, Pagination]}
          autoplay
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          grabCursor={true}
          pagination={{ type: "bullets", dynamicBullets: true }}
          direction="horizontal"
          speed={800}
          breakpoints={{
            900: {
              slidesPerView: 3,
            },
            300: {
              slidesPerView: 1,
            },
          }}
        >
          {artWorks1.map((image, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <img
                className={`h-[450px] ${
                  i !== 0 && i !== 2 && "filter__button"
                }  w-[20rem] object-cover ${
                  i == 0 && "lg:rotate-[30deg] rotate-[30deg] top-14 relative"
                } ${
                  i == 2 &&
                  "lg:-rotate-[29deg] -rotate-[29deg] top-10  relative"
                } `}
                src={image}
                alt="slide_image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <div className="text-white flex flex-col items-center gap-6">
          <h1 className="text-[2rem] lg:w-1/2 font-bold">
            AWESOME NFT`S ART SELL AND EARN
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
