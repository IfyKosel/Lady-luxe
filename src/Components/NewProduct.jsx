import React from "react";
import all_product from "../assets/allproducts";
import { Container, Row, Col } from "react-bootstrap";
import ItemNew from "./ItemNew/ItemNew";

function NewProduct() {
  return (
    <div>
      <Container>
        <Row>
          {all_product.map((item) => {
            if (item.category === "newproduct") {
              return (
                <Col sm={6} md={4} lg={3} key={item.id}>
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

export default NewProduct;
