import React from 'react';

function Boton({ texto, color, onClick }) {
  const estilo = {
    backgroundColor: color || 'blue', // Color por defecto si no se proporciona
    color: 'white',
    padding: '10px 20px', // Añadí padding horizontal para mejor apariencia
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer', // Indica que es interactivo
  };
  return (
    <button style={estilo} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Boton;