import React, { useState } from 'react';
import ArtistContainer from './ArtistContainer';
import SearchBar from './SearchBar';
import { Container } from 'react-bootstrap';

const params = new URLSearchParams(window.location.search);

const initialFormData =  {
  'src': params.get('src') && decodeURI(params.get('src')),
  'dest': eparams.get('dest') && decodeURI(params.get('dest')),
  'recommended': params.get('recommended') === 'true' || false,
  'numSongs': params.get('numSongs') || 1,
}

const Content = () => {
  const [formData, setFormData] = useState(initialFormData);

  return (  
    <Container>
      <SearchBar setFormData={setFormData} initialFormData={initialFormData}/>
      <ArtistContainer formData={formData} />
    </Container>
  );
}


export default Content;