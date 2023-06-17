import { HeaderBottom } from "./header_bottom";
import { HeaderTop } from "./header_top";

export const Header = () => {
  return (
    <>
      <div className="site_header">
        <div className="container">
          <HeaderTop />
        </div>
      </div>
      <div className="site_header2">
        <div className="container">
          <HeaderBottom />
        </div>
      </div>
    </>
  );
};
