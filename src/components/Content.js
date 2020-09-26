import React from 'react';
import ArtistCard from './ArtistCard';
import artists from '../mock-data.json';
import { Container, Row, Col} from 'react-bootstrap';

const Content = () => (
  <Container>
    {artists.map(artist => (
      <Row>
        <Col xs={12}>
          <ArtistCard artist={artist}/>
        </Col>
      </Row>
    ))}
  </Container>
);

export default Content;