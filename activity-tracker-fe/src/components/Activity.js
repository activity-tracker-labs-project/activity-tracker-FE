import React from 'react'


export const Activity = ({ task }) => {
  return (
    <div>
      <p>{task.value}</p>
      <p>{task.name}</p>
      <p>{task.date}</p>
      <div>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </div>
  )
}