import { TbTrashXFilled } from "react-icons/tb";
import CounterBtn from "../buttons/CounterBtn";

const CartBoxCard = ({ cartItemImage, productName, productPrice }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="flex items-center min-[350px]:gap-3 gap-2 grow">
        <div className="overflow-hidden rounded-xl min-[340px]:size-[110px] size-[100px]">
          <img
            src={cartItemImage}
            className="w-full h-full object-cover"
            alt="item-image"
          />
        </div>
        <div className="flex flex-col gap-2 grow px-1">
          <h3 className="font-bold sm:text-lg capitalize sm:max-w-[80%] min-[375px]:max-w-[66%] max-w-[80%]">
            {productName}
          </h3>
          <div className="flex justify-between items-center">
            <>
              <CounterBtn />
            </>
            <span className="font-medium text-[#c4773d]">${productPrice}</span>
          </div>
        </div>
      </div>
      <div className="">
        <button className="cursor-pointer text-2xl text-red-500">
          <TbTrashXFilled />
        </button>
      </div>
    </div>
  );
};

export default CartBoxCard;
