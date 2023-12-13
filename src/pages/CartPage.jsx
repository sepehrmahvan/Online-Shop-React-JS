import React from "react";
import Header from "../components/Header";
import { useContext } from "react";
import CartContext from "../contexts/cartContext";
import "./cartpage.scss";
import Footer from "../components/Footer";

export default function CartPage() {
  const { items } = useContext(CartContext);

  const {deleteObject} = useContext(CartContext);

  const {sum} = useContext(CartContext);

  return (
    <>
      <Header />
      <div className="cart-page">
        <div className="cart-info">
          <div className="added-products">
            {items.map((item) => (
              <div key={item.id} className="product">
                <img src={item.pic} alt="pic" />
                <h6>{item.name}</h6>
                <p>{item.price} ریال</p>
                <button onClick={() => deleteObject(item.id)}className="delete-product">حذف محصول</button>
              </div>
            ))}
          </div>
          <div className="submit-shoping">
            <div className="numbers-of-products">
              <p>تعداد اقلام</p>
              <p>{items.length}</p>
            </div>
            <hr />
            <div className="full-price">
              <p>جمع کل</p>
              <p>{sum} ریال</p>
            </div>
            <hr />
            <button className="finalize">نهایی سازی خرید</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
