import { useState } from "react";

function Texto(){
    const [pepe,pipo]=useState(false)
    // const [resaltado,setResaltado]=useState(false)
    return(
        <div>
            {/* siempre debo usar una funcion flecha, sino rompe, una funcion comun no la toma */}
<h2 onMouseOver={()=>pipo(true)} 
    onMouseOut={()=>pipo(false)}   
    style={{color:pepe ? 'red' : 'blue', 
            transition:'color 0.7s ease'
            // operador ternario
            }}>
    Prueba de mouse
</h2>

        </div>
    )
}

export default Texto