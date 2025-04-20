import { useState } from 'react'
import './App.css'
import ListaUsuarios from './components/listaUsuarios'
import Saludo from './components/saludo'

function App() {
  const [count, setCount] = useState(0)

  return (
    //<ListaUsuarios/>
    <Saludo nombre='nicolas'   />
  )
}

export default App
