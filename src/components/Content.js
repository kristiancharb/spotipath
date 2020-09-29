import React, { useState } from 'react';
import ArtistContainer from './ArtistContainer';
import SearchBar from './SearchBar';
import { Container } from 'react-bootstrap';

const Content = () => {
  const [artistData, setArtistData] = useState({ src: null, dest: null });

  return (  
    <Container>
      <SearchBar setArtistData={setArtistData} />
      <ArtistContainer artistData={artistData} />
    </Container>
  );
}


export default Content;