import { Container, Row, Col, Form } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import PageBreadcrum from "../PageBreadcrum/PageBreadcrum";
import "./Checkout.css";
import { useContext } from "react";
import { ShopContext } from "../ShopContext";

const Checkout = () => {
  const { all_product, cartItems, grandCartTotal } = useContext(ShopContext);

  return (
    <div>
      <Navbar />
      <PageBreadcrum page_title="CHECKOUT" />
      <Container className="py-5 my-3">
        <Row>
          <Col lg={6}>
            <Form>
              <h3>Billing Details</h3>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlid="name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" className="py-2 rounded-0" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlid="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" className="py-2 rounded-0" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlid="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" className="py-2 rounded-0" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlid="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" className="py-2 rounded-0" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlid="country">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="United kingdom"
                  className="py-2 rounded-0"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlid="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Street Address"
                  className="py-2 rounded-0"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlid="town">
                <Form.Label>Town/City</Form.Label>
                <Form.Control type="text" className="py-2 rounded-0" />
              </Form.Group>
              <Form.Group className="mb-3" controlid="state">
                <Form.Label>State / County</Form.Label>
                <Form.Control type="text" className="py-2 rounded-0" />
              </Form.Group>
              <Form.Group className="mb-3" controlid="postalcode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="text" className="py-2 rounded-0" />
              </Form.Group>
              <Form.Group className="mb-3" controlid="formBasicCheckbox">
                <Form.Check type="checkbox" label="Create An Account" />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6}>
            <div className="border py-5 px-4 bg-light">
              <h4 className="d-flex justify-content-between pb-3 mb-4 border-bottom">
                Product <span className="widthcheck">Total</span>
              </h4>
              <div className="border-bottom mb-4">
                {all_product.map((item) => {
                  if (cartItems[item.id] > 0) {
                    return (
                      <p
                        key={item.id}
                        className="mb-3 d-flex justify-content-between"
                      >
                        {item.name} x {cartItems[item.id]}
                        <span className="widthcheck">
                          ${cartItems[item.id] * item.new_price}
                        </span>
                      </p>
                    );
                  }
                })}
              </div>
              <p className="mb-4 pb-3 border-bottom d-flex justify-content-between">
                Subtotal
                <span className="widthcheck">${grandCartTotal()}</span>
              </p>
              <div className="mb-4 border-bottom d-flex justify-content-between">
                Shipping
                <span className="widthcheck">
                  <Form>
                    <Form.Group className="mb-3" controlid="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Free Shipping" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlid="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Local Pickup" />
                    </Form.Group>
                  </Form>
                </span>
              </div>
              <p className="mb-4 d-flex justify-content-between">
                Total
                <span className="widthcheck">${grandCartTotal()}</span>
              </p>
              <Form className="mt-2">
                <Form.Group className="mb-3" controlid="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Stripe" />
                </Form.Group>
                <Form.Group className="mb-3" controlid="formBasicCheckbox">
                  <Form.Check type="checkbox" label="PayPal" />
                </Form.Group>
              </Form>
              <div className="d-flex justify-content-end">
                <button type="button" className="down-buttons">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
