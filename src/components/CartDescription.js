import React from "react";
import { useSelector } from "react-redux";
import ProductThumbOne from "../assets/image-product-1-thumbnail.jpg";
import { ReactComponent as Delete } from "../assets/icon-delete.svg";

import "./CartDescription.scss";

export default function () {
  const productAmount = useSelector((state) => state.product.amount);
  const productObject = useSelector((state) => state.product.productObject);
  const parsedProductPrice = parseFloat(productObject.sneakerPrice).toFixed(2);
  let totalPrice = parseFloat(
    productAmount * productObject.sneakerPrice
  ).toFixed(2);

  let cartContent;

  if (Object.entries(productObject).length === 0) {
    cartContent = (
      <p className="cart-description-container__empty">Your cart is empty.</p>
    );
  } else {
    cartContent = (
      <>
        <div className="product-detail-container">
          <img
            className="product-detail-container__thumbnail"
            src={ProductThumbOne}
          />
          <div className="product-detail-container__description">
            <p>{productObject.sneakerName}</p>
            <p>
              ${parsedProductPrice} x {productAmount} <b>${totalPrice}</b>
            </p>
          </div>

          <Delete />
        </div>

        <button className="cart-description-container__checkout-button">
          Checkout
        </button>
      </>
    );
  }

  return (
    <div className="cart-description-container">
      <div className="cart-description-container__label">Cart</div>

      {cartContent}
    </div>
  );
}
