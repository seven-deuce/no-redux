export default function reducer(state, action) {
  switch (action.type) {
    case "decrement":
      return { ...state, ...action.payload };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
}
