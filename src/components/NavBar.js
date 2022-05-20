import React, { useState } from "react";
import { ReactComponent as Cart } from "../assets/icon-cart.svg";
import { ReactComponent as Close } from "../assets/icon-close.svg";
import { ReactComponent as Menu } from "../assets/icon-menu.svg";
import Avatar from "../assets/image-avatar.png";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./NavBar.scss";

export default function NavBar() {
  const navBarItems = ["Collections", "Men", "Women", "About", "Contact"];
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <>
      <nav className="navbar-container">
        <Menu className="navbar-container__menu-icon" onClick={toggleMenu} />
        <div
          className={
            isMenuActive
              ? "navbar-container__menu-overlay active"
              : "navbar-container__menu-overlay"
          }
        />

        <Logo className="navbar-container__logo" />

        <div
          className={
            isMenuActive
              ? "navbar-item-container active"
              : "navbar-item-container"
          }
        >
          <div className="close-container">
            <Close
              className="close-container__menu-close"
              onClick={toggleMenu}
            />
          </div>

          {navBarItems.map((item, index) => {
            return (
              <div key={index} className="navbar-item-container__item">
                {item}
              </div>
            );
          })}
        </div>

        <div className="right-container">
          <button className="cart-button">
            <Cart />
            <span className="cart-button__cart-count"></span>
          </button>
          <img src={Avatar} alt="Avatar" />
        </div>
      </nav>
    </>
  );
}
