import { useField } from "formik";

const Checkbox = ({ labelText, name, value }) => {
  const [field] = useField({ name, type: "checkbox", value });

  return (
    <div className="flex justify-center items-center">
      <label className="container flex items-center gap-3 lg:text-base md:text-sm font-medium cursor-pointer capitalize">
        <input
          {...field}
          className="peer cursor-pointer hidden after:opacity-100"
          type="checkbox"
        />
        <span className="inline-block w-4 h-4 border-2 relative cursor-pointer after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[6px] after:h-[6px] after:bg-[#333] after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100"></span>
        {labelText}
      </label>
    </div>
  );
};

export default Checkbox;
