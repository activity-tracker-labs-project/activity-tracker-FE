import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ChildBlock from '../components/ChildBlock'

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
  
  return (
    <div>
      {children.forEach(kid => {
        <ChildBlock child={kid} />
      })}

    </div>
  )
}

export default ParentPortal