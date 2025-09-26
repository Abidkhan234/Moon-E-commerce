import { FiHeart } from "react-icons/fi";
import CounterBtn from "../../ui/buttons/CounterBtn";
import { cardData } from "../../../constant/data";
import ProductCard from "../../ui/cards/ProductCard";

const ProductDetailSection = ({
  title,
  description,
  image,
  price,
  stock,
  discountPrice,
}) => {
  return (
    <section className="flex flex-col gap-10" key={title}>
      <div className="grid md:grid-cols-2 gap-5 text-[#3A3845]">
        <div className="w-full h-full flex md:justify-start justify-center items-center">
          <img src={image} className="h-full w-[500px]" alt="" />
        </div>

        <div className="flex flex-col justify-center  gap-6">
          <h3 className="text-xl font-semibold uppercase">{title}</h3>
          <p className="font-medium text-sm">{description}</p>
          <div className="flex items-center gap-1 text-base font-medium">
            <span>Stock:</span>
            <span className="capitalize text-[#C69B7B]">{stock}</span>
          </div>
          <h1 className="text-2xl font-bold">
            ${price}{" "}
            <span className="text-[#9CA3AF] ms-3">${discountPrice}</span>
          </h1>
          <div className="grid grid-cols-12 gap-3 gap-y-5">
            <div className="md:col-span-3 col-span-4">
              <div className="w-full h-full">
                <CounterBtn isWidthFull />
              </div>
            </div>
            <div className="md:col-span-9 col-span-8">
              <button
                type="button"
                className="bg-[#3A3845] text-[#FFFFFF] py-3 uppercase cursor-pointer tracking-wide w-full text-nowrap"
              >
                Add to cart
              </button>
            </div>
            <div className="col-span-10">
              <button
                type="button"
                className="text-[#3A3845] py-3 uppercase cursor-pointer tracking-wide w-full text-nowrap border-2 border-[#3A3845] font-medium"
              >
                buy now
              </button>
            </div>
            <div className="col-span-2">
              <button className="h-full w-full cursor-pointer flex justify-center items-center text-2xl border-2 border-[#3A3845]">
                <FiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-semibold text-[#3A3845]">Similar Items</h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {cardData.slice(0, 4).map((v, i) => (
            <ProductCard
              key={i}
              cardImage={v.image}
              title={v.title}
              description={v.description}
              price={v.price}
              id={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
