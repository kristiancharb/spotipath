import React, { useState } from 'react';
import AboutModal from './AboutModal';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Col>
          <Row>
            <Navbar.Brand href="">Spotipath</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link onClick={handleShow}>About</Nav.Link>
            </Nav>
          </Row>
        </Col>
      </Container>
      <AboutModal show={show} handleClose={handleClose} />
    </Navbar>
  );
};

export default Navigation;