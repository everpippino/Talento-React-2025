import { useEffect, useState } from 'react'
import { Card, Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // mi coleccion de personajes
  const [personajes, setPersonajes] = useState([])
  //puede haber una demora en la carga
  const [loading, setLoading] = useState(true)
  
  //Es el hook encargado de hacer la peticion asincronica
  useEffect(()=>{
    // hacer el pedido de la api
    fetch('https://dragonball-api.com/api/characters')
    .then(res=>res.json())
    .then(data=>{
      setPersonajes(data.items)
      setLoading(false)
    })
    .catch(err=>{
      console.error("Error de carga de API",err)
      setLoading(false)
    })
    //el useEffect es un array de objetos, por eso los []
  },[])
  
  return (    
    //muestro las cards
    <Container className='mt=4'>
      <h1>Personajes de DBZ</h1>
      <Row>
        {personajes.map((char=>(
          <Col key={char.id} md={4}>
            <Card className='m-2'>
              <Card.Img src={char.image}/>
              <Card.Body>
                <Card.Title>{char.name}</Card.Title>
                <Card.Text>
                  <strong>Raza: {char.race || 'N/A'}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )))}
      </Row>
    </Container>
  )

}

export default App;
