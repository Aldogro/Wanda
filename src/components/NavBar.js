import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import nutriLogo from '../images/logoapaisado.png';

const NavBar = () => {

  return(

    <div className="">
					<Navbar bg="light" expand="lg" className="menu">
            <Navbar.Brand href="#home"><img src={nutriLogo} alt="logoApaisado" width="240px"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto menuItem">
                <Nav.Link className="menuItem" href="#quienSoy">Quién Soy</Nav.Link>
                <Nav.Link className="menuItem" href="#contacto">Contacto</Nav.Link>
                <Nav.Link className="menuItem" href="#recetas">Recetas</Nav.Link>
                <NavDropdown title="Planes" id="basic-nav-dropdown"  >
                  <NavDropdown.Item className="menuItem" href="#recetarios">Recetarios</NavDropdown.Item>
                  <NavDropdown.Item className="menuItem" href="#packSaludable">Pack Saludable</NavDropdown.Item>
                  <NavDropdown.Item className="menuItem" href="#planPersonalizado">Plan de Alimentación Personalizado</NavDropdown.Item>
                  <NavDropdown.Item className="menuItem" href="#planGeneralizado">Plan de Alimentación Generalizado</NavDropdown.Item>
                  <NavDropdown.Item className="menuItem" href="#tratamientoOnline">Tratamiento Online</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>
    </div>
  )
}

export default NavBar;