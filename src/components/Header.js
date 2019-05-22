import React from "react";
import "./component-styles/header.scss";
export default () => {
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <a href="">Create Ads</a>
        <a href="">About Us</a>
        <a href="">Log in</a>
        <a href="" className="register-btn">
          Register
        </a>
      </nav>
    </header>
  );
};
