const initialState = { data: [], error: "", isLoading: false };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "Start":
      return { ...state, isLoading: true };
    case "Success":
      return { ...state, isLoading: false, data: payload };
    case "Fail":
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
