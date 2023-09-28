import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarSection() {
  return (
    <Navbar bg="danger" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Movie List</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;
