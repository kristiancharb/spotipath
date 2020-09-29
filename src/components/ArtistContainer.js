import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import { fetchArtists } from '../lib/artists';
import { Row, Col } from 'react-bootstrap';

const ArtistContainer = (props) => {
  const { artistData } = props; 
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (artistData.src && artistData.dest) {
      const updateArtists = async () => {
        const artists = await fetchArtists(artistData.src, artistData.dest);
        setArtists(artists);
      }
      updateArtists();
    }
  }, [artistData.src, artistData.dest]);

  return (
    <div>
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