import { Form, Formik } from "formik";
import Checkbox from "../../ui/inputs/Checkbox";
import { IoClose } from "react-icons/io5";
import useUIContext from "../../../../context/UIContext";
import { useState } from "react";

const ShopFilter = ({ setActive, data, isLoading }) => {
  const { totalItems, setFilterData } = useUIContext();

  const category = [...new Set(data.map((v) => v.category))];

  const tags = [...new Set(data.flatMap((v) => v.tags))];

  const submitHandler = (values, { resetForm }) => {
    const query = {};

    if (values.category?.length) {
      query.category = values.category.join(",");
    }

    if (values.tags?.length) {
      query.tags = values.tags.join(",");
    }

    setFilterData(query);

    resetForm();
  };

  return (
    <Formik initialValues={{ category: [], tag: [] }} onSubmit={submitHandler}>
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
            filterArr={isLoading ? [] : category}
            name={"category"}
          />
        </>
        <>
          <Filtering
            filterTitle={"tags"}
            filterArr={isLoading ? [] : tags}
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
  const [expand, setExpand] = useState(5);
  const isLong = filterArr.length > 5;

  return (
    <div className="flex flex-col gap-3 border-b-2 border-[#807F86] pb-2">
      <h4 className="font-semibold lg:text-lg md:text-base text-lg capitalize">
        {filterTitle}
      </h4>
      <ul className="flex flex-col gap-3">
        {isLong && filterTitle == "tags"
          ? filterArr.slice(0, expand).map((v, i) => (
              <li className="flex items-center gap-2" key={i}>
                <>
                  <Checkbox labelText={v} name={name} value={v} />
                </>
              </li>
            ))
          : filterArr.map((v, i) => (
              <li className="flex items-center gap-2" key={i}>
                <>
                  <Checkbox labelText={v} name={name} value={v} />
                </>
              </li>
            ))}
        {isLong && filterTitle == "tags" && (
          <li className="flex justify-end items-center">
            <button
              type="button"
              className="font-semibold text-base cursor-pointer"
              onClick={() =>
                setExpand(() => (expand == 5 ? filterArr.length : 5))
              }
            >
              {expand == 5 ? "Show More" : "Show Less"}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ShopFilter;
