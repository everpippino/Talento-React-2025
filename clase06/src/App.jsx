import NavBar from './components/NavBar';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
 

  return (
    <div>
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
