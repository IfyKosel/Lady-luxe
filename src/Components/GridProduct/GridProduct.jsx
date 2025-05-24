import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import "./GridProduct.css";

function GridProduct() {
  const [product, setProduct] = useState("newproduct");

  const categoryLinks = [
    {
      link: "/",
      product: "newproduct",
      productName: "NEW PRODUCTS",
    },
    {
      link: "/featuredproducts",
      product: "featuredproducts",
      productName: "FEATURED PRODUCTS",
    },
    {
      link: "/bestsellers",
      product: "bestsellers",
      productName: "BEST SELLERS",
    },
  ];
  return (
    <>
      <SectionHeader
        colored_text="Exclusive Products"
        black_text="SPECIAL PRODUCTS"
      />
      <Container fluid>
        <Row>
          <Col>
            <ul className="d-flex flex-wrap justify-content-center my-3 p-0">
              {categoryLinks.map((item, index) => (
                <li key={index} className="product-lists">
                  <Link
                    to={item.link}
                    onClick={() => {
                      //from the useState to change the color of the product links when active
                      setProduct(item.product);
                    }}
                    className={
                      product === item.product //an if statement with the useState: if product equals "new product"
                        ? "product-links product-active" // then apply these classes
                        : "product-links" // else apply only this class
                    }
                  >
                    {item.productName}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/*the Outlet is a react-router-dom component which is standing in for the display of each category when clicked. Comment it and see what happens */}
      </Container>
      <div className="mb-4">
        <Outlet />
      </div>
    </>
  );
}

export default GridProduct;
