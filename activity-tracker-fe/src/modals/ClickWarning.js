// Import Dependencies
import React from 'react'
import '../styles/WarningStyle.css'

const CWarningModal = ({ handleClose, show, warning, axiosDelete }) => {
  // Display only if show is true
  const showHide = show ? {display: 'block'} : {display: 'none'};
  
  
  return (
    <div className='container' style = {showHide}>
      <div className='modalMain'>
        <h2>{warning} </h2>
        <button onClick={axiosDelete}>Yes</button>
        <button onClick={handleClose}>Cancel</button>
      </div>
    </div>
  );
};

export default CWarningModal;