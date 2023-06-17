import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../cart";
import { useState } from "react";
export const NewPro = () => {
  const [proData, setData] = useState(false)
  const newProduct = [
    {
      id: 10,
      img: "https://theworkingline.com/wp-content/uploads/2022/11/best-italian-makeup-brands-italian-cosmetics-brands-best-makeup-brands-in-italy-best-cosmetics-brands-in-italy-italy-makeup-companies-italian-lipstick-bran-11.jpg",
      title: "All Natural Makeup Beauty Cosmetics",
      category: "new_product",
      price: 11.9,
    },
    {
      id: 11,
      img: "https://images.uzum.uz/cfd8qcag84cfbutu5ck0/original.jpg",
      title: "On Trend Makeup and Beauty Cosmetics",
      category: "new_product",
      price: 11.9,
    },
    {
      id: 12,
      img: "https://img.freepik.com/free-vector/cherry-pink-cosmetics-brand-set-bottles-with-essence-face-cream-lotion-product-placement-cherry-blossom-covered-dew-place-brand-realistic-s_1268-15061.jpg?w=2000",
      title: "The Cosmetics and Beauty brand Shoppe",
      category: "new_product",
      price: 21.51,
    },
    {
      id: 13,
      img: "https://img.myloview.ru/murals/beauty-cosmetic-makeup-luxury-set-fashion-woman-make-up-product-brushes-lipstick-nail-polish-coral-collection-creative-concept-cosmetology-make-up-accessories-top-view-400-207144849.jpg",
      title: "Orginal Age Defying Cosmetics Makeup",
      category: "new_product",
      price: 11.9,
    },
  ];
  
  const { products } = useSelector((state) => state.products);
  console.log(products);
  return (
    <div className="newPro_box">
      <h3 className="pro_title">New Arrival products</h3>
      <span className="pro_span"></span>
      <p className="pro_text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis,
        culpa?
      </p>
      <ul className="pro_list">
        {newProduct?.map((item) => {
          return <Card data={proData} setData={setData} key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
};
