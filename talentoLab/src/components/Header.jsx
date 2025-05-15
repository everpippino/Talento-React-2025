import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="justify-content-center">
      <Container>
        <div className="d-flex w-100 justify-content-center">
          <Navbar.Brand href="#home">TalentoLab</Navbar.Brand>
        </div>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">         
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default Header;