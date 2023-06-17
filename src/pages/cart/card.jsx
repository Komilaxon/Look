import { Button, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Trash } from "../../assets/icons/Trash";
import { inc, dec, del } from "../../store/products";
import React from "react";
import "./cart.css";

export const Card = () => {
  let num = 0;
  const dispatch = useDispatch();
  const { products } = useSelector((state) => {
    return state.products;
  });
  return (
      <div className="container pro_box">
        <h4 className="card_title">Your cart items</h4>
        <hr style={{ marginBottom: "30px" }} />
        <Stack>
          <table style={{ width: "100%" }}>
            <thead>
              <tr
                style={{
                  maxWidth: "100%",
                  padding: "10px 15px",

                  display: "flex",
                  justifyContent: "space-around",
                  backgroundColor: "#5A5AC9",
                  marginBottom: "8px",
                }}
              >
                <th className="card_table">
                  <h4>Product Image</h4>
                </th>
                <th className="card_table">
                  <h4>Product Name</h4>
                </th>
                <th className="card_table">
                  <h4>Product Count</h4>
                </th>
                <th className="card_table">
                  <h4>Product Price</h4>
                </th>
                <th className="card_table">
                  <h4>Delete Product</h4>
                </th>
              </tr>
            </thead>
            <body>
              {products?.map((item) => {
                {
                  num += item.price * item.count;
                }
                return (
                  <tr key={item.id} className="card_pro_box">
                    <td>
                      <div className="card_img">
                        <img className="card_img" src={item.img} alt="img" />
                      </div>
                    </td>
                    <td>
                      <h4 className="card_pro_title">{item.title}</h4>
                    </td>
                    <td className="card_add_btn">
                      <Button
                        style={{ backgroundColor: "#5a5ac9", color: "white" }}
                        onClick={() => dispatch(inc(item.id))}
                        variant="outlined"
                      >
                        +
                      </Button>
                      <p className="card_pro_count">{item.count}</p>
                      <Button
                        style={{ backgroundColor: "#5a5ac9", color: "white" }}
                        onClick={() => dispatch(dec(item.id))}
                        variant="outlined"
                      >
                        -
                      </Button>
                    </td>
                    <td>
                      <p className="card_price">{item.price * item.count}$</p>
                    </td>
                    <td>
                      <Button onClick={() => dispatch(del(item.id))}>
                        <Trash />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </body>
          </table>
        </Stack>
        <div className="card_total_box">
          <Typography className="total_title" variant="h6">Total Price:</Typography>
          <Typography className="total_title" variant="h6">$ {num.toFixed(2)}</Typography>
        </div>
      </div>
  );
};
