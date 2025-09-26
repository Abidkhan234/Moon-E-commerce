import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import filterIcon from "/assets/Icons/Filters.svg";
import ShopFilter from "./ShopFilter";

const FilterDrawer = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <div className="h-full w-full">
        <button
          className="flex items-center min-[375px]:gap-3 gap-1 cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          <img src={filterIcon} className="size-[20px]" alt="" />
          <span className="uppercase font-semibold text-base">FILTER</span>
        </button>
      </div>
      <AnimatePresence>
        {showFilter && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="fixed bottom-0 left-0 w-full h-[60vh] overflow-y-auto bg-[#e9dede] z-50"
          >
            <div className="flex flex-col gap-4">
              <ShopFilter setActive={setShowFilter} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FilterDrawer;
