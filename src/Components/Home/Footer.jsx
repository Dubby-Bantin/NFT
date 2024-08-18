import NFT__LOGO from "../../assets/Images/NFT LOGO.png";
import { Link } from "react-router-dom";
import { footerIcons, footerLinks } from "../../utils";

const Footer = () => {
  return (
    <div className="bg-footer lg:py-0 py-10 lg:h-[23rem] text-white flex items-center justify-between lg:px-20 px-10 flex-wrap">
      <div className="flex flex-col gap-5 relative lg:top-10 flex-wrap">
        <Link to={"/"}>
          <img src={NFT__LOGO} alt="" className="h-10" />
        </Link>
        <div className="flex items-center text-white gap-5">
          {footerIcons.map((Icon, i) => (
            <button key={i} className="bg-[#22053e80] p-3 rounded-full">
              <Icon />
            </button>
          ))}
        </div>
        <p className="lg:top-10 relative">
          copyright @2022 NFT. All right reserved
        </p>
      </div>

      <div className="flex lg:gap-32 gap-20 flex-wrap">
        {footerLinks.map(({ header, children }) => (
          <div key={header} className="flex flex-col gap-3">
            <h3 className="font-bold text-[24px]">{header}</h3>
            <ul className="flex flex-col">
              {children.map(({ label, path }) => (
                <Link key={label} to={path}>
                  {label}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
