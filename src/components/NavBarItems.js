import React from "react";
import "./NavBarItems.scss";

export default function NavBarItems() {
  const navBarItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <>
      <div className="navbar-item-container">
        {navBarItems.map((item, index) => {
          return (
            <div key={index} className="navbar-item-container__item">
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
}
