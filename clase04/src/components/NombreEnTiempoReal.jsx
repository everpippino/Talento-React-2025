import { useState } from "react"

function NombreEnTiempoReal() {
    const [nombre,setNombre]=useState('')
    const manejarCambio=(e)=>{
        setNombre(e.target.value)
    }
   return(
    <div>
        <h2>Escribi tu nombre:</h2>
        <input type="text" placeholder="Nombre..." value={nombre} onChange={manejarCambio}/>
        <p>Hola, {nombre ? nombre:'Desconocido'}</p>
    </div>
   ) 
}

export default NombreEnTiempoReal