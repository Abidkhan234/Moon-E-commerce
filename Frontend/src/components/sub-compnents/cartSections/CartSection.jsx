import { IoClose } from "react-icons/io5";
import CounterBtn from "../../ui/buttons/CounterBtn";
import { cartItems } from "../../../constant/data";
import trashIcon from "../../../../public/assets/Icons/Trash.svg";
import Button from "../../ui/buttons/Button";

const CartSection = () => {
  const totalItems = 3;

  return (
    <section className="flex flex-col gap-5">
      <h1 className="font-bold text-3xl text-[#3A3845]">
        Cart ({totalItems} items)
      </h1>
      <>
        <CartTable items={cartItems} />
      </>
      <div className="flex items-center justify-end">
        <div className="flex flex-col gap-5 bg-[#3A3845] sm:p-10 p-7 text-[#FFFFFF] w-full md:max-w-[600px] rounded-md">
          <h3 className="font-bold text-2xl">Cart Totals</h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Subtotal</span>
            <span className="min-[375px]:text-lg text-base font-semibold">$465.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Cart Total</span>
            <span className="min-[375px]:text-lg text-base font-semibold">$465.00</span>
          </div>
          <Button btnText="Proceed to checkout" btnType="text" color="FFFFFF" />
        </div>
      </div>
    </section>
  );
};

const CartTable = ({ items }) => {
  return (
    <div className="w-full">
      {/* Desktop / Tablet table */}
      <div className="hidden md:block w-full">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#3A3845] text-left text-[#FFFFFF]">
              <th className="w-12 px-3 py-3">
                <img src={trashIcon} alt="" />
              </th>
              <th className="px-3 py-3">Photo</th>
              <th className="px-3 py-3">Product</th>
              <th className="px-3 py-3 text-center">Price</th>
              <th className="px-3 py-3 text-center">Quantity</th>
              <th className="px-3 py-3 text-center">Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {items.map((it) => (
              <tr key={it.id} className="border-b">
                {/* delete */}
                <td className="px-3 py-4 align-middle">
                  <button className="text-2xl cursor-pointer text-[#E54335]">
                    <IoClose />
                  </button>
                </td>

                {/* image */}
                <td className="px-3 py-4 align-middle">
                  <div className="flex items-center gap-3">
                    <img
                      src={it.image}
                      alt={it.name}
                      className="size-[130px] object-cover"
                    />
                  </div>
                </td>

                {/* product */}
                <td className="px-3 py-4 align-middle">
                  <div className="text-lg font-semibold text-gray-900">
                    {it.name}
                  </div>
                </td>

                {/* price */}
                <td className="px-3 py-4 align-middle text-center">
                  <div className="text-base font-medium">${it.price}</div>
                </td>

                {/* quantity */}
                <td className="px-3 py-4 align-middle text-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <CounterBtn />
                  </div>
                </td>

                {/* subtotal */}
                <td className="px-3 py-4 align-middle text-center items-center">
                  <div className="text-base font-medium text-[#C69B7B]">
                    $100
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden flex flex-col gap-4">
        {items.map((v, i) => (
          <div
            className="flex flex-col gap-3 border-b border-[#000000] pb-3"
            key={v.id}
          >
            <button className="text-3xl cursor-pointer text-[#E54335] w-max">
              <IoClose />
            </button>
            <div className="flex items-center gap-1.5">
              <img src={v.image} className="size-[110px]" alt="" />
              <h5 className="font-semibold min-[425px]:text-xl ">{v.name}</h5>
            </div>
            <div className="flex justify-between items-center">
              <span className="uppercase text-base text-[#3A3845]">price:</span>
              <span className="font-semibold text-base">${v.price}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="uppercase text-base text-[#3A3845]">
                Quanlity:
              </span>
              <>
                <CounterBtn />
              </>
            </div>
            <div className="flex justify-between items-center">
              <span className="uppercase text-base text-[#3A3845]">
                Subtotal:
              </span>
              <span className="font-semibold text-base text-[#C69B7B]">
                $90
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartSection;
