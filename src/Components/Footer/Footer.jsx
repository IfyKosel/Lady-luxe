import React from "react";
import InfoFooter from "../InfoFooter/InfoFooter";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import foot1 from "../../Images/visa.png";
import foot2 from "../../Images/mastercard.png";
import foot3 from "../../Images/paypal.png";
import foot4 from "../../Images/american-express.png";
import foot5 from "../../Images/discover.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-color">
          <div className="footer-inner">
            <Container>
              <Row className="sub-row">
                <Col lg={6} className="sub-know px-3 p-sm-0">
                  <h5>KNOW IT ALL FIRST</h5>
                  <p>
                    Never Miss Anything From Multikart By Signing Up To Our
                    Newsletter.
                  </p>
                </Col>
                <Col lg={6} className="sub-buttons text-center text-lg-end p-0">
                  <input type="text" placeholder="Enter your email" />
                  <button type="submit">SUBSCRIBE</button>
                </Col>
              </Row>
            </Container>

            <InfoFooter />
          </div>
        </div>
        <div className="">
          <Container className="py-3">
            <Row className="sub-footer">
              <Col
                lg={6}
                className="foot-copy text-lg-start text-center p-lg-0 pb-sm-2"
              >
                &copy; 2018-19 themeforest powered by pixelstrap
              </Col>
              <Col lg={6} className="text-lg-end text-center foot-image p-0">
                <img src={foot1} alt="visa icon" />
                <img src={foot2} alt="mastercard icon" />
                <img src={foot3} alt="paypal icon" />
                <img src={foot4} alt="american express icon" />
                <img src={foot5} alt="discover icon" />
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default Footer;
