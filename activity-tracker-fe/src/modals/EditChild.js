// Import Dependencies
import React from 'react'
import '../styles/ModalStyle.css'

const EditChildModal = ({ handleClose, show, handleInput }) => {
  // Display only if show is true
  const showHide = show ? {display: 'block'} : {display: 'none'};
  
  
  return (
    <div className='modalContainer' style = {showHide}>
      <div className='modalMain'>
        <input type='text' placeholder="Child's Name" />
        <input type='text' placeholder="Child's Age" />
        <div>
          <button onClick={handleInput}>Edit Child</button>
          <button onClick={handleClose}>close</button>
        </div>
      </div>
    </div>
  );
};

export default EditChildModal;