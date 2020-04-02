import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ChildBlock from '../components/ChildBlock'
import AddChildModal from '../modals/AddChild'

const ParentPortal = () => {
  const [children, setChildren] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    axios.get("user's children")
    .then(res => {
      setChildren(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const addChild = () => {
    // bring up/close child modal
    setShow(!show)
  }
  
  return (
    <div>
      <h2>Parental Portal</h2>
      <p> Child Profile(s)</p>
      {children.forEach(kid => {
        <ChildBlock child={kid} />
      })}

      <button onClick={addChild}>Add New Child</button>
      <AddChildModal handleClose={addChild} show={show} />
    </div>
  )
}

export default ParentPortal