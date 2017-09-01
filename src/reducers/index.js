import {combineReducers} from 'redux';
import UserReducer from './reducer-challenges';

const allReducers = combineReducers({
  challenges: UserReducer
});

export default allReducers;
