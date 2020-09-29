import React, { useState } from 'react';
import { Row, Col, Form, Button} from 'react-bootstrap';

const SearchBar = (props) => {
  const [formData, setFormData] = useState({
    'src': null,
    'dest': null
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setArtistData(formData);
    console.log(formData);
  }
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    });
  }

  return (
    <div>
      <Row>
        <Col className="w-100 my-4" xs={12} md={10}>
          <h5> 
            Enter two artists from (almost) all Spotify artists and we'll find a path
            between them through their related artists.
          </h5>
        </Col>
      </Row>
      <Row>
        <Form inline className="w-100" onSubmit={handleSubmit}>
          <Col xs={12} md={5} lg={4}>
            <Form.Group key="srcArtist" controlId="srcArtist">
              <Form.Label className="sr-only">Starting Artist</Form.Label>
              <Form.Control name="src" className="my-2 w-100" placeholder="Artist Name" onChange={handleChange}/>
            </Form.Group>
          </Col>
          <Col xs={12} md={5} lg={4}>
            <Form.Group key="destArtist" controlId="destArtist">
              <Form.Label className="sr-only">Ending Artist</Form.Label>
              <Form.Control name="dest" className="my-2 w-100" placeholder="Artist Name" onChange={handleChange}/>
            </Form.Group>
          </Col>
          <Col xs={12} md={10} lg={2}>
            <Button className="my-2 w-100" variant="primary" type="submit">
              Find Path
            </Button>
          </Col>
        </Form>
      </Row>
    </div>
  );
}

export default SearchBar;