// src/components/Navbar.js
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  // Función para cerrar el navbar
  const handleClose = () => setExpanded(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={() => setExpanded(expanded ? false : true)}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Conjunto Residencial Picasso</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/" onClick={handleClose}>
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/news" onClick={handleClose}>
              <Nav.Link>Noticias</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/zones" onClick={handleClose}>
              <Nav.Link>Zonas</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/meeting" onClick={handleClose}>
              <Nav.Link>Reuniones</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
