import React from 'react';

function EquipoTalentoLab({ integrantes }) {
    return (
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {integrantes.map((miembro, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <img src={miembro.imagen} className="card-img-top" alt={miembro.nombre} />
              <div className="card-body">
                <h5 className="card-title">{miembro.nombre}</h5>
                <p className="card-text">{miembro.rol}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

export default EquipoTalentoLab