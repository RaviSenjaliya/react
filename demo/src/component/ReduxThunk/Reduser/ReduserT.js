export default (state = 0, { type, payload }) => {
  switch (type) {
    case "plus":
      return state + 1;
    case "Minus":
      return state - 1;
    case "Multy":
      return state * 2;
    case "div":
      return state / 2;
    case "MinusCount":
      return state - payload;
    default:
      return state;
  }
};
