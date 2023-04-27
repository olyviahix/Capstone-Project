import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function InterestsModal() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = event => {
    event.currentTarget.classList.toggle('selected-interest-button');
  };
// console.log(active)
  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        This will be the "create user" button that takes you to the interests selections
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Your Interests!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <div className="movie-genres mb-2">Movie Genres</div>
        <Button className="interest-button" onClick={handleClick} >Horror</Button>
        <Button className="interest-button" onClick={handleClick}>Comedy</Button>
        <Button className="interest-button" onClick={handleClick}>Suspense</Button>
        <Button className="interest-button" onClick={handleClick}>Sci-Fi</Button>
        <Button className="interest-button" onClick={handleClick}>Action</Button>
        <Button className="interest-button" onClick={handleClick}>Thriller</Button>
        <Button className="interest-button" onClick={handleClick}>Drama</Button>
        <Button className="interest-button" onClick={handleClick}>Mystery</Button>
        <Button className="interest-button" onClick={handleClick}>Romance</Button>
        <br></br>
        <div className="music-genres mb-2">Music Genres</div>
        <Button className="interest-button" onClick={handleClick}>Rock</Button>
        <Button className="interest-button"  onClick={handleClick}>EDM</Button>
        <Button className="interest-button" onClick={handleClick}>Hip-Hop</Button>
        <Button className="interest-button" onClick={handleClick}>Reggae</Button>
        <Button className="interest-button" onClick={handleClick}>Jazz</Button>
        <Button className="interest-button" onClick={handleClick}>Country</Button>
        <Button className="interest-button" onClick={handleClick}>Rap</Button>
        <Button className="interest-button" onClick={handleClick}>R&B</Button>
        <Button className="interest-button" onClick={handleClick}>Latino</Button>
        <Button className="interest-button" onClick={handleClick}>Metal</Button>
        <Button className="interest-button" onClick={handleClick}>Classical</Button>
        <Button className="interest-button" onClick={handleClick}>Alternative</Button>
        <br></br>
        <div className="food-quisines mb-2">Food Quisines</div>
        <Button className="interest-button" onClick={handleClick}>Mexican</Button>
        <Button className="interest-button" onClick={handleClick}>Italian</Button>
        <Button className="interest-button" onClick={handleClick}>Chinese</Button>
        <Button className="interest-button" onClick={handleClick}>Greek</Button>
        <Button className="interest-button" onClick={handleClick}>French</Button>
        <Button className="interest-button" onClick={handleClick}>Thai</Button>
        <Button className="interest-button" onClick={handleClick}>Indian</Button>
        <Button className="interest-button" onClick={handleClick}>Japanese</Button>
        <Button className="interest-button" onClick={handleClick}>American</Button>
        <Button className="interest-button" onClick={handleClick}>German</Button>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save!</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default InterestsModal;