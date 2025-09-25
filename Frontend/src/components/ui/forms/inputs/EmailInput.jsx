import { useField } from "formik";
import { AnimatePresence, motion } from "motion/react";
import { FaEnvelope } from "react-icons/fa6";

const EmailInput = ({ placeholder, name, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <div className="flex flex-col gap-1 relative">
      <div className="flex justify-between items-center w-full bg-[#cac9cf94] rounded-md text-black py-2 px-2">
        <input
          {...field}
          {...props}
          type="email"
          className="grow outline-none md:pe-2 pe-1 font-medium min-w-0"
          placeholder={placeholder}
        />
        <span>
          <FaEnvelope size={20} />
        </span>
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

export default EmailInput;
