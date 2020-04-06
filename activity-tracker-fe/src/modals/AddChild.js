// Import Dependencies
import React from 'react'
import '../styles/ModalStyle.css'

const AddChildModal = ({ handleClose, show, handleInput }) => {
  // Display only if show is true
  const showHide = show ? {display: 'block'} : {display: 'none'};
  
  
  return (
    <div className='container' style = {showHide}>
      <div className='modalMain'>
        <input type='text' placeholder="Child's Name" />
        <input type='text' placeholder="Child's Age" />
        <div>
          <button onClick={handleInput}>addChild</button>
          <button onClick={handleClose}>close</button>
        </div>
      </div>
    </div>
  );
};

export default AddChildModal;