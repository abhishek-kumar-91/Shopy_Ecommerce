import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
            Shopy is a dynamic e-commerce platform, offering a vast array of
            products, from electronics to fashion. With a user-friendly
            interface and secure payment options,
          </span>
        </div>

        <div className="item">
        <h1>Contact</h1>
          <span>
            Shopy is a dynamic e-commerce platform, offering a vast array of
            products, from electronics to fashion. With a user-friendly
            
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">SHOPY</span>
          <span className="copyright"> &copy; Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
