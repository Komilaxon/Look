import { Button, Stack, Typography } from "@mui/material";

export const Card = ({ img, title, userPrice,id, count }) => {
  return (
    <Stack direction={"row"}>
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{userPrice}</p>
        <Stack direction={"row"}>
            <Button variant="contained">+</Button>
            <Typography>{count}</Typography>
            <Button variant="contained">-</Button>
        </Stack>
      </div>
    </Stack>
  );
};
