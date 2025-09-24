import React from "react";
import Button from "../buttons/Button";

const ProductCard = ({ cardImage, title, price, description, index }) => {
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="">
        <img
          src={cardImage}
          className="sm:h-[400px] h-[306px] w-full object-cover"
          alt=""
        />
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
