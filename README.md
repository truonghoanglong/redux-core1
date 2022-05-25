import { useEffect, useState } from 'react';

import { combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';


function nameReducer(state={name: 'Hoang'},action){
    if(action.type === "update_name"){
        const newState = {name:action.name}
        return newState;
    }
    return state;
}

function ageReducer(state={age: 23},action){
    if(action.type === "update_age"){
        const newState = {age:action.age}
        return newState;
    }
    return state;
}

const rootReducer = combineReducers({
    nameReducer,
    ageReducer
})

const composeEnhancers = composeWithDevTools()

const store = createStore(rootReducer,composeEnhancers)



const App = () => {
    const [state,setState] = useState(()=>store.getState())

    useEffect(()=>{
        store.subscribe(()=>{
            setState(store.getState())
            console.log(store.getState());
        })
    },[])
    
    const handleUpdateName = () =>{
        const action = {type:"update_name", name:"LongLong"}
        store.dispatch(action)
    }
    const handleUpdateAge = () =>{
        const action = {type:"update_age", age:100}
        store.dispatch(action)
    }
    return (
        <div className="App">
            <h1>{state.nameReducer.name}</h1>
            <h1>{state.ageReducer.age}</h1>
            <button
                onClick={handleUpdateName}
            >UpdateName</button>

            <button
                onClick={handleUpdateAge}
            >UpdateAge</button>
        </div>
    );
}

export default App;
