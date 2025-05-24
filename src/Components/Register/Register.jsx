import React from "react";
import PageBreadcrum from "../PageBreadcrum/PageBreadcrum";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Register.css";
import Navbar from "../Navbar/Navbar";

function Register() {
  return (
    <>
      <Navbar />
      <PageBreadcrum page_title="CREATE ACCOUNT" />
      <Container className="register-container">
        <h4 className="mb-3">CREATE ACCOUNT</h4>
        <Form className="login-content">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-4" controlId="formBasicFname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  className="login-input"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4" controlId="formBasicLname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  className="login-input"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="login-input"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="login-input"
                />
              </Form.Group>
            </Col>
            <Col>
              <button type="button" className="login-btn">
                CREATE ACCOUNT
              </button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default Register;
