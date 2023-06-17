import { Link } from "react-router-dom";
import { Shuffle } from "../../assets/icons/shuffle";
import Logo from "../../assets/icons/logo.svg";
import { Heart } from "../../assets/icons/heart";
import { CartImg } from "../../assets/icons/cart";
import { useSelector } from "react-redux";
export const HeaderBottom = () => {
  const { products } = useSelector((state) => state.products)
  return (
    <div className="header_bottom_box">
      <div>
        <img src={Logo} alt="img" />
      </div>
      <ul className="header_bottom_list">
        <li className="header_bottom_item">
          <Link to={"/"} className="header_bottom_link">
            Home
          </Link>
        </li>
        <li className="header_bottom_item">
          <a className="header_bottom_link" href="#">
            Shop
          </a>
        </li>
        <li className="header_bottom_item">
          <a className="header_bottom_link" href="#">
            Pages
          </a>
        </li>
        <li className="header_bottom_item">
          <a className="header_bottom_link" href="#">
            Blog
          </a>
        </li>
        <li className="header_bottom_item">
          <a className="header_bottom_link" href="#">
            Contact Us
          </a>
        </li>
      </ul>
      <div className="navbar" style={{ position: "relative" }}>
        <Link to={"/"} className="header_bottom_shop">
          <Shuffle />
        </Link>
        <Link to={"/"} className="header_bottom_shop" style={{ position: "relative" }}>
          <Heart />
        </Link>
        <Link
          to={"/cart"}
          className="header_bottom_shop"
          style={{ position: "relative" }}
        >
          <CartImg />
          <span
            style={{
              position: "absolute",
              top: "-25%",
              right: "-20%",
              backgroundColor: "#5A5AC9",
              paddingLeft: "6px",
              paddingRight: "6px",
              borderRadius: "50%",
              color: "#fff",
            }}
          >
            {products.length}
          </span>
        </Link>
      </div>
    </div>
  );
};
