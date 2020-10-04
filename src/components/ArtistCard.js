import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';

const ArtistCard = ({ artist }) => (
  <Card as={Container} className="mt-3">
    <Row>
      <Col xs={12}>
        <h3 className="text-dark text-center text-md-left my-2">{artist.name}</h3>
      </Col>
        <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 0}}>
          <Card.Img
            variant="top"
            className="m-auto pt-2 pb-2"
            src={artist.tracks[0].imageUrl} 
            alt="Card image cap" 
          />
        </Col>
        <Col xs={12} md={8}>
          <Card.Body>
              {artist.tracks.map((track) => (
                <Card.Text className="text-dark" key={track.id}>
                  <strong>{track.name}</strong> - {track.artistName}
                </Card.Text>
              ))}
          </Card.Body>
        </Col>
    </Row>
  </Card>
);

export default ArtistCard