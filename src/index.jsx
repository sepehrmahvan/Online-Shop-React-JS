import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CommonQuestions from "./pages/CommonQuestions";
import { CartProvider } from "./contexts/cartContext";
import CartPage from "./pages/CartPage";
import Product from "./pages/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<Product/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/common-questions" element={<CommonQuestions />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact-us" element={<div>contact us</div>} />
        <Route path="/about-us" element={<div>about us</div>} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);
