import { useEffect, useState } from 'react';
import * as useAPI from './api/userAPI';
import { store } from './redux/store';

const App = () => {
    const [state,setState] = useState(()=>store.getState())

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
        <div className="App">
            
        </div>
    );
}

export default App;
