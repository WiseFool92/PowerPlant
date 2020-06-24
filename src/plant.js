const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

export const giveName = changeState("ability");

export const giveLight = changeState("light")(4);

export const hydrate = changeState("water")(3);

export const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);

export const initialPlantState = {light: 0, soil: 0, water: 0}

export const storeState = (initialPlantState) => {
  let currentState = initialPlantState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

// Code below not affecting the display yet
export const stateChanger = storeState();
// const tree = storeState(initialPlantState);
// const shrub = storeState(initialPlantState);
// const flower = storeState(initialPlantState)("soil")(9);

// Plant abilities
export const canCharge = (flower) => ({
  charge: () => {
    return `The ${flower.name} charges up`
  }
});

// Shrub
export const soilBoost = (shrub) => ({
  endure: () => {
    return `The ${shrub.name} soil fertility increases`
  }
});

// Tree
export const waterRentention = (tree) => ({
  absorb: () => {
    return `The ${tree.name} water supply is bolstered`
  }
});