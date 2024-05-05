import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "../components/CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar className="container-fluid" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/" as={NavLink}>
            SOULKING
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/drums" as={NavLink}>
              Drums
            </Nav.Link>
            <Nav.Link to="/category/cymbals" as={NavLink}>
              Cymbals
            </Nav.Link>
            <Nav.Link to="/category/hardware" as={NavLink}>
              Hardware
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
