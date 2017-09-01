export default function(state=[{id: -1, challenge: "Face your deepest fears!", difficulty: '4'}], action) {
  switch (action.type) {
    case "ADD_CHALLENGE":
      return [
        ...state,
      {
        id: action.payload.id,
        challenge: action.payload.challenge,
        difficulty: action.payload.difficulty
      }

      ]
  }
  return state
}
