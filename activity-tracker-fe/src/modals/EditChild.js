// Import Dependencies
import React from 'react'
import '../styles/ModalStyle.css'

const EditChildModal = ({ handleClose, show, handleInput }) => {
  // Display only if show is true
  const showHide = show ? {display: 'block'} : {display: 'none'};
  
  
  return (
    <Container style = {showHide}>
      <ModalMain>
        <input type='text' placeholder="Child's Name" />
        <input type='text' placeholder="Child's Age" />
        <div>
          <button onClick={handleInput}>Edit Child</button>
          <button onClick={handleClose}>close</button>
        </div>
      </ModalMain>
    </Container>
  );
};

export default EditChildModal;