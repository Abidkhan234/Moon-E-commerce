import { useField } from "formik";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ placeholder, name, ...props }) => {
  const [showPass, setShowPass] = useState(false);

  const [field, meta] = useField(name);
  return (
    <div className="flex flex-col gap-1 relative shrink-0">
      <div className="flex justify-between items-center w-full bg-[#cac9cf94] text-black py-2 rounded-md px-2 min-w-0">
        <input
          {...field}
          {...props}
          type={showPass ? "text" : "password"}
          className="grow outline-none md:pe-2 pe-1 font-medium min-w-0"
          placeholder={placeholder}
        />

        <button
          type="button"
          className="text-xl cursor-pointer"
          onClick={() => setShowPass(!showPass)}
        >
          {showPass ? <FaEye size={20} /> : <FaEyeSlash size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {meta.error && meta.touched && (
          <motion.p
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.2, opacity: 0 }}
            className="absolute -bottom-5 left-2 font-medium text-[13px] text-red-500 text-start"
          >
            {meta.error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PasswordInput;
