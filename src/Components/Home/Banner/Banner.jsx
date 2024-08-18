import nftMonkey from "../../../assets/Images/monkey1.png";
import ArrowDesign from "../../../assets/Images/Arrow design.png";
import { IoIosPlay } from "react-icons/io";

const Banner = () => (
  <div className="flex ss:flex-row flex-col justify-between items-center text-white md:mb-[2.27rem] ss:mb-[4.37rem] ">
    <div className="md:p-11 p-5 pt-10">
      <p className="font-bold text-[1.5rem] md:text-[3rem] md:w-[65%]">
        Discover,Collect & Sell Popular <span>NFT`S</span>
      </p>
      <p className="mb-9 md:mb-0 md:w-[30rem]">
        The world’s Biggest advanced commercial center for Crypto collectibles
        and non-fungible tokens.
      </p>
      <div className="flex items-center gap-5">
        <button className="bg-gradient-to-r from-[#1D09BD] to-[#EB01E3] px-10 py-2 rounded-sm text-[1.2rem] text-white">
          EXPLORE
        </button>
        <button className="p-2 rounded-full text-[2rem] text-center text-white playIcon">
          <IoIosPlay />
        </button>
        <span>Watch Video</span>
        <img
          className="h-[93px] md:rotate-0 rotate-90 hidden md:block arrow"
          src={ArrowDesign}
          alt=""
        />
      </div>
    </div>
    <div>
      <img className="w-[30rem] object-contain" src={nftMonkey} alt="" />
    </div>
  </div>
);

export default Banner;
