import Logo from "../../../public/assets/Logo/navLogo.svg";
import closeIcon from "../../../public/assets/Icons/Close.svg";

import { navLinks } from "../../constant/data.js";
import { NavLink } from "react-router";

const Sidebar = ({ setShowSidebar }) => {
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex justify-between items-center border-b border-[#98979c] pb-1">
        <div className="shrink-0">
          <img src={Logo} className="w-[120px] h-[45px]" alt="" />
        </div>
        <button
          className="cursor-pointer"
          onClick={() => setShowSidebar(false)}
        >
          <img src={closeIcon} className="size-[25px]" alt="" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-25 grow">
        {navLinks.map((v, i) => (
          <NavLink
            to={v.path}
            className={({ isActive }) =>
              `text-[#3A3845] text-xl font-medium transition-transform duration-200 ${
                isActive ? "scale-110" : "scale-100 hover:scale-105"
              }`
            }
            onClick={() => setShowSidebar(false)}
            key={i}
          >
            {v.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
