import React from "react";
import "./CarouselSlider.scss";
import ProductImageOne from "../assets/image-product-1.jpg";
import ProductImageTwo from "../assets/image-product-2.jpg";
import ProductImageThree from "../assets/image-product-3.jpg";
import ProductImageFour from "../assets/image-product-4.jpg";
import ProductThumbOne from "../assets/image-product-1-thumbnail.jpg";
import ProductThumbTwo from "../assets/image-product-2-thumbnail.jpg";
import ProductThumbThree from "../assets/image-product-3-thumbnail.jpg";
import ProductThumbFour from "../assets/image-product-4-thumbnail.jpg";

export default function CarouselSlider() {
  const productImages = [
    {
      image: ProductImageOne,
      thumbnail: ProductThumbOne,
    },
    {
      image: ProductImageTwo,
      thumbnail: ProductThumbTwo,
    },
    {
      image: ProductImageThree,
      thumbnail: ProductThumbThree,
    },
    {
      image: ProductImageFour,
      thumbnail: ProductThumbFour,
    },
  ];

  const showImage = () => {
    console.log("Hello World!");
  };

  return (
    <div className="slide-container">
      {productImages.map((item, index) => {
        return (
          <>
            <input
              defaultChecked={index === 0}
              id={index}
              name="product"
              type="radio"
            />
            <label for={index}>
              <img src={item.thumbnail} alt="" width="100" />
            </label>
            <img
              className="slide-container__image"
              src={item.image}
              alt=""
              onClick={showImage}
            />
          </>
        );
      })}
    </div>
  );
}
