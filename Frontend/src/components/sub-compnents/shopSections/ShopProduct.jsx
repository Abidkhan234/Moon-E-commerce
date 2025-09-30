import ProductCard from "../../ui/cards/ProductCard";
import DropDown from "../../ui/dropDown/DropDown";
import FilterDrawer from "./FilterDrawer";
import Loader from "../../ui/loader/Loader";
import { useEffect } from "react";
import useUIContext from "../../../../context/UIContext";

const ShopProduct = ({ data, isLoading }) => {
  const { setTotalItems } = useUIContext();
  useEffect(() => {
    if (data) {
      setTotalItems(data?.length);
    }
  }, [data]);

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
        <div className="w-full flex justify-center items-center">
          <Loader isBigger={true} />
        </div>
      ) : (
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-7">
          {data?.map((v, i) => (
            <div className="" key={i}>
              <ProductCard
                cardImage={v.images}
                title={v.title}
                description={v.description}
                price={v.price}
                discountPrice={Math.round(
                  v.price - (v.price * v.discountPercentage) / 100
                )}
                id={v.id}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopProduct;
