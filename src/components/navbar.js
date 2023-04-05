import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.css';

function NavigationBar() {
  return (
    <div className='offcanvasNav'>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container>
            <Navbar.Brand href="/"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Car Rental
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#sectionOurServices">Our Services</Nav.Link>
                  <Nav.Link href="#sectionWhyUs">Why Us</Nav.Link>
                  <Nav.Link href="#sectionTestimonial">Testimonial</Nav.Link>
                  <Nav.Link href="#sectionFAQ">FAQ</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavigationBar;
