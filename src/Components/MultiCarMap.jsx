import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import MultiCarousel from "./MultiCarousel/MultiCarousel";
import SectionHeader from "./SectionHeader";
import {
  multi_carousel,
  responsive,
  productresponsive,
} from "../assets/multicarousel";
import all_product from "../assets/allproducts";
import "../Components/ProductPage/ProductPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class MultiCarMap extends Component {
  render() {
    return (
      <>
        <SectionHeader colored_text="Recent Story" black_text="FROM THE BLOG" />
        <Container className="p-0">
          <hr className="mt-4" />
          <Carousel
            className="pb-3"
            responsive={responsive}
            infinite={true} //running an infinite loop
            autoPlay={
              this.props.deviceType !== "small" ? true : false
              // if the devicetype is not equal to small screen size as defined in multicarousel.js then auto play will be true(auto play is on) else false(no auto play)
            }
            autoPlaySpeed={4000}
            removeArrowOnDeviceType={[
              "superLargeDesktop",
              "desktop",
              "tablet",
              "mobile",
            ]}
          >
            {multi_carousel.map((item, index) => {
              return (
                <MultiCarousel key={index} id={item.id} image={item.image} />
              );
            })}
          </Carousel>
        </Container>
      </>
    );
  }
}
export default MultiCarMap;

export const ProductCarousel = () => {
  const Right = ({ onClick }) => (
    <span onClick={onClick} className="carousel-nav custom-right">
      <FontAwesomeIcon icon={faAngleRight} size="lg" />
    </span>
  );

  const Left = ({ onClick }) => (
    <span onClick={onClick} className="carousel-nav custom-left">
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
    <div className="position-relative">
      <div className="pb-2 pt-1 border-bottom z-0 position-absolute w-100">
        <h5 className="m-0">BEST SELLER</h5>
      </div>

      <Carousel
        responsive={productresponsive}
        infinite={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {(() => {
          const bestsellerItems = all_product.filter(
            (item) => item.category === "bestseller"
          );

          const groupedItems = bestsellerItems.reduce((acc, item, index) => {
            const groupIndex = Math.floor(index / 3);
            if (!acc[groupIndex]) acc[groupIndex] = [];
            acc[groupIndex].push(item);
            return acc;
          }, []);

          return groupedItems.map((group, rowIndex) => (
            <div key={rowIndex} className="d-flex flex-column pt-2 mt-4 mb-3">
              {group.map((item, index) => (
                <div key={index} className="d-flex mt-4">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-carousel"
                    />
                  </Link>
                  <div className="ps-4 d-flex justify-content-center align-items-center">
                    <div className="">
                      <div className="d-flex column-gap-1">
                        {[...Array(4)].map((_, index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            size="sm"
                            className="text-warning"
                          />
                        ))}
                        <FontAwesomeIcon
                          icon={faStar}
                          size="sm"
                          className="text-secondary"
                        />
                      </div>
                      <Link
                        to={`/product/${item.id}`}
                        className="text-secondary text-decoration-none"
                      >
                        <p>{item.name}</p>
                      </Link>
                      <div className="image-price">
                        <span className="image-bold-text">
                          ${item.new_price}
                        </span>
                        <span className="image-cancel-text">
                          ${item.old_price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ));
        })()}
      </Carousel>
    </div>
  );
};
