import React from 'react';

function TarjetaProyecto({titulo,descripcion,botonTexto}){
    const handleClick = () => {
        alert(`Explorando: ${titulo}`);
      };
    return (        
        <div className="card h-100">            
            <div className="card-body d-flex flex-column justify-content-between">
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