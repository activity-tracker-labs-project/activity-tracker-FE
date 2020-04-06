// Import Dependencies
import React from 'react'
import '../styles/WarningStyle.css'

const WarningModal = ({ handleClose, show, warning }) => {
  // Display only if show is true
  const showHide = show ? {display: 'block'} : {display: 'none'};
  
  
  return (
    <Container style = {showHide}>
      <ModalMain>
        <h2>{warning} </h2>
        <button onClick={handleClose}>close</button>
      </ModalMain>
    </Container>
  );
};

export default WarningModal;