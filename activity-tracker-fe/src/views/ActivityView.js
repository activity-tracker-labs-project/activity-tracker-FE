import React, { useState, useEffect } from 'react'
import RewardModal from '../modals/RewardModal'
import Activity from '../components/Activity'

const ActivityView = () => {
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
      <h2>current points {child.activities.reduce((acc, cur) => acc + cur)}</h2>
      {child.activities.forEach(activity => {
        <Activity task={activity} />
      })}
      <button>task description</button>
      <button>value of task</button>

      <button onClick={addReward}>add new log</button>
      <RewardModal handleClose={addChild} show={show} />
    </div>
  )
}

export default ActivityView