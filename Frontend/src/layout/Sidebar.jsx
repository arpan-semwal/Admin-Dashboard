import React, { useState } from "react";
import "../styles/Sidebar.css";
import sidebar_menu from "../assets/menu-burger.png";
import dashboard_logo from "../assets/dashboard-monitor.png";
import users_logo from "../assets/circle-user.png"
import orders_logo from "../assets/order-history.png"
import settings_logo from "../assets/function-process.png"
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  
  const menuItems = [
    { title: "Dashboard", icon:dashboard_logo, path: "/" },
    { title: "Users",icon:users_logo, path: "/users" },
    { title: "Orders", icon:orders_logo, path: "/orders" },
    { title: "Settings",icon:settings_logo, path: "/settings" },
  ];
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenAndClose = () => {
    console.log("yes");
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="main-container">
        {isOpen && <img src={dashboard_logo} alt="hello" />}
        <button onClick={handleOpenAndClose}>
          <img src={sidebar_menu} alt="" />
        </button>
      </div>

      <div className="menu-items">
        {menuItems.map((item) => (
          <NavLink to={item.path} className="menu-item" key={item.title}>
           <img src={item.icon} alt={item.title} className="menu-icon" />
            {isOpen && <span>{item.title}</span>}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
