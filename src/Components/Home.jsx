import React from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import GridTop from "./GridTop/GridTop";
import GridProduct from "./GridProduct/GridProduct";
import Offer from "./Offer/Offer";
import MultiCarMap from "./MultiCarMap";
import HeroCarousel from "./Slider/Slider";

function Home() {
  return (
    <div className="">
      <HeaderSection />
      <HeroCarousel />
      <GridTop />
      <GridProduct />
      <Offer />
      <MultiCarMap />
    </div>
  );
}

export default Home;
