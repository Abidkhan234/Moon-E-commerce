import { useQuery } from "@tanstack/react-query";
import { shopProducts } from "../api/api"; // adjust the path

const useProduct = (filterData, sortBy) => {
  return useQuery({
    queryKey: ["shopProducts", filterData, sortBy],
    queryFn: () => shopProducts(filterData, sortBy),
    keepPreviousData: true, // keeps old data while fetching new
  });
};

export default useProduct;
