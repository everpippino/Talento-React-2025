
import EquipoTalentoLab from './components/EquipoTalentoLab';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
 

  const equipo = [
    { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://picsum.photos/200/300?random=1' },
    { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://picsum.photos/200/300?random=2' },
    { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://picsum.photos/200/300?random=3' },
    { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://picsum.photos/200/300?random=4' },
    { nombre: 'Pepe', rol: 'Desarrolladora', imagen: 'https://picsum.photos/200/300?random=5' },
    { nombre: 'Toto', rol: 'Desarrolladora', imagen: 'https://picsum.photos/200/300?random=6' },
    { nombre: 'Fula', rol: 'Desarrolladora', imagen: 'https://picsum.photos/200/300?random=7' },
    { nombre: 'Mario', rol: 'Desarrolladora', imagen: 'https://picsum.photos/200/300?random=8' },
    { nombre: 'Diego', rol: 'Desarrolladora', imagen: 'https://picsum.photos/200/300?random=9' },
    { nombre: 'Elena', rol: 'Desarrolladora', imagen: 'https://picsum.photos/200/300?random=10' },
  ];

  return (
    <div className="container mt-4">
      <h2>Nuestro Equipo</h2>
      <EquipoTalentoLab integrantes={equipo} />
    </div>
  );
}

export default App
