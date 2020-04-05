// Import Dependencies
import React from 'react'

// Import styling
import styled from 'styled-components'


let Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

`

let ModalMain = styled.section`
  position:fixed;
  background: white;
  width: 40%;
  height: 20%;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);

`

const CWarningModal = ({ handleClose, show, warning, axiosDelete }) => {
  // Display only if show is true
  const showHide = show ? {display: 'block'} : {display: 'none'};
  
  
  return (
    <Container style = {showHide}>
      <ModalMain>
        <h2>{warning} </h2>
        <button onClick={axiosDelete}>Yes</button>
        <button onClick={handleClose}>Cancel</button>
      </ModalMain>
    </Container>
  );
};

export default CWarningModal;