import React from "react";
import "./layout.css";
import logo from "../assets/images/logo.png";

export default ({ children }) => (
  <div>
    <div className="nav">
      <div className="nav-header">
        {/* <div className="nav-title">FewNickels</div> */}
        <img className="nav-logo" src={logo} alt="" />
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span />
          <span />
          <span />
        </label>
      </div>
      <input type="checkbox" id="nav-check" />
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#company">Company</a>
        <a href="#platform">Platform</a>
        <a href="#investors">Investors</a>
        <a href="#farmers">Farmers</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#team">Team</a>
        <a href="#footer">Info</a>
        <a className="token-button" href="#footer">Buy Tokens</a>
      </div>
    </div>
    {children}
  </div>
);
