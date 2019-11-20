import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import sketchesReducer from './reducers/sketchesReducer.js'; 
import currentSketchReducer from './reducers/currentSketchReducer.js'; 
import sketchSettingsReducer from './reducers/sketchSettingsReducer.js'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({sketches: sketchesReducer, currentSketch: currentSketchReducer, settings: sketchSettingsReducer})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
 
ReactDOM.render(
  <Provider store={store}>
    <Router >
        <App /> 
    </Router>
  </Provider>,
  document.getElementById('root')
);
