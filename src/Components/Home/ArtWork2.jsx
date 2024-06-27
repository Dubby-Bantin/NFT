import React, { useEffect, useRef, useState } from "react";
import { artWorks, filterArtButtons } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { IoIosArrowDown } from "react-icons/io";

const ArtWork2 = () => {
  const [selectedIndex, setSelectedIndex] = useState("ALL NFT'S");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [filteredCards, setFilteredCards] = useState([]);

  const nextSlide = () =>
    setCurrentIndex((p) => (p + 1) % filteredCards.length);

  const prevSlide = () => {
    setCurrentIndex((p) => (p - 1) % filteredCards.length);
    currentIndex < 1 && setCurrentIndex(0);
  };

  const handleCategoryClick = (category) => {
    setSelectedIndex(category);
    const selectedCards = artWorks
      .filter((art) => art.category === category)
      .slice(0, 3);
    setFilteredCards(selectedCards);
  };

  useEffect(() => {
    handleCategoryClick("ALL NFT'S");
  }, []);

  return (
    <section className="relative">
      <h1 className="text-white text-center font-bold text-[2rem] mb-5">
        Featured Artwork Collection
      </h1>
      <div className="flex items-center justify-center text-white md:gap-16 gap-4 flex-wrap mb-10">
        {filterArtButtons.map((text, i) => (
          <div key={i}>
            <button
              onClick={() => handleCategoryClick(text)}
              className={`py-[.8rem] px-[2rem] text-[12px] filter__button ${
                selectedIndex == text &&
                "bg-gradient-to-r from-[#1D09BD] to-[#EB01E3]"
              } `}
            >
              {text}
            </button>
          </div>
        ))}
      </div>
      {/* buttons for slide */}
      <div className="absolute top-1/4 left-1/4 overflow-x-hidden lg:block hidden">
        <div className="flex items-center justify-between px-24 h-[30rem] w-[50rem] text-[2rem] text-purple-950">
          <div
            className="h-[50px] w-[50px] filter__button flex items-center justify-center  rotate-45"
            onClick={prevSlide}
          >
            <button>
              <IoIosArrowDown className="rotate-45" />
            </button>
          </div>
          <div
            className="h-[50px] w-[50px] filter__button flex items-center justify-center rotate-45"
            onClick={nextSlide}
          >
            <button>
              <IoIosArrowDown className="-rotate-[135deg]" />
            </button>
          </div>
        </div>
      </div>
      {/* buttons for slide */}

      {/* slider images */}
      <div className="photo__cards flex flex-wrap gap-[10rem] justify-center">
        {filteredCards.map(
          ({ id, image, category, rotateLeft, rotateRight }, i) => (
            <div
              key={id}
              className={`gradient filter__button ${
                rotateLeft && "lg:-rotate-[25deg]"
              } md:${rotateRight && " lg:rotate-[25deg]"} ${
                (rotateRight || rotateLeft) && " lg:relative top-[10rem]"
              } h-[25rem] w-[20rem] flex justify-center items-end duration-1000 delay-75 ${
                i === currentIndex ? "opacity-100" : "lg:opacity-15"
              }`}
            >
              <img
                className={`object-contain h-[20rem]  ${
                  i == 0 &&
                  " lg:rotate-[29.8deg] rotate-[29deg]  relative top-[1.9rem]"
                } ${
                  i == 2 &&
                  " lg:-rotate-[29.8deg] -rotate-[29deg]  relative top-[1.9rem]"
                } `}
                src={image}
                alt=""
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ArtWork2;
