import React, { useState } from 'react';
import { Row, Col, Form, Button} from 'react-bootstrap';

const SearchBar = (props) => {
  const [formData, setFormData] = useState({
    'src': null,
    'dest': null,
    'recommended': false,
    'numSongs': 1,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setFormData(formData);
    console.log(formData);
  }
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    });
  }

  const range = [...Array(10).keys()];

  return (
    <div>
      <Row>
        <Col className="w-100 my-4" xs={12} md={10}>
          <h4> 
            Enter two artists on Spotify
          </h4>
          <h5>
            We'll find a path between them through related artists and generate
            a playlist for you with their top songs.
          </h5>
        </Col>
      </Row>
      <Form inline className="w-100" onSubmit={handleSubmit}>
        <Row className="w-100">
          <Col xs={12} md={5}>
            <Form.Group key="srcArtist" controlId="srcArtist">
              <Form.Label className="sr-only">Starting Artist</Form.Label>
              <Form.Control 
                name="src" 
                className="my-2 w-100" 
                placeholder="Starting Artist" 
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={5}>
            <Form.Group key="destArtist" controlId="destArtist">
              <Form.Label className="sr-only">Ending Artist</Form.Label>
              <Form.Control 
                name="dest" 
                className="my-2 w-100" 
                placeholder="Ending Artist" 
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="w-100 pt-2">
          <Col xs={12} md={10}>
            <Form.Group controlId="recommended">
              <Form.Check 
                name="recommended"
                type="checkbox" 
                label="Add recommended songs by artists not necessarily in the path"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="w-100 pt-2">
          <Col xs={12} md={10}>
            <Form.Group controlId="numSongs">
              <Form.Label className="mr-4">Maximum number of songs per artist: </Form.Label>
              <Form.Control 
                name="numSongs" 
                className="px-4" 
                as="select"
                onChange={handleChange}
              >
                {range.map(i => <option key={i}>{i + 1}</option>)}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="w-100 pt-2">
          <Col xs={12} md={6} lg={4}>
            <Button className="my-2 w-100" variant="primary" type="submit">
              Find Path
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchBar;