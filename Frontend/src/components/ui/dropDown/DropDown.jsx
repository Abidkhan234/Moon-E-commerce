import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IoIosArrowDown } from "react-icons/io";
import { sortOptions } from "../../../constant/data";
import useUIContext from "../../../../context/UIContext";
import { useQueryClient } from "@tanstack/react-query";

const DropDown = () => {
  const { setSortBy } = useUIContext();
  const queryClient = useQueryClient();

  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState("High-To-Low");
  return (
    <div className="flex items-center min-[375px]:gap-2 text-[#3A3845] relative">
      <span className="text-base">Sort by:</span>
      <button
        className={`flex justify-between items-center min-[425px]:w-[180px] min-[375px]:w-[140px] w-[120px] text-base cursor-pointer`}
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <span className="">{selectedItem}</span>
        <span
          className={`text-lg ${
            showDropDown && "-rotate-180"
          } transition-transform duration-300`}
        >
          <IoIosArrowDown />
        </span>
      </button>
      <AnimatePresence>
        {showDropDown && (
          <DropDownMenu
            setActive={setShowDropDown}
            setSelectedItem={setSelectedItem}
            itemsArr={sortOptions}
            setSortBy={setSortBy}
            queryClient={queryClient}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const DropDownMenu = ({
  setActive,
  setSelectedItem,
  itemsArr,
  setSortBy,
  queryClient,
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute -bottom-47 right-0 min-[425px]:w-[180px] min-[375px]:w-[140px] w-[120px] h-[180px] bg-[#e9dede] rounded-sm py-2 px-2 z-30"
    >
      <div className="w-full h-full flex flex-col justify-between py-2">
        {itemsArr.map((v, i) => (
          <button
            className="font-medium border-b border-[] last:border-none cursor-pointer text-start"
            onClick={() => {
              setSelectedItem(v.text);
              setSortBy(v.value);
              setActive(false);
              queryClient.invalidateQueries({ queryKey: ["shopProducts"] });
            }}
            key={i}
          >
            {v.text}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default DropDown;
