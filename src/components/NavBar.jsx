import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "../components/CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar className="container-fluid" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SOULKING</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Baterias</Nav.Link>
            <Nav.Link href="#features">Platillos</Nav.Link>
            <Nav.Link href="#pricing">Soportes</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
