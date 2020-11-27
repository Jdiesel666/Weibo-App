import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { StoreContext } from 'redux-react-hook';
import rootReducer from './reducers';
import App from './App';
import './index.scss';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
  ,
  document.getElementById('root')
);
