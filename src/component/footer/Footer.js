import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_social">
          Social Media
          <i className="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
        </div>
        <div className="footer_nav">
          <div className="footer_nav_item">Home</div>
          <div className="footer_nav_item">About us</div>
          <div className="footer_nav_item">Shop</div>
          <div className="footer_nav_item">Basket</div>
          <div className="footer_nav_item">Sign in</div>
          <div className="footer_nav_item">Sign up</div>
        </div>
      </div>
      <small className="footer_copy">
        &copy; Copyright 2021, Wisteria. All Rights Reserved
      </small>
    </div>
  );
}

export default Footer;
