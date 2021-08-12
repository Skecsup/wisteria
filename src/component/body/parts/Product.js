import React from "react";
import kep1 from "../../images/kep1.jpg";
import "./Product.css";
function Product() {
  return (
    <div className="product">
      <h1 className="product_title">Kakashi Gyula</h1>
      <p className="product_description">
        Rebekanak kellett csima;mo kepet xd xd
      </p>
      <img className="product_image" src={kep1} alt="kep1" />
      <strong className="product_price">
        $<i class="fas fa-infinity"></i>
      </strong>
      <button className="product_button">Add to cart</button>
    </div>
  );
}

export default Product;
