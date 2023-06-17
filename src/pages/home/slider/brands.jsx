import React from "react";
import img1 from "../../../assets/icons/img.svg";
import img2 from "../../../assets/icons/img2.svg";
import img3 from "../../../assets/icons/img3.svg";
import img4 from "../../../assets/icons/img4.svg";
import img5 from "../../../assets/icons/img5.svg";
import img6 from "../../../assets/icons/img6.svg";

import { Stack } from "@mui/material";
import { Carousel } from "antd";

export default function BrandSlider() {
  return (
    <Stack sx={{ maxWidth: "1356px", margin: "0 auto", padding: "50px" }}>
      <Carousel
        pauseOnHover={false}
        pauseOnDotsHover={false}
        autoplay={true}
        effect="scrolly"
        draggable
      >
        <div>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <img src={img1} alt="img1" />
            <img src={img2} alt="img1" />
            <img src={img3} alt="img1" />
            <img src={img4} alt="img1" />
            <img src={img5} alt="img1" />
            <img src={img6} alt="img1" />
          </Stack>
        </div>
        <div>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <img src={img3} alt="img1" />
            <img src={img2} alt="img1" />
            <img src={img1} alt="img1" />
            <img src={img4} alt="img1" />
            <img src={img5} alt="img1" />
            <img src={img6} alt="img1" />
          </Stack>
        </div>
        
      </Carousel>
    </Stack>
  );
}
