import React from 'react'

const Member = (props) => {
  const { details } = props;

  if(!details) {
    return <h3>Uh oh</h3>
  }

  return (
    <div className='Member container'>
      <h2>{details.name}</h2>
      <p>{details.email}</p>
      <p>{details.role}</p>
    </div>
  )
}

export default Member