import React, { useState } from "react";
import "./header.scss";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import login from "../images/sign-in-pic.jpg";
import { useContext } from "react";
import CartContext from "../contexts/cartContext";

export default function Header() {
  const search = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );

  const closeBtn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-x"
      viewBox="0 0 16 16"
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  );

  const cartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-bag-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
    </svg>
  );

  const menuBtn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );

  const loginBtn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-person-circle"
      viewBox="0 0 16 16"
    >
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path
        fillRule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
      />
    </svg>
  );

  const [showSearch, setShowSearch] = useState("none");
  const [showLogin, setShowLogin] = useState("none");
  const [showMenu, setShowMenu] = useState("-100%");
  const [menu, setMenu] = useState("none");

  const {items} = useContext(CartContext);

  return (
    <>
      <div className="header-logo">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {/* header */}
        <header>
          <button
            onClick={() => {
              setShowMenu("0");
              setMenu("block");
            }}
            className="menu"
          >
            {menuBtn}
          </button>
          <nav>
            <Link to="/"> خانه </Link>
            <Link to="/products"> محصولات </Link>
            <Link to="/contact-us"> تماس با ما </Link>
            <Link to="/about-us">درباره ما</Link>
          </nav>
          <div className="icons">
            <button onClick={() => setShowSearch("flex")} className="search">
              {search}
            </button>
            <Link to="/cart">{cartIcon}</Link>
            <button onClick={() => setShowLogin("flex")} className="login">
              {loginBtn}
            </button>
          </div>
        </header>
      </div>
      {/* cart accordion */}
      <div className="cart-accordion">
        <span>{items.length}</span>
        <Link to={'/cart'}>{cartIcon}</Link>
      </div>
      {/* mobile menu */}
      <div
        style={{ display: menu }}
        onClick={() => setMenu("none")}
        className="mobile-menu"
      >
        <div style={{ right: showMenu }} className="menu-container">
          <div className="menu-logo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <Link to="/"> خانه </Link>
            <Link to="/products"> محصولات </Link>
            <Link to="/contact-us"> تماس با ما </Link>
            <Link to="/about-us">درباره ما</Link>
          </nav>
        </div>
      </div>
      {/* search page */}
      <div style={{ display: showSearch }} className="search">
        <input type="text" placeholder="جستجوی محصول..." />
        <button onClick={() => setShowSearch("none")}>{closeBtn}</button>
      </div>
      {/* login page */}
      <div style={{ display: showLogin }} className="login-page">
        <div className="login-cantainer">
          <img src={login} alt="login" />
          <Link to={"/sign-in"} className="login">
            ورود به حساب کاربری
          </Link>
          <Link to={"/sign-up"} className="sign-up">
            عضویت
          </Link>
          <button onClick={() => setShowLogin("none")} className="close-login">
            {closeBtn}
          </button>
        </div>
      </div>
    </>
  );
}
