import { FiHeart } from "react-icons/fi";
import CounterBtn from "../../ui/buttons/CounterBtn";
import ProductCard from "../../ui/cards/ProductCard";

const ProductDetailSection = ({
  title,
  description,
  image,
  price,
  discountPrice,
  id,
  otherItems,
}) => {
  const handleCart = (productId) => {
    console.log(productId);
  };

  return (
    <section className="flex flex-col gap-10" key={title}>
      <div className="grid md:grid-cols-2 gap-5 text-[#3A3845]">
        <div className="w-full h-full flex md:justify-start justify-center items-center">
          <img
            src={image}
            className="h-[500px] w-full md:w-[500px] md:object-fill object-cover"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center gap-6 shrink-0">
          <h3 className="text-3xl font-semibold uppercase">{title}</h3>
          <p className="font-medium text-base">{description}</p>
          <h1 className="text-2xl font-bold">
            ${discountPrice}
            <span className="text-[#9CA3AF] ms-3">${price}</span>
          </h1>
          <div className="flex w-full justify-between items-center gap-5 md:flex-nowrap flex-wrap">
            <div className="md:w-[150px] w-full md:h-full h-[50px]">
              <CounterBtn isWidthFull />
            </div>

            <button
              type="button"
              className="bg-[#3A3845] text-[#FFFFFF] py-3 uppercase cursor-pointer tracking-wide w-full md:min-w-[100px] text-nowrap"
              onClick={() => handleCart(id)}
            >
              Add to cart
            </button>

            <button className="md:h-full h-[50px] md:w-[150px] w-full cursor-pointer flex justify-center items-center text-2xl border-2 border-[#3A3845]">
              <FiHeart />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-semibold text-[#3A3845]">Similar Items</h1>
        {!otherItems.length > 0 ? (
          <div className="w-full h-full flex justify-start items-center">
            <h1 className="md:text-4xl text-3xl font-bold text-[#9CA3AF]">
              No Similar Products Found
            </h1>
          </div>
        ) : (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {otherItems.map((v, i) => (
              <ProductCard
                key={i}
                cardImage={v.image.url}
                title={v.title}
                description={v.description}
                price={v.price}
                discountPrice={v.discountedPrice}
                id={v._id}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetailSection;
