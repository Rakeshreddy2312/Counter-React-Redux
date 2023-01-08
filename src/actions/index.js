export const IncNumber = (num) => {
  return {
    type: "increment",
    payload: num,
  };
};
export const DecNumber = () => {
  return {
    type: "decrement",
  };
};
export const reset = () => {
  return { type: "reset" };
};
