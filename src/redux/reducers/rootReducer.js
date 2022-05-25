import { combineReducers } from 'redux';
import ageReducer from './ageReducer';
import nameReducer from './nameReducer';
const rootReducer = combineReducers({
    nameReducer,
    ageReducer
})

export default rootReducer;