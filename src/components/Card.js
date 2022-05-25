import React from 'react'


const Card = ({user}) => {
  return (
    <div className='card'>
      <h2>{user?.name}</h2>
      <img src={user?.avatar} alt="avatar" />
      <div className='btn_nav'>
        <button className='btn_edit'
        >Edit</button>
        <button className='btn_delete'
        >Delete</button>
      </div>
    </div>
  )
}

export default Card