import React from 'react';

function TarjetaProyecto({titulo,descripcion,botonTexto}){
    const handleClick = () => {
        alert(`Explorando: ${titulo}`);
      };
    return (
        <div className="card h-100">//Añadí h-100 al div con la clase card para que todas las tarjetas en la misma fila tengan la misma altura
            <div className="card-body d-flex flex-column justify-content-between">//Dentro de card-body, utilicé d-flex flex-column justify-content-between para alinear el contenido verticalmente, distribuyendo el espacio entre el título, la descripción y el botón.
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <button className="btn btn-primary" onClick={handleClick}>
                {botonTexto}
                </button>
            </div>
        </div>
    )
}

export default TarjetaProyecto;