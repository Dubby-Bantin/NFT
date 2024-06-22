import React, { useEffect, useRef, useState } from "react";
import NFT__LOGO from "../../assets/Images/NFT LOGO.png";
import { BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinks } from "../../../Utils";

const Navbar = () => {
  const [active, setActive] = useState(-1);
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10
        ? navRef.current.classList.add("shadow-md")
        : navRef.current.classList.remove("shadow-md");
    });
  }, []);

  return (
    <header
      ref={navRef}
      className="top-0 z-10 sticky flex justify-between items-center backdrop-blur-lg p-5 transition-all duration-700"
    >
      <img src={NFT__LOGO} alt="" className="h-10" /> 
      <ul className="md:flex items-center gap-10 hidden text-white">
        {navLinks.map(({ link, href }, i) => (
          <Link
            onClick={() => setActive(i)}
            key={link}
            className={i == active && "text-blue-900"}
            to={href}
          >
            {link}
          </Link>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-5 bg-gradient-to-r from-[#370F75] via-[#59246C] to-[#731581] p-2 rounded-sm text-white">
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
    </header>
  );
};

export default Navbar;
