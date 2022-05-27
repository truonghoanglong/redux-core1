import React, { useEffect, useState } from 'react'
import * as userAPI from '../api/userAPI'
import { store } from '../redux/store'

const UserInput =  ({setEditUser,editUser}) => {
    const [name,setName] = useState('')
    const [avatar,setAvatar] = useState('')

    useEffect(()=>{
        if(editUser){
            setName(editUser.name)
            setAvatar(editUser.avatar)
        }
    },[editUser])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const createAt = new Date().toISOString()
        if(editUser){
            const newUser = {...editUser,name,avatar}
            store.dispatch({type:'users/update_request'})
            try {
                await userAPI.updateUser(newUser)
                store.dispatch({type:'users/update_success',payload:newUser})
            } catch (err) {
                store.dispatch({type:'users/update_error',payload:err})
            }
        }else{
            store.dispatch({type:'users/create_request'})
            try {
                const data = await userAPI.createUser({name,avatar,createAt})
                store.dispatch({type:'users/create_success',payload:data})
            } catch (err) {
                store.dispatch({type:'users/create_error',payload:err})
            }
        }
        setEditUser(undefined)
        setName('')
        setAvatar('')
    }
    return (
        <div>
            <form className='user_input' onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" required
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="avatar">Avatar</label>
                    <input type="text" required
                        value={avatar}
                        onChange={e=>setAvatar(e.target.value)}
                    />
                </div>
                <button>
                    {editUser ? 'Update' : 'Add'}
                </button>
            </form>
        </div>
    )
}

export default UserInput