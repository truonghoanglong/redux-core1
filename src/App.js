import { useEffect, useState } from 'react';
import * as useAPI from './api/userAPI';
import Card from './components/Card';
import Spinner from './components/Spinner';
import UserInput from './components/UserInput';
import { useDispatch, useSelector } from './redux/react-redux';

const App = () => {
    const [editUser,setEditUser] = useState()

    const { data: users, loading, error } = useSelector(state => state.userReducer)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({type: `users/fetch_request`})  
        useAPI.getUsers()
        .then(data=>{
            dispatch({type:'users/fetch_success',payload:data})
        })
        .catch(err=>{
            dispatch({type: 'users/fetch_error',payload:err})
        })
    },[dispatch])
    
    return (
        <div className="wrap">
            {error && <span>{error.message}</span>}
            <UserInput editUser={editUser} setEditUser={setEditUser} />
            <div className="card_container">
                { users && users.length > 0 &&
                    users.map(user => (
                        <div className="" key={user.id}>
                            <Card user={user} setEditUser={setEditUser} />
                        </div>
                    ))
                } 
            </div>
            { loading && <Spinner /> }
        </div>
    );
}

export default App;
