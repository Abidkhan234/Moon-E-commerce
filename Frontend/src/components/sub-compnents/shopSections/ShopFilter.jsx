import { Form, Formik } from "formik";
import Checkbox from "../../ui/inputs/Checkbox";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import useUIContext from "../../../../context/UIContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchCategories } from "../../../api/api";
import Loader from "../../ui/loader/Loader";

const ShopFilter = ({ setActive }) => {
  const { totalItems, setFilterData } = useUIContext();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["getCategories"],
    queryFn: () => fetchCategories("brand"),
  });

  const submitHandler = (values) => {
    setFilterData({
      brand: values.brand,
    });
  };
  return (
    <Formik initialValues={{ brand: [], tag: [] }} onSubmit={submitHandler}>
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
            filterTitle={"Brands"}
            filterArr={isLoading ? [] : data}
            name={"brand"}
          />
        </>
        <button
          type="submit"
          disabled={isLoading}
          onClick={() => {
            queryClient.invalidateQueries({ queryKey: ["shopProducts"] });
          }}
          className="bg-[#3A3845] text-[#FFFFFF] py-2 uppercase cursor-pointer tracking-wide rounded-sm w-full text-nowrap disabled:opacity-80 disabled:pointer-events-none flex justify-center items-center disabled:gap-4"
        >
          {isLoading && <Loader />} Apply
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
                  <Checkbox labelText={v.tag} name={name} value={v.tag} />
                </>
              </li>
            ))
          : filterArr?.map((v, i) => (
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
