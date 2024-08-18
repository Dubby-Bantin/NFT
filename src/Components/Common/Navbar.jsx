import { useEffect, useRef, useState } from "react";
import NFT__LOGO from "../../assets/Images/NFT LOGO.png";
import { BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../utils";
import { RiCloseFill, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const navRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(location);
    window.addEventListener("scroll", () =>
      window.scrollY > 10
        ? navRef.current.classList.add("shadow-md")
        : navRef.current.classList.remove("shadow-md")
    );
  }, []);

  return (
    <header
      ref={navRef}
      className="top-0 z-10 sticky flex justify-between items-center backdrop-blur-lg p-5 transition-all duration-700 font-Montserrat"
    >
      <Link to={"/"}>
        <img src={NFT__LOGO} alt="" className="h-10" />
      </Link>

      <ul className="sm:flex items-center gap-10 hidden text-white">
        {navLinks.map(({ link, href }) => (
          <Link
            key={link}
            className={pathname == href && "text-blue-900"}
            to={href}
          >
            {link}
          </Link>
        ))}
      </ul>

      <div className="items-center gap-3 md:flex hidden">
        <div className="md:flex hidden items-center gap-5 bg-gradient-to-r from-[#370F75] via-[#59246C] to-[#731581] p-2 rounded-sm text-white">
          <BiSearch />
          <input
            type="search"
            className="bg-transparent outline-none"
            placeholder="Search..."
          />
        </div>
        <div className="md:flex justify-center items-center hidden rounded-full w-10 h-10 user">
          <FaRegUser className="text-[#001A72]" />
        </div>
      </div>

      {/* mobile nav-menu-start */}

      <button
        onClick={() => setIsopen(!isOpen)}
        className="sm:hidden block text-white text-2xl"
      >
        {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
      </button>
      <div
        className={`sm:hidden mobile__nav justify-center items-center rounded-md flex flex-col h-[20rem] w-[13rem] top-20 right-0 shadow-lg absolute gap-5 z-50 ${
          isOpen ? "flex" : "hidden"
        } `}
      >
        <div className="justify-center items-center flex rounded-full w-10 h-10 user">
          <FaRegUser className="text-[#001A72]" />
        </div>
        <ul className="flex flex-col gap-10 text-white items-center">
          {navLinks.map(({ link, href }) => (
            <Link
              onClick={() => setIsopen(false)}
              key={link}
              className={pathname == href && "text-blue-900"}
              to={href}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>

      {/* mobile nav-menu-end */}
    </header>
  );
};

export default Navbar;
