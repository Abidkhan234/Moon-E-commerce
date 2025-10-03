import useUIContext from "../../../../context/UIContext";

const Pagination = ({ totalPages }) => {
  const { setFilterData, filterData } = useUIContext();

  const handlePageClick = (page) => {
    setFilterData({
      ...filterData,
      page, // add/update page key
    });
  };

  return (
    <div className="flex items-center gap-2 justify-center mt-6">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => handlePageClick(i + 1)}
          className={`px-3 py-1 rounded-sm border cursor-pointer ${
            filterData.page === i + 1
              ? "bg-[#3A3845] text-white"
              : "bg-white text-[#3A3845]"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
