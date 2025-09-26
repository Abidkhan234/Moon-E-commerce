import { cardData } from "../../../constant/data";
import ProductCard from "../../ui/cards/ProductCard";
import DropDown from "../../ui/dropDown/DropDown";
import FilterDrawer from "./FilterDrawer";

const ShopProduct = () => {
  // 

  return (
    <div className="flex flex-col gap-5">
      <div className="flex md:justify-end items-center justify-between">
        <div className="md:hidden block">
          <FilterDrawer />
        </div>
        <>
          <DropDown  />
        </>
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-7">
        {cardData.map((v, i) => (
          <div className="" key={i}>
            <ProductCard
              cardImage={v.image}
              title={v.title}
              description={v.description}
              price={v.price}
              id={i}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopProduct;
