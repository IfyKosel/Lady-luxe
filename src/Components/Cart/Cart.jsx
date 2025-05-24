import React, { useContext } from "react";
import PageBreadcrum from "../PageBreadcrum/PageBreadcrum";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
import { Container } from "react-bootstrap";
import CartItems from "./CartItems";
import { ShopContext } from "../ShopContext";

const Cart = () => {
  const { totalCartItems } = useContext(ShopContext);

  return (
    <div>
      <Navbar />
      <PageBreadcrum page_title="CART PAGE" />
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center py-5 mt-3 mb-1">
          {totalCartItems() === 0 ? (
            <div className="empty-div">
              <img
                src="https://react.pixelstrap.com/multikart/assets/images/icon-empty-cart.png"
                alt="empty cart"
              />
              <h3>Your Cart is Empty</h3>
              <p>Explore More Shortlist Some Items.</p>
            </div>
          ) : (
            <CartItems />
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cart;
