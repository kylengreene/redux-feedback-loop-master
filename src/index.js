import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//Redux
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const responseReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESPONSE':
            return [...state, action.payload];
        case 'RESET_RESPONSE':
            return state = [];
        default:
            return state;
    }
}


const storeInstance = createStore(
    combineReducers({
        responseReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
