import Logo from "../../../public/assets/Logo/navLogo.svg";

import searchIcon from "../../../public/assets/Icons/Search.svg";
import avtarIcon from "../../../public/assets/Icons/Avatar.svg";
import heartIcon from "../../../public/assets/Icons/Heart.svg";
import cartIcon from "../../../public/assets/Icons/Shopping cart.svg";
import menuIcon from "../../../public/assets/Icons/Menu.svg";

import Sidebar from "../Sidebar/Sidebar.jsx";

import { useRef, useState } from "react";
import { navLinks } from "../../constant/data.js";
import { NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import CartBox from "../Sidebar/CartBox.jsx";
import usePreventScroll from "../hooks/usePreventScroll.jsx";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const divRef = useRef(null);

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
          <>
            <NavCartIcon setShowCart={setShowCart} />
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
            <Overlay ref={divRef} active={showCart} setActive={setShowCart} />
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
              className="fixed top-0 right-0 w-full sm:max-h-[500px] max-h-[600px] max-w-[500px] bg-[#e9dede] z-50 sm:rounded-bl-lg"
            >
              <CartBox setShowCart={setShowCart} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const Overlay = ({ ref = null, active, setActive }) => {
  // For Preventing Scrolling
  if (ref) {
    usePreventScroll(ref, active);
  }
  // For Preventing Scrolling

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed bg-black z-40 h-[100vh] w-full"
      onClick={() => setActive(!active)}
      ref={ref}
    ></motion.div>
  );
};

const NavCartIcon = ({ setShowCart }) => {
  const totalItems = 1;
  return (
    <button
      className="cursor-pointer relative"
      onClick={() => setShowCart(true)}
    >
      <img
        src={cartIcon}
        className="size-[23px] hover:scale-115 transition-transform duration-300 "
        alt="cart-icon"
      />
      <span className="absolute -bottom-3 -right-3 font-medium text-sm bg-[#C69B7B] size-[20px] text-center content-center rounded-full text-white">
        {totalItems}
      </span>
    </button>
  );
};

export default Navbar;
