import { useState } from "react";
import searchIcon from "/assets/Icons/Search.svg";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\s+/g, "");

    if (searchQuery.length >= 3) {
      console.log("ok");
    }

    setSearchQuery(value);
  };

  return (
    <div className="flex items-center gap-2 border border-[#3A3845] px-2 w-full">
      <img src={searchIcon} className="size-[25px]" alt="" />
      <input
        type="text"
        value={searchQuery}
        className="py-2 font-medium text-base outline-none"
        placeholder="Search for product..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
