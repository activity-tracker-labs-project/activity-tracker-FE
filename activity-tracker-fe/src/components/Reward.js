import React from 'react'


export const Reward = ({ prize }) => {
  return (
    <div>
      <p>{prize.value}</p>
      <p>{prize.name}</p>
      <div>
        <button>Redeem</button>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </div>
  )
}