import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  const [countOn, setCountOn] = useState(false);
  const countInfo = [
    { end: 50, duration: 2.5, text: "Our Active", text2: "User" },
    { end: 43, duration: 2.5, text: "Our", text2: "Art Work" },
    { end: 38, duration: 2.5, text: "Available", text2: "Artist" },
    { end: 34, duration: 2.5, text: "Our", text2: "Products" },
  ];
  return (
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}
    >
      <div className="flex justify-around border-gradient  py-[30px] text-white">
        {countInfo.map(({ end, duration, text, text2 }, i) => (
          <div key={i} className="flex items-center gap-5">
            <h1 className="py-[5px] font-bold font-sans text-[40px]">
              {countOn && <CountUp end={end} duration={duration} />}K
            </h1>
            <div className="flex flex-col justify-center">
              <div className="text-[14px]">{text}</div>
              <div className="text-[14px]">{text2}</div>
            </div>
            {i < 3 && (
              <div className="bg-gradient-to-r from-[#9C22FC] to-[#762FFE] rounded-[20px] w-[2px] h-full"></div>
            )}
          </div>
        ))}
      </div>
    </ScrollTrigger>
  );
};

export default Stats;
