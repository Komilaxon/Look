import "./products.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../cart";
import { useGetProduct } from "../../service/query/get-product";



export const Products = () => {
  const [proData, setData] = useState(false)
  const { products } = useSelector((state) => state.products);
  const { data, isLoading } = useGetProduct();

  return (
    <>
      <h3 className="pro_title">Our products</h3>
      <span className="pro_span"></span>
      <p className="pro_text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis,
        culpa?
      </p>
      <ul className="pro_list">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {data?.map((item) => {
              return <Card data={proData} setData={setData} key={item.id} {...item} />;
            })}
          </>
        )}
      </ul>
    </>
  );
};
