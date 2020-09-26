import React from 'react';
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap';

const Navigation = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Col>
        <Row>
          <Navbar.Brand href="#home">Spotipath</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Row>
      </Col>
    </Container>
  </Navbar>
);

export default Navigation;