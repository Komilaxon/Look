import "./slider.css";
import { Stack } from "@mui/material";
import { Carousel } from "antd";
import React from "react";

export function ProSlider() {
  return (
    <Stack sx={{ maxWidth: "1356px", margin: "0 auto", paddingBottom: "20px", paddingTop: "20px"}}>
      <Carousel
        pauseOnHover={false}
        pauseOnDotsHover={false}
        autoplay
        effect="scrolly"
        draggable
      >
        <div style={{ display: "flex" }} className="pro_slider2">
          <div className="carousel-box__text"></div>
        </div>
        <div style={{ display: "flex" }} className="pro_slider">
          <div className="carousel-box__text"></div>
        </div>
      </Carousel>
    </Stack>
  );
}
