import Logo from "/assets/Logo/navLogo.svg";

import avtarIcon from "/assets/Icons/Avatar.svg";
import heartIcon from "/assets/Icons/Heart.svg";
import cartIcon from "/assets/Icons/Shopping cart.svg";
import menuIcon from "/assets/Icons/Menu.svg";

import Sidebar from "../Sidebar/Sidebar.jsx";

import { navLinks } from "../../constant/data.js";
import { NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import Overlay from "../ui/overlay/Overlay.jsx";
import useAuthContext from "../../../context/AuthContext.jsx";
import AvatarDropDown from "../ui/dropDown/AvatarDropDown.jsx";
import useUIContext from "../../../context/UIContext.jsx";

const Navbar = () => {
  const { setShowSidebar, showSidebar } = useUIContext();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 py-3 flex justify-between items-center w-full bg-[#FFFFFF] lg:px-20 md:px-10 px-6 z-30 border-b border-[#9d9ca1]">
        <div className="md:hidden block shrink-0">
          <button
            className="cursor-pointer"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <img src={menuIcon} className="size-[22px]" alt="menu-icon" />
          </button>
        </div>
        <div className="shrink-0">
          <img src={Logo} className="md:w-[145px] w-[125px] h-[45px]" alt="" />
        </div>
        <div className="md:flex hidden items-center lg:gap-15 md:gap-10">
          {navLinks.map((v, i) => (
            <NavLink
              to={v.path}
              className={({ isActive }) =>
                `text-[#3A3845] text-lg font-medium transition-transform duration-200 ${
                  isActive ? "scale-110" : "scale-100 hover:scale-105"
                }`
              }
              key={i}
            >
              {v.text}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center sm:gap-7 shrink-0">
          <div className="md:flex hidden items-center gap-7">
            {<AvatarIcon bgColor={"#e5dada"} />}
            <NavLink to={`/wish-list`}>
              <img
                src={heartIcon}
                className="size-[23px] hover:scale-115 transition-transform duration-300"
                alt="heart-icon"
              />
            </NavLink>
          </div>
          <>
            <NavCartIcon />
          </>
        </div>
      </nav>

      <AnimatePresence>
        {showSidebar && (
          <>
            <Overlay active={showSidebar} setActive={setShowSidebar} />
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full top-[50%] translate-y-[-50%] left-0 bg-[#f5eded] w-full min-[425px]:max-w-[300px] py-4 px-2 z-50"
            >
              <Sidebar
                avatarComponenet={
                  <AvatarIcon
                    bgColor={`rgb(209 198 198)`}
                    isSidebarIcon={true}
                    setShowSidebar={setShowSidebar}
                  />
                }
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const AvatarIcon = ({ bgColor, isSidebarIcon = false, setShowSidebar }) => {
  const { userData } = useAuthContext();

  return userData?.email ? (
    <AvatarDropDown userData={userData}>
      <button
        style={{ backgroundColor: bgColor }}
        className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full cursor-pointer font-bold text-[#3A3845] text-lg`}
      >
        {userData?.userName.charAt(0).toUpperCase()}
      </button>
    </AvatarDropDown>
  ) : (
    <NavLink to={`/auth`} onClick={() => setShowSidebar(false)}>
      <img
        src={avtarIcon}
        className={`${
          isSidebarIcon
            ? "size-[30px]"
            : "size-[23px] hover:scale-115 transition-transform duration-300"
        } `}
        alt="avatar-icon"
      />
    </NavLink>
  );
};

const NavCartIcon = () => {
  const { totalItems } = useUIContext();

  return (
    <button className="cursor-pointer relative">
      <NavLink to={"/cart"}>
        <img
          src={cartIcon}
          className="size-[23px] hover:scale-115 transition-transform duration-300 "
          alt="cart-icon"
        />
        <span className="absolute -bottom-3 -right-3 font-medium text-sm bg-[#C69B7B] size-[20px] text-center content-center rounded-full text-white">
          {totalItems}
        </span>
      </NavLink>
    </button>
  );
};

export default Navbar;
