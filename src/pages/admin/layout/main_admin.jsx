import { Button, Input, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { usePostPro } from "../../../service/mutation/post-products";


export const MainAdmin = () => {
  const { handleSubmit, register, reset } = useForm();
  const {mutate} = usePostPro()
  const submit = (data) => {
    mutate(data)
  };
  return (
    <div className="container">
      <h4 className="card_title">Create new product</h4>
      <Stack mt={4}>
        <form onSubmit={handleSubmit(submit)} className="admin_form">
          <Stack gap={3}>
            <TextField
              placeholder="Enter product img"
              {...register("img")}
            />
            <TextField
              placeholder="Enter product title"
              {...register("title")}
            />
            <TextField
              placeholder="Enter product price"
              {...register("price")}
            />
            <Button
              style={{ backgroundColor: "#5A5AC9", color: "#fff" }}
              type="submit"
            >
              Add product
            </Button>
          </Stack>
        </form>
      </Stack>
    </div>
  );
};
