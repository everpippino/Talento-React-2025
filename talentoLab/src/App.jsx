import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import EquipoTalentoLab from './components/EquipoTalentoLab';
import TarjetaProyecto from './components/TarjetaProyecto';
import GaleriaIntereses from './components/GaleriaIntereses';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

const equipo = [
  { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://picsum.photos/200/300?random=1' },
  { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://picsum.photos/200/300?random=2' },
  { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://picsum.photos/200/300?random=3' },
  { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://picsum.photos/200/300?random=4' },
];

const proyectos = [
  {
    titulo: 'Plataforma de Aprendizaje',
    descripcion: 'Una plataforma innovadora para el aprendizaje en línea.',
    botonTexto: 'Saber más',
  },
  {
    titulo: 'Herramientas de Colaboración',
    descripcion: 'Facilitando el trabajo en equipo con herramientas intuitivas.',
    botonTexto: 'Ver detalles',
  },
];

const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];


  return (
    <div>
      <Header />
      <Container className="my-4">
        <EquipoTalentoLab equipo={equipo} />
        <section className="my-4">
          <div className="my-5 text-center">
            <h2>Nuestros Proyectos</h2>
          </div>
          <div className="d-flex w-100 justify-content-center">
            {proyectos.map((proyecto, index) => (
              <TarjetaProyecto
                key={index}
                titulo={proyecto.titulo}
                descripcion={proyecto.descripcion}
                botonTexto={proyecto.botonTexto}
              />
            ))}
          </div>
        </section>
        <GaleriaIntereses temas={intereses} />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
