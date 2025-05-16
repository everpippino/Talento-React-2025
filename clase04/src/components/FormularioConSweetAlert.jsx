import { useState } from "react"
import Swal from "sweetalert2"
function FormularioConSweetAlert(){
    
    const [nombre,setNombre]=useState('')
    const [email,setEmail]=useState('')
    const [mensaje,setMensaje]=useState('')
    //Expresion regular
    const emailEsValido=(email)=>{
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)//retorna true o false
    }
   const handleSubmit=(e)=>{
        e.preventDefault()

        //validar que no haya campos vacios
        if (nombre.trim()==='' || email.trim()==='' || mensaje.trim()===''){
            //sweet alert con el error que sucede
            Swal.fire({
                icon: 'error',
                title: 'campos incompletos',
                text: 'Por favor completar todos los campos'
            })
            //el return frena el formulario y no lo envia, eso solo sucede si entra en la condicion del if
            return
        }

        //Validar el formato del email
        if (!emailEsValido(email)){
            //sweet alert con el error que sucede
            Swal.fire({
                icon: 'error',
                title: 'Email no es valido',
                text: 'Por favor ingresa un email con formato valido'
            })
            return
        }

        //Si esta todo ok y no hay ningun return
        //sweet alert con el error que sucede
        Swal.fire({
            icon: 'succes',
            title: 'Formulario enviado',
            text: `Gracias, ${nombre}. Te responderemos pronto. `
            
        })

        setNombre('')
        setEmail('')
        setMensaje('')
   }
   return (    
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Formulario de contacto</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Mensaje:</label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribí tu mensaje..."
          rows="4"
          style={{ width: '100%', padding: '8px' }}
        ></textarea>
      </div>

      <button type="submit" style={{ padding: '10px 20px' }}>
        Enviar
      </button>
    </form>
  )
}

export default FormularioConSweetAlert