import { Form, Formik } from "formik";
import { categories, priceRange, tags } from "../../../constant/data";
import Checkbox from "../../ui/inputs/Checkbox";
import { IoClose } from "react-icons/io5";

const ShopFilter = ({ setActive }) => {
  const submitHandler = (values) => {
    console.log(values);
  };

  const totalItems = 120;
  return (
    <Formik
      initialValues={{ category: [], priceRange: [], tag: [] }}
      onSubmit={submitHandler}
    >
      <Form
        className={`flex flex-col gap-5 text-[#374151] ${
          setActive && "py-4 px-5"
        }`}
      >
        <div className="flex justify-between items-center pb-2 border-b-2 border-[#807F86]">
          <h3 className="text-[#3A3845] font-semibold lg:text-xl text-base">
            Showing {totalItems} items
          </h3>
          {setActive && (
            <button
              type="button"
              className="text-2xl cursor-pointer"
              onClick={() => setActive(false)}
            >
              <IoClose />
            </button>
          )}
        </div>
        <>
          <Filtering
            filterTitle={"Category"}
            filterArr={categories}
            name={"category"}
          />
        </>
        <>
          <Filtering
            filterTitle={"Price Range"}
            filterArr={priceRange}
            name={"priceRange"}
          />
        </>
        <>
          <Filtering
            filterTitle={"tags"}
            filterArr={tags.slice(0, -1)}
            name={"tag"}
          />
        </>
        <button
          type="submit"
          className="bg-[#3A3845] text-[#FFFFFF] py-2 uppercase cursor-pointer tracking-wide rounded-sm w-full text-nowrap"
        >
          Apply
        </button>
      </Form>
    </Formik>
  );
};

const Filtering = ({ filterArr, filterTitle, name }) => {
  return (
    <div className="flex flex-col gap-3 border-b-2 border-[#807F86] pb-2">
      <h4 className="font-semibold lg:text-lg md:text-base text-lg capitalize">{filterTitle}</h4>
      <ul className="flex flex-col gap-3">
        {filterArr.map((v, i) => (
          <li className="flex items-center gap-2" key={i}>
            {/* checkbox */}
            <>
              <Checkbox
                labelText={v?.tag || v.text}
                name={name}
                value={v?.tag || v.text}
              />
            </>
            {/* checkbox */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopFilter;
