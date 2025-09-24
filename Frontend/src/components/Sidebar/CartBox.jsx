import { BsFillCartXFill } from "react-icons/bs";
import { NavLink } from "react-router";
import cartItemImage from "../../../public/assets/homePage/Best-Sellers-Section/alura-cream-tall-vase.png";
import CartBoxCard from "../cards/CartBoxCard";
import { links } from "../../constant/data";

const CartBox = ({ setShowCart }) => {
  const totalPrice = 1800;
  const productPrice = 900;
  const productName = "Tall Cream Ceramic Vase";
  return (
    <div className="flex flex-col gap-4 min-[350px]:p-4 p-3 py-4 justify-between h-full">
      <div className="flex justify-between items-center border-b border-[#8e8e94] pb-2">
        <h3 className="font-bold text-2xl">Shopping Cart</h3>
        <button
          className="text-2xl cursor-pointer text-[#3A3845]"
          onClick={() => setShowCart(false)}
        >
          <BsFillCartXFill />
        </button>
      </div>
      <div className="h-full max-h-[300px] flex flex-col gap-4 w-full overflow-y-auto">
        {[1, 2,3].map((_, i) => (
          <div key={i}>
            <CartBoxCard
              cartItemImage={cartItemImage}
              productPrice={productPrice}
              productName={productName}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center border-b border-[#8e8e94] pb-1">
          <span className="font-semibold text-lg">Total</span>
          <span className="text-[#c4773d] font-bold text-base">
            ${totalPrice}
          </span>
        </div>
        <div className="w-full flex gap-3 items-center">
          {links.map((v, i) => (
            <NavLink
              key={i}
              to={v.path}
              className={`font-medium text-lg border rounded-full py-2 basis-[50%] text-center`}
            >
              {v.text}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartBox;
