import React from 'react'


export const ChildBlock = ({ child }) => {
  
  return(
    <div className='childBlock'>
      <p>Child Name{/*child.name*/}</p>
      <p>Activity Points{/*child.activityPoints*/}</p>
    </div>
  )
}