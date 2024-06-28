import nftMonkey from "../../assets/Images/monkey1.png";
import ArrowDesign from "../../assets/Images/Arrow design.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white flex flex-col items-center font-Montserrat">
      <h1>
        SORRY, SEEMS LIKE U NAVIGATED TO A WRONG PAGE.... or THIS PAGE COULD
        STILL BE UNDER CONSTRUCTION
      </h1>
      <img className="w-[30rem] object-contain" src={nftMonkey} alt="" />

      <div className="flex items-center gap-10">
        <button
          onClick={() => navigate("/")}
          className={`py-[.8rem] px-[2rem] hover:bg-purple-950/10 text-[12px] filter__button `}
        >
          HOME
        </button>
        <img
          className="h-[93px] rotate-[165deg] relative -top-20 arrow"
          src={ArrowDesign}
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFound;
