import React, { useContext, useState } from "react";
import "./signin.scss";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import CartContext from "../contexts/cartContext";

export default function SignIn() {
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

  const [signInAlert, setSignInAlert] = useState(
    "ایمیل و رمز عبور خود را وارد کنید!"
  );

  const { logedIn } = useContext(CartContext);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { logedInHandler } = useContext(CartContext);
  const { logOut } = useContext(CartContext);

  async function sendSignIn(e) {
    e.preventDefault();

    let items = { phone, password };

    if (phone.length === 11 && password.length > 0 && password.length < 16) {
      let result = await fetch(
        "https://Zinopetstore.com/api/users/signinAPI.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(items),
        }
      ).then((res) => {
        if (res.status == 200) {
          console.log(res);
          logedInHandler();
        }
        if (res.code == 400) {
          setSignInAlert("شماره یا رمز عبور اشتباه است");
        }
      });
    }
  }

  return (
    <div className="sign-in">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Link className="exit" to={"/"}>
        {exitIcon}
      </Link>
      <form onSubmit={sendSignIn} className="sign-in-container">
        <h1>ورود به حساب زینو</h1>
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="text"
          placeholder="Phone Number"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
        <p>{signInAlert}</p>
        <button type="submit" className="sign-in-btn">
          ورود به حساب
        </button>
      </form>
    </div>
  );
}
