const initialState = { data: [], error: "", Loading: false };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "Start":
      return { ...state, Loading: true };
    case "success":
      return { ...state, Loading: false, data: payload };
    case "Fail":
      return { ...state, Loading: false, error: payload };

    default:
      return state;
  }
};
