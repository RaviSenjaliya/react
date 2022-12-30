export const plus = (payload) => ({
  type: "plus",
  payload,
});
export const Minus = (payload) => ({
  type: "Minus",
  payload,
});
export const AsncMinus = (num) => {
  return (data) => {
    setTimeout(() => {
      data({
        type: "MinusCount",
        payload: num,
      });
    }, 1000);
  };
};
