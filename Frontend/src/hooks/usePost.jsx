import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "../api/api";

const usePost = ({ id = null, query }) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProducts(id, query),
  });
};

export { usePost };
