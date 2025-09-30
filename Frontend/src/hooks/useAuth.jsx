import { useMutation } from "@tanstack/react-query";

import Axios from "../config/client";

const useAuth = () => {
  return useMutation({
    mutationFn: async ({ data = {}, method = "post", endpoint }) => {
      const response = await Axios({
        url: endpoint,
        method,
        data,
      });
      return response.data;
    },
});
};

export default useAuth;
