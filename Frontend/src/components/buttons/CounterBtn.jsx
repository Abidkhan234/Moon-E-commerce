import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const CounterBtn = () => {
  const [counter, setCounter] = useState(1);
  const handleCounter = (countType) => {
    if (countType == "plus") {
      if (counter >= 5) {
        return;
      }

      setCounter(counter + 1);
    } else {
      if (counter <= 1) {
        setCounter(1);
        return;
      }

      setCounter(counter - 1);
    }
  };
  return (
    <div className="flex items-center gap-4">
      <button className="cursor-pointer size-[25px] flex justify-center items-center  rounded-sm border border-[#807F86]" onClick={() => handleCounter("minus")}>
        <FiMinus />
      </button>
      <span className="font-medium">{counter}</span>
      <button className="cursor-pointer size-[25px] flex justify-center items-center rounded-sm  border border-[#807F86]" onClick={() => handleCounter("plus")}>
        <FiPlus />
      </button>
    </div>
  );
};

export default CounterBtn;
