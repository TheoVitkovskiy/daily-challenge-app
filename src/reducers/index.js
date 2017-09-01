import {combineReducers} from 'redux';
import ChallengeReducer from './reducer-challenges';


const allReducers = combineReducers({
  challenges: ChallengeReducer
});

export default allReducers;
