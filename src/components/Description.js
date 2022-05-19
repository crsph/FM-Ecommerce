import React, { useState } from "react";
import "./Description.scss";
import { ReactComponent as MinusIcon } from "../assets/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../assets/icon-plus.svg";
import { ReactComponent as CartIcon } from "../assets/icon-cart.svg";

export default function Description() {
  const [productAmount, setProductAmount] = useState(0);

  const addProduct = () => {
    setProductAmount(productAmount + 1);
  };

  const removeProduct = () => {
    if (productAmount > 0) {
      setProductAmount(productAmount - 1);
    }
  };

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
      <p className="description-container__previous-price">$250.00</p>

      <div className="add-to-cart-container">
        <div className="product-counter-container">
          <button
            onClick={removeProduct}
            className="product-counter-container__minus-button"
          >
            <MinusIcon />
          </button>
          <p className="product-counter-container__product-amount">
            {productAmount}
          </p>
          <button
            onClick={addProduct}
            className="product-counter-container__plus-button"
          >
            <PlusIcon />
          </button>
        </div>
        <button className="add-to-cart-container__add-button">
          <CartIcon /> <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
}
