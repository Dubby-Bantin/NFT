import React, { useRef, useState } from "react";
import { artWorks, filterArtButtons } from "../../utils";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowDropleft,
  IoIosArrowDropright,
  IoIosArrowForward,
} from "react-icons/io";

const ArtWork2 = () => {
  const [selectedIndex, setSelectedIndex] = useState("ALL NFT'S");
  const [active, setActive] = useState(artWorks[0]);
  const carousel = useRef();
  const rotate = () => {
    carousel.current.classList.add("translate-x-[50rem]");
  };
  console.log(carousel);
  console.log(active);
  return (
    <section className="relative">
      <h1 className="text-white text-center font-bold text-[2rem] mb-5">
        Featured Artwork Collection
      </h1>
      <div className="flex items-center justify-center text-white md:gap-16 gap-4 flex-wrap mb-10">
        {filterArtButtons.map((text, i) => (
          <div key={i}>
            <button
              onClick={() => setSelectedIndex(text)}
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
      <div className="absolute top-1/4 left-1/4 overflow-x-hidden">
        <div className="flex items-center justify-between px-24 h-[30rem] w-[50rem] text-[2rem] text-purple-950">
          <div
            className="h-[50px] w-[50px] filter__button flex items-center justify-center  rotate-45"
            onClick={() => console.log(1)}
          >
            <button>
              <IoIosArrowDown className="rotate-45" />
            </button>
          </div>
          <div
            className="h-[50px] w-[50px] filter__button flex items-center justify-center rotate-45"
            onClick={rotate}
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
        {artWorks.map(({ image, category1, category2 }, i) => {
          if ((category1 || category2) == selectedIndex) {
            console.log(image);
            return (
              <div
                ref={carousel}
                key={i}
                className={`gradient filter__button ${
                  i == 0 && "md:-rotate-[25deg]"
                } md:${i == 2 && " md:rotate-[25deg]"} ${
                  i !== 1 && " md:relative top-[10rem]"
                } h-[25rem] w-[20rem] flex justify-center items-end duration-1000 delay-75`}
              >
                <img
                  className={`object-contain h-[20rem]  ${
                    i == 0 && "md:rotate-[29.8deg]  relative top-[1.9rem]"
                  } ${
                    i == 2 && "md:-rotate-[29.8deg]  relative top-[1.9rem]"
                  } `}
                  src={image}
                  alt=""
                />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default ArtWork2;
