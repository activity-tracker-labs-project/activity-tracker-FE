import React, { useState, useEffect } from 'react'
import RewardModal from '../modals/RewardModal'
import Reward from '../components/Reward'

const RewardView = () => {
  const [rewards, setRewards] = useState([])
  const [show, setShow] = useState(false)

  const addReward = () => {
    setShow(!show)
  }

  useEffect(() => {
    axios
    .get('child reward info')
    .then(res => {
      setRewards(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return(
    <div>
      <h2>available points {rewards.reduce((acc, cur) => acc + cur)}</h2>
      {rewards.forEach(reward => {
        <Reward reward={prize} />
      })}
      <button onClick={addReward}>add new reward</button>
      <RewardModal handleClose={addChild} show={show} />
    </div>
  )
}