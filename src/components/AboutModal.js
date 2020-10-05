
import React from 'react';
import { Modal } from 'react-bootstrap';

const AboutModal = (props) => {
  const { show, handleClose } = props;
  return (
    <Modal size="xl" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>About</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>
          Spotipath lets you explore how closely related your favorite artists are on Spotify
        </h5>
        <p>
          When you fill out the form it'll find a path between the two artists you entered using 
          the Spotify API's related artists. Then it'll generate a playlist with songs either 
          either by the artists that are in that path or songs that Spotify would recommend to you
          based on those artists. You can specify the number of songs per artists included in the playlist. 
        </p>
        <hr /> 
        <h4>Inspiration</h4>
        <p>
          Spotipath was inspired by <a href="http://boilthefrog.playlistmachinery.com/">Boil the Frog</a>.
          I thought it was a really cool way of using the Spotify API and decided I wanted to try my handse 
          at recreating it and maybe figuring out a way to put my own spin on it. 
        </p>
        <h4>How it works</h4>
        <p>
          I pre-fetched artist data for roughly 16,000 artists (this includes their related artists) and stored 
          it in a database. The path finding algorithm uses bidirectional BFS. 
        </p>
        <p>
          When a request is made for a path 
          between two artists, the algorithm visits those artists' related artists, and their related artists' 
          related artists, and so on. When an artist is encountered that was already encountered by the scan starting
          at the other artist, the algorithm terminates. The algorithm backtracks down the visited path back 
          to each of the starting artists and returns that path.
        </p>
        <p>
          On the client side, the Spotify API is used to fetch these artists' top songs and album covers. This 
          is done client side to reduce load on the server, since the pathfinding is pretty resource intensive.
          To find out more, check the code on GitHub:
        </p>
        <a href="https://github.com/kristiancharb/spotipath-app">Spotipath API</a>
        <br />
        <a href="https://github.com/kristiancharb/spotipath">Spotipath React App</a>
      </Modal.Body>
    </Modal>
  );
};

export default AboutModal;
