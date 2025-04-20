import 'bootstrap/dist/css/bootstrap.min.css';
import GaleriaIntereses from './components/GaleriaIntereses';
import './App.css'

function App() {
  const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

  return (
    <div className="container mt-4">
      <h2>Mis Intereses</h2>
      <GaleriaIntereses temas={intereses} />
    </div>
  )
}

export default App
