import React from "react";
import Flag from "../../assets/icons/1.svg"
import "./footer.css";
export const FooterBottom = () => {
  return (
    <div className="footerbottom__container">
      <div className="footerbottom__box">
        <div>
          <p className="footerbottom__text">
            Copyright © HasThemes. All Rights Reserved
          </p>
        </div>
        <div className="footerbottom__icons">
          <a target="blank" href="#" className="footertop__icon">
            <img src={Flag} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};
