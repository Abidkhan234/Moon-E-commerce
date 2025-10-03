import ProductCard from "../../ui/cards/ProductCard";
import DropDown from "../../ui/dropDown/DropDown";
import FilterDrawer from "./FilterDrawer";
import Loader from "../../ui/loader/Loader";
import useUIContext from "../../../../context/UIContext";
import useProduct from "../../../hooks/useProduct";
import { useEffect } from "react";
import Pagination from "../../ui/pagination/Pagination";

const ShopProduct = () => {
  const { setTotalItems, filterData, sortBy } = useUIContext();

  const { data, isLoading } = useProduct(filterData, sortBy);

  useEffect(() => {
    if (!isLoading && data?.products) {
      setTotalItems(data.products.length);
    }
  }, [data, isLoading, setTotalItems]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex md:justify-end items-center justify-between">
        <div className="md:hidden block">
          <FilterDrawer />
        </div>
        <>
          <DropDown />
        </>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Loader isBigger />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-7">
            {data?.products.map((v, i) => (
              <div className="" key={i}>
                <ProductCard
                  cardImage={v.image.url}
                  title={v.title}
                  description={v.description}
                  price={v.price}
                  discountPrice={v.discountedPrice}
                  id={v._id}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center text-xl">
            <Pagination totalPages={data.pagination.totalPages} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopProduct;
