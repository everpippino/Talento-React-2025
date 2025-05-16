import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-3 mt-4 text-center">
      <Container>
        <p>&copy; {new Date().getFullYear()} TalentoLab</p>
      </Container>
    </footer>
  );
};

export default Footer;