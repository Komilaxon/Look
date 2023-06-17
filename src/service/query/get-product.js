import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/request";

export const useGetProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => request.get("/products").then((res) => res.data),
  });
};
