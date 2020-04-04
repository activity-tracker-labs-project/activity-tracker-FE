import React, { useState, useEffect } from 'react'
import RewardModal from '../modals/RewardModal'
import Reward from '../components/Reward'

const RewardView = () => {
  const [child, setChild] = useState([])
  const [show, setShow] = useState(false)

  const addReward = () => {
    setShow(!show)
  }

  useEffect(() => {
    axios
    .get('child info')
    .then(res => {
      setChild(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return(
    <div>
      <h2>{child.name}'s Profile</h2>
      <h2>available points {child.rewards.reduce((acc, cur) => acc + cur)}</h2>
      {child.rewards.forEach(reward => {
        <Reward prize={reward} />
      })}
      <button onClick={addReward}>add new reward</button>
      <RewardModal handleClose={addReward} show={show} />
    </div>
  )
}

export default RewardView