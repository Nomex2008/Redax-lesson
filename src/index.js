import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaltState = {
  cash: 0
}

const reducer = (state = defaltState, action) => {
    switch (action.type) {
      case 'ADD_CASH':
        return {...state, cash: state.cash + action.payloud}
      case 'GET_CASH':
        return {...state, cash: state.cash - action.payloud}
    
      default:
        return state
    }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
