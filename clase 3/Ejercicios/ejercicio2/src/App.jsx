import 'bootstrap/dist/css/bootstrap.min.css';
import TarjetaProyecto from './components/TarjetaProyecto';
import './App.css'

function App() {
  const titulo="Plataforma de Gestión";
  const descripcion="Una herramienta para optimizar la gestión de equipos";
  const botonTexto="Explorar proyecto";

  return (
    <TarjetaProyecto titulo={titulo} descripcion={descripcion} botonTexto={botonTexto}/>
  )
}

export default App
