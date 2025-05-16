
import React from 'react';
import Boton from './Boton'; 

function Tarjeta({ titulo, descripcion, botonTexto, botonColor, onBotonClick }) {
  const tarjetaEstilo = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '15px',
    margin: '10px',
    textAlign: 'center',
  };

  return (
    <div style={tarjetaEstilo}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <Boton texto={botonTexto} color={botonColor} onClick={onBotonClick} />
    </div>
  );
}

export default Tarjeta;