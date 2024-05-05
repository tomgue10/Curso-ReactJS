import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const add = (quantity) => {
    addItem(product, quantity);
  };

  return (
    <Container className="mt-4">
      <h1 className="detailTitle">{`${product.name}`}</h1>
      <Row>
        <Col>
          <img className="imgDetail" src={product.img} alt="" />
        </Col>
        <Col>
          <div className="itemDetail">{`${product.info}`}</div>
          <Button className="itemPrice" variant="primary">
            {`${product.price}`}
          </Button>
          <div>{`Stock: ${product.stock}`}</div>
          <ItemCount stock={product.stock} onAdd={add} />
        </Col>
      </Row>
    </Container>
  );
};
