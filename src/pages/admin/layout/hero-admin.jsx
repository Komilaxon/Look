import { Link } from "react-router-dom";
import { Strelka } from "../../../assets/icons/strelka";

export const HeroAdmin = () => {
  return (
    <div className="card_top_box box2">
      <Link className="card_page" to="/cart">
      Admin Panel
      </Link>
      <span className="card_span"></span>
      <div>
        <Link to="/" className="card_link">
          Home
        </Link>
        <Strelka />
        <Link to="/cart" className="card_link2">
        Admin Panel
        </Link>
      </div>
    </div>
  );
};
