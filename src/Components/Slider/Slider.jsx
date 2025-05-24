import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import carousel1 from "../../Images/carousel12.jpg";
import carousel2 from "../../Images/carousel14.jpg";
import "./Slider.css";
import { productresponsive } from "../../assets/multicarousel";

const HeroCarousel = () => {
  const Right = ({ onClick }) => (
    <span onClick={onClick} className="hero-carousel-nav hero-custom-right">
      <FontAwesomeIcon icon={faAngleRight} size="lg" />
    </span>
  );

  const Left = ({ onClick }) => (
    <span onClick={onClick} className="hero-carousel-nav hero-custom-left">
      <FontAwesomeIcon icon={faAngleLeft} size="lg" />
    </span>
  );

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return <Right onClick={onClick} />;
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return <Left onClick={onClick} />;
  };

  return (
    <div className="hero">
      <Carousel
        responsive={productresponsive}
        infinite={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        <section className="">
          <div className="d-flex justify-content-end">
            <img src={carousel1} alt="" className="carousel-img" />
          </div>
          <div className="carousel-text">
            <p>Awesome Bags</p>
            <h1>DIAMOND BAG </h1>
            <button className="carousel-btn">SHOP NOW</button>
          </div>
        </section>
        <section>
          <div className="d-flex justify-content-end">
            <img src={carousel2} alt="" className="carousel-img" />
          </div>
          <div className="carousel-text">
            <p>Awesome Bags</p>
            <h1>SINGLE SET</h1>
            <button className="carousel-btn">SHOP NOW</button>
          </div>
        </section>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
