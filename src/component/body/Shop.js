import React from "react";
import Product from "./parts/Product";
import "./Shop.css";

function Shop() {
  return (
    <div className="shop_page">
      <div className="shop_sidebar">
        <input type="text"></input>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
        </ul>
      </div>
      <div className="shop">
        <div className="shop_container">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="shop_container">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="shop_container">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Shop;
