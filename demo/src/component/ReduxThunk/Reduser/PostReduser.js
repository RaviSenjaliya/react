const initialState = { data: [], error: "", isLoading: false };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FetchRequest":
      return { ...state, isLoading: true };
    case "FetchSuccess":
      return { ...state, isLoading: false, data: payload };
    case "FetchFail":
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
