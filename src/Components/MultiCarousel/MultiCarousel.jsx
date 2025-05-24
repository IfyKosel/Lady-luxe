import React from "react";
import { Card } from "react-bootstrap";
import "./MultiCarousel.css";

function MultiCarousel(props) {
  return (
    <>
      <Card className="text-center px-3 card">
        <img src={props.image} alt="blog" />
        <Card.Body>
          <Card.Title className="card-title">1 November 2023</Card.Title>
          <Card.Text className="mb-0">
            <Card.Link href="#" className="card-link mb-0">
              LOREM IPSUM DOLOR SIT CONSECTETUR ADIPISCING ELIT
            </Card.Link>
          </Card.Text>
          <hr className="card-hr" />
          <Card.Subtitle className="my-3 text-muted card-subtitle">
            By Jane Doe, 5 comments
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
}

export default MultiCarousel;
