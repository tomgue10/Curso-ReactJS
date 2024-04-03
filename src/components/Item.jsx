import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ product }) => (
  <Card style={{ width: "18rem", margin: "0.5rem" }}>
    <Card.Img className="cardImg" variant="top" src={product.img} />
    <Card.Body>
      <Card.Title className="cardTitle">{product.name}</Card.Title>
      <Card.Text className="cardPrice">${product.price}</Card.Text>
      <Link to={`/item/${product.id}`}>
        <Button variant="primary">Más info</Button>
      </Link>
    </Card.Body>
  </Card>
);
