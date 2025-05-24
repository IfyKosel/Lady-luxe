import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGear,
  faAngleRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import NavLinks from "../NavLinks/NavLinks";
import { Link } from "react-router-dom";
import SearchModal from "../SearchModal";
import "./Navbar.css";
import { ShopContext } from "../ShopContext";
import CartNavbar from "../Cart/CartNavbar";
import Logoname from "../../Images/logoname.png";

function Navbar() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [isfixed, setIsfixed] = useState(false);
  const { eachCartItem } = useContext(ShopContext);
  const handleShow = () => setShow(!show);
  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsfixed(true);
      } else {
        setIsfixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isfixed ? "con fixed" : "con"}>
      <Container>
        <nav className="main-nav">
          <div className="menu-left">
            <div className="toggle-bar" onClick={handleShow}>
              <FontAwesomeIcon icon={faBars} size="xl" className="pe-4" />
            </div>
            <h1 className="mb-0">
              <Link to="/">
                <img src={Logoname} alt="lady luxe" className="img-logo" />
              </Link>
            </h1>
          </div>
          <div className="position-relative d-flex align-items-center">
            <div className="menu-list">
              <div className="toggle-nav" onClick={handleOpen}>
                <FontAwesomeIcon icon={faBars} size="xl" className="" />
              </div>
              <ul className={open ? "nav-menu active" : "nav-menu"}>
                <li className="back-btn pt-4">
                  <div className="mobile-back" onClick={handleOpen}>
                    <span className="fs-5 pe-1">BACK</span>
                    <FontAwesomeIcon icon={faAngleRight} size="xs" />
                  </div>
                </li>
                <hr className="nav-hr" />
                <NavLinks />
              </ul>
            </div>
            <div className="icons">
              <SearchModal />
              <span className="faGear upper-items">
                <FontAwesomeIcon icon={faGear} size="lg" className="px-4" />
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
              <span className="faBasket">
                <Link to="/cart" className="cart-link">
                  <FontAwesomeIcon icon={faCartShopping} size="lg" />
                </Link>
                <div className="nav-cart-count">{eachCartItem()}</div>
                <div className="gear-list">
                  <CartNavbar />
                </div>
              </span>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
