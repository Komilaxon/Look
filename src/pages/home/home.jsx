import React from "react";
import { MainLayout } from "../../layout/main-layout";
import {HeaderSlider} from "../home/slider/header-slider";
import { Service } from "./service";
import { Products } from "../../components/products";
import { NewPro } from "../../components/products/new-products";
import { ProSlider } from "./slider/pro-slider";
import { BlogPro } from "../../components/products/blog-products";
import BrandSlider from "./slider/brands";

export const Home = () => {
  const [data, setData] = React.useState([]);
  return (
    <MainLayout>
      <section>
        <HeaderSlider />
      </section>
      <section className="service">
        <Service />
      </section>
      <section className="products">
        <Products data={data} setData={setData} />
        <ProSlider />
        <NewPro />
        <BlogPro />
      </section>
      <section>
        <BrandSlider />
      </section>
    </MainLayout>
  );
};
