// const initialState = {};

export default (state = 0, { type, payload }) => {
  switch (type) {
    case "Increment":
      return state + 1;
    case "Decriment":
      return state - 1;
    case "Multy":
      return state * 4;

    default:
      return state;
  }
};

// how to do (kevi rite karshu functionality lakhvani chhe)
