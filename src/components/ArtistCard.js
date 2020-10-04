import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';

const ArtistCard = ({ artist }) => (
  <Card className="mt-3">
    <Container>
      <Row>
        <Col xs={4}>
          <Card.Img 
            variant="top"
            className="pt-2 pb-2"
            src={artist.tracks[0].imageUrl} 
            alt="Card image cap" 
          />
        </Col>
        <Col xs={8}>
          <Card.Body>
            <Card.Title>{artist.name}</Card.Title>
            {artist.tracks.map((track) => (
              <Card.Text key={track.id}>
              <strong>{track.name}</strong> - {track.artistName}
            </Card.Text>
            ))}
          </Card.Body>
        </Col>
      </Row>
    </Container>
  </Card>
);

export default ArtistCard