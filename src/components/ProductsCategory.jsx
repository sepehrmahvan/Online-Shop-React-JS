import React from "react";
import { Link } from "react-router-dom";
import transport from "../images/cage.webp";
import clothes from "../images/clothes.webp";
import food from "../images/food.webp";
import health from "../images/health.webp";
import rest from "../images/sleep.webp";
import toys from "../images/toys.webp";
import './productscategory.scss';

export default function ProductsCategory() {
  return (
    <div className="products-category">
      <div className="product-category">
        <Link to={"/food"}>
          <img src={food} alt="food" />
          <div className="title">
            <h2>خوراکی</h2>
          </div>
        </Link>
        <Link to={"/transport"}>
          <img src={transport} alt="transport" />
          <div className="title">
            <h2>حمل ونقل</h2>
          </div>
        </Link>
        <Link to={"/rest"}>
          <img src={rest} alt="rest" />
          <div className="title">
            <h2>استراحت</h2>
          </div>
        </Link>
        <Link to={"/health"}>
          <img src={health} alt="health" />
          <div className="title">
            <h2>سلامت و بهداشت</h2>
          </div>
        </Link>
        <Link to={"/clothes"}>
          <img src={clothes} alt="clothes" />
          <div className="title">
            <h2>پوشاک</h2>
          </div>
        </Link>
        <Link to={"/toys"}>
          <img src={toys} alt="toys" />
          <div className="title">
            <h2>سرگرمی</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
