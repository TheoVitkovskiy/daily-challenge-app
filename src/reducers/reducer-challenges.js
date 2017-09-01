export default function(state=[], action) {
  switch (action.type) {
    case "ADD_CHALLENGE":
      return [
        ...state,
      {
        id: action.payload.id,
        title: action.payload.title,
        difficulty: action.payload.difficulty
      }

      ]
  }
  return state
}
