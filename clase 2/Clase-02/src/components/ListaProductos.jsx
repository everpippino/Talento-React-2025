import React from 'react';

function ListaProductos({ productos }) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ol>
        {productos.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ol>
    </div>
  );
}

export default ListaProductos;