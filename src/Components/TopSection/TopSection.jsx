import React, { useContext } from "react";
import "./TopSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faShuffle,
  faHeart,
  faUser,
  faAngleDown,
  faGear,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import SearchModal from "../SearchModal";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ShopContext } from "../ShopContext";
import CartNavbar from "../Cart/CartNavbar";

export function TopSection() {
  const { eachCartItem } = useContext(ShopContext);

  return (
    <section>
      <div className="main_div">
        <Container className="first_div">
          <ul className="left-list">
            <li>Welcome to our store BagsonCart</li>
            <li className="px-4">
              <FontAwesomeIcon icon={faPhone} size="xs" className="faPhone" />
              Call us: 012-3456-789
            </li>
          </ul>
          <ul className="right-list">
            <li>
              <FontAwesomeIcon icon={faShuffle} className="fa-right-list" />
              Compare
            </li>
            <li className="px-4">
              <FontAwesomeIcon icon={faHeart} className="fa-right-list" />
              Wishlist
            </li>
            <li className="my-account">
              <FontAwesomeIcon icon={faUser} className="fa-right-list" />
              <span className="px-2">My Account</span>
              <FontAwesomeIcon icon={faAngleDown} size="xs" />
              <ul className="first_div-table">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </li>
          </ul>
        </Container>
      </div>
      <div className="bottom-div">
        <SearchModal />
        <FontAwesomeIcon icon={faHeart} className="fa-right-list" />
        <span className="faBasket upper-items">
          <Link to="/cart" className="cart-link">
            <FontAwesomeIcon icon={faBasketShopping} />
          </Link>
          <div className="nav-cart-count">{eachCartItem()}</div>
          <div className="gear-list bottom-cart">
            <CartNavbar />
          </div>
        </span>
        <span className="my-account">
          <FontAwesomeIcon icon={faUser} className="fa-right-list" />
          <ul className="first_div-table">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </span>
        <span className="faGear upper-items">
          <FontAwesomeIcon icon={faGear} />
          <ul className="gear-list" style={{ width: "fit-content" }}>
            <li>
              <strong>
                <a href="">Language</a>
              </strong>
            </li>
            <li>
              <a href="">English</a>
            </li>
            <li>
              <a href="">French</a>
            </li>
            <li>
              <strong>
                <a href="">Currency</a>
              </strong>
            </li>
            <li>
              <a href="">Euro</a>
            </li>
            <li>
              <a href="">Rupee</a>
            </li>
            <li>
              <a href="">Pound</a>
            </li>
            <li>
              <a href="">Dollar</a>
            </li>
          </ul>
        </span>
      </div>
    </section>
  );
}

export default TopSection;
