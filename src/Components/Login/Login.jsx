import React from "react";
import PageBreadcrum from "../PageBreadcrum/PageBreadcrum";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import Navbar from "../Navbar/Navbar";

function Login() {
  return (
    <section>
      <Navbar />
      <PageBreadcrum page_title="LOGIN" />
      <Container className="px-0">
        <Row className="login-row">
          <Col md={6} className="">
            <h4 className="mb-3">LOGIN</h4>
            <Form className="login-content">
              <Form.Group className="mb-4 email-box" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="login-input"
                />
              </Form.Group>
              <Form.Group
                className="mb-4 password-box"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  className="login-input"
                />
              </Form.Group>
              <button type="submit" className="login-btn">
                LOGIN
              </button>
            </Form>
          </Col>
          <Col md={6} className="">
            <h4 className="mb-3">NEW CUSTOMER</h4>
            <div className="create-box">
              <h5>CREATE AN ACCOUNT</h5>
              <p>
                Sign up for a free account at our store. Registration is quick
                and easy. It allows you to be able to order from our shop. To
                start shopping click register.
              </p>
              <Link to="/register">
                <button type="button" className="login-btn">
                  CREATE AN ACCOUNT
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
