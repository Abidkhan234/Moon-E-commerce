import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../buttons/Button";
import { useNavigate } from "react-router";
import { useState } from "react";

const ProductCard = ({ cardImage, title, price, description, id }) => {
  const navigate = useNavigate();

  const handleClick = (productId) => {
    console.log(productId);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="sm:h-[400px] h-[306px] group relative">
        <img src={cardImage} className=" w-full h-full object-cover" alt="" />
        <div className="md:opacity-0 md:invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-400 absolute top-5 right-3">
          <button
            className="cursor-pointer sm:size-[45px] size-[40px] bg-[#C88242] rounded-full flex items-center justify-center text-[#FFFFFF] sm:text-2xl text-xl"
            onClick={() => navigate(`/product/${id}`)}
          >
            <HiMagnifyingGlass />
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
        <>
          <Description description={description} />
        </>
        <Button
          btnText="Add to cart"
          color="3A3845"
          clickHandler={() => handleClick(id)}
        />
      </div>
    </div>
  );
};

const Description = ({ description }) => {
  const [expanded, setExpanded] = useState(false);
  const words = description.split(" ").filter((v) => v);
  const isLong = words.length > 14;

  const displayedText = expanded ? description : words.slice(0, 16).join(" ");

  return (
    <p className="text-[#595667] lg:text-sm text-[13px]">
      {displayedText}
      {isLong && <span>...</span>}
    </p>
  );
};

export default ProductCard;
