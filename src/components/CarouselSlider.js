import React, { useState } from "react";
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
  const [isPreviewActive, setPreviewActive] = useState(false);
  const productImages = [
    {
      id: "imageone",
      image: ProductImageOne,
      thumbnail: ProductThumbOne,
    },
    {
      id: "imagetwo",
      image: ProductImageTwo,
      thumbnail: ProductThumbTwo,
    },
    {
      id: "imagethree",
      image: ProductImageThree,
      thumbnail: ProductThumbThree,
    },
    {
      id: "imagefour",
      image: ProductImageFour,
      thumbnail: ProductThumbFour,
    },
  ];

  const previewImage = () => {
    setPreviewActive(!isPreviewActive);
  };

  return (
    <>
      <div className="slide-container">
        {productImages.map((item) => {
          return (
            <>
              <input
                defaultChecked={item.id === "imageone"}
                id={item.id}
                name="product"
                type="radio"
              />
              <label for={item.id}>
                <img src={item.thumbnail} alt="" />
              </label>
              <img
                className="slide-container__image"
                src={item.image}
                alt=""
                onClick={previewImage}
              />
            </>
          );
        })}
      </div>

      <div
        className={
          isPreviewActive ? "overlay-preview active" : "overlay-preview"
        }
        onClick={previewImage}
      />

      <div
        className={
          isPreviewActive
            ? "preview-slide-container active"
            : "preview-slide-container"
        }
      >
        {productImages.map((item, index) => {
          return (
            <>
              <input
                defaultChecked={index === 0}
                id={index}
                name="preview-product"
                type="radio"
              />
              <label for={index}>
                <img src={item.thumbnail} alt="" width="100" />
              </label>
              <img
                className="preview-slide-container__image"
                src={item.image}
                alt=""
              />
            </>
          );
        })}
      </div>
    </>
  );
}
