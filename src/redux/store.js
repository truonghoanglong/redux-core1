import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = composeWithDevTools()

export const store = createStore(rootReducer,composeEnhancers)