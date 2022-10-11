import { useState } from 'react'

// import './App.css'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
 import { Outlet, Link } from "react-router-dom";
 import diccionario from "./diccionario";
// contexto donde guardaremos la función traduce y el idioma actual
// import TraductorContext from "./TraductorContext";
import Traductor from './components/Traductor';

function App() {

const [idioma, setIdioma] = useState(0);
const traduciendo = (x,i) => diccionario[x][i][idioma];

  return (
<Traductor.Provider value={{traduciendo,idioma}}>
<div className="text-end">
            <Button
              size="sm"
              variant={idioma === 0 ? "primary" : "outline-primary"}
              onClick={() => setIdioma(0)}
            >
              ES
            </Button>{" "}
            <Button
              size="sm"
              variant={idioma === 1 ? "primary" : "outline-primary"}
              onClick={() => setIdioma(1)}
            >
              CA
            </Button>
          </div> 
  <Navbar bg="light" expand="lg" >
        <Container>
          <Link to="/" className="navbar-brand"> </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex-column">
              <Link to="/collserola" className='nav-link'>Collserola</Link>
              <Link to="/el_delta_de_llobregat" className='nav-link'>El Delta de Llobregat</Link>
              <Link to="/llobregat" className='nav-link'>Llobregat</Link>
              <Link to="/montseny" className='nav-link'>Montseny</Link>
              <Link to="/montserrat" className='nav-link'>Montserrat</Link>
              <Link to="/pedraforca" className='nav-link'>Pedraforca</Link>
              <Link to="/santllorenc" className='nav-link'>Santllorenc</Link>
              <Link to="/vallvidrera" className='nav-link'>Vallvidrera</Link>

            </Nav>
          </Navbar.Collapse>
        
        </Container>
      </Navbar>
      <br />
      <Container>
        <Outlet />
      </Container>
    </Traductor.Provider>
  )
}

export default App
