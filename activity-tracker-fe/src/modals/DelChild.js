// Import Dependencies
import React from 'react'
import '../styles/ModalStyle.css'

const DelChildModal = ({ handleClose, show, handleClick }) => {
  // Display only if show is true
  const showHide = show ? {display: 'block'} : {display: 'none'};
  
  
  return (
    <Container style = {showHide}>
      <ModalMain>
        <p> Are you sure you want to delete this child profile?</p>
        <div>
          <button onClick={handleClick}>delChild</button>
          <button onClick={handleClose}>close</button>
        </div>
      </ModalMain>
    </Container>
  );
};

export default DelChildModal;