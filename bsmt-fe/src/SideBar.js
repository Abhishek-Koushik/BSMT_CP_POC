import React from "react";
import "./Sidebar.css";
import outlookCountdown from "./assets/images/outlook_countdown.png";

const SideBar = () => {
  return (
    <section className="sidebar">
      <h6
        style={{
          fontSize: "16px",
          fontWeight: "normal",
          marginBottom: "0.5rem",
          marginTop: "0",
        }}
      >
        Module
      </h6>
      <h4
        style={{
          fontSize: "22px",
          fontWeight: "normal",
          marginBottom: "0.5rem",
          marginTop: "0",
        }}
      >
        Outlook
      </h4>
      <div>
        <img src={outlookCountdown} alt="Outlook Countdown" />
      </div>
      <article className="sidebarMenu">
        <div className="sidebarMenuItem">
          <i className="fa fa-address-book" />
          <span>Business Outlook</span>
        </div>
        <div className="sidebarMenuItem">
          <i className="fa fa-plus" />
          <span>Outlook Wishlist</span>
        </div>
        <div className="sidebarMenuItem">
          <i className="fa fa-folder" />
          <span>Financials</span>
        </div>
        <div className="sidebarMenuItem">
          <i className="fa fa-gear" />
          <span>Settings</span>
        </div>
      </article>
    </section>
  );
};

export default SideBar;
