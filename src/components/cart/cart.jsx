import { Plus } from "../../assets/icons/plus";
import { add } from "../../store/products";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "../../assets/icons/delete";
import { del } from "../../store/products";

export const Card = ({ img, title, price, id, proData, setData}) => {
  const { products } = useSelector((state) => state.products);
  const isValid = products?.find((item) => item.id == id);
  const dispatch = useDispatch();

  const addPro = () => {
    dispatch(add({ img, title, price, id }));
  };
  return (
    <li className="pro_item">
      <div className="pro_img">
        <img className="pro_img" src={img} alt="img" />
      </div>
      <div className="pro_text_box">
        <h3 className="pro_subtitle">{title}</h3>
        <div className="pro_subbox">
          <p className="pro_price">{price}$</p>
          {isValid ? (
            <button className="pro_btn" onClick={()=> dispatch(del(id))}>
              <Delete />
            </button>
          ) : (
            <button onClick={addPro} className="pro_btn">
              <Plus />
            </button>
          )}
        </div>
      </div>
    </li>
  );
};
