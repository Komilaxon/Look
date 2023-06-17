import { Img } from "../../assets/icons/facebook";
import { Img2 } from "../../assets/icons/instagram.jsx";
import { Img3 } from "../../assets/icons/twitter";
import { Img4 } from "../../assets/icons/youTube";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.css";

export const HeaderTop = () => {
  const { products } = useSelector((state) => state.products)
  let num = 0;
  return (
    <div className="header_top_box">
        <Link className="header_top_img" to={"https://ru-ru.facebook.com/"}>
        <Img />
        </Link>
        <Link className="header_top_img" to={"https://twitter.com/Twitter"}>
          <Img3 />
        </Link>
        <Link className="header_top_img" to={"https://www.youtube.com/"}>
          <Img4 />
        </Link>
        <Link className="header_top_img" to={"https://www.instagram.com/"}>
          <Img2 />
        </Link>
        <a className="header_top_link" href="#">(+123)4567890</a>
      <ul className="header_top_list">
          <li className="header_top_item">
            <h3 className="header_top_title">Setting</h3>
          </li>
          <li className="header_top_item">
            <h3 className="header_top_title">USD $</h3>
          </li>
          <li className="header_top_item">
            <select className="header_top_select">
              <option className="header_top_option">English</option>
              <option className="header_top_option">Russian</option>
              <option className="header_top_option">Uzbek</option>
            </select>
          </li>
      </ul>
    </div>
  );
};
