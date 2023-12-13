import React, { useState } from "react";
import "./signup.scss";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [signUpAlert, setSignUpAlert] = useState(
    "اطلاعات خواسته شده را تکمیل فرمایید!"
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  async function sendSignUp(e) {
    e.preventDefault();

    let items = { name, phone, email, password, rePassword };

    let result = await fetch(
      "https://Zinopetstore.com/api/users/signupAPI.php",
      {
        method: "POST",
        body: JSON.stringify(items),
        headers: {
          "Content-Type": "application/json",
          'Accept': "application/json",
        },
      }
    );
  }

  const exitIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      className="bi bi-box-arrow-left"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
      />
      <path
        fillRule="evenodd"
        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
      />
    </svg>
  );

  return (
    <div className="sign-up">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Link className="exit" to={"/"}>
        {exitIcon}
      </Link>
      <div className="sign-up-form">
        <form onSubmit={sendSignUp}>
          <h1>
            {" "}
            ثبت نام در <span>زینو</span> پت استور{" "}
          </h1>
          <h6>
            نام و نام خانوادگی <span>(ضروری)</span>
          </h6>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="first-name"
            placeholder="نام و نام خانوداگی"
          />
          <h6>
            شماره موبایل <span>(ضروری)</span>
          </h6>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="text"
            className="phone"
            placeholder="موبایل"
          />
          <h6>آدرس ایمیل</h6>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="email"
            placeholder="آدرس ایمیل"
          />
          <h6>
            انتخاب رمز عبور <span>(ضروری)</span>
          </h6>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="password"
            placeholder="رمز عبور انتخابی"
          />
          <h6>
            تکرار رمز عبور <span>(ضروری)</span>
          </h6>
          <input
            onChange={(e) => setRePassword(e.target.value)}
            value={rePassword}
            type="password"
            className="password"
            placeholder="تکرار رمز عبور"
          />
          <p>{signUpAlert}</p>
          <button className="sign-up-btn" type="submit">
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
}
