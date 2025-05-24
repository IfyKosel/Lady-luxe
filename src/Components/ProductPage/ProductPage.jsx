import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faClock,
  faBullhorn,
  faCreditCard,
  faAngleLeft,
  faAngleRight,
  faHeart,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ProductPage.css";
import { ProductCarousel } from "../MultiCarMap";
import { Link } from "react-router-dom";
import ProductDescription from "../ProductDescription/ProductDescription";

const ProductPage = ({
  product,
  all_product,
  addToCart,
  cartItems,
  removeFromCart,
}) => {
  const [otherProducts, setOtherProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    // Filter out the current product
    const filtered = all_product.filter((p) => p.id !== product.id);

    // Shuffle and pick first 3
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    setOtherProducts(shuffled.slice(0, 3));
  }, [product, all_product]);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center py-5 mt-3 mb-1 px-1 px-sm-0">
        <Container>
          <div className="d-lg-none mb-2">
            <FontAwesomeIcon icon={faFilter} />
            <span onClick={handleOpen} style={{ cursor: "pointer" }}>
              Filter
            </span>
          </div>

          {/* mobile view */}
          <div className={open ? "side-section active" : "side-section"}>
            <div className="pt-2 ps-4 pb-1 border-bottom">
              <div
                className="mobile-back w-25"
                onClick={handleOpen}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faAngleLeft} size="lg" />
                <span className="fs-6 ps-2">BACK</span>
              </div>
            </div>
            <SideSection />
          </div>

          <Row>
            <Col lg={3} className="d-none d-lg-block">
              <SideSection />
            </Col>
            <Col>
              <Row>
                <Col lg={6} className="">
                  <div className="w-auto mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-one"
                    />
                  </div>
                  <Row>
                    {otherProducts.map((item) => (
                      <Col key={item.id}>
                        <Link to={`/product/${item.id}`}>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-three"
                          />
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col lg={6} className="mt-3 mt-lg-0">
                  <div className="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">
                    <div className="border-bottom pb-1 w-100">
                      <h2 className="product-name">{product.name}</h2>
                      <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                        <span className="product-oldprice">
                          ${product.old_price}
                        </span>
                        <p className="product-offpercent">
                          {Math.ceil(
                            ((product.old_price - product.new_price) /
                              product.old_price) *
                              100
                          )}
                          % Off
                        </p>
                      </div>
                      <h4 className="product-newprice">${product.new_price}</h4>
                    </div>
                    <div className="py-3 border-bottom w-100">
                      <p className="instock">Instock</p>
                      <p className="quantity">Quantity</p>
                      <div className="d-flex justify-content-center justify-content-lg-start">
                        <div
                          className="d-flex align-items-center justify-content-evenly border mb-3"
                          style={{ width: "100px" }}
                        >
                          <span
                            onClick={() => removeFromCart(product.id)}
                            style={{ cursor: "pointer" }}
                            //   className="d-sm-block d-none"
                          >
                            <FontAwesomeIcon icon={faAngleLeft} size="xs" />
                          </span>
                          <span className="border-end border-start h-100 px-4 py-1 d-flex align-items-center">
                            {cartItems[product.id]}
                          </span>
                          <span
                            onClick={() => addToCart(product.id)}
                            style={{ cursor: "pointer" }}
                            //   className="d-sm-block d-none"
                          >
                            <FontAwesomeIcon icon={faAngleRight} size="xs" />
                          </span>
                        </div>
                      </div>
                      <div className="d-flex w-100 column-gap-2 mb-2 justify-content-center justify-content-lg-start">
                        <button
                          type="button"
                          className="down-buttons"
                          onClick={() => {
                            addToCart(product.id);
                          }}
                        >
                          ADD TO CART
                        </button>
                        <button type="button" className="down-buttons">
                          BUY NOW
                        </button>
                      </div>
                    </div>
                    <div className="product-details">
                      <p className="fw-semibold mb-1">Product Details</p>
                      <p className="text-secondary m-0">
                        Sed ut perspiciatis, unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam eaque ipsa, quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt, explicabo.
                        Nemo enim ipsam voluptatem.
                      </p>
                    </div>
                    <div className="product-details">
                      <p className="fw-semibold mb-0">Share It</p>
                      <div className="d-flex justify-content-center justify-content-lg-start">
                        <div className="d-flex align-items-center column-gap-2 pe-3 border-end">
                          <FontAwesomeIcon icon={faFacebookF} />
                          <FontAwesomeIcon icon={faGooglePlusG} size="lg" />
                          <FontAwesomeIcon icon={faTwitter} size="lg" />
                          <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </div>
                        <div className="d-flex align-items-center px-2">
                          <FontAwesomeIcon icon={faHeart} size="xl" />
                          <span className="ps-2 fs-5">Add To WishList</span>
                        </div>
                      </div>
                    </div>
                    <div className="py-3">
                      <h6 className="time">Time Reminder</h6>
                      <div className="timer">
                        <p className="d-flex bg-secondary-subtle timer-div px-4 py-2">
                          <span className="timer-num">
                            25
                            <span>:</span>
                            <span className="timer-cal">Days</span>
                          </span>
                          <span className="timer-num">
                            22<span>:</span>
                            <span className="timer-cal">Hrs</span>
                          </span>
                          <span className="timer-num">
                            13<span>:</span>
                            <span className="timer-cal">Min</span>
                          </span>
                          <span className="d-flex flex-column">
                            57<span className="timer-cal">Sec</span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <ProductDescription
                  ideal={product.ideal}
                  pattern={product.pattern}
                  fabric={product.fabric}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProductPage;

export const SideSection = () => {
  return (
    <div>
      <div className="py-1 px-2 px-lg-4 mb-4 side-ship">
        <div className="d-flex border-bottom pt-3 pt-xl-4">
          <FontAwesomeIcon icon={faTruck} className="font-icon" />
          <div className="d-flex flex-column ps-2">
            <h3 className="header">Free Shipping</h3>
            <p className="body">free shipping world wide</p>
          </div>
        </div>
        <div className="d-flex border-bottom pt-3 pt-xl-4">
          <FontAwesomeIcon icon={faClock} className="font-icon" />
          <div className="d-flex flex-column ps-2">
            <h3 className="header">24 X 7 service</h3>
            <p className="body">online service for new customer</p>
          </div>
        </div>
        <div className="d-flex border-bottom pt-3 pt-xl-4">
          <FontAwesomeIcon icon={faBullhorn} className="font-icon" />
          <div className="d-flex flex-column ps-2">
            <h3 className="header">festival offer</h3>
            <p className="body">new online special festival offer</p>
          </div>
        </div>
        <div className="d-flex pt-3 pt-xl-4">
          <FontAwesomeIcon icon={faCreditCard} className="font-icon" />
          <div className="d-flex flex-column ps-2">
            <h3 className="header">online payment</h3>
            <p className="body">contrary to popular belief</p>
          </div>
        </div>
      </div>
      <div className="">
        <ProductCarousel />
      </div>
    </div>
  );
};
