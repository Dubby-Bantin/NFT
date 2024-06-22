import nftMonkey from "../../../assets/Images/monkey1.png";
import NFTS from "../../../assets/Images/NFTS.png";
import ArrowDesign from "../../../assets/Images/Arrow design.png";
import Ellipse from "../../../assets/Images/Ellipse.png";
import { IoIosPlay } from "react-icons/io";

const Banner = () => (
  <div className="flex md:flex-row flex-col justify-between items-center text-white ">
    <div className="p-11">
      <div className="flex items-end ml-9 md:ml-0 w-full">
        <span className="font-bold text-[2rem] md:text-[3rem]">
          Discover,Collect & Sell Popular
        </span>
        <div className="relative top-4 md:top-11 -left-14 md:-left-[31rem]">
          <img className="h-12 md:h-16" src={Ellipse} alt="" />
          <img
            className="relative -top-8 md:-top-[3.2rem] left-2 md:left-4 h-5 md:h-11"
            src={NFTS}
            alt=""
          />
        </div>
      </div>
      <div className="mb-9 md:mb-0 md:w-[30rem] text-center md:text-start">
        The world’s Biggest advanced commercial center for Crypto collectibles
        and non-fungible tokens.
      </div>
      <div className="flex md:flex-row flex-col items-center gap-5">
        <button className="bg-gradient-to-r from-[#1D09BD] to-[#EB01E3] px-10 py-2 rounded-sm text-[1.2rem] text-white">
          EXPLORE
        </button>
        <button className="p-2 rounded-full text-[2rem] text-center text-white playIcon">
          <IoIosPlay />
        </button>
        <span>Watch Video</span>
        <img className="h-[93px] md:rotate-0 rotate-90" src={ArrowDesign} alt="" />
      </div>
    </div>
    <div>
      <img className="h-[500px] md:h-[776px] object-contain" src={nftMonkey} alt="" />
    </div>
  </div>
);

export default Banner;
