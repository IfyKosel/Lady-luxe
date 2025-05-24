import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGear,
  faAngleRight,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./HeaderSection.css";
import { Container } from "react-bootstrap";
import SearchModal from "../SearchModal";
import NavLinks from "../NavLinks/NavLinks";
import CartNavbar from "../Cart/CartNavbar";
import { ShopContext } from "../ShopContext";
import Logoname from "../../Images/logoname.png";

export function HeaderSection() {
  const [open, setOpen] = useState(false);
  const { eachCartItem } = useContext(ShopContext);
  const handleOpen = () => setOpen(!open);
  const [isfixed, setIsfixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsfixed(true);
      } else {
        setIsfixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`con ${isfixed ? "fixed" : ""}`}>
      <Container fluid className="second_div">
        <section className="upper-section">
          <FontAwesomeIcon icon={faBars} size="xl" className="upper-items" />
          <img
            src={Logoname}
            alt="lady luxe"
            className="upper-items img-lady"
          />
          <div className="position-relative">
            <div className="menu-list d-xl-none d-block">
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

              <span className="faBasket upper-items">
                <Link to="/cart" className="cart-link">
                  <FontAwesomeIcon icon={faBasketShopping} size="lg" />
                </Link>
                <div className="nav-cart-count">{eachCartItem()}</div>
                <div className="gear-list">
                  <CartNavbar />
                </div>
              </span>
            </div>
          </div>
        </section>
        <hr className="my-0 d-xl-block d-none" />
        <div className="menu-list d-none d-xl-flex justify-content-center">
          <NavLinks />
        </div>
      </Container>
    </section>
  );
}

export default HeaderSection;
