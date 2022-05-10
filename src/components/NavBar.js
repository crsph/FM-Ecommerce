import React from "react";
import { ReactComponent as Cart } from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import { ReactComponent as Logo } from "../assets/logo.svg";
import NavBarItems from "./NavBarItems";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <Logo />
        </div>

        <div className="item-container">
          <NavBarItems />
        </div>

        <div className="right-container">
          <Cart />

          <img src={Avatar} alt="Avatar" />
        </div>
      </div>
    </>
  );
}
