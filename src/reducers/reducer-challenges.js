import axios from 'axios';
import {v4} from 'uuid';

export default function(state=[], action) {
  switch (action.type) {
    case "FETCH_CHALLENGES_START": {
      return [...state]
    }
    case "FETCH_CHALLENGES_ERROR": {
      return [...state]
    }
    case "RECEIVE_CHALLENGES": {
      return [...state, ...action.payload]
    }
    case "ADD_CHALLENGE": {
      axios.post('/api/dailychallengesinsert', {
        id: v4(),
        title: action.payload.title,
        difficulty: action.payload.difficulty,
        date: action.payload.date
      })
      .then((response) => {
        console.log(response + "YUHUUU!")
      })
      .catch((err) => {
        console.log(err + "This is an ERROOOOOOOOOOOOOOOOOOR!" + action.payload.title)
      })
      return [...state, {id: v4(), title: action.payload.title, difficulty: action.payload.difficulty, date: action.payload.date}]
    }
  }
  return state;
}
