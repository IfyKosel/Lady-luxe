import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShopContext } from "../ShopContext";
import "./Quickview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Quickview = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);
  if (!product) return null;

  return (
    <>
      <span className="" onClick={() => setShowModal(true)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      {showModal && (
        <div
          className="custom-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="custom-modal-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="custom-modal">
              <div className="close-btn">
                <span onClick={() => setShowModal(false)}>&times;</span>
              </div>
              <Container>
                <Row>
                  <Col md={6}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-modal"
                    />
                  </Col>
                  <Col md={6} className="text-black text-start">
                    <h3 className="text-uppercase">{product.name}</h3>
                    <p className="fs-5">${product.new_price}</p>
                    <div className="border-bottom border-top py-4">
                      <p className="mb-0 fw-semibold">Product Details</p>
                      <p className="text-secondary mb-0">
                        Sed ut perspiciatis, unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam eaque ipsa, quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt, explicabo.
                        Nemo enim ipsam voluptatem,
                      </p>
                    </div>
                    <p className="quantity my-2">Quantity</p>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <div
                        className="d-flex align-items-center justify-content-evenly border mb-3"
                        style={{ width: "100px" }}
                      >
                        <span
                          onClick={() => removeFromCart(product.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <FontAwesomeIcon icon={faAngleLeft} size="xs" />
                        </span>
                        <span className="border-end border-start h-100 px-4 py-1 d-flex align-items-center">
                          {cartItems[product.id]}
                        </span>
                        <span
                          onClick={() => addToCart(product.id)}
                          style={{ cursor: "pointer" }}
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
                      <Link to={`/product/${product.id}`}>
                        <button
                          type="button"
                          onClick={() => setShowModal(false)}
                          className="down-buttons"
                        >
                          VIEW DETAIL
                        </button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quickview;
