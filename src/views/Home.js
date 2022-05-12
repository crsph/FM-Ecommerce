import React from "react";
import CarouselSlider from "../components/CarouselSlider";
import NavBar from "../components/NavBar";
import "./Home.scss";

export default function Home() {
  return (
    <div className="root-container">
      <NavBar />
      <CarouselSlider />
    </div>
  );
}
