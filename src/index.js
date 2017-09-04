import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import allReducers from './reducers';

/*import { loadState, saveState } from './localStorage';*/

import axios from 'axios';
const createLogger = require(redux-logger);
import thunk from 'redux-thunk';



/*const persistedState = loadState();
console.log(persistedState);
const store = createStore(
  allReducers,
  persistedState
);
*/
const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(
  allReducers,
  middleware
);

let challengeArr;


store.dispatch ((dispatch) => {
  dispatch({type: "FETCH_CHALLENGES_START"})
  axios.get('/api/dailychallenges')
    .then((response) => {
      console.log(response.data.challenges)
      challengeArr = Object.keys(response.data.challenges).map(function(key) { return response.data.challenges[key] })
      dispatch({type: "RECEIVE_CHALLENGES", payload: challengeArr})
    })
    .catch((err) => {
      dispatch({type: "FETCH_CHALLENGES_ERROR", payload: err})
    })
})

/*store.subscribe(() => {
  saveState(store.getState());
})*/

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
