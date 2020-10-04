import React, { useState } from 'react';
import { Row, Col, Form, Button} from 'react-bootstrap';

const getUrl = (formData) => {
  const queryString = Object.keys(formData).map((key) => { 
      const val = formData[key];
      return `${key}=${val}`;
    }).join('&');
  const { protocol, host, pathname } = window.location;
  return `${protocol}//${host}${pathname}?${queryString}`
};

const SearchBar = (props) => {
  const [formData, setFormData] = useState(props.initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setFormData(formData);
    const url = getUrl(formData);
    window.history.pushState({ path: url }, '', url);
  };

  const handleCheckBoxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked
    });
  };
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    });
  };

  const range = [...Array(10).keys()];

  return (
    <div>
      <Row>
        <Col className="text-dark w-100 my-4" xs={12} md={10}>
          <h4> 
            Enter two artists on Spotify
          </h4>
          <h5>
            We'll find a path between them through related artists and generate
            a playlist for you with their top songs.
          </h5>
        </Col>
      </Row>
      <Form className="text-dark" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} xs={12} md={5} key="srcArtist" controlId="srcArtist">
            <Form.Label>Source Artist</Form.Label>
            <Form.Control 
              name="src" 
              className="w-100" 
              placeholder="Kanye West"
              defaultValue={formData.src}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} xs={12} md={5} key="destArtist" controlId="destArtist">
            <Form.Label>Destination Artist</Form.Label>
            <Form.Control 
              name="dest" 
              className="w-100" 
              placeholder="Elvis Presley"
              defaultValue={formData.dest}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} xs={12} md={10} controlId="recommended">
            <Form.Check 
              name="recommended"
              type="checkbox" 
              label="Add recommended songs by artists not necessarily in the path"
              defaultChecked={formData.recommended}
              onChange={handleCheckBoxChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} xs={12} md={5} lg={5} controlId="numSongs">
            <Form.Label>Maximum number of songs per artist</Form.Label>
            <Form.Control 
              name="numSongs" 
              as="select"
              defaultValue={formData.numSongs}
              onChange={handleChange}
            >
              {range.map(i => <option key={i}>{i + 1}</option>)}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row className="w-100">
          <Form.Group as={Col} xs={4} md={3} lg={2}>
            <Button variant="primary" type="submit">
              Find Path
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default SearchBar;