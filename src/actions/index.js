export const addChallenge = (chal) => {
  return {
    type: "ADD_CHALLENGE",
    payload: chal
  }
};

export const updateDone = () => {
  return {
      type: "UPDATE_DONE"
  }
};
