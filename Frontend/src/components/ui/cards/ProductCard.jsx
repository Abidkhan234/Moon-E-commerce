import searchIcon from "/assets/Icons/Search.svg";
import Button from "../buttons/Button";

const ProductCard = ({ cardImage, title, price, description, index }) => {
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="sm:h-[400px] h-[306px] group relative">
        <img src={cardImage} className=" w-full h-full object-cover" alt="" />
        <div className="md:opacity-0 md:invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 absolute top-5 right-3">
          <button className="cursor-pointer size-[50px] bg-[#C88242] rounded-full flex items-center justify-center">
            <img src={searchIcon} className="" alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="">
          <h2 className="lg:text-base text-sm font-semibold uppercase text-[#3A3845]">
            {title}
          </h2>
        </div>
        <div className="">
          <span className="text-sm font-semibold">${price}</span>
        </div>
        <div className="">
          <p className="text-[#807F86] sm:text-sm text-xs">{description}</p>
        </div>
        <Button
          btnText="Add to cart"
          color="3A3845"
          clickHandler={() => handleClick(index)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
