import { request } from "../../utils/request";
import { useMutation } from "@tanstack/react-query";

export const usePostPro = () =>
  useMutation({
    mutationFn: (data) =>
      request.post("/products", data).then((res) => res.data),
  });
