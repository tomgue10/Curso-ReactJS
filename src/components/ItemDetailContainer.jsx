import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import data from "../data/products.json";
import { Loading } from "./loading";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      const filter = data.find((p) => p.id === Number(id));
      setProduct(filter);
    });
  }, [id]);

  if (!product) return <Loading />;
  return (
    <Container className="mt-4">
      <h1 className="detailTitle">{product.name}</h1>
      <Row>
        <Col>
          <img className="imgDetail" src={product.img} alt="" />
        </Col>
        <Col>
          <div className="itemDetail">{product.info}</div>
          <Button className="itemPrice" variant="primary">
            ${product.price}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
