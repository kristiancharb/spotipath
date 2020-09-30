import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import { fetchArtists } from '../lib/artists';
import { Row, Col, Alert } from 'react-bootstrap';

const ArtistContainer = (props) => {
  const { artistData } = props; 
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (artistData.src && artistData.dest) {
      const updateArtists = async () => {
        try {
          const artists = await fetchArtists(artistData.src, artistData.dest);
          setArtists(artists);
        } catch (error) {
          setError(error.message);
        }
      }
      updateArtists();
    }
  }, [artistData.src, artistData.dest]);

  return (
    <div>
      {error && 
        <Row>
          <Col xs={12} md={10}>
            <Alert variant="danger" onClose={() => setError(null)} dismissible>
              <Alert.Heading>Uh oh!</Alert.Heading>
              <p>{error}</p>
            </Alert>
          </Col>
        </Row>
      }

      {artists.map(artist => (
        <Row key={artist.id}>
          <Col xs={12} md={10}>
            <ArtistCard artist={artist}/>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default ArtistContainer;