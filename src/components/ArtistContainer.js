import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import { getArtistData } from '../lib/spotify';
import { Row, Col, Alert } from 'react-bootstrap';

const ArtistContainer = (props) => {
  const { formData } = props; 
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (formData.src && formData.dest) {
      setIsLoading(true);
      const updateArtists = async () => {
        try {
          const artists = await getArtistData(formData);
          setArtists(artists);
        } catch (error) {
          setError(error.message);
        }
        setIsLoading(false);
      }
      updateArtists();
    }
  }, [formData]);

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
      {isLoading && 
        <Row>
          <Col xs={12} md={10}>
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status" aria-hidden="true"></div>
            </div>
          </Col>
        </Row>
      }
      {!isLoading && artists.map(artist => (
        <Row key={artist.id}>
          <Col xs={12} md={10}>
            <ArtistCard artist={artist}/>
          </Col>
        </Row>
      ))
      }
    </div>
  );
}

export default ArtistContainer;