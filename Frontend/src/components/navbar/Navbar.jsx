import Logo from "../../../public/assets/Logo/logo.svg";

import searchIcon from "../../../public/assets/Icons/Search.svg";
import avtarIcon from "../../../public/assets/Icons/Avatar.svg";
import heartIcon from "../../../public/assets/Icons/Heart.svg";
import cartIcon from "../../../public/assets/Icons/Shopping cart.svg";
import menuIcon from "../../../public/assets/Icons/Menu.svg";

import Sidebar from "../Sidebar/Sidebar.jsx";

import { useState } from "react";
import { navLinks } from "../../constant/data.js";
import { NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import CartBox from "../Sidebar/CartBox.jsx";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const totalItems = 1;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 py-3 flex justify-between items-center w-full bg-[#FFFFFF] lg:px-20 md:px-10 px-6 border-b border-[#CAC9CF] z-30">
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
            <button className="cursor-pointer">
              <img
                src={searchIcon}
                className="size-[23px] hover:scale-115 transition-transform duration-300"
                alt="search-icon"
              />
            </button>
            <NavLink to={`/login`}>
              <img
                src={avtarIcon}
                className="size-[23px] hover:scale-115 transition-transform duration-300"
                alt="avatar-icon"
              />
            </NavLink>
            <NavLink to={`/wish-list`}>
              <img
                src={heartIcon}
                className="size-[23px] hover:scale-115 transition-transform duration-300"
                alt="heart-icon"
              />
            </NavLink>
          </div>
          <button className="cursor-pointer relative" onClick={() => setShowCart(true)}>
            <img
              src={cartIcon}
              className="size-[23px] hover:scale-115 transition-transform duration-300 "
              alt="cart-icon"
            />
            <span className="absolute -bottom-3 -right-3 font-medium text-sm bg-[#C69B7B] size-[20px] text-center content-center rounded-full text-white">{totalItems}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {showSidebar && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute bg-black z-40 h-full w-full"
              onClick={() => setShowSidebar(false)}
            ></motion.div>
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full top-[50%] translate-y-[-50%] left-0 bg-[#E5E5E5] w-full min-[425px]:max-w-[300px] py-4 px-2 z-50"
            >
              <Sidebar setShowSidebar={setShowSidebar} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute bg-black z-40 h-full w-full"
              onClick={() => setShowCart(false)}
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.3,
              }}
              className="absolute top-0 right-0 w-full h-full max-h-[500px] max-w-[500px] bg-[#E5E5E5] z-50 rounded-bl-lg"
            >
              <CartBox setShowCart={setShowCart} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
