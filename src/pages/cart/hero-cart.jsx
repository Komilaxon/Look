import { Link } from "react-router-dom";
import { Strelka } from "../../assets/icons/strelka";
export const HeroCart = () => {
  return (
    <div className="card_top_box">
      <Link className="card_page" to="/cart">
        Cart
      </Link>
      <span className="card_span"></span>
      <div className="card_link_box">
        <Link to="/" className="card_link">
          Home
        </Link>
        <Strelka />
        <Link to="/cart" className="card_link2">
          Cart
        </Link>
      </div>
    </div>
  );
};
