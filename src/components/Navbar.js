import React, { useState} from 'react'
import '../styles/Navbar.css'
import { Navbar, Nav, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavbarComponent() {
	const [color, setColor] = useState(false)
	const changeColor = () => {
		if (window.scrollY > 350) {
			setColor(true)
		} else {
			setColor(false)
		}
	}

	window.addEventListener('scroll', changeColor)

	return (
		<div>
		{['xl'].map((expand) => (
			<Navbar 
			 	className={color ? "navbar navbar-scroll shadow-sm"
			 				: 'navbar shadow-sm'}
			 	key={expand} 
			 	variant={color ? "light" : "dark"}
			 	expand={expand}
			 	 
			 	>
          		<Navbar.Brand href="#"><h1>A.Gergov<span>.</span></h1></Navbar.Brand>
          		
            		
            		<Navbar.Toggle className='navToggle' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            		<Navbar.Offcanvas
			              id={`offcanvasNavbar-expand-${expand}`}
			              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
			              placement="end"
			              variant="light"
			            >
		              <Offcanvas.Header closeButton >
		                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
		                  A.Gergov
		                </Offcanvas.Title>
		              </Offcanvas.Header>

		              <Offcanvas.Body >
                		<Nav className="justify-content-center flex-grow-1 pe-3 nav">
                  		
		                  <Nav.Link to={'/'} as={NavLink} >Home</Nav.Link>
		               
		                  <Nav.Link to={'/about'} as={NavLink} >About</Nav.Link>
		                  <Nav.Link to={'/contact'} as={NavLink} >Contact</Nav.Link>
		                  
               			 </Nav>
             		 </Offcanvas.Body>
           			</Navbar.Offcanvas>
        	</Navbar>
			))}
		</div>
	)
}

export default NavbarComponent