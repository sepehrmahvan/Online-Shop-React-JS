import React, { useEffect, useState } from "react";
import "./mostpurchased.scss";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useContext } from "react";
import CartContext from "../contexts/cartContext";

export default function MostPurchased(pic, name, price) {
  const rightArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="currentColor"
      className="bi bi-chevron-right"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );

  const leftArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="currentColor"
      className="bi bi-chevron-left"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );

  const [mostPurchased, setMostPurchased] = useState([]);

  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    fetch("http://zinopetstore.com/api/products/mostpurchasedProductsAPI.php?page=1&count=10")
      .then((res) => res.json())
      .then((res) => setMostPurchased(res.productsInfo));
  }, []);


  const responsive = {
    0: { items: 1 },
    469: { items: 2 },
    580: { items: 3 },
    1024: { items: 4 },
  };

  const items = mostPurchased.map((item) => (
    <div key={item.id} className="product-item">
      <Link className="whole-card" to={'/product'}></Link>
      <img src={item.imageUrl} alt="product" />
      <h3>{item.name}</h3>
      <h4>تومان {item.price}</h4>
      <div className="product-links">
        <button onClick={() => addToCart(item.id, item.imageUrl, item.name, item.price)} className="add-to-cart">افزودن به سبد خرید</button>
      </div>
    </div>
  ));

  return (
    <div className="most-purchased-products">
      <h2 className="most-purchased-products-title">پر فروش ترین محصولات</h2>
      <AliceCarousel
        mouseTracking
        disableDotsControls
        items={items}
        responsive={responsive}
        controlsStrategy="responsive"
        infinite
        renderPrevButton={() => {
          return <button className="previous">{leftArrow}</button>;
        }}
        renderNextButton={() => {
          return <button className="next">{rightArrow}</button>;
        }}
      />
    </div>
  );
}
