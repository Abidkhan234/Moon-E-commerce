import { useEffect } from "react";
import useUIContext from "../../../../context/UIContext";
import { usePost } from "../../../hooks/usePost";
import ShopFilter from "./ShopFilter";
import ShopProduct from "./ShopProduct";

const ShopSection = () => {
  const { filterData } = useUIContext();
  const { isLoading, data, refetch } = usePost({
    query: filterData.category ? filterData.category : filterData.tags,
  });

  useEffect(() => {
    if (filterData == {}) {
      return;
    }

    refetch(filterData);
  }, [filterData]);

  return (
    <div className="w-full h-full grid grid-cols-12 gap-4">
      <div className="md:col-span-3 md:block hidden">
        <ShopFilter
          data={isLoading ? [] : data.products}
          isLoading={isLoading}
        />
      </div>
      <div className="md:col-span-9 col-span-12">
        <ShopProduct
          data={isLoading ? [] : data.products}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default ShopSection;
