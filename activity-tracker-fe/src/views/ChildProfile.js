import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ChildBlock from '../components/ChildBlock'
import EditChildModal from '../modals/EditChild'
import DelChildModal from '../modals/DelChild'
import EditPointsModal from '../modals/EditPoints'

const ParentPortal = () => {
  const [child, setChild] = useState([])

  useEffect(() => {
    axios.get("specific child")
    .then(res => {
      setChild(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const editChild = () => {
    // bring up child modal
  }
  const delChild = () => {
    // bring up child modal
  }
  const activityLog = () => {
    // bring up child modal
  }
  
  const editPoints = () => {
    // bring up child modal
  }
  
  
  return (
    <div>
      <h2>{child.name}'s Profile</h2>
      <p>Available Points {child.points}</p>

      <button onClick={editPoints}>+/- Points</button>
      <button onClick={activityLog}>Activity log</button>
      <button onClick={editChild}>Edit Child</button>
      <button onClick={delChild}>Delete Child Profile</button>
    </div>
  )
}

export default ParentPortal