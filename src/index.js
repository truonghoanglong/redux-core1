import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from "./redux/react-redux";
import { store } from "./redux/store";

axios.defaults.baseURL = 'http://localhost:5000'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


