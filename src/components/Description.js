import React from "react";
import "./Description.scss";

export default function Description() {
  return (
    <div className="description-container">
      <p className="description-container__company-name">SNEAKER COMPANY</p>
      <p className="description-container__sneaker-name">
        Fall Limited Edition Sneakers
      </p>
      <p className="description-container__sneaker-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-container">
        <p className="price-container__sneaker-price">$125.00</p>
        <p className="price-container__sneaker-discount">50%</p>
      </div>
    </div>
  );
}
