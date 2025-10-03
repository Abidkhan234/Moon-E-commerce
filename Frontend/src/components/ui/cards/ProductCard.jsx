import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../buttons/Button";
import { data, useNavigate } from "react-router";
import { useState } from "react";
import { getItem, setItem } from "../../../utils/localStorageHelper";
import useUIContext from "../../../../context/UIContext";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { addOrder } from "../../../api/api";

const ProductCard = ({
  cardImage,
  title,
  price,
  discountPrice,
  description,
  id,
}) => {
  const { cartItems, setCartItems, setTotalItems } = useUIContext();
  const navigate = useNavigate();

  const addToCartMutation = useMutation({
    mutationFn: (productId) => addOrder(productId),
  });

  const handleClick = (productId) => {
    const exitingCart = getItem("cartItems") || [];

    const index = exitingCart.findIndex((v) => v.productId == productId);

    if (index == -1) {
      exitingCart.push({ productId });

      addToCartMutation.mutate(productId, {
        onSuccess: (res) => {
          toast.success(res.data.message);

          setItem("cartItems", exitingCart);
          setTotalItems(exitingCart.length);

          setCartItems(exitingCart);
          return;
        },
        onError: (res) => {
          if (res.res.data.message.includes("No access token provided")) {
            navigate("/auth");
            return;
          }
        },
      });
    }
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
          <Title title={title} />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold">${discountPrice}</span>
          <span className="text-sm font-semibold text-[#9CA3AF]">${price}</span>
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

const Title = ({ title }) => {
  const [expanded, setExpanded] = useState(false);
  const words = title.split(" ").filter((v) => v);
  const isLong = words.length > 4;

  const displayedText = expanded ? title : words.slice(0, 4).join(" ");

  return (
    <h2 className="lg:text-base text-sm font-semibold uppercase text-[#3A3845]">
      {displayedText}
      {isLong && <span>...</span>}
    </h2>
  );
};

const Description = ({ description }) => {
  const [expanded, setExpanded] = useState(false);
  const words = description.split(" ").filter((v) => v);
  const isLong = words.length > 5;

  const displayedText = expanded ? description : words.slice(0, 5).join(" ");

  return (
    <p className="text-[#595667] lg:text-[13px] text-sm">
      {displayedText}
      {isLong && <span>...</span>}
    </p>
  );
};

export default ProductCard;
