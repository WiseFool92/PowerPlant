export const initialPlantState = {light: 0, soil: 0, water: 0}

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

const tree = storeState({});
const newStateObject = tree(changeState("water")(10))

export const storeState = (initialPlantState) => {
  let currentState = initialPlantState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

// // Needs to connect with modifier
// export const returnState = (initialPlantState) => {
//   let currentState = initialPlantState;
//   return () => {

//   }
// }
// //  or
// const ourInitialState = storeState(initialPlantState); 
// const returnState = ourInitialState();
// // or
// const returnState = (state) => {
//   return state
// }


export const giveLight = (modifier) => changeState("light")(4 * modifier);

export const hydrate = (modifier) => changeState("water")(3 * modifier);

export const blueFood = (modifier) => changeState("soil")(5 * modifier);

// Unused
// const greenFood = changeState("soil")(10);
// const yuckyFood = changeState("soil")(-5);
// Unused
