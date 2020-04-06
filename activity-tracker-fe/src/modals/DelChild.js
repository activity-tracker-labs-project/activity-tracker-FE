// Import Dependencies
import React from 'react'
import '../styles/ModalStyle.css'

const DelChildModal = ({ handleClose, show, handleClick }) => {
  // Display only if show is true
  const showHide = show ? {display: 'block'} : {display: 'none'};
  
  
  return (
    <div className='modalContainer' style = {showHide}>
      <div className='modalMain'>
        <p> Are you sure you want to delete this child profile?</p>
        <div>
          <button onClick={handleClick}>delChild</button>
          <button onClick={handleClose}>close</button>
        </div>
      </div>
    </div>
  );
};

export default DelChildModal;