import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Container, Row, Col } from "react-bootstrap";
import ItemNew from "./ItemNew/ItemNew";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <>
      <Container>
        <Row>
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Col sm={6} md={4} lg={3}>
                  <ItemNew
                    key={i}
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
    </>
  );
};

export default ShopCategory;
