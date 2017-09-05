export const addChallenge = (chal) => {
  return {
    type: "ADD_CHALLENGE",
    payload: chal
  }
};

export const updateDone = (chal) => {
  return {
      type: "UPDATE_DONE",
      payload: chal
  }
};
