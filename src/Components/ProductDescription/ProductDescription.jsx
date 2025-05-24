import React, { useState } from "react";
import "./ProductDescription.css";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductDescription = ({ ideal, pattern, fabric }) => {
  const [activeMenu, setActiveMenu] = useState("description");

  const renderContent = () => {
    switch (activeMenu) {
      case "description":
        return <Description ideal={ideal} pattern={pattern} fabric={fabric} />;
      case "details":
        return <Details />;
      case "video":
        return <Video />;
      case "write Review":
        return <WriteReview />;
      default:
        return null;
    }
  };

  const menuItems = ["description", "details", "video", "write Review"];

  return (
    <div className="w-100 mt-1 mt-lg-4">
      <div className="d-flex border-bottom mb-4 justify-content-center justify-content-lg-start menu-items">
        {menuItems.map((item) => (
          <span
            key={item}
            className={`${activeMenu === item ? "menu activee" : "menu"}`}
            onClick={() => setActiveMenu(item)}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="render-content">{renderContent()}</div>
    </div>
  );
};

export default ProductDescription;

export const Description = ({ ideal, pattern, fabric }) => {
  const des = [
    { title: "ideal for", value: ideal },
    { title: "pattern", value: pattern },
    { title: "dress fabric", value: fabric },
    { title: "type", value: "classic" },
    { title: "handle", value: "good length" },
    { title: "work", value: "N/A" },
  ];
  return (
    <Table striped>
      <tbody className="des-table">
        {des.map((ride, index) => (
          <tr key={index}>
            <td className="fw-semibold w-lg-25">{ride.title}:</td>
            <td>{ride.value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const Details = () => {
  return (
    <span className="text-secondary">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </span>
  );
};

export const Video = () => {
  return (
    <video controls className="w-100">
      <source
        src="https://ik.imagekit.io/wy2wtykti/BagsOnCart/bagsoncart.mp4"
        type="video/mp4"
        className="object-fit-cover"
      />
    </video>
  );
};

export const WriteReview = () => {
  return (
    <Form>
      <div className="d-flex column-gap-3 align-items-center mb-2">
        <span>Rating</span>
        <div className="d-flex column-gap-1">
          {[...Array(4)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              size="sm"
              className="text-warning"
            />
          ))}
          <FontAwesomeIcon icon={faStar} size="sm" className="text-secondary" />
        </div>
      </div>
      <Container fluid className="px-0">
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                className="py-2 rounded-0"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlI d="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                className="py-2 rounded-0"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="reviewTitle">
          <Form.Label>Review Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Review Subjects"
            className="py-2 rounded-0"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="reviewTitle">
          <Form.Label>Review Title</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Write Your Testimonial Here"
            className="py-2 rounded-0"
          />
        </Form.Group>
        <button type="submit" className="down-buttons">
          SUBMIT YOUR REVIEW
        </button>
      </Container>
    </Form>
  );
};
