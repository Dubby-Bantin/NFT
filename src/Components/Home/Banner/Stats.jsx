import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { countInfo } from "../../../../utils";

const Stats = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}
    >
      <div className="flex md:flex-row flex-col md:px-[15rem] justify-center border-x-gradient sm:py-[30px]  text-white">
        {countInfo.map(({ end, duration, text, text2 }, i) => (
          <div
            key={i}
            className="flex items-center border-gradient sm:gap-10 gap-24 sm:px-5 px-10 md:border-y-0 border-t w-full"
          >
            <h1 className="py-[5px] font-bold text-[40px] md:flex-none flex-1 sm:w-full w-1/4 md:w-[30%]">
              {countOn && <CountUp end={end} duration={duration} />}K
            </h1>
            <div className="flex text-[14px] md:flex-col ">
              <p className="mr-1">{text}</p>
              <p>{text2}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollTrigger>
  );
};

export default Stats;
