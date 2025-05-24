import React from "react";
import all_product from "../../assets/allproducts";
import { Container, Row, Col } from "react-bootstrap";
import ItemNew from "../ItemNew/ItemNew";

function FeaturedProduct() {
  return (
    <div>
      <Container>
        <Row>
          {all_product.map((item, i) => {
            if (item.category === "featuredproduct") {
              return (
                <Col sm={6} md={4} lg={3} key={i}>
                  <ItemNew
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                </Col>
              );
            } else {
              return null;
            }
          })}
        </Row>
      </Container>
    </div>
  );
}

export default FeaturedProduct;
