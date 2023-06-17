import { HeaderTop } from "../../layout/header/header_top";
import { HeaderBottom } from "../../layout/header/header_bottom";
import { Footer } from "../../layout/footer";
export const CartLayout = ({ children }) => {
  return (
    <>
      <header>
      <div className="site_header">
        <div className="container">
          <HeaderTop />
        </div>
      </div>
      <div className="card_header_bottom">
        <div className="container">
          <HeaderBottom />
        </div>
      </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
};
