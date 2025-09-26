import { useField } from "formik";
import { AnimatePresence, motion } from "motion/react";
import { IoPerson } from "react-icons/io5";

const Input = ({
  placeholder = "",
  name = "",
  labelText = "",
  isRounded = true,
  ...props
}) => {
  const [field, meta] = useField(name);
  return (
    <div className="flex flex-col gap-1 relative w-full">
      <div
        className={`w-full min-w-0 ${
          isRounded
            ? "rounded-md bg-[#cac9cf94] flex items-center py-2 px-2"
            : "rounded-none bg-transparent flex flex-col gap-2"
        } text-black`}
      >
        {!isRounded && (
          <label
            htmlFor={name}
            className="font-semibold capitalize text-[#3A3845]"
          >
            {labelText} *
          </label>
        )}

        <input
          {...field}
          {...props}
          autoComplete="off"
          type="text"
          placeholder={placeholder}
          className={
            isRounded
              ? "flex-1 min-w-0 outline-none pr-2 font-medium"
              : "w-full outline-none pr-2 font-medium placeholder:text-[#807F86] border border-[#3A3845] py-2.5 px-2 rounded-sm"
          }
        />

        {isRounded && (
          <span className="shrink-0 ml-2">
            <IoPerson size={22} />
          </span>
        )}
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

export default Input;
