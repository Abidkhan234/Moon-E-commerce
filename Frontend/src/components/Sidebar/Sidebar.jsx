import Logo from "../../../public/assets/Logo/navLogo.svg";
import closeIcon from "../../../public/assets/Icons/Close.svg";
import avtarIcon from "../../../public/assets/Icons/Avatar.svg";
import heartIcon from "../../../public/assets/Icons/Heart.svg";

import { navLinks } from "../../constant/data.js";
import { NavLink } from "react-router";

const Sidebar = ({ setShowSidebar }) => {
  return (
    <div className="flex flex-col gap-5 ">
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
      <div className="flex flex-col items-center gap-30">
        {navLinks.map((v, i) => (
          <NavLink
            to={v.path}
            className={`text-[#3A3845] text-xl font-medium`}
            onClick={() => setShowSidebar(false)}
            key={i}
          >
            {v.text}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center justify-between border-b border-[#98979c] pb-1">
        <NavLink to={`/auth`} onClick={() => setShowSidebar(false)}>
          <img src={avtarIcon} className="size-[30px]" alt="avatar-icon" />
        </NavLink>
        <NavLink to={`/wish-list`} onClick={() => setShowSidebar(false)}>
          <img src={heartIcon} className="size-[30px]" alt="avatar-icon" />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
