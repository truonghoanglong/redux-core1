import { useEffect, useState } from 'react';
import * as useAPI from './api/userAPI';
import Card from './components/Card';
import { store } from './redux/store';

const App = () => {
    const [state,setState] = useState(()=>store.getState())
    const { data: users,loading,error} = state.userReducer ; 

    useEffect(()=>{
        store.subscribe(()=>{
            setState(store.getState())
        })
    },[])

    useEffect(()=>{
        store.dispatch({type: `users/fetch_request`})  
        useAPI.getUsers()
        .then(data=>{
            store.dispatch({type:'users/fetch_success',payload:data})
        })
        .catch(err=>{
            store.dispatch({type: 'users/fetch_error',payload:err})
        })
    },[])
    
    return (
        <div className="wrap">
            <div className="card_container">
                {
                    users.map(user => (
                        <div className="" key={user.id}>
                            <Card user={user} />
                        </div>
                    ))
                } 
            </div>
        </div>
    );
}

export default App;
