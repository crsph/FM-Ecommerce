import React from "react";
import CarouselSlider from "../components/CarouselSlider";
import NavBar from "../components/NavBar";
import Description from "../components/Description";
import "./Home.scss";

export default function Home() {
  return (
    <div className="root-container">
      <NavBar />
      <div className="grid-column-container">
        <CarouselSlider />
        <Description />
      </div>
    </div>
  );
}
