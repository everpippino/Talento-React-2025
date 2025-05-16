import React from 'react'
import './App.css'
import ListaUsuarios from './components/listaUsuarios'
import Saludo from './components/saludo'
import Boton from './components/Boton'
import Tarjeta from './components/Tarjeta'
function App() {
  const productos = [
    { nombre: 'Manzanas', descripcion: 'Ricas y jugosas manzanas frescas.', precio: '$200/kg', botonTexto: 'Comprar' },
    { nombre: 'Peras', descripcion: 'Peras dulces y de temporada.', precio: '$180/kg', botonTexto: 'Ver detalles' },
    { nombre: 'Naranjas', descripcion: 'Naranjas llenas de vitamina C.', precio: '$150/kg', botonTexto: 'Añadir al carrito' },
  ];
  const handleButtonClick = (nombreProducto) => {
    alert(`¡Has interactuado con el producto: ${nombreProducto}!`);
  };

  return (
    <div>
      {/* <ListaUsuarios/>
      <Saludo nombre='nicolas'   /> */}
      <h1>Nuestros Productos</h1>
      {productos.map((producto) => (
        <Tarjeta
          key={producto.nombre} // Usamos el nombre como key (asumiendo que son únicos)
          titulo={producto.nombre}
          descripcion={`${producto.descripcion} Precio: ${producto.precio}`}
          botonTexto={producto.botonTexto}
          botonColor="blue"
          onBotonClick={() => handleButtonClick(producto.nombre)}
        />
      ))}
    </div>
    
  )
}

export default App
