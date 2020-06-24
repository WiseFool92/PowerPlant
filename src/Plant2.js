export const iinitialPlantState = [1, 3, 7, 9, 11]

export const sstoreState = (initialPlantState) => {
  let currentState = initialPlantState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = [ ...newState ];
    return newState;
  }
}

export const cchangeState = (index) => {
  return (value) => {
    return (state) => ({
      ...state,
    //  [prop]: (state[prop] || 0) + value
     //state[index].push(value);
     [index]: (state[index].push(value))
    })
  }
}

const anyVariable = sstoreState(iinitialPlantState);
const oneMoreVariable = cchangeState(4)(99);
console.log(`||||||||||||||||||||||||||||||||||||||||| ${anyVariable(oneMoreVariable)}`);

  