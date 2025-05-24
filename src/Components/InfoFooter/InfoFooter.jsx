import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faWifi,
  faLocationDot,
  faPhone,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./InfoFooter.css";
import Logoname from "../../Images/logoname.png";

function InfoFooter() {
  return (
    <>
      <Container className="py-4">
        <Row className="row-gap-4">
          <Col lg={4} md={6} className="px-3 p-sm-0">
            <img
              src={Logoname}
              alt="lady luxe"
              style={{ width: "200px", height: "55px" }}
            />
            <p className="info-about pe-md-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <div className="py-md-3 d-flex align-items-center column-gap-5">
              <FontAwesomeIcon icon={faFacebookF} className="info-icon" />
              <FontAwesomeIcon
                icon={faGooglePlusG}
                size="lg"
                className="info-icon"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                className="info-icon"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="info-icon"
              />
              <FontAwesomeIcon icon={faWifi} className="info-icon" />
            </div>
          </Col>
          <Col lg={2} xs={6} className="offset-xl-1">
            <div className="info-account">
              <h6>MY ACCOUNT</h6>
              <ul>
                <li className="acc-list pt-2">
                  <span className="acc-span">Womens</span>
                </li>
                <li className="acc-list pt-2">
                  <span className="acc-span">Clothing</span>
                </li>
                <li className="acc-list pt-2">
                  <span className="acc-span">Accessories</span>
                </li>
                <li className="acc-list pt-2">
                  <span className="acc-span">Featured</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={2} lg={3} xs={6}>
            <div className="info-account">
              <h6>WHY WE CHOOSE</h6>
              <ul>
                <li className="acc-list pt-2">
                  <span className="acc-span">Shipping & Return</span>
                </li>
                <li className="acc-list pt-2">
                  <span className="acc-span">Secure shopping</span>
                </li>
                <li className="acc-list pt-2">
                  <span className="acc-span">Gallery</span>
                </li>
                <li className="acc-list pt-2">
                  <span className="acc-span">Affliates</span>
                </li>
                <li className="acc-list pt-2">
                  <span className="acc-span">Contact</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="info-account">
              <h6>STORE INFORMATION</h6>
              <ul>
                <li className="acc-list pt-2 d-flex">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="xs"
                    className="pe-3 pt-1"
                  />
                  <span className="contact-span">
                    Multikart Demo Store, Demo Store India 345-659
                  </span>
                </li>
                <li className="acc-list pt-2 d-flex">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="xs"
                    className="pe-3 pt-2"
                  />
                  <span className="contact-span">012-3456-789</span>
                </li>
                <li className="acc-list pt-2 d-flex">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="sm"
                    className="pe-3 pt-1"
                  />
                  <span className="contact-span">
                    Email Us: info@bagsoncart.xyz
                  </span>
                </li>
                <li className="acc-list pt-2 d-flex">
                  <FontAwesomeIcon
                    icon={faFax}
                    size="sm"
                    className="pe-3 pt-1"
                  />
                  <span className="contact-span">Fax: 123456</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default InfoFooter;
