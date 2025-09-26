import ShopFilter from "./ShopFilter";
import ShopProduct from "./ShopProduct";

const ShopSection = () => {
  return (
    <div className="w-full h-full grid grid-cols-12 gap-4">
      <div className="md:col-span-3 md:block hidden">
        <ShopFilter />
      </div>
      <div className="md:col-span-9 col-span-12">
        <ShopProduct />
      </div>
    </div>
  );
};

export default ShopSection;
