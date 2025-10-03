import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { clearStorage } from "../../../utils/localStorageHelper";
import useAuth from "../../../hooks/useAuth";
import useAuthContext from "../../../../context/AuthContext";
import useUIContext from "../../../../context/UIContext";
import toast from "react-hot-toast";

const AvatarDropDown = ({ children, userData }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute md:right-0 -right-53 max-[767px]:top-0 md:mt-3.5 w-[200px] rounded-lg bg-[#dbd7d7] shadow-lg p-2"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-center items-center">
                <button className="relative inline-flex items-center justify-center size-15 overflow-hidden bg-white rounded-full dark:bg-gray-600 font-bold text-[#3A3845] text-2xl">
                  {userData?.userName.charAt(0).toUpperCase()}
                </button>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium justify-center">
                <span>Email:</span>
                <span>{userData.email}</span>
              </div>
              <>
                <LogoutBtn setOpen={setOpen} />
              </>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LogoutBtn = ({ setOpen }) => {
  const { setShowSidebar, setShowCart } = useUIContext();
  const { setUserData } = useAuthContext();

  const logoutMutation = useAuth();

  const handleLogout = () => {
    logoutMutation.mutate(
      {
        endpoint: "/auth/logout",
        method: "post",
      },
      {
        onSuccess: (res) => {
          toast.success(res.message);
          setOpen(false);
          setShowSidebar(false);
          setShowCart(false);
          clearStorage();
          setUserData({});
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div className="w-full">
      <button
        className="py-2 w-full cursor-pointer bg-[#E54335] text-white rounded-md"
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </div>
  );
};

export default AvatarDropDown;
