import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import "./PageBreadcrum.css";

const PageBreadcrum = (props) => {
  const { product } = props;

  return (
    <div className="page-crum">
      <Container>
        {product ? (
          <section className="d-flex flex-column flex-md-row align-items-center justify-content-md-between">
            <h4 className="m-0 text-uppercase">{product.name}</h4>
            <Breadcrumb>
              <Breadcrumb.Item href="/" className="home-link">
                HOME / PRODUCT
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="text-uppercase">
                {product.name}
              </Breadcrumb.Item>
            </Breadcrumb>
          </section>
        ) : (
          <section className="d-flex flex-column flex-md-row align-items-center justify-content-md-between">
            <h4 className="m-0 text-uppercase">{props.page_title}</h4>
            <Breadcrumb>
              <Breadcrumb.Item href="/" className="home-link">
                HOME
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="text-uppercase">
                {props.page_title}
              </Breadcrumb.Item>
            </Breadcrumb>
          </section>
        )}
      </Container>
    </div>
  );
};

export default PageBreadcrum;
