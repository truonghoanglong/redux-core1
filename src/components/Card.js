import React from 'react'
import * as userAPI from '../api/userAPI'
import { store } from '../redux/store'

const Card = ({user,setEditUser}) => {
  const handleDelete = async (id) =>{
    store.dispatch({type:'users/update_request'})
      try {
          await userAPI.deleteUser(id)
          store.dispatch({type:'users/delete_success',payload:id})
      } catch (err) {
          store.dispatch({type:'users/delete_error',payload:err})
      }
  }
  return (
    <div className='card'>
      <h2>{user?.name}</h2>
      <img src={user?.avatar} alt="avatar" />
      <div className='btn_nav'>
        <button className='btn_edit'
          onClick={()=>setEditUser(user)}
        >Edit</button>
        <button className='btn_delete'
          onClick={()=>handleDelete(user.id)}
        >Delete</button>
      </div>
    </div>
  )
}

export default Card