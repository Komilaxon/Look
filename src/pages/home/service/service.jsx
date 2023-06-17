import ServiceImg from "../../../assets/icons/shipping.svg";
import ServiceImg2 from "../../../assets/icons/return.svg";
import ServiceImg3 from "../../../assets/icons/payment.svg";
import ServiceImg4 from "../../../assets/icons/support.svg";

import "./service.css";
export const Service = () => {
  return (
    <div className="service_box">
      <div className="service_text_box">
        <div>
          <img src={ServiceImg} alt="img" />
        </div>
        <div>
          <h3 className="service_title">Free Shipping</h3>
          <p className="service_text">On all orders over $75.00</p>
        </div>
      </div>
      <div className="service_text_box">
        <div>
          <img src={ServiceImg2} alt="img" />
        </div>
        <div>
          <h3 className="service_title">Free Returns</h3>
          <p className="service_text">Returns are free within 9 days</p>
        </div>
      </div>
      <div className="service_text_box">
        <div>
          <img src={ServiceImg3} alt="img" />
        </div>
        <div>
          <h3 className="service_title">100% Payment Secure</h3>
          <p className="service_text">Your payment are safe with us.</p>
        </div>
      </div>
      <div className="service_text_box">
        <div>
          <img src={ServiceImg4} alt="img" />
        </div>
        <div>
          <h3 className="service_title">Support 24/7</h3>
          <p className="service_text">Contact us 24 hours a day</p>
        </div>
      </div>
    </div>
  );
};
