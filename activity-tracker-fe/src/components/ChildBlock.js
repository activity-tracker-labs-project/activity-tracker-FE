import React from 'react'

const Block = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Content = styled.p`
  margin: 0 20px;
`


export const ChildBlock = ({ child }) => {
  
  return(
    <div>
      <p>Child Name{/*child.name*/}</p>
      <p>Activity Points{/*child.activityPoints*/}</p>
    </div>
  )
}