const initialState = {
    data:[],
    loading:false,
    error:undefined
}

function userReducer(state=initialState,action){
    switch (action.type) {
        case 'users/fetch_request':
            return{
                ...state,
                loading:true,
            }
        case 'users/fetch_success':
            return{
                ...state,
                loading:false,
                data: action.payload
            }
            case 'users/fetch_error':
                return{
                    ...state,
                    loading:false,
                    data: action.payload
                }
        default:
            return state;
    }
}

export default userReducer;