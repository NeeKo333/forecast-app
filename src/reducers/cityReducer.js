export const cityReducer = (state, action) => {
  switch (action.type) {
    case "switch": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
