export const initialPlantState = [1, 3, 7, 9, 11]

export const storeState = (initialPlantState) => {
  let currentState = initialPlantState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = [ ...newState ];
    return newState;
  }
}



const changeState = (index) => {
  return (value) => {
    return (state) => ({
      ...state,
    //  [prop]: (state[prop] || 0) + value
     state[index].push(value);
    })
  }
}

