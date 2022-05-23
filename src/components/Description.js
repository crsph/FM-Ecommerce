import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as CartIcon } from "../assets/icon-cart.svg";
import { ReactComponent as MinusIcon } from "../assets/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../assets/icon-plus.svg";
import { addProductToCart } from "../features/product/productSlice";
import "./Description.scss";

export default function Description() {
  const dispatch = useDispatch();
  const [productAmount, setProductAmount] = useState(0);
  const productObject = {
    companyName: "SNEAKER COMPANY",
    sneakerName: "Fall Limited Edition Sneakers",
    sneakerDescription:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    sneakerPrice: "$125.00",
    sneakerDiscount: "50%",
    sneakerPreviousPrice: "$250.00",
  };

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
      <p className="description-container__company-name">
        {productObject.companyName}
      </p>
      <p className="description-container__sneaker-name">
        {productObject.sneakerName}
      </p>
      <p className="description-container__sneaker-description">
        {productObject.sneakerDescription}
      </p>
      <div className="price-container">
        <p className="price-container__sneaker-price">
          {productObject.sneakerPrice}
        </p>
        <p className="price-container__sneaker-discount">
          {productObject.sneakerDiscount}
        </p>
      </div>
      <p className="description-container__previous-price">
        {productObject.sneakerPreviousPrice}
      </p>

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
        <button
          onClick={() =>
            dispatch(
              addProductToCart(
                productObject.sneakerName,
                productObject.sneakerPrice,
                productAmount
              )
            )
          }
          className="add-to-cart-container__add-button"
        >
          <CartIcon /> <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
}
