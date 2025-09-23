import { BsFillCartXFill } from "react-icons/bs";
import { NavLink } from "react-router";

const CartBox = ({ setShowCart }) => {
  const totalPrice = 900;
  return (
    <div className="flex flex-col gap-4 p-4 justify-between h-full">
      <div className="flex justify-between items-center border-b border-[#8e8e94] pb-2">
        <h3 className="font-bold text-2xl">Shopping Cart</h3>
        <button
          className="text-2xl cursor-pointer text-[#3A3845]"
          onClick={() => setShowCart(false)}
        >
          <BsFillCartXFill />
        </button>
      </div>
      <div className=""></div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center border-b border-[#8e8e94] pb-1">
          <span className="font-semibold text-lg">Total</span>
          <span className="text-[#C69B7B] font-bold text-base">
            ${totalPrice}
          </span>
        </div>
        <div className="w-full flex gap-3 items-center">
          <NavLink
            to={``}
            className={`font-medium text-lg border rounded-full py-2 basis-[50%]  text-center`}
          >
            Cart
          </NavLink>
          <NavLink
            to={``}
            className={`font-medium text-lg border rounded-full py-2 basis-[50%]  text-center`}
          >
            Checkout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
