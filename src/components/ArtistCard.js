import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';

const ArtistCard = ({ artist }) => (
  <Card className="mt-3">
    <Container>
      <Row>
        <Col xs={4}>
          <Card.Img 
            variant="top" 
            src="http://via.placeholder.com/300x180" 
            alt="Card image cap" 
          />
        </Col>
        <Col>
          <Card.Body xs={8}>
            <Card.Title>{artist.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  </Card>
);

export default ArtistCard