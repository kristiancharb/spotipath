import React, { useState } from 'react';
import ArtistContainer from './ArtistContainer';
import SearchBar from './SearchBar';
import { Container } from 'react-bootstrap';

const Content = () => {
  const [formData, setFormData] = useState({ src: null, dest: null });

  return (  
    <Container>
      <SearchBar setFormData={setFormData} />
      <ArtistContainer formData={formData} />
    </Container>
  );
}


export default Content;