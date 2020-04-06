// Import Dependencies
import React from 'react'
import '../styles/ModalStyle.css'

const WarningModal = ({ handleClose, show, warning }) => {
  // Display only if show is true
  const showHide = show ? {display: 'block'} : {display: 'none'};
  
  
  return (
    <div className='modalContainer' style = {showHide}>
      <div className='modalWarning'>
        <h2>{warning} </h2>
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  );
};

export default WarningModal;