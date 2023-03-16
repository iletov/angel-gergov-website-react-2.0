import React from 'react'
import '../styles/Navbar.css'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavbarComponent() {
	return (
		<div>
		{['xl'].map((expand) => (
			<Navbar fixed='top' key={expand} expand={expand} className="navbar shadow-sm" variant="dark">
          		<Navbar.Brand href="#"><h1>LOGO<span>.</span></h1></Navbar.Brand>
          		
            		
            		<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            		<Navbar.Offcanvas
			              id={`offcanvasNavbar-expand-${expand}`}
			              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
			              placement="end"
			            >
		              <Offcanvas.Header closeButton>
		                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
		                  LOGO
		                </Offcanvas.Title>
		              </Offcanvas.Header>

		              <Offcanvas.Body>
                		<Nav className="justify-content-center flex-grow-1 pe-3 nav">
                  		
		                  <Nav.Link to={'/'} as={NavLink} >Home</Nav.Link>
		                  <Nav.Link to={'/projects'} as={NavLink} >Projects</Nav.Link>
		                  <Nav.Link to={'/about'} as={NavLink} >About</Nav.Link>
		                  
               			 </Nav>
             		 </Offcanvas.Body>
           			</Navbar.Offcanvas>
          		
        	</Navbar>
			))}
		</div>
	)
}

export default NavbarComponent