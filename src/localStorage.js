/*export const loadState = () => {
  console.log("LOAD STATE")
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  console.log("SAVE STATE")
  console.log("STATE: " + state)
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    //Ignore write errors
  }
}*/
