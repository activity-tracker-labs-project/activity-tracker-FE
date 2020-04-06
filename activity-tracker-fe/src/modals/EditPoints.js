// Import Dependencies
import React from 'react'
import '../styles/ModalStyle.css'

const EditPointsModal = ({ handleClose, show, handleInput }) => {
  // Display only if show is true
  const showHide = show ? {display: 'block'} : {display: 'none'};
  
  
  return (
    <div className='modalContainer' style = {showHide}>
      <div className='modalMain'>
        <input type='text' placeholder="Activity/Reward Name" />
        <input type='number' placeholder="0" />
        <div>
          <button onClick={handleInput}>Add</button>
          <button onClick={handleClose}>close</button>
        </div>
      </div>
    </div>
  );
};

export default EditPointsModal;