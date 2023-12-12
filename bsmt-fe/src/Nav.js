import React from "react";
import "./Nav.css";
import bsmtLogo from "./assets/images/logo.png";
import lightBulb from "./assets/images/icon1.png";
import bell from "./assets/images/icon2.png";
import help from "./assets/images/icon3.png";
import person from "./assets/images/icon4.png";
import logout from "./assets/images/icon5.png";

const Nav = () => {
  return (
    <nav className="navBar">
      <article className="navLeft">
        <i className="fa fa-bars" />
        <img src={bsmtLogo} alt="bsmt logo" />
      </article>
      <article className="navRight">
        <img src={lightBulb} alt="BSMT About" abbr title="BSMT About" />
        <img src={bell} alt="Notifications" abbr title="Notifications" />
        <img src={help} alt="Help" abbr title="Help" />
        <img src={person} alt="Profile" abbr title="Profile" />
        <img src={logout} alt="Logout" abbr title="Logout" />
      </article>
    </nav>
  );
};

export default Nav;
