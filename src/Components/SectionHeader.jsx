import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SectionHeader = (props) => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <p className="mb-0 grid-product-p">{props.colored_text}</p>
                    <h2 className="grid-product-h2">{props.black_text}</h2>
                    <hr className="grid-product-hr" />
                </Col>
            </Row>
        </Container>
    );
};

export default SectionHeader;
