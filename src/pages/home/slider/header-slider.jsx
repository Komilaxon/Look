import "./slider.css";
import { Stack } from "@mui/material";
import { Carousel } from "antd";
import React from "react";

export function HeaderSlider() {
  return (
    <Stack sx={{ maxWidth: "1356px", margin: "0 auto", paddingBottom: "20px" }}>
      <Carousel
        pauseOnHover={false}
        pauseOnDotsHover={false}
        autoplay
        effect="scrolly"
        draggable
      >
        <div style={{ display: "flex" }} className="carousel-box">
          <div className="carousel-box__text"></div>
        </div>
        <div style={{ display: "flex" }} className="carousel-box2">
          <div className="carousel-box__text"></div>
        </div>
      </Carousel>
    </Stack>
  );
}
