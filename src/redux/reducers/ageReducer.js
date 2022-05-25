function ageReducer(state={age: 23},action){
    if(action.type === "update_age"){
        const newState = {age:action.age}
        return newState;
    }
    return state;
}

export default ageReducer;