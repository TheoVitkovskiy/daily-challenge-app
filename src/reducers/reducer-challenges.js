import axios from 'axios';


export default function(state=[], action) {
  switch (action.type) {
    case "FETCH_CHALLENGES_START": {
      return [...state, {id: 1, title: 'Face your deepest fears!', difficulty: 2, date: "3.9.2017", done: true},
      {id: 2, title: 'Contribute to an Open Source project on GitHub!', difficulty: 4, date: "4.9.2017", done: false}]
    }
    case "FETCH_CHALLENGES_ERROR": {
      return [...state]
    }
    case "RECEIVE_CHALLENGES": {
      return [...state, ...action.payload]
    }
    case "ADD_CHALLENGE": {
      axios.post('/api/dailychallenges', {
        id: action.payload.id,
        title: action.payload.title,
        difficulty: action.payload.difficulty,
        date: action.payload.date,
        done: action.payload.done
      })
      .then((response) => {
        console.log(response + "YUHUUU!")
      })
      .catch((err) => {
        console.log(err + "This is an ERROOOOOOOOOOOOOOOOOOR!" + action.payload.title)
      })
      return [...state, {id: action.payload.id, title: action.payload.title, difficulty: action.payload.difficulty, date: action.payload.date, done: action.payload.done}]
    }
    case "UPDATE_DONE": {
      axios.put('/api/dailychallenges', state[state.length-1])
           .then((response) => {
             console.log(response + "THE DATABASE GOT UPDATED")
           })
           .catch((err) => {
             console.log(err + "This is another error!")
      })
      state[state.length-1].done = true;
      break;
    }
  }
  return state;
}
