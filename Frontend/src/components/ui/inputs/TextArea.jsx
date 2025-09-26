import { useField } from "formik";
import { AnimatePresence, motion } from "motion/react";

const TextArea = ({ placeholder = "", name = "", labelText }) => {
  const [field, meta] = useField(name);
  return (
    <div className="flex flex-col gap-1 relative w-full h-[150px]">
      <div
        className={`w-full rounded-none bg-transparent flex flex-col gap-2 text-black h-full`}
      >
        <label htmlFor={name} className="font-semibold capitalize text-[#3A3845]">
          {labelText} *
        </label>
        <textarea
          {...field}
          autoComplete="off"
          type="text"
          className={`grow outline-none md:pe-2 pe-1 font-medium min-w-0 placeholder:text-[#807F86] border border-[#3A3845] py-2.5 px-2 h-full resize-none rounded-sm`}
          placeholder={placeholder}
        ></textarea>
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

export default TextArea;
