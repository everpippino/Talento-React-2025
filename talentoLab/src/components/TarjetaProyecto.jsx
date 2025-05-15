import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TarjetaProyecto = ({ titulo, descripcion, botonTexto }) => {
  const handleClick = () => {
    console.log(`Explorando: ${titulo}`);
  };

  return (
    <Card className="shadow-sm" style={{ width: '18rem', margin: '10px' }}>
      <Card.Body className="d-flex flex-column">
        <div>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        </div>
        <div className="mt-auto">
          <Button variant="primary" onClick={handleClick} className='my-4'>{botonTexto}</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TarjetaProyecto;