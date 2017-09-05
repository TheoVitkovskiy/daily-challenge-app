import axios from 'axios';


export default function(state=[], action) {
  switch (action.type) {
    case "FETCH_CHALLENGES_START": {
      return [...state, {id: 1, title: 'Face your deepest fears!', difficulty: 4, date: "3.9.2017"},
      {id: 2, title: 'Contribute to an Open Source project!', difficulty: 3, date: "4.9.2017"}]
    }
    case "FETCH_CHALLENGES_ERROR": {
      return [...state]
    }
    case "RECEIVE_CHALLENGES": {
      return [...state, ...action.payload]
    }
    case "ADD_CHALLENGE": {
      axios.post('/api/dailychallengesinsert', {
        id: action.payload.id,
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
      return [...state, {id: action.payload.id, title: action.payload.title, difficulty: action.payload.difficulty, date: action.payload.date}]
    }
  }
  return state;
}
