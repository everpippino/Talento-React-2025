import 'bootstrap/dist/css/bootstrap.min.css';
import EquipoTalentoLab from './components/EquipoTalentoLab';
import GaleriaIntereses from './components/GaleriaIntereses';
import TarjetaProyecto from './components/TarjetaProyecto';
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

const proyectos = [
  {
    titulo: 'Plataforma de Gestión',
    descripcion: 'Una herramienta para optimizar la gestión de equipos y proyectos, facilitando la colaboración y el seguimiento de tareas.',
    botonTexto: 'Explorar proyecto',
  },
  {
    titulo: 'Sitio Web Personal',
    descripcion: 'Un portafolio en línea para mostrar mis habilidades, proyectos y experiencia profesional.',
    botonTexto: 'Ver más detalles',
  },
  {
    titulo: 'Aplicación Móvil de Recetas',
    descripcion: 'Una app para descubrir, guardar y compartir tus recetas favoritas.',
    botonTexto: 'Descargar la app',
  },
];

  const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

  return (
    <div className="container mt-5">
        <header className="mb-4 text-center">
          <h1>Mi Portafolio</h1>
          <p className="lead">Descubre mi equipo, proyectos e intereses.</p>
        </header>

        <section className="mb-5">
          <h2>Nuestro Equipo</h2>
          <EquipoTalentoLab integrantes={equipo} />
        </section> 

   { <section className="mb-5">
      /*<h2>Proyectos Destacados</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="col">
            <TarjetaProyecto
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              botonTexto={proyecto.botonTexto}
            />
          </div>
        ))}
      </div>
    </section>}

    <section className="mb-5">
      <h2>Mis Intereses</h2>
      <GaleriaIntereses temas={intereses} />
    </section>

 {    <footer className="text-center mt-5">
     <p>&copy; {new Date().getFullYear()} Mi Portafolio</p>
    </footer> }
 </div>
  )
}

export default App
