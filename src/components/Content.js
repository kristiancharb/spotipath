import React from 'react';
import ArtistCard from './ArtistCard';
import artists from '../mock-data.json';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';

const Content = () => (
  <Container>
    <SearchBar />
    {artists.map(artist => (
      <Row key={artist.id}>
        <Col xs={12} md={10}>
          <ArtistCard artist={artist}/>
        </Col>
      </Row>
    ))}
  </Container>
);

export default Content;