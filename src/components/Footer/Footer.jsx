import React from "react";
import LogoFooter from "../../assets/LOGO-footer.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src={LogoFooter} alt="logo du site kasa" />
      <p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
