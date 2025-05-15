import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const EquipoTalentoLab = ({ equipo }) => {
  return (
    <div className="my-4 text-center">
      <h2>Nuestro Equipo</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {equipo.map((miembro) => (
          <Col key={miembro.nombre}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src={miembro.imagen} alt={miembro.nombre} style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover', margin: '10px auto', display: 'block' }} />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{miembro.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{miembro.rol}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EquipoTalentoLab;