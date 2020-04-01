import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ChildBlock from '../components/ChildBlock'
import addChildModal from '../modals/addChild'

const ParentPortal = () => {
  const [children, setChildren] = useState([])

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
    // bring up child modal
  }
  
  return (
    <div>
      <h2>Parental Portal</h2>
      <p> Child Profile(s)</p>
      {children.forEach(kid => {
        <ChildBlock child={kid} />
      })}

      <button onClick={addChild}>Add New Child</button>
    </div>
  )
}

export default ParentPortal