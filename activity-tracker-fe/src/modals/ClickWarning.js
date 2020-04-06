// Import Dependencies
import React from 'react'
import '../styles/ModalStyle.css'

const CWarningModal = ({ handleClose, show, warning, axiosDelete }) => {
  // Display only if show is true
  const showHide = show ? {display: 'block'} : {display: 'none'};
  
  
  return (
    <div className='modalContainer' style = {showHide}>
      <div className='modalWarning'>
        <h2>{warning} </h2>
        <button onClick={axiosDelete}>Yes</button>
        <button onClick={handleClose}>Cancel</button>
      </div>
    </div>
  );
};

export default CWarningModal;